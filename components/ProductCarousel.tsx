"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { productsData, Product } from "@/data/products";
import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";
import { Check, ArrowLeft, ArrowRight } from "./icons";

export const ProductCarousel = () => {
    const { darkMode } = useTheme();
    const { t, language } = useLanguage();

    // Group products by category
    const categoriesMap = productsData.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {} as Record<string, Product[]>);

    // Define category order and display names
    const categoryOrder: { key: string; label: string }[] = [
        { key: 'hook', label: t('footer_col_hooks') },
        { key: 'fender', label: t('cat_fenders') },
        { key: 'line', label: t('cat_lines') },
        { key: 'cover', label: t('cat_fender_covers') },
        { key: 'cleat', label: t('footer_col_cleats') },
        { key: 'ladder', label: t('footer_col_ladders') },
        { key: 'dinghy-hanger', label: t('cat_dinghy_hangers') }
    ].filter(cat => categoriesMap[cat.key] && categoriesMap[cat.key].length > 0);

    const len = categoryOrder.length;
    // Start at middle set (index 7 if len is 7)
    const [visualIndex, setVisualIndex] = useState(len);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const stripRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLButtonElement | null)[]>([]);

    // Derived current index (0..len-1)
    const currentCategoryIndex = ((visualIndex % len) + len) % len;

    const currentCategory = categoryOrder[currentCategoryIndex];
    const currentProducts = categoriesMap[currentCategory.key] || [];

    // Extended categories for infinite loop [ ...set1, ...set2 (middle), ...set3 ]
    // actually just 3 sets is enough: 0..6, 7..13, 14..20
    const extendedCategories = [...categoryOrder, ...categoryOrder, ...categoryOrder];

    // Handle Infinite Loop Reset
    useEffect(() => {
        if (visualIndex >= len * 2) {
            // Reached start of 3rd set -> Jump to start of 2nd set
            setTimeout(() => {
                setIsTransitioning(false);
                setVisualIndex(visualIndex - len);
            }, 500); // Wait for transition to finish
        } else if (visualIndex < len) {
            // Reached 1st set -> Jump to 2nd set
            setTimeout(() => {
                setIsTransitioning(false);
                setVisualIndex(visualIndex + len);
            }, 500);
        } else if (!isTransitioning) {
            // Re-enable transition after jump
            // Small delay to ensure DOM updated
            requestAnimationFrame(() => setIsTransitioning(true));
        }
    }, [visualIndex, len, isTransitioning]);


    // Center Alignment Logic
    const [translateX, setTranslateX] = useState(0);

    useEffect(() => {
        if (!stripRef.current) return;
        const container = stripRef.current.parentElement;
        const activeItem = itemsRef.current[visualIndex];

        if (container && activeItem) {
            const containerCenter = container.offsetWidth / 2;
            const itemCenter = activeItem.offsetLeft + activeItem.offsetWidth / 2;
            setTranslateX(containerCenter - itemCenter);
        }
    }, [visualIndex, isTransitioning]); // Recalc on index change


    // Auto-scroll logic
    useEffect(() => {
        if (hoveredProduct) return;

        timeoutRef.current = setTimeout(() => {
            setIsTransitioning(true);
            setVisualIndex((prev) => prev + 1);
        }, 2000);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [visualIndex, hoveredProduct]);

    // Manual Navigation
    const nextSlide = () => {
        setIsTransitioning(true);
        setVisualIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        setIsTransitioning(true);
        setVisualIndex((prev) => prev - 1);
    };

    // Jump to specific (find nearest visual index)
    const jumpToCategory = (targetBaseIndex: number) => {
        setIsTransitioning(true);
        // Find nearest visual index corresponding to targetBaseIndex
        // Current base is currentCategoryIndex.
        let diff = targetBaseIndex - currentCategoryIndex;
        // Shortest path logic
        if (diff > len / 2) diff -= len;
        if (diff < -len / 2) diff += len;

        setVisualIndex(prev => prev + diff);
    };

    // Handle hover
    const handleMouseEnter = (id: string) => {
        setHoveredProduct(id);
    };

    const handleMouseLeave = () => {
        setHoveredProduct(null);
    };

    // Real Specs Helper
    const getRealSpecs = (product: Product) => {
        const topSpecs = (product.specs || []).slice(0, 3);
        return topSpecs.map(spec => ({
            icon: <Check size={16} />,
            label: t('feature_label'),
            value: spec
        }));
    };

    return (
        <section key={language} className={`py-12 overflow-hidden relative transition-colors duration-500Grouped ${darkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
            <div className="container mx-auto px-6 relative min-h-[400px] flex flex-col justify-center">

                {/* Centered Category Navigation - Sliding infinite strip */}
                <div className="absolute top-0 left-0 w-full overflow-hidden z-20 py-4 mb-2">
                    <div
                        className="relative w-full h-16 flex items-center"
                        style={{
                            maskImage: 'linear-gradient(90deg, transparent 0%, black 30%, black 70%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 30%, black 70%, transparent 100%)'
                        }}
                    >
                        <div
                            ref={stripRef}
                            className="flex items-center gap-12 mb-8 absolute left-0 will-change-transform"
                            style={{
                                transform: `translateX(${translateX}px)`,
                                transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
                            }}
                        >
                            {extendedCategories.map((cat, idx) => {
                                const isActive = idx === visualIndex;
                                return (
                                    <button
                                        key={idx}
                                        ref={(el) => { itemsRef.current[idx] = el }}
                                        onClick={() => jumpToCategory(idx % len)}
                                        className={`
                                            whitespace-nowrap font-serif transition-colors duration-500
                                            ${isActive ? 'text-2xl md:text-3xl font-bold text-brand-gold' : 'text-lg md:text-xl font-medium text-brand-gold/50'}
                                        `}
                                    >
                                        {cat.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Spacer for the Title Area since we are using absolute positioning for the nav or just let it push content?
                    The previous title was regular flow. This new one replaces it.
                    Let's add some spacing so the carousel doesn't overlap.
                */}
                <div className="h-16 md:h-20"></div>

                {/* Content Wrapper for Animation */}
                <div key={currentCategoryIndex} className="animate-fade-in">

                    {/* Desktop Interaction View - Reduced Height */}
                    <div className="hidden lg:flex gap-4 h-[350px] items-stretch justify-center relative">
                        {currentProducts.map((product) => {
                            const isHovered = hoveredProduct === product.id;
                            const specs = getRealSpecs(product);

                            // Layout logic
                            const flexStyle = hoveredProduct
                                ? (isHovered ? { flex: '3 1 0%' } : { flex: '1 1 0%' })
                                : { flex: '1 1 0%' };

                            const opacityClass = (hoveredProduct && !isHovered) ? "opacity-40 grayscale" : "opacity-100";

                            return (
                                <div
                                    key={product.id}
                                    className={`relative rounded-sm overflow-hidden transition-all duration-700 ease-out cursor-pointer group ${opacityClass}`}
                                    style={flexStyle}
                                    onMouseEnter={() => handleMouseEnter(product.id)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link href={`/urunler/${product.slug}`} className="absolute inset-0 z-20" aria-label={`View ${product.name}`} />

                                    {/* Background Image */}
                                    <div className="absolute inset-0 bg-white">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-contain p-6 group-hover:scale-105 transition-transform duration-700"
                                        />
                                        {/* Full Navy Overlay - Hidden by default, shown on hover */}
                                        <div className="absolute inset-0 bg-brand-navy/50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                                    </div>

                                    {/* Content - Hidden by default, shown on hover */}
                                    <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h3 className={`font-serif font-bold text-white mb-2 transition-all duration-300 ${isHovered ? 'text-xl md:text-2xl translate-y-0' : 'text-lg translate-y-4'}`}>
                                            {product.name}
                                        </h3>

                                        {/* Expanded Details */}
                                        <div className={`overflow-hidden transition-all duration-500 delay-100 ${isHovered ? 'max-h-80 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                            <div className="flex flex-col md:flex-row md:items-end gap-6 border-t border-white/20 pt-4">
                                                {/* Specs */}
                                                <div className="flex-1 space-y-2">
                                                    {specs.map((spec, i) => (
                                                        <div key={i} className="flex items-start gap-2 text-white/90">
                                                            <div className="text-white mt-0.5 shrink-0">{spec.icon}</div>
                                                            <div className="text-xs font-medium leading-tight">{spec.value}</div>
                                                        </div>
                                                    ))}
                                                </div>


                                            </div>
                                        </div>

                                        {/* Simple Category Label when collapsed */}
                                        <div className={`transition-all duration-300 ${isHovered ? 'opacity-0 h-0' : 'opacity-100 h-auto'}`}>
                                            <span className="text-brand-gold text-[10px] uppercase tracking-widest font-medium">{currentCategory.label}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Mobile View - Reduced Height */}
                    <div className="lg:hidden relative h-[300px]">
                        <div className="overflow-hidden rounded-sm relative h-full">
                            {currentProducts.map((product) => (
                                <Link
                                    href={`/urunler/${product.slug}`}
                                    key={product.id}
                                    className={`absolute inset-0 transition-opacity duration-500 block`}
                                >
                                    <div className="relative h-full bg-white rounded-sm overflow-hidden">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-contain p-6"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? 'from-brand-navy/90' : 'from-slate-900/80'} via-transparent to-transparent`}></div>
                                        <div className="absolute bottom-0 left-0 w-full p-6">
                                            <h3 className="text-xl font-serif font-bold text-white mb-2">{product.name}</h3>
                                            <div className="w-full block text-center bg-brand-gold text-white px-4 py-3 rounded-sm font-bold uppercase tracking-widest text-xs">
                                                {t('view_details_btn')}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )).slice(0, 1)}
                        </div>
                    </div>

                </div>



            </div>

            {/* Indicators - Bottom Center */}
            <div className="flex justify-center mt-12 gap-3 z-10 pb-4">
                {categoryOrder.map((cat, idx) => (
                    <button
                        key={idx}
                        onClick={() => jumpToCategory(idx)}
                        className={`w-3 h-3 rounded-full border-2 border-brand-gold transition-all duration-300 ${idx === currentCategoryIndex
                            ? 'bg-brand-gold scale-110'
                            : 'bg-transparent hover:bg-brand-gold/20'
                            }`}
                        aria-label={`Go to ${cat.label}`}
                    />
                ))}
            </div>

            {/* Arrows - Moved OUTSIDE container to Section Edges */}
            <button
                onClick={prevSlide}
                className={`absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-brand-gold hover:border-brand-gold hover:text-white transition-all duration-300 hidden md:block ${darkMode ? 'text-white' : 'text-slate-800'}`}
                aria-label="Previous Category"
            >
                <ArrowLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hidden md:block group ${darkMode ? 'text-white' : 'text-slate-800'}`} // Removed standard hover here to control via group/custom
                aria-label="Next Category"
                style={{
                    // No standard hover effect interfering with our custom progress check
                }}
            >
                {/* Custom Ring Progress */}
                <div className="relative w-6 h-6 flex items-center justify-center">
                    <ArrowRight size={24} className="relative z-10" />

                    {/* SVG Circle Progress */}
                    {/* 
                        Width/Height = 48px roughly (p-3 = 12px + 24px icon + 12px = 48px).
                        Let's verify sizing. p-3 adds 0.75rem padding. 
                        Button size is approx 24 + 24 = 48px.
                        We want the ring AROUND the button or replacing the border?
                        User said "sağdaki ok tuşunun çevresi lacivert rengimiz ile çevrelensin".
                        So the RING should be the border. 
                        Let's disable standard border and use SVG.
                    */}
                </div>
                {/* Progress Ring Overlay */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                    <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 48 48">
                        {/* Background track */}
                        <circle
                            cx="24" cy="24" r="23"
                            fill="none"
                            stroke={darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"}
                            strokeWidth="1" /* Thin border usually */
                        />
                        {/* Animated Progress - Reset only when index changes */}
                        <circle
                            key={visualIndex}
                            cx="24" cy="24" r="23"
                            fill="none"
                            stroke="#101c2b"
                            strokeWidth="2"
                            strokeDasharray="145" /* 2 * pi * 23 ~= 144.5 */
                            strokeDashoffset="145"
                            className="animate-progress-ring"
                            style={{
                                animationPlayState: hoveredProduct ? 'paused' : 'running'
                            }}
                        />
                    </svg>
                </div>
                {/* Hover Text Color Fix */}
                <div className="absolute inset-0 rounded-full group-hover:bg-brand-gold/10 transition-colors"></div>
            </button>

            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.5s ease-out forwards;
                }
                @keyframes progressRing {
                    to { stroke-dashoffset: 0; }
                }
                .animate-progress-ring {
                    animation: progressRing 2s linear forwards;
                }
            `}</style>
        </section>
    );
};
