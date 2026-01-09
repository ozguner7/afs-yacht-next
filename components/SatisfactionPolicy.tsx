"use client";

import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";
import { Shield } from "./icons";

export const SatisfactionPolicy = () => {
    const { darkMode } = useTheme();
    const { t } = useLanguage();
    const bgClass = darkMode ? 'bg-[#0D1620]' : 'bg-slate-100';
    const textClass = darkMode ? 'text-slate-300' : 'text-slate-600';
    const headingClass = darkMode ? 'text-white' : 'text-brand-navy';

    return (
        <section className={`py-20 ${bgClass} transition-colors duration-500`}>
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <div className="flex justify-center mb-6 text-brand-gold">
                        <Shield size={48} />
                    </div>
                    <h3 className={`text-3xl font-serif mb-6 ${headingClass}`}>{t('policy_title')}</h3>
                    <p className={`text-lg leading-relaxed ${textClass}`}>
                        {t('policy_desc')}
                    </p>
                </div>
            </div>
        </section>
    );
};

