"use client";

import { useTheme } from "@/components/ThemeContext";
import { useLanguage } from "@/components/LanguageContext";
import Link from "next/link";
import { Instagram, Mail, Phone, MapPin, MessageSquare, ArrowRight, Linkedin, WhatsApp } from "@/components/icons";

export default function ContactPage() {
    const { darkMode } = useTheme();
    const { t } = useLanguage();
    const bgClass = darkMode ? 'bg-brand-navy' : 'bg-slate-50';
    const cardBg = darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200';
    const headingColor = darkMode ? 'text-white' : 'text-slate-900';
    const textColor = darkMode ? 'text-slate-400' : 'text-slate-600';
    const inputBg = darkMode ? 'bg-brand-navy border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900';

    return (
        <div className={`min-h-screen pt-36 pb-20 ${bgClass} transition-colors duration-500`}>
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h1 className={`text-4xl md:text-5xl font-serif mb-4 ${headingColor}`}>{t('contact_page_title')}</h1>
                    <p className={`text-lg ${textColor}`}>{t('contact_page_desc')}</p>
                </div>

                <div className="flex flex-col gap-12 max-w-5xl mx-auto">

                    {/* Row 1: Quote Callout (Full Width) */}
                    <div className="w-full animate-fade-in-up delay-100">
                        <div className={`p-8 rounded-sm border border-brand-gold/30 bg-brand-gold/5 flex flex-col md:flex-row items-center justify-between gap-6`}>
                            <div>
                                <h3 className={`text-xl font-serif mb-2 ${headingColor}`}>{t('contact_get_quote')}</h3>
                                <p className={`text-sm ${textColor}`}>{t('contact_get_quote_desc')}</p>
                            </div>
                            <Link href="/teklif" className="shrink-0 inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-4 text-xs uppercase tracking-widest font-bold rounded-sm hover:bg-brand-gold/80 transition-all">
                                {t('nav_quote')} <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Row 2: Contact Info & Map (Side by Side) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in-up delay-200">
                        {/* Contact Info */}
                        <div className={`p-8 rounded-sm border h-full ${cardBg}`}>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="text-brand-gold mt-1"><MapPin size={28} /></div>
                                    <div>
                                        <h4 className={`font-bold mb-2 ${headingColor}`}>{t('contact_address_title')}</h4>
                                        <p className={`text-sm leading-relaxed ${textColor}`}>KARLIKTEPE MAHALLESİ, BLOKEVLERI SOKAK,<br />4A ROYAL GARDEN, D11 , KARTAL/İSTANBUL</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-brand-gold"><Mail size={24} /></div>
                                    <div>
                                        <h4 className={`font-bold mb-1 ${headingColor}`}>{t('contact_email')}</h4>
                                        <a href="mailto:info@afsyacht.com" className={`text-sm ${textColor} hover:text-brand-gold transition-colors`}>info@afsyacht.com</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-brand-gold"><WhatsApp size={24} /></div>
                                    <div>
                                        <h4 className={`font-bold mb-1 ${headingColor}`}>{t('contact_phone')}</h4>
                                        <a href="https://wa.me/905549753777" target="_blank" rel="noopener noreferrer" className={`text-sm ${textColor} hover:text-brand-gold transition-colors`}>0554 975 37 77</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className={`rounded-sm overflow-hidden border ${cardBg} h-64 lg:h-auto relative min-h-[300px]`}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.345678901234!2d29.183333!3d40.891667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDUzJzMwLjAiTiAyOcKwMTEnMDAuMCJF!5e0!3m2!1sen!2str!4v1600000000000!5m2!1sen!2str"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                className="filter grayscale hover:grayscale-0 transition-all duration-500 absolute inset-0"
                            ></iframe>
                            <div className="absolute bottom-0 left-0 right-0 bg-brand-navy/80 text-white text-xs p-2 text-center backdrop-blur-sm">
                                KARLIKTEPE MAHALLESİ, BLOKEVLERI SOKAK, 4A ROYAL GARDEN, D11 , KARTAL/İSTANBUL
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Social Media (Full Width) */}
                    <div className="w-full animate-fade-in-up delay-300">
                        <div className={`p-8 rounded-sm border ${cardBg}`}>
                            <h4 className={`font-bold mb-8 text-center ${headingColor}`}>{t('contact_social_title')}</h4>
                            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                                <a href="https://instagram.com/afsyacht" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-6 group cursor-pointer p-4 rounded-md transition-colors text-sm uppercase tracking-widest font-medium ${headingColor} hover:text-brand-gold`}>
                                    <div className="w-16 h-16 rounded-md bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center text-white group-hover:scale-105 transition-transform shadow-sm">
                                        <Instagram size={32} />
                                    </div>
                                    <div>
                                        <span className={`font-bold text-xl block`}>@afsyacht</span>
                                        <span className="text-sm text-brand-gold uppercase tracking-wider">Follow Us</span>
                                    </div>
                                </a>

                                <a href="https://www.linkedin.com/company/afs-yacht" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-6 group cursor-pointer p-4 rounded-md transition-colors text-sm uppercase tracking-widest font-medium ${headingColor} hover:text-brand-gold`}>
                                    <div className="w-16 h-16 rounded-md bg-[#0077B5] flex items-center justify-center text-white group-hover:scale-105 transition-transform shadow-sm">
                                        <Linkedin size={32} />
                                    </div>
                                    <div>
                                        <span className={`font-bold text-xl block`}>AFS Yacht</span>
                                        <span className="text-sm text-brand-gold uppercase tracking-wider">Connect</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
