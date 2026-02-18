export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    date: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "merhaba-dunya",
        title: "Web Sitemiz Yayında!",
        excerpt: "AFS Yacht olarak yeni web sitemizle hizmetinizdeyiz.",
        content: "<p>AFS Yacht olarak, denizcilik sektöründeki deneyimimizi dijital dünyada da sizlerle buluşturmanın heyecanını yaşıyoruz. Yeni web sitemiz üzerinden ürünlerimizi inceleyebilir, detaylı bilgi alabilir ve bizimle kolayca iletişime geçebilirsiniz.</p><p>Kalite ve müşteri memnuniyeti odaklı hizmet anlayışımızla, yat ve tekne ekipmanları konusunda ihtiyacınız olan çözümleri sunmaya devam ediyoruz.</p>",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
        date: "14.02.2025"
    }
];
