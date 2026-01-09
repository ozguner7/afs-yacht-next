"use client";

import Link from "next/link";
import { ChevronRight } from "@/components/icons";
import { useLanguage } from "./LanguageContext";
import { useTheme } from "./ThemeContext";

export default function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
    const { t } = useLanguage();
    const { darkMode } = useTheme();
    const textColor = darkMode ? 'text-slate-400' : 'text-slate-500';

    return (
        <nav className="flex items-center text-xs md:text-sm mb-8 animate-fade-in-up" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link href="/" className={`hover:text-brand-gold transition-colors ${textColor}`}>
                        {t('nav_home')}
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={index}>
                        <div className="flex items-center">
                            <ChevronRight size={16} className="text-slate-400 mx-1" />
                            {index === items.length - 1 ? (
                                <span className="text-brand-gold font-medium" aria-current="page">{item.label}</span>
                            ) : (
                                <Link href={item.href} className={`hover:text-brand-gold transition-colors ${textColor}`}>
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    );
}
