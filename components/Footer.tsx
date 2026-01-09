"use client";

import { Phone, Mail, Instagram, Linkedin } from "./icons";
import { useLanguage } from "./LanguageContext";
import { useTheme } from "./ThemeContext";
import Link from "next/link";

export const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className={`py-20 bg-brand-navy border-t border-slate-900 text-slate-300 relative overflow-hidden`}>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
            <div className="container mx-auto px-6 text-center">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
                    <div className="md:col-span-1 flex flex-col gap-6">
                        <div className="flex flex-row items-center justify-center gap-4 h-40">
                            <img src="/AFS Yahct.svg" alt="AFS Yacht" className="h-full w-auto object-contain shrink-0" />
                            <p className="text-xs leading-relaxed font-light text-center flex items-center h-full overflow-hidden">{t('footer_desc')}</p>
                        </div>
                        <div className="text-center">
                            <span className="font-bold text-xs uppercase tracking-wider text-slate-500 block leading-tight">
                                AFS PROJE TAAHÜT MÜHENDİSLİK SANAYİ VE TİCARET LİMİTED ŞİRKETİ
                            </span>
                        </div>
                    </div>
                    <div className="md:pl-12">
                        <h4 className="text-white text-sm uppercase tracking-widest mb-6 font-bold text-brand-gold/80 h-6 flex items-center justify-center">{t('nav_collection')}</h4>
                        <ul className="space-y-3 text-sm font-light">
                            <li className="hover:text-brand-gold cursor-pointer transition-colors"><Link href="/koleksiyon">{t('footer_col_hooks')}</Link></li>
                            <li className="hover:text-brand-gold cursor-pointer transition-colors">{t('footer_col_cleats')}</li>
                            <li className="hover:text-brand-gold cursor-pointer transition-colors">{t('footer_col_ladders')}</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white text-sm uppercase tracking-widest mb-6 font-bold text-brand-gold/80 h-6 flex items-center justify-center">{t('nav_contact')}</h4>
                        <ul className="space-y-3 text-sm font-light">
                            <li className="flex items-center justify-center gap-3 hover:text-white cursor-pointer transition-colors">
                                <Phone size={16} className="text-brand-gold shrink-0" /> <span className="whitespace-nowrap">+90 532 277 52 14</span>
                            </li>
                            <li className="flex items-center justify-center gap-3 hover:text-white cursor-pointer transition-colors">
                                <Mail size={16} className="text-brand-gold shrink-0" /> info@afsyacht.com
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white text-sm uppercase tracking-widest mb-6 font-bold text-brand-gold/80 h-6 flex items-center justify-center">{t('footer_follow')}</h4>
                        <div className="flex gap-6 justify-center">
                            <a href="https://www.instagram.com/afsyacht/" target="_blank" rel="noopener noreferrer"><Instagram size={24} className="hover:text-brand-gold cursor-pointer transition-colors" /></a>
                            <a href="https://www.linkedin.com/company/afs-yacht" target="_blank" rel="noopener noreferrer"><Linkedin size={24} className="hover:text-brand-gold cursor-pointer transition-colors" /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-slate-900 text-xs tracking-widest uppercase flex flex-col md:flex-row justify-between items-center text-slate-600 relative">
                    <p>&copy; 2024 AFS Yacht. All Rights Reserved.</p>
                    <div className="my-4 md:my-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                        <a href="https://www.millenwork.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-500 hover:text-slate-400 transition-colors">MillenWork tarafından geliştirildi</a>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/gizlilik-politikasi"><span className="hover:text-white cursor-pointer">{t('footer_privacy')}</span></Link>
                        <Link href="/kvkk"><span className="hover:text-white cursor-pointer">KVKK Aydınlatma Metni</span></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
