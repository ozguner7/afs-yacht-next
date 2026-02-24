export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    category: 'hook' | 'fender' | 'cover' | 'ladder' | 'line' | 'hanger' | 'cleat' | 'dinghy-hanger';
    categorySlug: string;
    categoryName: string;
    specs: string[];
    fullDescription: {
        title: string;
        content: string[];
    }[];
    image: string;
    detailImage?: string;
    emailImage?: string;
    options?: {
        label: string;
        items: string[];
    }[];
}

export const productsData: Product[] = [
    {
        id: "thetis",
        name: "AFS Thetis",
        slug: "afs-thetis",
        category: "hook",
        categorySlug: "usturmaca-askisi",
        categoryName: "Usturmaça Askısı",
        image: "/afs-thetis.png",
        emailImage: "https://afsyacht.com/wp-content/uploads/2024/06/Usturmaca-Askisi-AFS-Yacht-1-2-1536x1394.png",
        description: "Harken 280 Cam cleat ve özel tasarım paslanmaz ip yuvası ile donatılmış, Ø6-16 mm halat çapına uygun, estetik ve dayanıklı usturmaça askısı.",
        specs: [
            "Harken 280 Cam cleat (Kıstırmaç) kullanılır",
            "Kendi imalatımız paslanmaz ip yuvası kullanılır",
            "Ø6-16 mm halat çapı için uygundur",
            "İç gövdesi 316L kalite paslanmaz çeliktir",
            "Dış yüzeyi doğal deridir",
            "İç yüzeyi kuzu postudur",
            "Küpeşte ölçüleri tarafımızdan alınır ve özel tasarım yapılır",
            "Ürünlerimiz %100 güvencemiz altındadır"
        ],
        fullDescription: [
            {
                title: "Sipariş ve teslimat",
                content: [
                    "Ürünlerimizle ilgili sorularınız hızla yanıtlanmaktadır.",
                    "İhtiyacınızı e-posta, WhatsApp ya da telefonla iletmeniz durumunda, hızla fiyatlandırma yapılarak onayınız talep edilmektedir.",
                    "Müşteri onayı alındıktan sonra gerekirse yerinde ölçüm da yapılarak ürün tasarımı yapılır. Tasarım onayı alındıktan sonra metal işleme, deri ve post hazırlıkları ile, dikim, paketleme ve teslim ile sipariş süreci tamamlanır.",
                    "Ürünlerin teslimi doğrudan ya da kargo yoluyla yapılmaktadır.",
                    "Üretim süremiz malzeme ve tasarım şartlarına bağlı olmakla birlikte kısa tutulmakta, müşterilerimizin zaman planlamasına sadık kalınarak hizmet verilmektedir."
                ]
            },
            {
                title: "%100 Müşteri Memnuniyeti",
                content: [
                    "%100 müşteri memnuniyeti amaçlamakta ve bunu müşterilerimize garanti etmekteyiz. Güneş ve deniz şartlarındaki solma ya da normal eskime dışında, tasarım ve üretim bakımından %100 ürün güvencesi ile müşterilerimizin yanındayız. Standart ürün garantisi 2 yıl olarak sunulmaktadır.",
                    "Türkiye’de üretilen ya da refit yapılan çoğu mega yatların küpeştelerinde ürünlerimiz yer almaktadır. Tersaneler başta olmak üzere, yat sektöründe hizmet veren şirketler, denizciler ile yıllar süren iş ortaklığımız, gelecek için de sağlam temeller atmamızın güvencesidir."
                ]
            }
        ]
    },
    {
        id: "pontos",
        name: "AFS Pontos",
        slug: "afs-pontos",
        category: "hook",
        categorySlug: "usturmaca-askisi",
        categoryName: "Usturmaça Askısı",
        image: "/afs-pontos.png",
        emailImage: "https://afsyacht.com/wp-content/uploads/2024/06/Usturmaca-Askisi-AFS-Yacht-2-1935x2048.png",
        description: "Harken 491 Cam cleat ile güçlü tutuş sağlayan, Ø6-16 mm halat çapına uygun, premium deri kaplamalı usturmaça askısı.",
        specs: [
            "Harken 491 Cam cleat (Kıstırmaç) kullanılır",
            "Kendi imalatımız paslanmaz ip yuvası kullanılır",
            "Ø6-16 mm halat çapı için uygundur",
            "İç gövdesi 316L kalite paslanmaz çeliktir",
            "Dış yüzeyi doğal deridir",
            "İç yüzeyi kuzu postudur",
            "Küpeşte ölçüleri tarafımızdan alınır ve özel tasarım yapılır",
            "Ürünlerimiz %100 güvencemiz altındadır"
        ],
        fullDescription: [
            {
                title: "Sipariş ve teslimat",
                content: [
                    "Ürünlerimizle ilgili sorularınız hızla yanıtlanmaktadır.",
                    "İhtiyacınızı e-posta, WhatsApp ya da telefonla iletmeniz durumunda, hızla fiyatlandırma yapılarak onayınız talep edilmektedir.",
                    "Müşteri onayı alındıktan sonra gerekirse yerinde ölçüm da yapılarak ürün tasarımı yapılır. Tasarım onayı alındıktan sonra metal işleme, deri ve post hazırlıkları ile, dikim, paketleme ve teslim ile sipariş süreci tamamlanır.",
                    "Ürünlerin teslimi doğrudan ya da kargo yoluyla yapılmaktadır.",
                    "Üretim süremiz malzeme ve tasarım şartlarına bağlı olmakla birlikte kısa tutulmakta, müşterilerimizin zaman planlamasına sadık kalınarak hizmet verilmektedir."
                ]
            },
            {
                title: "%100 Müşteri Memnuniyeti",
                content: [
                    "%100 müşteri memnuniyeti amaçlamakta ve bunu müşterilerimize garanti etmekteyiz. Güneş ve deniz şartlarındaki solma ya da normal eskime dışında, tasarım ve üretim bakımından %100 ürün güvencesi ile müşterilerimizin yanındayız. Standart ürün garantisi 2 yıl olarak sunulmaktadır.",
                    "Türkiye’de üretilen ya da refit yapılan çoğu mega yatların küpeştelerinde ürünlerimiz yer almaktadır. Tersaneler başta olmak üzere, yat sektöründe hizmet veren şirketler, denizciler ile yıllar süren iş ortaklığımız, gelecek için de sağlam temeller atmamızın güvencesidir."
                ]
            }
        ]
    },
    {
        id: "argos",
        name: "AFS Argos",
        slug: "afs-argos",
        category: "hook",
        categorySlug: "usturmaca-askisi",
        categoryName: "Usturmaça Askısı",
        image: "/afs-argos.png",
        emailImage: "https://afsyacht.com/wp-content/uploads/2024/06/Usturmaca-Askisi-AFS-Yacht-3-1536x1251.png",
        description: "Harken 150 Cam cleat ve Harken 237 ip yuvası ile kompakt ve şık tasarım. Ø3-13 mm halat çapları için idealdir.",
        specs: [
            "Harken 150 Cam cleat (Kıstırmaç) kullanılır",
            "Harken 237 ip yuvası kullanılır",
            "Ø3-13 mm halat çapı için uygundur",
            "İç gövdesi 316L kalite paslanmaz çeliktir",
            "Dış yüzeyi doğal deridir",
            "İç yüzeyi kuzu postudur",
            "Küpeşte ölçüleri tarafımızdan alınır ve özel tasarım yapılır",
            "Ürünlerimiz %100 güvencemiz altındadır"
        ],
        fullDescription: [
            {
                title: "Sipariş ve teslimat",
                content: [
                    "Ürünlerimizle ilgili sorularınız hızla yanıtlanmaktadır.",
                    "İhtiyacınızı e-posta, WhatsApp ya da telefonla iletmeniz durumunda, hızla fiyatlandırma yapılarak onayınız talep edilmektedir.",
                    "Müşteri onayı alındıktan sonra gerekirse yerinde ölçüm da yapılarak ürün tasarımı yapılır. Tasarım onayı alındıktan sonra metal işleme, deri ve post hazırlıkları ile, dikim, paketleme ve teslim ile sipariş süreci tamamlanır.",
                    "Ürünlerin teslimi doğrudan ya da kargo yoluyla yapılmaktadır.",
                    "Üretim süremiz malzeme ve tasarım şartlarına bağlı olmakla birlikte kısa tutulmakta, müşterilerimizin zaman planlamasına sadık kalınarak hizmet verilmektedir."
                ]
            },
            {
                title: "%100 Müşteri Memnuniyeti",
                content: [
                    "%100 müşteri memnuniyeti amaçlamakta ve bunu müşterilerimize garanti etmekteyiz. Güneş ve deniz şartlarındaki solma ya da normal eskime dışında, tasarım ve üretim bakımından %100 ürün güvencesi ile müşterilerimizin yanındayız. Standart ürün garantisi 2 yıl olarak sunulmaktadır.",
                    "Türkiye’de üretilen ya da refit yapılan çoğu mega yatların küpeştelerinde ürünlerimiz yer almaktadır. Tersaneler başta olmak üzere, yat sektöründe hizmet veren şirketler, denizciler ile yıllar süren iş ortaklığımız, gelecek için de sağlam temeller atmamızın güvencesidir."
                ]
            }
        ]
    },

    {
        id: "fender-type1",
        name: "AFS Usturmaça Tip 1",
        slug: "afs-usturmaca-tip-1",
        category: "fender",
        categorySlug: "usturmacalar",
        categoryName: "Usturmaçalar",
        image: "/usturmaca-tip-1.webp",
        emailImage: "https://afs-yacht-next.onrender.com/_next/image?url=%2Fusturmaca-tip-1.webp&w=3840&q=75",
        description: "Teknenizi darbelerden koruyan, üstün kaliteli malzemeden üretilmiş dayanıklı usturmaça.",
        options: [
            {
                label: "Ebat",
                items: ["30x65 cm", "36x85 cm", "41x85 cm", "65x96 cm", "85x115 cm"]
            }
        ],
        specs: [
            "UV ışınlarına dayanıklı özel PVC malzeme",
            "Yüksek basınç dayanımı",
            "Eksiz, tek parça üretim teknolojisi",
            "Farklı ebat seçenekleri",
            "Kolay şişirilebilir valf sistemi",
            "Uzun ömürlü kullanım"
        ],
        fullDescription: [
            {
                title: "Maksimum Koruma",
                content: [
                    "AFS Usturmaçaları, teknenizin gövdesini iskele ve diğer teknelerle temas sırasında oluşabilecek hasarlardan korumak için özel olarak tasarlanmıştır.",
                    "Esnek yapısı darbeleri emer ve dağıtır."
                ]
            }
        ]
    },
    {
        id: "fender-cover",
        name: "AFS Usturmaça Kılıfı",
        slug: "afs-usturmaca-kilifi",
        category: "cover",
        categorySlug: "usturmaca-kiliflari",
        categoryName: "Usturmaça Kılıfları",
        image: "/afs-yacht-usturmaca-kilif.png",
        detailImage: "/afs-yacht-usturmaca-kilifi.png",
        emailImage: "https://afs-yacht-next.onrender.com/_next/image?url=%2Fafs-yacht-usturmaca-kilifi.png&w=3840&q=75",
        description: "Usturmaçalarınızı UV ışınlarından ve aşınmadan koruyan, estetik ve dayanıklı kılıf.",
        specs: [
            "Yüksek kaliteli, UV dirençli kumaş",
            "Leke tutmaz ve kolay temizlenir",
            "Usturmaçayı tam saran esnek yapı",
            "Sürtünme sesini engeller",
            "Tekne boyasına zarar vermez",
            "Şık görünüm sağlar"
        ],
        fullDescription: [
            {
                title: "Estetik ve Koruma",
                content: [
                    "Usturmaça kılıflarımız hem usturmaçalarınızın ömrünü uzatır hem de teknenize şık bir görünüm katar.",
                    "Deniz suyu ve güneşin yıpratıcı etkilerine karşı ekstra koruma kalkanı oluşturur."
                ]
            }
        ]
    },
    {
        id: "cleat",
        name: "AFS Koç Boynuzu",
        slug: "afs-koc-boynuzu",
        category: "cleat",
        categorySlug: "koc-boynuzu",
        categoryName: "Koç Boynuzu",
        image: "/afs-yacht-koc-boynuzu.webp",
        emailImage: "https://afs-yacht-next.onrender.com/_next/image?url=%2Fafs-yacht-koc-boynuzu.webp&w=3840&q=75",
        description: "Paslanmaz çelikten üretilen, yüksek mukavemetli ve estetik koç boynuzu.",
        specs: [
            "316L kalite paslanmaz çelik",
            "Ayna polisajlı yüzey",
            "Korozyona karşı tam direnç",
            "Yüksek yük kapasitesi",
            "Şık ve ergonomik tasarım",
            "Kolay montaj"
        ],
        fullDescription: [
            {
                title: "Güçlü ve Şık",
                content: [
                    "AFS Koç Boynuzları, teknenizin bağlantı noktalarında hem güvenliği hem de estetiği bir arada sunar.",
                    "Deniz şartlarına dayanıklı en kaliteli paslanmaz çelikten üretilmiştir."
                ]
            }
        ]
    },
    {
        id: "dinghy-hanger",
        name: "AFS Bot Bağlama Askısı",
        slug: "afs-bot-baglama-askisi",
        category: "dinghy-hanger",
        categorySlug: "bot-baglama-askisi",
        categoryName: "Bot Bağlama Askısı",
        image: "/bot-baglama-askisi.webp",
        emailImage: "https://afs-yacht-next.onrender.com/_next/image?url=%2Fbot-baglama-askisi.webp&w=640&q=75",
        description: "Botunuzu güvenle bağlamanız için tasarlanmış, pratik ve dayanıklı askı çözümü.",
        specs: [
            "Güçlendirilmiş yapı",
            "Kolay kullanım mekanizması",
            "UV ve deniz suyuna dayanıklı",
            "Farklı bot tiplerine uyumlu",
            "Yer kaplamayan kompakt tasarım"
        ],
        fullDescription: [
            {
                title: "Pratik Çözüm",
                content: [
                    "Bot bağlama işlemlerini hızlı ve güvenli hale getiren askı sistemimiz, güverte düzeninizi korumanıza yardımcı olur.",
                    "İhtiyaç duyduğunuz her an kullanıma hazırdır."
                ]
            }
        ]
    },
    {
        id: "fender-line-type1",
        name: "AFS Usturmaça Bağlama Halatı Tip 1",
        slug: "afs-usturmaca-baglama-halati-tip-1",
        category: "line",
        categorySlug: "usturmaca-baglama-halati",
        categoryName: "Usturmaça Bağlama Halatı",
        image: "/usturmaca-baglama-halati-tip-1.webp",
        emailImage: "https://afs-yacht-next.onrender.com/_next/image?url=%2Fusturmaca-baglama-halati-tip-1.webp&w=3840&q=75",
        description: "Usturmaçalarınızı güvenle bağlamanız için özel olarak üretilmiş, yüksek mukavemetli halat.",
        specs: [
            "Yüksek kopma mukavemeti",
            "UV ışınlarına ve tuzlu suya dayanıklı",
            "Esnek yapısı ile kolay düğüm tutar",
            "aşınmaya karşı dirençli dış örgü",
            "Estetik görünüm"
        ],
        fullDescription: [
            {
                title: "Güvenli Bağlantı",
                content: [
                    "Usturmaçalarınızın en zorlu hava koşullarında bile güvenle bağlı kalmasını sağlar.",
                    "Özel yapısı sayesinde uzun yıllar dayanıklılığını korur."
                ]
            }
        ]
    },
    {
        id: "fender-line-type2",
        name: "AFS Usturmaça Bağlama Halatı Tip 2",
        slug: "afs-usturmaca-baglama-halati-tip-2",
        category: "line",
        categorySlug: "usturmaca-baglama-halati",
        categoryName: "Usturmaça Bağlama Halatı",
        image: "/usturmaca-baglama-halati-tip-2.webp",
        emailImage: "https://afs-yacht-next.onrender.com/_next/image?url=%2Fusturmaca-baglama-halati-tip-2.webp&w=3840&q=75",
        description: "Premium görünüm ve üstün dayanıklılık sunan özel seri usturmaça halatı.",
        specs: [
            "Premium dokuma yapısı",
            "Yüksek yük kapasitesi",
            "Sürtünmeye karşı ekstra direnç",
            "Yumuşak dokusu ile tekne yüzeyini çizmez",
            "Uzun ömürlü kullanım"
        ],
        fullDescription: [
            {
                title: "Premium Kalite",
                content: [
                    "Hem estetik hem de fonksiyonelliği bir arada sunan Tip 2 halatlarımız, teknenize değer katar.",
                    "Güçlü yapısı ile maksimum güvenlik sağlar."
                ]
            }
        ]
    }
];
