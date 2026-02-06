"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { productsData } from "@/data/products";
import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";
import { Check, ArrowRight } from "./icons";

export const ProductCarousel = () => {
    const { darkMode } = useTheme();
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Flatten products to a simple list for the carousel
    // Limiting to a reasonable number if needed, or taking all
    const carouselProducts = productsData;
    const len = carouselProducts.length;

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % len);
        }, 3000); // 3 seconds per slide

        return () => clearInterval(interval);
    }, [len, isPaused]);

    const activeProduct = carouselProducts[activeIndex];

    // Helper to get simple category label
    const getCategoryLabel = (cat: string) => {
        // Simple mapping, ideally this comes from translations
        const map: Record<string, string> = {
            'hook': t('footer_col_hooks') || 'Usturmaça Askıları',
            'fender': t('cat_fenders') || 'Usturmaçalar',
            'cover': t('cat_fender_covers') || 'Kılıflar',
            'line': t('cat_lines') || 'Halatlar',
            'cleat': t('footer_col_cleats') || 'Koç Boynuzları',
            'ladder': t('footer_col_ladders') || 'Merdivenler',
            'dinghy-hanger': t('cat_dinghy_hangers') || 'Bot Askıları'
        };
        return map[cat] || cat;
    };

    return (
        <section className={`py-0 relative overflow-hidden ${darkMode ? 'bg-slate-900 border-y border-slate-800' : 'bg-slate-50 border-y border-slate-200'}`}>
            <div className="container mx-auto px-0 md:px-6">
                <div className="flex flex-col md:flex-row h-[500px] md:h-[600px]">

                    {/* LEFT SIDE: Image Slider */}
                    <div
                        className="w-full md:w-1/2 relative bg-white overflow-hidden group"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {carouselProducts.map((product, index) => (
                            <div
                                key={product.id}
                                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === activeIndex
                                    ? 'opacity-100 translate-x-0 z-10'
                                    : index < activeIndex
                                        ? 'opacity-0 -translate-x-[100px] z-0'
                                        : 'opacity-0 translate-x-[100px] z-0'
                                    // Make it loop correctly visually if needed, but simple fade/slide is robust
                                    } ${index !== activeIndex && 'pointer-events-none'}`}
                            >
                                <div className="relative w-full h-full flex items-center justify-center p-8 md:p-16">
                                    <div className="relative w-1/2 h-1/2">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-contain hover:scale-105 transition-transform duration-700"
                                            priority={index === activeIndex}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Interactive Progress Bar at Bottom of Image Area */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-200 dark:bg-slate-800 z-20">
                            <div
                                className="h-full bg-brand-gold transition-all duration-300 ease-linear"
                                style={{ width: `${((activeIndex + 1) / len) * 100}%` }}
                            />
                        </div>
                    </div>

                    {/* RIGHT SIDE: Info Panel */}
                    <div className={`w-full md:w-1/2 relative p-8 md:p-16 flex flex-col justify-center ${darkMode ? 'bg-brand-navy' : 'bg-white'}`}>
                        {/* Content Animation Wrapper */}
                        <div key={activeProduct.id} className="animate-fade-in-right">

                            {/* Category */}
                            <div className="mb-4">
                                <span className={`text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-sm ${darkMode ? 'bg-brand-gold/20 text-brand-gold' : 'bg-brand-gold/10 text-brand-gold'}`}>
                                    {getCategoryLabel(activeProduct.category)}
                                </span>
                            </div>

                            {/* Product Name */}
                            <h2 className={`text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                {activeProduct.name}
                            </h2>

                            {/* Specs / Description Component */}
                            <div className="space-y-4 mb-10">
                                {(activeProduct.specs || []).slice(0, 3).map((spec, i) => (
                                    <div key={i} className={`flex items-start gap-3 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                        <div className="mt-1 text-brand-gold shrink-0">
                                            <Check size={18} />
                                        </div>
                                        <p className="text-sm md:text-base leading-relaxed">{spec}</p>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div>
                                <Link
                                    href={`/urunler/${activeProduct.slug}`}
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-brand-gold text-white font-bold uppercase tracking-wider rounded-sm hover:bg-brand-gold/90 transition-all group w-full md:w-auto justify-center md:justify-start"
                                >
                                    {t('view_details_btn')} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInRight {
                    from { opacity: 0; transform: translateX(20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .animate-fade-in-right {
                    animation: fadeInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>
        </section>
    );
};
