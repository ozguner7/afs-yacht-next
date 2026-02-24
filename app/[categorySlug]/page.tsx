import { productsData } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import CategoryClient from "./client"; // For client-side hooks like translation & theme

export async function generateStaticParams() {
    const categories = Array.from(new Set(productsData.map(p => p.categorySlug)));
    return categories.map((categorySlug) => ({
        categorySlug,
    }));
}

export default async function CategoryPage({ params }: { params: Promise<{ categorySlug: string }> }) {
    const { categorySlug } = await params;

    // Find all products matching this category slug
    const categoryProducts = productsData.filter(p => p.categorySlug === categorySlug);

    if (categoryProducts.length === 0) {
        notFound();
    }

    // Since they all have the same categoryName for a given categorySlug, just pick the first one's name
    const categoryName = categoryProducts[0].categoryName;

    return <CategoryClient categoryName={categoryName} products={categoryProducts} />;
}
