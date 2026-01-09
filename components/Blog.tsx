"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { useTheme } from "./ThemeContext";
import { ArrowRight } from "./icons";
import { blogPosts } from "../data/blog-posts";

interface BlogProps {
    limit?: number;
    showHeading?: boolean;
}

export const Blog = ({ limit, showHeading = true }: BlogProps) => {
    const { darkMode } = useTheme();
    const { t } = useLanguage();
    const sectionBg = darkMode ? 'bg-brand-navy' : 'bg-white';
    const headingColor = darkMode ? 'text-white' : 'text-slate-900';
    const subTextColor = darkMode ? 'text-slate-400' : 'text-slate-600';

    const displayedPosts = limit ? blogPosts.slice(0, limit) : blogPosts;

    return (
        <section id="blog" className={`py-24 transition-colors duration-500 ${sectionBg}`}>
            <div className="container mx-auto px-6">
                {showHeading && (
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div>
                            <span className="text-brand-gold text-xs tracking-[0.2em] uppercase font-bold">{t('blog_eyebrow')}</span>
                            <h3 className={`text-3xl md:text-4xl font-serif mt-3 ${headingColor}`}>{t('blog_title')}</h3>
                        </div>
                        {limit && (
                            <Link href="/blog" className={`hidden md:flex items-center gap-2 text-xs uppercase tracking-widest hover:text-brand-gold transition-colors ${subTextColor}`}>
                                {t('blog_view_all')} <ArrowRight size={14} />
                            </Link>
                        )}
                    </div>
                )}

                {displayedPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {displayedPosts.map((post) => (
                            <article key={post.id} className="group cursor-pointer flex flex-col h-full">
                                <Link href={`/blog/${post.slug}`}>
                                    <div className="overflow-hidden mb-6 aspect-[16/10] rounded-sm">
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                </Link>
                                <div className={`text-xs font-bold tracking-widest mb-2 ${darkMode ? 'text-brand-gold' : 'text-brand-gold'}`}>{post.date}</div>
                                <h4 className={`text-xl font-serif leading-snug group-hover:text-brand-gold transition-colors mb-4 ${headingColor}`}>
                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                </h4>
                                <p className={`text-sm mb-4 line-clamp-3 ${subTextColor}`}>{post.excerpt}</p>
                                <Link href={`/blog/${post.slug}`} className={`mt-auto inline-block text-xs border-b pb-1 transition-all w-max ${darkMode ? 'border-slate-700 text-slate-400 hover:text-white' : 'border-slate-300 text-slate-600 hover:text-slate-900'}`}>
                                    {t('blog_read_more')}
                                </Link>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 animate-fade-in-up">
                        <p className={`text-lg font-medium tracking-wide ${subTextColor} font-serif`}>
                            {t('blog_empty_state') || "Coming Soon..."}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};
