import type { Metadata } from 'next';
import { blogPosts } from "@/data/blog-posts";
import BlogClient from "./client";

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);
    if (!post) return {};
    return {
        title: post.metaTitle || post.title,
        description: post.metaDescription || post.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <BlogClient slug={slug} />;
}
