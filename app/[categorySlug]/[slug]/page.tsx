import { productsData } from "@/data/products";
import ProductClient from "./client";

export async function generateStaticParams() {
    return productsData.map((product) => ({
        slug: product.slug,
        categorySlug: product.categorySlug,
    }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string, categorySlug: string }> }) {
    const { slug } = await params;
    return <ProductClient slug={slug} />;
}
