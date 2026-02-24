"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";
import { Sun, Moon, ChevronRight, Menu, X, ChevronDown } from "./icons";
import { flags, Language } from "../data/translations";

export const Navbar = () => {
    const { darkMode, toggleDarkMode } = useTheme();
    const { language, setLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [userOpenedLang, setUserOpenedLang] = useState(false); // Separate state for mobile lang dropdown
    const [openSection, setOpenSection] = useState<string | null>(null); // Accordion state

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const navBg = isScrolled
        ? (darkMode ? 'bg-brand-navy/90' : 'bg-white/95')
        : 'bg-transparent';

    const textColor = isScrolled
        ? (darkMode ? 'text-slate-300' : 'text-slate-600')
        : (darkMode ? 'text-white' : 'text-brand-navy');

    // For mobile menu button when not scrolled and on dark bg, ensuring visibility check
    const mobileButtonColor = isMobileMenuOpen
        ? (darkMode ? 'text-slate-300' : 'text-slate-600')
        : textColor;

    const hoverColor = 'hover:text-brand-gold';

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out border-b border-brand-gold ${navBg} py-4`}>

            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2 z-50">
                    <Link href="/" className="relative" onClick={() => setIsMobileMenuOpen(false)}>
                        <Image
                            src="/logo.png"
                            alt="AFS Yacht Logo"
                            width={100}
                            height={100}
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className={`text-sm uppercase tracking-widest transition-colors duration-300 font-medium ${textColor} ${hoverColor}`}>ANASAYFA</Link>

                    {/* Corporate Dropdown */}
                    <div className="relative group">
                        <button className={`text-sm uppercase tracking-widest transition-colors duration-300 font-medium flex items-center gap-1 ${textColor} ${hoverColor}`}>
                            KURUMSAL
                            <ChevronRight size={14} className="group-hover:rotate-90 transition-transform duration-300" />
                        </button>
                        <div className="absolute top-full left-0 mt-6 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                            <div className={`rounded-sm border-t-2 border-brand-gold overflow-hidden ${darkMode ? 'bg-brand-navy border-x border-b border-slate-800' : 'bg-white border-x border-b border-slate-100'}`}>
                                <Link href="/hakkimizda" className={`block px-6 py-3 text-xs uppercase tracking-wider font-medium border-b border-slate-50 dark:border-slate-800 hover:bg-brand-gold hover:text-white transition-all duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Hakkımızda</Link>
                                <Link href="/kalite-politikasi" className={`block px-6 py-3 text-xs uppercase tracking-wider font-medium border-b border-slate-50 dark:border-slate-800 hover:bg-brand-gold hover:text-white transition-all duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Kalite Politikamız</Link>
                                <Link href="/gizlilik-politikasi" className={`block px-6 py-3 text-xs uppercase tracking-wider font-medium border-b border-slate-50 dark:border-slate-800 hover:bg-brand-gold hover:text-white transition-all duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{t('footer_privacy')}</Link>
                                <Link href="/kvkk" className={`block px-6 py-3 text-xs uppercase tracking-wider font-medium hover:bg-brand-gold hover:text-white transition-all duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>KVKK Aydınlatma Metni</Link>
                            </div>
                        </div>
                    </div>

                    {/* Collection Dropdown */}
                    <div className="relative group">
                        <Link href="/koleksiyon" className={`text-sm uppercase tracking-widest transition-colors duration-300 font-medium flex items-center gap-1 ${textColor} ${hoverColor}`}>
                            {t('nav_collection')}
                            <ChevronRight size={14} className="group-hover:rotate-90 transition-transform duration-300" />
                        </Link>
                        <div className="absolute top-full left-0 mt-6 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                            <div className={`rounded-sm border-t-2 border-brand-gold overflow-hidden ${darkMode ? 'bg-brand-navy border-x border-b border-slate-800' : 'bg-white border-x border-b border-slate-100'}`}>
                                <Link href="/koleksiyon#hooks" className={`block px-6 py-3 text-xs uppercase tracking-wider font-medium border-b border-slate-50 dark:border-slate-800 hover:bg-brand-gold hover:text-white transition-all duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{t('footer_col_hooks')}</Link>
                                <Link href="/koleksiyon#fenders" className={`block px-6 py-3 text-xs uppercase tracking-wider font-medium border-b border-slate-50 dark:border-slate-800 hover:bg-brand-gold hover:text-white transition-all duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{t('cat_fenders')}</Link>
                                <Link href="/koleksiyon#lines" className={`block px-6 py-3 text-xs uppercase tracking-wider font-medium border-b border-slate-50 dark:border-slate-800 hover:bg-brand-gold hover:text-white transition-all duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{t('cat_fender_lines')}</Link>
                                <Link href="/koleksiyon#covers" className={`block px-6 py-3 text-xs uppercase tracking-wider font-medium border-b border-slate-50 dark:border-slate-800 hover:bg-brand-gold hover:text-white transition-all duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{t('cat_fender_covers')}</Link>
                                <Link href="/koleksiyon#cleats" className={`block px-6 py-3 text-xs uppercase tracking-wider font-medium border-b border-slate-50 dark:border-slate-800 hover:bg-brand-gold hover:text-white transition-all duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{t('footer_col_cleats')}</Link>
                                <Link href="/koleksiyon#ladders" className={`block px-6 py-3 text-xs uppercase tracking-wider font-medium border-b border-slate-50 dark:border-slate-800 hover:bg-brand-gold hover:text-white transition-all duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{t('footer_col_ladders')}</Link>
                                <Link href="/koleksiyon#dinghy-hangers" className={`block px-6 py-3 text-xs uppercase tracking-wider font-medium hover:bg-brand-gold hover:text-white transition-all duration-200 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{t('cat_dinghy_hangers')}</Link>
                            </div>
                        </div>
                    </div>
                    <Link href="/blog" className={`text-sm uppercase tracking-widest transition-colors duration-300 font-medium ${textColor} ${hoverColor}`}>{t('nav_blog')}</Link>
                    <Link href="/iletisim" className={`text-sm uppercase tracking-widest transition-colors duration-300 font-medium ${textColor} ${hoverColor}`}>{t('nav_contact')}</Link>
                    <Link href="/teklif" className={`px-6 py-2 text-xs uppercase tracking-widest transition-all duration-300 font-bold bg-brand-gold text-white hover:bg-brand-gold/80 block`}>{t('nav_quote')}</Link>

                    {/* Desktop Controls */}
                    <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-700 pl-4">
                        <button onClick={toggleDarkMode} className={`p-2 rounded-full transition-colors ${textColor} ${hoverColor}`}>
                            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        <div className="relative">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className={`flex items-center gap-2 text-xs font-bold transition-colors ${textColor} ${hoverColor}`}
                            >
                                <span className="text-xl">{flags[language]}</span>
                                <span>{language}</span>
                            </button>

                            {isLangOpen && (
                                <div className={`absolute top-full right-0 mt-2 w-32 py-2 rounded-sm border overflow-hidden ${darkMode ? 'bg-brand-navy border-slate-700' : 'bg-white border-slate-200'}`}>
                                    {Object.entries(flags).map(([code, flag]) => (
                                        <button
                                            key={code}
                                            onClick={() => {
                                                setLanguage(code as Language);
                                                setIsLangOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-2 text-xs font-bold flex items-center gap-3 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors ${language === code ? 'text-brand-gold bg-brand-gold/5' : (darkMode ? 'text-slate-300' : 'text-slate-600')}`}
                                        >
                                            <span className="text-lg">{flag}</span>
                                            {code}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden z-50">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`p-2 transition-colors ${mobileButtonColor}`}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-brand-navy z-[100] transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Fixed Header */}
                <div className="flex justify-between items-center px-6 py-4 flex-none border-b border-white/5">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                        <Image
                            src="/logo.png"
                            alt="AFS Yacht Logo"
                            width={80}
                            height={80}
                            className="object-contain brightness-0 invert"
                        />
                    </Link>
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 text-white hover:text-brand-gold transition-colors"
                    >
                        <X size={28} />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col space-y-6">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xl uppercase tracking-widest font-medium text-white block">ANASAYFA</Link>

                    {/* Mobile Corporate Accordion */}
                    <div className="flex flex-col">
                        <button
                            onClick={() => setOpenSection(openSection === 'corporate' ? null : 'corporate')}
                            className="w-full flex justify-between items-center text-xl uppercase tracking-widest font-medium text-white group"
                        >
                            <span>KURUMSAL</span>
                            <ChevronDown size={20} className={`transition-transform duration-300 ${openSection === 'corporate' ? 'rotate-180' : ''} text-white/70 group-hover:text-white`} />
                        </button>

                        <div className={`overflow-hidden transition-all duration-300 ${openSection === 'corporate' ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                            <div className="pl-4 flex flex-col space-y-4 border-l border-white/20 ml-1">
                                <Link href="/hakkimizda" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-white/80 hover:text-white transition-colors">Hakkımızda</Link>
                                <Link href="/kalite-politikasi" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-white/80 hover:text-white transition-colors">Kalite Politikamız</Link>
                                <Link href="/gizlilik-politikasi" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-white/80 hover:text-white transition-colors">{t('footer_privacy')}</Link>
                                <Link href="/kvkk" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-white/80 hover:text-white transition-colors">KVKK Aydınlatma Metni</Link>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Collection Accordion */}
                    <div className="flex flex-col">
                        <button
                            onClick={() => setOpenSection(openSection === 'collection' ? null : 'collection')}
                            className="w-full flex justify-between items-center text-xl uppercase tracking-widest font-medium text-white group"
                        >
                            <span>{t('nav_collection')}</span>
                            <ChevronDown size={20} className={`transition-transform duration-300 ${openSection === 'collection' ? 'rotate-180' : ''} text-white/70 group-hover:text-white`} />
                        </button>

                        <div className={`overflow-hidden transition-all duration-300 ${openSection === 'collection' ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                            <div className="pl-4 flex flex-col space-y-4 border-l border-white/20 ml-1">
                                <Link href="/koleksiyon#hooks" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-white/80 hover:text-white transition-colors">{t('footer_col_hooks')}</Link>
                                <Link href="/koleksiyon#fenders" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-white/80 hover:text-white transition-colors">{t('cat_fenders')}</Link>
                                <Link href="/koleksiyon#lines" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-white/80 hover:text-white transition-colors">{t('cat_fender_lines')}</Link>
                                <Link href="/koleksiyon#covers" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-white/80 hover:text-white transition-colors">{t('cat_fender_covers')}</Link>
                                <Link href="/koleksiyon#cleats" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-white/80 hover:text-white transition-colors">{t('footer_col_cleats')}</Link>
                                <Link href="/koleksiyon#ladders" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-white/80 hover:text-white transition-colors">{t('footer_col_ladders')}</Link>
                                <Link href="/koleksiyon#dinghy-hangers" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-white/80 hover:text-white transition-colors">{t('cat_dinghy_hangers')}</Link>
                            </div>
                        </div>
                    </div>

                    <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-xl uppercase tracking-widest font-medium text-white block">{t('nav_blog')}</Link>
                    <Link href="/iletisim" onClick={() => setIsMobileMenuOpen(false)} className="text-xl uppercase tracking-widest font-medium text-white block">{t('nav_contact')}</Link>

                    <div className="pt-4 pb-12">
                        <Link href="/teklif" onClick={() => setIsMobileMenuOpen(false)} className="text-center block w-full py-4 text-base font-bold uppercase tracking-widest bg-brand-gold text-white rounded-sm hover:bg-brand-gold/90 transition-colors shadow-lg">{t('nav_quote')}</Link>
                    </div>

                    {/* Mobile Settings - Absolute Bottom Row */}
                    <div className="mt-auto pt-6 border-t border-white/10 flex items-center gap-6 pb-8">
                        {/* Dark Mode Toggle */}
                        <button onClick={toggleDarkMode} className="p-2 text-white/80 hover:text-white transition-colors">
                            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                        </button>

                        {/* Language Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setUserOpenedLang(!userOpenedLang)}
                                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                            >
                                <span className="text-2xl">{flags[language]}</span>
                                <ChevronDown size={14} className={`transform transition-transform ${userOpenedLang ? 'rotate-180' : ''}`} />
                            </button>

                            {userOpenedLang && (
                                <div className="absolute bottom-full left-0 mb-2 w-32 py-2 rounded-sm border border-slate-700 bg-brand-navy overflow-hidden shadow-xl z-50">
                                    {Object.entries(flags).map(([code, flag]) => (
                                        <button
                                            key={code}
                                            onClick={() => {
                                                setLanguage(code as Language);
                                                setUserOpenedLang(false);
                                            }}
                                            className={`w-full text-left px-4 py-2 text-xs font-bold flex items-center gap-3 hover:bg-white/10 transition-colors ${language === code ? 'text-brand-gold' : 'text-slate-300'}`}
                                        >
                                            <span className="text-lg">{flag}</span>
                                            {code}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* LED Border Effect */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden">
                <div
                    className="w-[200%] h-full animate-shadow-move absolute top-0 left-0"
                    style={{
                        background: `linear-gradient(90deg, transparent 0%, transparent 40%, rgba(255,255,255,0.8) 50%, transparent 60%, transparent 100%)`
                    }}
                ></div>
            </div>
            {/* End LED Border Effect */}
        </nav >
    );
};
