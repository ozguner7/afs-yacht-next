
"use client";

import Link from "next/link";
import { useTheme } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";
import { Sun, Diamond, Feather, Ban, Anchor, Shield, Wind } from "./icons";


export const Products = () => {
    const { darkMode } = useTheme();
    const { t } = useLanguage();

    const headingColor = darkMode ? 'text-white' : 'text-slate-900';
    const subTextColor = darkMode ? 'text-slate-400' : 'text-slate-600';


    const products = [
        {
            id: "thetis",
            name: "AFS THETIS",
            subtitle: t("thetis_subtitle"),
            desc: t("thetis_desc"),
            img: "/afs-thetis.png",
            specs: [
                t("thetis_spec_1"),
                t("thetis_spec_2")
            ],
            highlights: [
                { icon: <Diamond size={20} />, text: t("highlight_custom_fit") },
                { icon: <Feather size={20} />, text: t("highlight_soft_touch") },
                { icon: <Shield size={20} />, text: t("highlight_easy_lock") }
            ]
        },
        {
            id: "pontos",
            name: "AFS PONTOS",
            subtitle: t("pontos_subtitle"),
            desc: t("pontos_desc"),
            img: "/afs-pontos.png",
            specs: [
                t("pontos_spec_1"),
                t("pontos_spec_2")
            ],
            highlights: [
                { icon: <Anchor size={20} />, text: t("highlight_solid_grip") },
                { icon: <Sun size={20} />, text: t("highlight_max_load") },
                { icon: <Wind size={20} />, text: t("highlight_carbon_opt") }
            ]
        },
        {
            id: "argos",
            name: "AFS ARGOS",
            subtitle: t("argos_subtitle"),
            desc: t("argos_desc"),
            img: "/afs-argos.png",
            specs: [
                t("argos_spec_1"),
                t("argos_spec_2")
            ],
            highlights: [
                { icon: <Shield size={20} />, text: t("highlight_quick_adjust") },
                { icon: <Ban size={20} />, text: t("highlight_no_drilling") },
                { icon: <Feather size={20} />, text: t("highlight_lightweight") }
            ]
        }
    ];

    return (
        <section id="koleksiyon" className={`py-24 transition-colors duration-500`}>
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-serif mb-10 pl-6 border-l-4 border-brand-gold text-brand-gold font-medium">
                        {t('products_title')}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div key={index} className="flex flex-col items-center text-center group h-full bg-transparent max-w-[60%] mx-auto w-full">
                            {/* Top Section: Title & Image */}
                            <Link href={`/urunler/afs-${product.id}`} className="flex flex-col items-center w-full cursor-pointer">
                                <h4 className={`text-3xl font-serif mb-8 ${headingColor} hover:text-brand-gold transition-colors`}>{product.name}</h4>

                                {/* Image Section */}
                                <div className="w-full aspect-square relative mb-8 rounded-sm flex items-center justify-center p-8 bg-brand-gold/5 border border-brand-gold/10 group-hover:border-brand-gold/30 transition-all duration-500">
                                    <img src={product.img} alt={product.name} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" />
                                </div>
                            </Link>

                            {/* Bottom Section: Specs */}
                            <div className="w-full mt-auto">
                                <div className="flex flex-col gap-2 text-center">
                                    {product.specs.map((spec, i) => (
                                        <div key={i} className={`text-sm font-medium ${subTextColor}`}>
                                            {spec}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
