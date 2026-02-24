"use client";

import { useTheme } from "@/components/ThemeContext";


export default function HakkimizdaPage() {
    const { darkMode } = useTheme();

    return (
        <div className={`min-h-screen pt-32 pb-20 px-6 transition-colors duration-500 ${darkMode ? 'bg-brand-navy text-white' : 'bg-white text-slate-900'}`}>
            <div className="container mx-auto max-w-4xl animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-serif mb-12 border-b-2 border-brand-gold pb-6 inline-block">Hakkımızda</h1>

                <div className="space-y-8 text-lg font-light leading-relaxed">
                    <p>
                        <strong className="text-brand-gold font-bold">AFS Yacht</strong>, denizcilik sektöründe yılların getirdiği tecrübe ve mühendislik birikimiyle, yat sahipleri ve üreticileri için özel çözümler sunan öncü bir markadır. Hızla gelişen teknoloji ve değişen denizcilik ihtiyaçlarına, kalite ve inovasyondan ödün vermeden yanıt veriyoruz.
                    </p>

                    <p>
                        Kurulduğumuz günden bu yana, <span className="italic">&quot;Denizdeki Güvenliğiniz ve Konforunuz&quot;</span> ilkesiyle hareket ediyoruz. Üretimini ve tedariğini gerçekleştirdiğimiz paslanmaz çelik donanımlar (koç boynuzları, askı sistemleri), özel halat çözümleri ve usturmaça ekipmanları ile teknenizin her detayında mükemmelliği hedefliyoruz.
                    </p>

                    <div className="bg-brand-gold/10 p-8 rounded-sm my-10 border-l-4 border-brand-gold">
                        <h3 className={`text-2xl font-serif font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Vizyonumuz</h3>
                        <p className="mb-6">Global denizcilik pazarında, Türk mühendisliğinin ve zanaatkarlığının gücünü temsil eden, güvenilirliği ve kalitesiyle ilk tercih edilen marka olmak.</p>

                        <h3 className={`text-2xl font-serif font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Misyonumuz</h3>
                        <p>Deniz severlerin ihtiyaçlarını en doğru şekilde analiz ederek, estetik ve işlevselliği birleştiren, uzun ömürlü ve yüksek mukavemetli ürünler tasarlamak ve üretmek.</p>
                    </div>

                    <p>
                        AFS Yacht olarak sadece ürün satmıyor, denizdeki yaşam kalitenizi artıracak detayları tasarlıyoruz. Müşteri memnuniyetini merkezimize alarak, satış öncesi ve sonrası süreçlerde şeffaf, hızlı ve çözüm odaklı bir yaklaşım benimsiyoruz.
                    </p>
                </div>
            </div>
        </div>
    );
}
