"use client";

import { useParams, notFound } from "next/navigation";
import { productsData } from "@/data/products";
import { useTheme } from "@/components/ThemeContext";
import { useLanguage } from "@/components/LanguageContext";
import { ArrowRight, Check, Star } from "@/components/icons"; // Ensure icons exist or use default
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ProductPage() {
    const params = useParams();
    const { darkMode } = useTheme();
    const { t } = useLanguage();
    const slug = params.slug as string;
    const product = productsData.find(p => p.slug === slug);

    if (!product) {
        return notFound();
    }

    const bgClass = darkMode ? 'bg-brand-navy' : 'bg-slate-50';
    const textMain = darkMode ? 'text-white' : 'text-slate-900';
    const textSub = darkMode ? 'text-slate-400' : 'text-slate-600';
    const cardBg = darkMode ? 'bg-slate-800' : 'bg-white';

    return (
        <div className={`min-h-screen pt-36 pb-20 ${bgClass} transition-colors duration-500`}>
            <div className="container mx-auto px-6">

                {/* Hero / Header */}
                <Breadcrumbs items={[
                    { label: t('nav_collection'), href: '/koleksiyon' },
                    { label: "Usturmaça Askısı", href: '/koleksiyon' },
                    { label: product.name, href: '#' }
                ]} />

                {/* Hero / Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
                    <div className="animate-fade-in-left relative group flex justify-center">
                        <div className={`aspect-square w-1/2 overflow-hidden`}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={400}
                                height={400}
                                className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative circle */}
                        <div className="absolute -z-10 bottom-0 left-1/4 w-32 h-32 rounded-full border border-brand-gold/30"></div>
                    </div>

                    <div className="animate-fade-in-right">
                        <h2 className="text-5xl font-bold text-brand-gold tracking-widest uppercase mb-3">{product.name}</h2>
                        <h1 className={`text-lg lg:text-xl font-bold font-serif opacity-50 uppercase mb-4 ${textMain}`}>Usturmaça Askısı</h1>

                        <p className={`text-lg leading-relaxed mb-10 ${textSub}`}>
                            {product.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href={`/teklif?product=${product.id}`} className="px-8 py-4 bg-brand-gold text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-brand-gold/80 transition-colors text-center">
                                Şimdi Teklif Alın
                            </Link>
                            {/* Whatsapp Button inline as alternative */}
                            <a
                                href={`https://wa.me/905549753777?text=Merhaba ${product.name} ile ilgili sorularım var.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`px-8 py-4 border-2 font-bold uppercase tracking-widest text-sm rounded-sm transition-colors text-center ${darkMode ? 'border-white text-white hover:bg-white hover:text-brand-navy' : 'border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white'}`}
                            >
                                WhatsApp'tan Sorun
                            </a>
                        </div>
                    </div>
                </div>

                {/* Technical Specs */}
                <div className="mb-24 animate-fade-in-up">
                    <div className={`p-10 rounded-sm border ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
                        <div className="grid grid-cols-1 gap-12">
                            <div>
                                <h3 className={`text-2xl font-serif mb-8 ${textMain}`}>Teknik Özellikler</h3>
                                <div className="space-y-4">
                                    {product.specs.map((spec, index) => (
                                        <div key={index} className="flex items-start gap-4 p-4 rounded-sm transition-colors">
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
                        <div key={idx} className={`p-10 rounded-sm border ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
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
