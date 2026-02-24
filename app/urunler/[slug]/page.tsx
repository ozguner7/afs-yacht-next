"use client";

import { useParams, notFound } from "next/navigation";
import { productsData } from "@/data/products";
import { useTheme } from "@/components/ThemeContext";
import { useLanguage } from "@/components/LanguageContext";
import { Check } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useState } from "react";

export default function ProductPage() {
    const params = useParams();
    const { darkMode } = useTheme();
    const { t } = useLanguage();
    const slug = params.slug as string;
    const product = productsData.find(p => p.slug === slug);

    // State for selected options
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

    if (!product) {
        return notFound();
    }

    const bgClass = darkMode ? 'bg-brand-navy' : 'bg-slate-50';
    const textMain = darkMode ? 'text-white' : 'text-slate-900';
    const textSub = darkMode ? 'text-slate-400' : 'text-slate-600';
    const borderClass = darkMode ? 'border-slate-700' : 'border-slate-200';

    // Handle option selection
    const handleOptionChange = (label: string, value: string) => {
        setSelectedOptions(prev => ({ ...prev, [label]: value }));
    };

    // Construct offer URL with selected options
    const getOfferUrl = () => {
        const queryParams = new URLSearchParams();
        queryParams.set('product', product.id);

        // Add selected options to query params
        Object.entries(selectedOptions).forEach(([key, value]) => {
            queryParams.set(key, value);
        });

        // Also add default options if not selected (optional, taking first item)
        product.options?.forEach(opt => {
            if (!selectedOptions[opt.label] && opt.items.length > 0) {
                queryParams.set(opt.label, opt.items[0]);
            }
        });

        return `/teklif?${queryParams.toString()}`;
    };

    return (
        <div className={`min-h-screen pt-36 pb-20 ${bgClass} transition-colors duration-500`}>
            <div className="container mx-auto px-6">

                {/* Breadcrumbs */}
                <Breadcrumbs items={[
                    { label: t('nav_collection'), href: '/koleksiyon' },
                    { label: "Usturmaça Askısı", href: '/koleksiyon' }, // Note: This hardcoded breadcrumb might need future dynamic adjustment based on category
                    { label: product.name, href: '#' }
                ]} />

                {/* Hero / Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
                    <div className="animate-fade-in-left relative group flex justify-center">
                        <div className={`aspect-square w-full md:w-3/4 overflow-hidden rounded-sm flex items-center justify-center p-8 ${darkMode ? 'bg-white/5' : 'bg-brand-navy/5'}`}>
                            <div className="relative w-full h-full">
                                <Image
                                    src={product.detailImage || product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        {/* Decorative circle */}
                        <div className="absolute -z-10 bottom-0 left-1/4 w-32 h-32 rounded-full border border-brand-gold/30"></div>
                    </div>

                    <div className="animate-fade-in-right">
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-gold tracking-widest uppercase mb-3">{product.name}</h2>
                        <h1 className={`text-lg lg:text-xl font-bold font-serif opacity-50 uppercase mb-8 ${textMain}`}>
                            {product.category === 'hook' ? 'Usturmaça Askısı' :
                                product.category === 'fender' ? 'Usturmaça' :
                                    product.category === 'cover' ? 'Usturmaça Kılıfı' :
                                        product.category === 'ladder' ? 'Pilot Merdiveni' : ''}
                        </h1>

                        <p className={`text-lg leading-relaxed mb-10 ${textSub}`}>
                            {product.description}
                        </p>

                        {/* Product Options (Dropdowns) */}
                        {product.options && product.options.map((option, idx) => (
                            <div key={idx} className="mb-8">
                                <label className={`block text-sm font-bold mb-2 uppercase tracking-wider ${textMain}`}>
                                    {option.label}
                                </label>
                                <div className="relative">
                                    <select
                                        className={`appearance-none w-full md:w-64 px-4 py-3 pr-8 rounded-sm border ${borderClass} bg-transparent ${textMain} focus:outline-none focus:border-brand-gold transition-colors cursor-pointer`}
                                        value={selectedOptions[option.label] || ""}
                                        onChange={(e) => handleOptionChange(option.label, e.target.value)}
                                    >
                                        <option value="" disabled>Seçiniz</option>
                                        {option.items.map((item, i) => (
                                            <option key={i} value={item} className="text-slate-900 bg-white">
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 md:right-[calc(100%-16rem)] text-brand-gold">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <Link href={getOfferUrl()} className="px-8 py-4 bg-brand-gold text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-brand-gold/80 transition-colors text-center shadow-lg hover:shadow-brand-gold/20">
                                Şimdi Teklif Alın
                            </Link>
                            {/* Whatsapp Button inline as alternative */}
                            <a
                                href={`https://wa.me/905549753777?text=Merhaba ${product.name} ile ilgili sorularım var.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`px-8 py-4 border-2 font-bold uppercase tracking-widest text-sm rounded-sm transition-colors text-center ${darkMode ? 'border-white text-white hover:bg-white hover:text-brand-navy' : 'border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white'}`}
                            >
                                WhatsApp&apos;tan Sorun
                            </a>
                        </div>
                    </div>
                </div>

                {/* Technical Specs */}
                <div className="mb-24 animate-fade-in-up">
                    <div className={`p-10 rounded-sm border ${borderClass} ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
                        <div className="grid grid-cols-1 gap-12">
                            <div>
                                <h3 className={`text-2xl font-serif mb-8 ${textMain}`}>Teknik Özellikler</h3>
                                <div className="space-y-4">
                                    {product.specs.map((spec, index) => (
                                        <div key={index} className="flex items-start gap-4 p-4 rounded-sm transition-colors hover:bg-brand-gold/5">
                                            <div className="mt-1 text-brand-gold shrink-0"><Check size={20} /></div>
                                            <p className={`${textSub}`}>{spec}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Content Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 animate-fade-in-up">
                    {product.fullDescription.map((section, idx) => (
                        <div key={idx} className={`p-10 rounded-sm border ${borderClass} ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
                            <h3 className={`text-2xl font-serif mb-6 ${textMain}`}>{section.title}</h3>
                            <div className={`space-y-4 ${textSub}`}>
                                {section.content.map((p, i) => (
                                    <p key={i} className="leading-relaxed">{p}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
