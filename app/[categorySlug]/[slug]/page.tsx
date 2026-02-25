import type { Metadata } from 'next';
import { productsData } from "@/data/products";
import ProductClient from "./client";

export async function generateStaticParams() {
    return productsData.map((product) => ({
        slug: product.slug,
        categorySlug: product.categorySlug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string, categorySlug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const product = productsData.find(p => p.slug === slug);
    if (!product) return {};
    return {
        title: product.metaTitle || product.name,
        description: product.metaDescription || product.description,
    };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string, categorySlug: string }> }) {
    const { slug } = await params;
    return <ProductClient slug={slug} />;
}
