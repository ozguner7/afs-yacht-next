"use client";

import { useTheme } from "@/components/ThemeContext";

export default function KalitePolitikasiPage() {
    const { darkMode } = useTheme();

    return (
        <div className={`min-h-screen pt-32 pb-20 px-6 transition-colors duration-500 ${darkMode ? 'bg-brand-navy text-white' : 'bg-white text-slate-900'}`}>
            <div className="container mx-auto max-w-4xl animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-serif mb-12 border-b-2 border-brand-gold pb-6 inline-block">Kalite ve Memnuniyet Politikamız</h1>

                <div className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-serif font-bold text-brand-gold mb-4">Kalite Anlayışımız</h2>
                        <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                            AFS Yacht olarak kaliteyi bir zorunluluk değil, bir yaşam biçimi olarak benimsiyoruz. Üretim süreçlerimizden hammadde seçimine, paketlemeden sevkiyata kadar her aşamada uluslararası standartlara uygun hareket ediyoruz. Ürünlerimizin deniz şartlarına dayanıklılığı, uzun ömürlülüğü ve estetik duruşu, kalite politikamızın temel taşlarını oluşturur.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-brand-gold mb-4">Müşteri Memnuniyeti</h2>
                        <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                            Müşterilerimiz, işimizin kalbidir. Her geri bildirimi bir armağan olarak kabul ediyor ve sürekli iyileştirme süreçlerimizde değerlendiriyoruz:
                        </p>
                        <ul className={`list-disc pl-6 mt-4 space-y-2 text-lg ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                            <li>Taleplere <strong>hızlı ve doğru</strong> yanıt vermek.</li>
                            <li>Söz verilen termin sürelerine sadık kalmak.</li>
                            <li>Satış sonrası teknik destek ve garanti süreçlerinde <strong>şeffaf</strong> olmak.</li>
                            <li>Beklentilerin ötesinde, katma değerli çözümler sunmak.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-brand-gold mb-4">Sürekli Gelişim</h2>
                        <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                            Teknoloji ve denizcilik trendlerini yakından takip ediyor, AR-GE çalışmalarımızla ürün gamımızı sürekli geliştiriyoruz. Personelimizin eğitimi ve motivasyonu, sunduğumuz hizmetin kalitesine doğrudan yansımaktadır.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
