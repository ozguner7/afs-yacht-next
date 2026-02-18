import { blogPosts } from "@/data/blog-posts";
import BlogClient from "./client";

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <BlogClient slug={slug} />;
}
