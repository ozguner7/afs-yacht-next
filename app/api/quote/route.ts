import { NextResponse } from 'next/server';

const products = [
    { id: "thetis", name: "AFS THETIS", img: "https://afsyacht.com/wp-content/uploads/2024/06/Usturmaca-Askisi-AFS-Yacht-1-2-1536x1394.png" },
    { id: "pontos", name: "AFS PONTOS", img: "https://afsyacht.com/wp-content/uploads/2024/06/Usturmaca-Askisi-AFS-Yacht-2-1935x2048.png" },
    { id: "argos", name: "AFS ARGOS", img: "https://afsyacht.com/wp-content/uploads/2024/06/Usturmaca-Askisi-AFS-Yacht-3-1536x1251.png" }
];

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { formData, selectedProducts } = body;
        const marketingConsent = formData.marketingConsent;

        const apiKey = process.env.BREVO_API_KEY;
        const senderEmail = process.env.BREVO_SENDER_EMAIL || 'info@afsyacht.com';
        const adminEmail = process.env.BREVO_ADMIN_EMAIL || 'ozguner@afsyacht.com';

        if (!apiKey) return NextResponse.json({ error: "API Key missing" }, { status: 500 });

        const safeSelectedProducts = Array.isArray(selectedProducts) ? selectedProducts : [];
        const selectedProductDetails = safeSelectedProducts.map(id =>
            products.find(p => p.id === id) || { id, name: id, img: "" }
        );
        const allProductNames = selectedProductDetails.map(p => p.name).join(', ');
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
                    PRODUCTS_LIST: selectedProductDetails
                }
            })
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}