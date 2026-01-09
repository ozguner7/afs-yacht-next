import { NextResponse } from 'next/server';

const products = [
    {
        id: "thetis",
        name: "AFS THETIS",
        img: "https://afsyacht.com/wp-content/uploads/2024/06/Usturmaca-Askisi-AFS-Yacht-1-2-1536x1394.png"
    },
    {
        id: "pontos",
        name: "AFS PONTOS",
        img: "https://afsyacht.com/wp-content/uploads/2024/06/Usturmaca-Askisi-AFS-Yacht-2-1935x2048.png"
    },
    {
        id: "argos",
        name: "AFS ARGOS",
        img: "https://afsyacht.com/wp-content/uploads/2024/06/Usturmaca-Askisi-AFS-Yacht-3-1536x1251.png"
    }
];

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { formData, selectedProducts } = body;

        const apiKey = process.env.BREVO_API_KEY;
        const senderEmail = process.env.BREVO_SENDER_EMAIL || 'info@afsyacht.com';
        const adminEmail = process.env.BREVO_ADMIN_EMAIL || 'ozguner@afsyacht.com';

        if (!apiKey) return NextResponse.json({ error: "Server configuration error" }, { status: 500 });

        const safeSelectedProducts = Array.isArray(selectedProducts) ? selectedProducts : [];
        const selectedProductDetails = safeSelectedProducts.map(id =>
            products.find(p => p.id === id) || { id, name: id, img: "" }
        );

        const allProductNames = selectedProductDetails.map(p => p.name).join(', ');
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
                    DISTRICT: formData.district,
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
                    PRODUCTS_LIST: selectedProductDetails // Brevo'ya ham liste gidiyor
                }
            })
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}