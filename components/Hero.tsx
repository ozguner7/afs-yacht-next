"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";
import { ArrowRight } from "./icons";


export const Hero = () => {
    const { darkMode } = useTheme();
    const { t, language } = useLanguage();
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20, // -10 to 10px
                y: (e.clientY / window.innerHeight - 0.5) * 20  // -10 to 10px
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section key={language} className={`relative h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden transition-colors duration-500 ${darkMode ? 'bg-brand-navy' : 'bg-slate-50'}`}>
            {/* Background elements */}
            <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${darkMode ? 'opacity-20' : 'opacity-5'}`}>
                <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-gold blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-500 blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full pt-20">
                {/* Text Content */}
                <div className="text-center md:text-left order-2 md:order-1">
                    <div className="mb-6 animate-fade-in-up">
                        <h1 className="text-brand-gold tracking-[0.3em] uppercase text-sm font-bold">{t('hero_subtitle')}</h1>
                    </div>
                    <h2 className={`text-4xl md:text-6xl lg:text-7xl font-serif font-medium italic mb-8 tracking-wide leading-tight animate-fade-in-up delay-100 ${darkMode ? 'text-white' : 'text-brand-navy'}`}>
                        {t('hero_title')}
                    </h2>
                    <div className={`w-24 h-1 bg-brand-gold mb-10 animate-scale-x delay-200 mx-auto md:mx-0`}></div>
                    <div className="animate-fade-in-up delay-300">
                        <Link href="/koleksiyon" className="group inline-flex items-center gap-4 px-8 py-4 bg-brand-gold text-white text-sm uppercase tracking-[0.2em] hover:bg-brand-gold/90 transition-all duration-300 font-bold border border-brand-gold shadow-lg rounded-sm">
                            {t('hero_cta')} <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Parallax Image / 3D Model */}
                <div className="relative order-1 md:order-2 flex justify-center items-center">
                    <div
                        className="relative z-10 w-full max-w-lg transition-transform duration-100 ease-out"
                        style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px) rotate(${mousePos.x * 0.5}deg)` }}
                    >
                        <img
                            src="/afs-thetis.png"
                            alt="AFS Thetis"
                            className="w-full h-auto drop-shadow-2xl animate-float"
                        />
                    </div>

                    {/* Decorative circle behind product */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border border-brand-gold/20 z-0 transition-transform duration-700 ease-out`}
                        style={{ transform: `translate(-50%, -50%) translate(${mousePos.x}px, ${mousePos.y}px)` }}
                    ></div>
                </div>
            </div>
        </section>
    );
};
