"use client";

import { Phone, Mail, Instagram, Linkedin } from "./icons";
import { useLanguage } from "./LanguageContext";
import { useTheme } from "./ThemeContext";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

export const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className={`py-20 bg-brand-navy border-t border-slate-900 text-slate-300 relative overflow-hidden`}>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
            <div className="container mx-auto px-6 text-center">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start justify-items-center md:justify-items-start">
                    {/* Column 1: Brand & Desc & Socials */}
                    <div className="flex flex-col text-left w-full items-center md:items-start text-center md:text-left">
                        <div className="flex items-center gap-0 mb-6">
                            <img src="/logo.png" alt="AFS Yacht" className="h-16 w-auto object-contain brightness-0 invert" />
                            <span className="font-bold text-2xl text-white leading-none mt-1">AFS YACHT</span>
                        </div>
                        <div className="flex flex-col gap-6 items-center md:items-start">
                            <p className="text-xs leading-relaxed font-light text-slate-400 max-w-[15rem]">
                                Denizi tanımak birikim, ona şekil vermek ustalık ister. Arkamızda 30 yıllık gemi mühendisliği tecrübesi, ellerimizde ise kusursuz el işçiliğinin tutkusu var. Türkiye’de tasarlayıp dünyaya sunduğumuz her ürün, teknik mükemmellik ile estetiğin buluştuğu o nadir noktada duruyor.
                            </p>
                            <div className="flex gap-4 justify-center md:justify-center w-full">
                                <a href="https://www.instagram.com/afsyacht/" target="_blank" rel="noopener noreferrer"><Instagram size={20} className="hover:text-brand-gold cursor-pointer transition-colors" /></a>
                                <a href="https://www.linkedin.com/company/afs-yacht" target="_blank" rel="noopener noreferrer"><Linkedin size={20} className="hover:text-brand-gold cursor-pointer transition-colors" /></a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Corporate */}
                    <div className="text-left w-full">
                        <div className="h-8 flex items-center mb-6">
                            <h4 className="text-white text-sm uppercase tracking-widest font-bold text-brand-gold">KURUMSAL</h4>
                        </div>
                        <ul className="space-y-3 text-sm font-light">
                            <li className="hover:text-brand-gold cursor-pointer transition-colors"><Link href="/hakkimizda">Hakkımızda</Link></li>
                            <li className="hover:text-brand-gold cursor-pointer transition-colors"><Link href="/kalite-politikasi">Kalite Politikamız</Link></li>
                            <li className="hover:text-brand-gold cursor-pointer transition-colors"><Link href="/gizlilik-politikasi">{t('footer_privacy')}</Link></li>
                            <li className="hover:text-brand-gold cursor-pointer transition-colors"><Link href="/kvkk">KVKK Aydınlatma Metni</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Collection */}
                    <div className="text-left w-full">
                        <div className="h-8 flex items-center mb-6">
                            <h4 className="text-white text-sm uppercase tracking-widest font-bold text-brand-gold">{t('nav_collection')}</h4>
                        </div>
                        <ul className="space-y-3 text-sm font-light">
                            <li className="hover:text-brand-gold cursor-pointer transition-colors"><Link href="/usturmaca-askisi">{t('footer_col_hooks')}</Link></li>
                            <li className="hover:text-brand-gold cursor-pointer transition-colors"><Link href="/usturmacalar">{t('cat_fenders')}</Link></li>
                            <li className="hover:text-brand-gold cursor-pointer transition-colors"><Link href="/usturmaca-baglama-halati">{t('cat_fender_lines')}</Link></li>
                            <li className="hover:text-brand-gold cursor-pointer transition-colors"><Link href="/usturmaca-kiliflari">{t('cat_fender_covers')}</Link></li>
                            <li className="hover:text-brand-gold cursor-pointer transition-colors"><Link href="/koc-boynuzu">{t('footer_col_cleats')}</Link></li>
                            <li className="hover:text-brand-gold cursor-pointer transition-colors"><Link href="/merdivenler">{t('footer_col_ladders')}</Link></li>
                            <li className="hover:text-brand-gold cursor-pointer transition-colors"><Link href="/bot-baglama-askisi">{t('cat_dinghy_hangers')}</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Blog */}
                    <div className="text-left w-full">
                        <div className="h-8 flex items-center mb-6">
                            <h4 className="text-white text-sm uppercase tracking-widest font-bold text-brand-gold">SON YAZILARIMIZ</h4>
                        </div>
                        <ul className="space-y-4">
                            {blogPosts.slice(0, 3).map((post, idx) => (
                                <li key={idx} className="group">
                                    <Link href={`/blog/${post.slug}`} className="block">
                                        <span className="text-xs text-slate-500 mb-1 block">{post.date}</span>
                                        <span className="text-sm font-light group-hover:text-brand-gold transition-colors line-clamp-2">{post.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 5: Contact */}
                    <div className="text-left w-full">
                        <div className="h-8 flex items-center mb-6">
                            <h4 className="text-white text-sm uppercase tracking-widest font-bold text-brand-gold">{t('nav_contact')}</h4>
                        </div>
                        <ul className="space-y-3 text-sm font-light mb-6">
                            <li className="flex items-start gap-3 hover:text-white cursor-pointer transition-colors">
                                <Phone size={16} className="text-brand-gold shrink-0 mt-1" /> <span className="whitespace-nowrap">+90 532 277 52 14</span>
                            </li>
                            <li className="flex items-start gap-3 hover:text-white cursor-pointer transition-colors">
                                <Mail size={16} className="text-brand-gold shrink-0 mt-1" /> info@afsyacht.com
                            </li>
                        </ul>
                        <Link
                            href="/teklif"
                            className="inline-flex items-center justify-center px-6 py-3 bg-brand-gold text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-brand-gold/80 transition-all w-full md:w-auto"
                        >
                            Teklif Alın
                        </Link>
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
