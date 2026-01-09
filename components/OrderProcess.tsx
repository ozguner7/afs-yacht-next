"use client";

import { PenTool, Scissors, Star } from "./icons";
import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";

export const OrderProcess = () => {
    const { darkMode } = useTheme();
    const { t } = useLanguage();

    return (
        <section id="iletisim" className={`py-24 transition-colors duration-500 relative overflow-hidden ${darkMode ? 'bg-brand-navy text-white' : 'bg-white text-slate-800'}`}>
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20"><span className="text-brand-gold text-xs tracking-[0.2em] uppercase font-bold">{t('process_eyebrow')}</span><h3 className="text-4xl font-serif mt-4">{t('process_title')}</h3></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-slate-700 border-t border-dashed border-brand-gold/30"></div>
                    <div className="relative text-center group"><div className="w-24 h-24 bg-brand-navy border border-brand-gold/30 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-gold group-hover:border-brand-gold group-hover:scale-110 transition-all duration-300"><PenTool size={32} /></div><h4 className="text-2xl font-serif mb-4 text-white">{t('process_step1_title')}</h4><p className="text-slate-400 text-sm font-light px-4 leading-relaxed">{t('process_step1_desc')}</p></div>
                    <div className="relative text-center group"><div className="w-24 h-24 bg-brand-navy border border-brand-gold/30 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-gold group-hover:border-brand-gold group-hover:scale-110 transition-all duration-300"><Scissors size={32} /></div><h4 className="text-2xl font-serif mb-4 text-white">{t('process_step2_title')}</h4><p className="text-slate-400 text-sm font-light px-4 leading-relaxed">{t('process_step2_desc')}</p></div>
                    <div className="relative text-center group"><div className="w-24 h-24 bg-brand-navy border border-brand-gold/30 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-gold group-hover:border-brand-gold group-hover:scale-110 transition-all duration-300"><Star size={32} /></div><h4 className="text-2xl font-serif mb-4 text-white">{t('process_step3_title')}</h4><p className="text-slate-400 text-sm font-light px-4 leading-relaxed">{t('process_step3_desc')}</p></div>
                </div>
                <div className="mt-20 text-center"><button className="bg-brand-gold text-white px-12 py-5 text-xs uppercase tracking-[0.25em] hover:bg-brand-gold/80 transition-all rounded-sm font-bold">{t('process_cta')}</button></div>
            </div>
        </section>
    );
};

