import { MetadataRoute } from 'next';
import { productsData } from '@/data/products';
import { blogPosts } from '@/data/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.afsyacht.com.tr';

    // Static Pages
    const staticPages = [
        '',
        '/hakkimizda',
        '/iletisim',
        '/teklif',
        '/gizlilik-politikasi',
        '/kalite-politikasi',
        '/kvkk',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic Categories
    const categories = Array.from(new Set(productsData.map(p => p.categorySlug)));
    const categoryPages = categories.map((categorySlug) => ({
        url: `${baseUrl}/${categorySlug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Dynamic Products
    const productPages = productsData.map((product) => ({
        url: `${baseUrl}/${product.categorySlug}/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // Dynamic Blog Posts
    const blogPages = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(), // Replace with post.date if you add a proper Date object
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    return [...staticPages, ...categoryPages, ...productPages, ...blogPages];
}
