"use client";

import { useTheme } from "@/components/ThemeContext";

const PRIVACY_CONTENT = `
Gizlilik Politikası

Bu gizlilik politikası, verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.

1. Veri Toplama:
- İsim, e-posta, telefon numarası ve yat bilgileri gibi kişisel verileriniz, size hizmet sunmak amacıyla toplanmaktadır.
- Web sitemizi ziyaret ettiğinizde çerezler aracılığıyla bazı teknik veriler toplanabilir.

2. Veri Kullanımı:
- Toplanan veriler, talep ettiğiniz teklifleri hazırlamak ve sizinle iletişime geçmek için kullanılır.
- Onay vermeniz durumunda, size kampanya ve duyurular gönderilebilir.

3. Veri Güvenliği:
- Verileriniz güvenli sunucularda saklanır ve yetkisiz erişime karşı korunur.
- Üçüncü taraflarla, yasal zorunluluklar dışında verileriniz paylaşılmaz.

4. Haklarınız:
- Kişisel verilerinize erişme, düzeltme veya silme hakkına sahipsiniz.
- Bizimle iletişime geçerek bu haklarınızı kullanabilirsiniz.

Son Güncelleme: 01.01.2024
`;

export default function PrivacyPage() {
    const { darkMode } = useTheme();

    return (
        <div className={`min-h-screen pt-32 pb-20 px-6 transition-colors duration-500 ${darkMode ? 'bg-brand-navy text-white' : 'bg-white text-slate-900'}`}>
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl font-serif mb-12 border-b border-brand-gold/30 pb-6 inline-block">Gizlilik Politikası</h1>
                <div className="bg-brand-gold/5 p-8 rounded-sm border border-brand-gold/10">
                    <pre className={`whitespace-pre-wrap font-sans text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        {PRIVACY_CONTENT}
                    </pre>
                </div>
            </div>
        </div>
    );
}
