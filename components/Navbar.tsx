"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";
import { Globe, Sun, Moon, ChevronRight } from "./icons";
import { flags, Language } from "../data/translations";

export const Navbar = () => {
    const { darkMode, toggleDarkMode } = useTheme();
    const { language, setLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navBg = isScrolled
        ? (darkMode ? 'bg-brand-navy/90' : 'bg-white/95 border-b border-slate-200')
        : 'bg-transparent border-transparent';

    const textColor = isScrolled
        ? (darkMode ? 'text-slate-300' : 'text-slate-600')
        : (darkMode ? 'text-white' : 'text-brand-navy');

    const hoverColor = 'hover:text-brand-gold';

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out border-b backdrop-blur-md ${navBg} py-4`}>
            {/* Animated Shadow/Border */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent bg-[length:200%_100%] animate-shadow-move"></div>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Link href="/" className="relative">
                        <Image
                            src="/logo.png"
                            alt="AFS Yacht Logo"
                            width={100}
                            height={100}
                            className="object-contain"
                        />
                    </Link>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className={`text-sm uppercase tracking-widest transition-colors duration-300 font-medium ${textColor} ${hoverColor}`}>ANASAYFA</Link>
                    <Link href="/koleksiyon" className={`text-sm uppercase tracking-widest transition-colors duration-300 font-medium ${textColor} ${hoverColor}`}>{t('nav_collection')}</Link>
                    <Link href="/blog" className={`text-sm uppercase tracking-widest transition-colors duration-300 font-medium ${textColor} ${hoverColor}`}>{t('nav_blog')}</Link>
                    <Link href="/iletisim" className={`text-sm uppercase tracking-widest transition-colors duration-300 font-medium ${textColor} ${hoverColor}`}>{t('nav_contact')}</Link>

                    <Link href="/teklif" className={`px-6 py-2 text-xs uppercase tracking-widest transition-all duration-300 font-bold bg-brand-gold text-white hover:bg-brand-gold/80 block`}>{t('nav_quote')}</Link>
                </div>

                <div className="flex items-center gap-4">
                    <button onClick={toggleDarkMode} className={`p-2 rounded-full transition-colors ${textColor} ${hoverColor}`}>
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    {/* Language Dropdown */}
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
        </nav>
    );
};
