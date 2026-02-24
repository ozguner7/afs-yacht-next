import { NextResponse } from 'next/server';
import { productsData } from '@/data/products';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { formData, selectedProducts } = body;
        const marketingConsent = formData.marketingConsent;

        const apiKey = process.env.BREVO_API_KEY;
        const senderEmail = process.env.BREVO_SENDER_EMAIL || "info@afsyacht.com";
        const adminEmail = process.env.BREVO_ADMIN_EMAIL || "info@afsyacht.com";

        if (!apiKey) return NextResponse.json({ error: "API Key missing" }, { status: 500 });

        const safeSelectedProducts: (string | { id: string; name: string; details?: string })[] = Array.isArray(selectedProducts) ? selectedProducts : [];

        const selectedProductDetails = safeSelectedProducts.map((item) => {
            // Support both legacy string IDs and new object payload
            const productId = typeof item === 'string' ? item : item.id;
            const productData = productsData.find(p => p.id === productId);

            // Construct absolute image URL - assuming images are in public folder
            // If productData.emailImage exists, use it as priority
            let imageUrl = "";
            if (productData?.emailImage) {
                imageUrl = productData.emailImage;
            } else if (productData?.image) {
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

        // LİSTE ID'LERİ: Brevo'daki List ID'lerinle değiştir (Örn: 4 Onaylı, 5 Ret)
        const targetListId = marketingConsent ? 7 : 8;

        // 1. CRM KAYDI
        const contactResponse = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: { 'accept': 'application/json', 'api-key': apiKey, 'content-type': 'application/json' },
            body: JSON.stringify({
                email: formData.email,
                listIds: [targetListId],
                attributes: {
                    FIRSTNAME: formData.firstName,
                    LASTNAME: formData.lastName,
                    SMS: formData.phone,
                    CITY: formData.city,
                    DISTRICT: formData.district || "", // Ensure string
                    YACHT_NAME: formData.yachtName,
                    PRODUCT_INTEREST: allProductNames, // Segmentleme buraya bakacak
                    MARKETING_CONSENT: marketingConsent ? "ONAYLI" : "RET"
                },
                updateEnabled: true
            })
        });

        // 2. YÖNETİCİ BİLDİRİMİ
        await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: { 'accept': 'application/json', 'api-key': apiKey, 'content-type': 'application/json' },
            body: JSON.stringify({
                sender: { name: "AFS Website Form", email: senderEmail },
                to: [{ email: adminEmail }],
                subject: `Yeni Teklif Talebi: ${formData.firstName} (${marketingConsent ? 'ONAYLI' : 'RET'})`,
                htmlContent: `<h3>Yeni Teklif Talebi</h3>
                              <p><strong>Müşteri:</strong> ${formData.firstName} ${formData.lastName}</p>
                              <p><strong>Email:</strong> ${formData.email}</p>
                              <p><strong>Ürünler:</strong> ${allProductNames}</p>
                              <p><strong>Pazarlama Onayı:</strong> ${marketingConsent ? 'Evet' : 'Hayır'}</p>`
            })
        });

        // 3. MÜŞTERİ TEŞEKKÜR MAİLİ
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