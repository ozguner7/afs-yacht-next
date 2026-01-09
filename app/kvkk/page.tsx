"use client";

import { useTheme } from "@/components/ThemeContext";

const KVKK_CONTENT = `
KVKK Aydınlatma Metni

6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, veri sorumlusu olarak kişisel verilerinizi aşağıda açıklanan kapsamda işlemekteyiz.

1. İşlenen Kişisel Veriler:
- Kimlik Bilgileri (Ad, Soyad)
- İletişim Bilgileri (E-posta, Telefon)
- Müşteri İşlem Bilgileri (Teklif detayları)

2. İşleme Amaçları:
- Ürün ve hizmetlerin sunulması
- İletişim faaliyetlerinin yürütülmesi
- Müşteri memnuniyetinin sağlanması

3. Aktarım:
- Verileriniz, yasal düzenlemelerin öngördüğü durumlarda yetkili kamu kurumlarına aktarılabilir.

4. KVKK Kapsamındaki Haklarınız:
- Veri işlenip işlenmediğini öğrenme
- İşlenen veriler hakkında bilgi talep etme
- Amaca uygun kullanılıp kullanılmadığını öğrenme
- Düzeltme, silme veya yok edilmesini isteme

Detaylı bilgi için KVKK Politikamızı inceleyebilirsiniz.
`;

export default function KvkkPage() {
    const { darkMode } = useTheme();

    return (
        <div className={`min-h-screen pt-32 pb-20 px-6 transition-colors duration-500 ${darkMode ? 'bg-brand-navy text-white' : 'bg-white text-slate-900'}`}>
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl font-serif mb-12 border-b border-brand-gold/30 pb-6 inline-block">KVKK Aydınlatma Metni</h1>
                <div className="bg-brand-gold/5 p-8 rounded-sm border border-brand-gold/10">
                    <pre className={`whitespace-pre-wrap font-sans text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        {KVKK_CONTENT}
                    </pre>
                </div>
            </div>
        </div>
    );
}
