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
                    <div className={`text-lg leading-relaxed ${textClass} text-left`}>
                        {t('policy_desc').split('\n').map((line, index) => {
                            if (line.trim().startsWith('-')) {
                                // List item
                                const content = line.trim().substring(1).trim();
                                const parts = content.split(/(\*\*.*?\*\*)/g);
                                return (
                                    <div key={index} className="flex items-start mb-2 pl-4">
                                        <span className="mr-2">•</span>
                                        <span>
                                            {parts.map((part, i) => {
                                                if (part.startsWith('**') && part.endsWith('**')) {
                                                    return <strong key={i} className="font-semibold text-brand-gold">{part.slice(2, -2)}</strong>;
                                                }
                                                return part;
                                            })}
                                        </span>
                                    </div>
                                );
                            } else {
                                // Regular paragraph
                                const parts = line.split(/(\*\*.*?\*\*)/g);
                                return (
                                    <p key={index} className="mb-4 last:mb-0">
                                        {parts.map((part, i) => {
                                            if (part.startsWith('**') && part.endsWith('**')) {
                                                return <strong key={i} className="font-semibold text-brand-gold">{part.slice(2, -2)}</strong>;
                                            }
                                            return part;
                                        })}
                                    </p>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

