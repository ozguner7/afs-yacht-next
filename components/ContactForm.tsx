"use client";

import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";

export const ContactForm = () => {
    const { darkMode } = useTheme();
    const { t } = useLanguage();
    const bgClass = darkMode ? 'bg-black' : 'bg-white';
    const inputBg = darkMode ? 'bg-brand-navy border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900';
    const labelClass = darkMode ? 'text-slate-300' : 'text-slate-700';
    const headingClass = darkMode ? 'text-white' : 'text-brand-navy';

    return (
        <section id="contact-form" className={`py-24 ${bgClass} transition-colors duration-500`}>
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-brand-gold text-xs tracking-[0.2em] uppercase font-bold">{t('contact_eyebrow')}</span>
                        <h3 className={`text-3xl font-serif mt-3 ${headingClass}`}>{t('contact_title')}</h3>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className={`block text-xs uppercase tracking-wider font-bold mb-2 ${labelClass}`}>{t('contact_name_label')}</label>
                                <input type="text" className={`w-full px-4 py-3 rounded-sm border focus:border-brand-gold outline-none transition-all ${inputBg}`} />
                            </div>
                            <div>
                                <label className={`block text-xs uppercase tracking-wider font-bold mb-2 ${labelClass}`}>{t('contact_email')}</label>
                                <input type="email" className={`w-full px-4 py-3 rounded-sm border focus:border-brand-gold outline-none transition-all ${inputBg}`} />
                            </div>
                        </div>
                        <div>
                            <label className={`block text-xs uppercase tracking-wider font-bold mb-2 ${labelClass}`}>{t('contact_subject_label')}</label>
                            <input type="text" className={`w-full px-4 py-3 rounded-sm border focus:border-brand-gold outline-none transition-all ${inputBg}`} />
                        </div>
                        <div>
                            <label className={`block text-xs uppercase tracking-wider font-bold mb-2 ${labelClass}`}>{t('contact_message_label')}</label>
                            <textarea rows={4} className={`w-full px-4 py-3 rounded-sm border focus:border-brand-gold outline-none transition-all ${inputBg}`}></textarea>
                        </div>
                        <div className="text-center mt-8">
                            <button type="submit" className="bg-brand-gold text-white px-12 py-4 text-xs uppercase tracking-[0.2em] hover:shadow-[0_0_20px_rgba(175,139,77,0.4)] transition-all rounded-sm font-bold">{t('contact_submit_btn')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

