import { NextResponse } from 'next/server';
import { productsData } from '@/data/products';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { formData, selectedProducts } = body;

        const apiKey = process.env.BREVO_API_KEY;


        if (!apiKey) return NextResponse.json({ error: "Server configuration error" }, { status: 500 });

        const safeSelectedProducts: (string | { id: string; name: string; details?: string })[] = Array.isArray(selectedProducts) ? selectedProducts : [];

        const selectedProductDetails = safeSelectedProducts.map((item) => {
            // Support both legacy string IDs and new object payload
            const productId = typeof item === 'string' ? item : item.id;
            const productData = productsData.find(p => p.id === productId);

            // Construct absolute image URL - assuming images are in public folder
            // If productData.image is a full URL, use it, otherwise prepend domain
            let imageUrl = "";
            if (productData?.image) {
                imageUrl = productData.image.startsWith('http')
                    ? productData.image
                    : `https://afsyacht.com${productData.image}`;
            }

            return {
                name: productData?.name || (typeof item === 'object' ? item.name : productId),
                img: imageUrl,
                details: (typeof item === 'object' && item.details) ? item.details : ""
            };
        });

        // Format product names including details for the text list
        const allProductNames = selectedProductDetails.map(p => {
            return p.details ? `${p.name} (${p.details})` : p.name;
        }).join(', ');

        const productSuffix = selectedProductDetails.length > 1 ? "ürünlerimize" : "ürünümüze";

        // 1. CRM Kaydı
        await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: { 'accept': 'application/json', 'api-key': apiKey, 'content-type': 'application/json' },
            body: JSON.stringify({
                email: formData.email,
                attributes: {
                    FIRSTNAME: formData.firstName,
                    LASTNAME: formData.lastName,
                    SMS: formData.phone,
                    CITY: formData.city,
                    DISTRICT: formData.district || "", // Ensure string
                    YACHT_NAME: formData.yachtName,
                    PRODUCT_INTEREST: allProductNames,
                    NOTE: formData.note
                },
                updateEnabled: true
            })
        });

        // 2. Müşteri Maili (Template ID: 2)
        await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: { 'accept': 'application/json', 'api-key': apiKey, 'content-type': 'application/json' },
            body: JSON.stringify({
                to: [{ email: formData.email }],
                templateId: 2,
                params: {
                    FIRSTNAME: formData.firstName,
                    PRODUCT_NAME: allProductNames || "Ürünlerimiz",
                    PRODUCT_SUFFIX: productSuffix,
                    PRODUCTS_LIST: selectedProductDetails // Brevo'ya ham liste gidiyor {name, img, details}
                }
            })
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}