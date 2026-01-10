"use client";

import { useLanguage } from "@/components/LanguageContext";
import { useTheme } from "@/components/ThemeContext";
import { productsData } from "@/data/products";
import Link from "next/link";
import Image from "next/image";

export default function KoleksiyonPage() {
    const { t } = useLanguage();
    const { darkMode } = useTheme();

    const bgClass = darkMode ? 'bg-brand-navy' : 'bg-slate-50';
    const headingColor = darkMode ? 'text-white' : 'text-slate-900';
    const cardBorder = darkMode ? 'border-slate-700' : 'border-slate-200';
    const cardBg = darkMode ? 'bg-slate-800' : 'bg-white';

    // Grouping Products is tricky since currently only hooks exist in data.
    // We will list all hooks under the first category.
    // Other categories will be empty for now.

    const categories = [
        {
            id: 'hooks',
            title: t('footer_col_hooks'), // Usturmaça askıları
            products: productsData.filter(p => p.category === 'hook')
        },
        {
            id: 'fenders',
            title: t('cat_fenders'), // Usturmaçalar
            products: productsData.filter(p => p.category === 'fender')
        },
        {
            id: 'covers',
            title: t('cat_fender_covers'), // Usturmaça kılıfları
            products: productsData.filter(p => p.category === 'cover')
        },
        {
            id: 'lines',
            title: t('cat_fender_lines'), // Usturmaça bağlama halatı
            products: productsData.filter(p => p.category === 'line')
        },
        {
            id: 'cleats',
            title: t('footer_col_cleats'), // Koç boynuzu
            products: productsData.filter(p => p.category === 'cleat')
        },
        {
            id: 'ladders',
            title: t('footer_col_ladders'), // Merdivenler
            products: productsData.filter(p => p.category === 'ladder')
        },
        {
            id: 'dinghy-hangers',
            title: t('cat_dinghy_hangers'), // Bot bağlama askıları
            products: productsData.filter(p => p.category === 'dinghy-hanger')
        }
    ];

    return (
        <div className={`min-h-screen pt-36 pb-20 ${bgClass} transition-colors duration-500`}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-20 animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-serif mb-4 mt-10 font-bold text-brand-gold text-center">{t('collection_page_title')}</h1>
                    <div className="w-1/2 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mt-6"></div>
                </div>

                <div className="space-y-24">
                    {categories.map((category, idx) => (
                        <div key={idx} id={category.id} className="animate-fade-in-up scroll-mt-32" style={{ animationDelay: `${idx * 100}ms` }}>
                            <h2 className={`text-2xl md:text-3xl font-serif mb-10 pl-6 border-l-4 border-brand-gold text-brand-gold font-medium`}>
                                {category.title}
                            </h2>

                            {/* Products Grid */}
                            {category.products.length > 0 ? (
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                    {category.products.map((product) => (
                                        <Link key={product.id} href={`/urunler/${product.slug}`} className={`group block overflow-hidden rounded-sm border ${cardBorder} ${cardBg} hover:shadow-xl transition-all duration-300`}>
                                            <div className="aspect-square relative overflow-hidden bg-white/5 flex items-center justify-center p-8">
                                                <div className="w-3/4 h-3/4 relative flex items-center justify-center">
                                                    <Image
                                                        src={product.image}
                                                        alt={product.name}
                                                        width={300}
                                                        height={300}
                                                        className="object-contain w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                </div>
                                            </div>
                                            <div className="p-6 text-center">
                                                <h3 className={`text-xl font-serif font-bold mb-2 ${headingColor} group-hover:text-brand-gold transition-colors`}>{product.name}</h3>

                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div className={`p-8 rounded-sm border border-dashed ${darkMode ? 'border-slate-700 text-slate-500' : 'border-slate-300 text-slate-400'} text-center italic`}>
                                    Coming Soon / Yakında
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
