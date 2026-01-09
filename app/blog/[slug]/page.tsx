"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import { useTheme } from "@/components/ThemeContext";
import { ArrowLeft } from "@/components/icons";

export default function BlogPostPage() {
    const { slug } = useParams();
    const { darkMode } = useTheme();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return notFound();
    }

    const headingColor = darkMode ? 'text-white' : 'text-slate-900';
    const textColor = darkMode ? 'text-slate-300' : 'text-slate-700';

    return (
        <article className={`pt-32 pb-24 min-h-screen transition-colors duration-500 ${darkMode ? 'bg-brand-navy' : 'bg-slate-50'}`}>
            <div className="container mx-auto px-6 max-w-3xl">
                <Link href="/blog" className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-8 hover:text-brand-gold transition-colors ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    <ArrowLeft size={14} /> Tüm Yazılar
                </Link>

                <div className="mb-8">
                    <span className="text-brand-gold font-bold text-xs tracking-widest uppercase">{post.date}</span>
                    <h1 className={`text-3xl md:text-5xl font-serif mt-4 leading-tight ${headingColor}`}>{post.title}</h1>
                </div>

                <div className="rounded-sm overflow-hidden mb-12 aspect-video shadow-xl">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>

                <div
                    className={`prose prose-lg max-w-none ${darkMode ? 'prose-invert' : ''} ${textColor}`}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                >
                </div>
            </div>
        </article>
    );
}
