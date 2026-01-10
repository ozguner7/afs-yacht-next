export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    category: 'hook' | 'fender' | 'cover' | 'ladder' | 'line' | 'hanger' | 'cleat' | 'dinghy-hanger';
    specs: string[];
    fullDescription: {
        title: string;
        content: string[];
    }[];
    image: string;
    detailImage?: string;
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
        image: "/afs-thetis.png",
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
        image: "/afs-pontos.png",
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
        image: "/afs-argos.png",
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
        id: "pilot-ladder",
        name: "AFS Pilot Merdiveni",
        slug: "afs-pilot-merdiveni",
        category: "ladder",
        image: "/pilot-merdiveni.webp",
        detailImage: "/pilot-merdiveni-yat.webp",
        description: "Yüksek güvenlik standartlarında üretilen, dayanıklı ve ergonomik pilot merdiveni.",
        specs: [
            "Uluslararası standartlara uygun tasarım",
            "Kaymaz basamak yüzeyi",
            "Yüksek mukavemetli halat yapısı",
            "Uzun ömürlü ve dayanıklı malzeme",
            "Kolay depolama ve kullanım",
            "Farklı boy seçenekleri mevcuttur"
        ],
        fullDescription: [
            {
                title: "Güvenlik ve Kalite",
                content: [
                    "Pilot merdivenlerimiz denizcilikteki en zorlu koşullara dayanacak şekilde tasarlanmıştır. Her bir basamak ve bağlantı noktası, maksimum güvenlik sağlamak üzere test edilmiştir.",
                    "Mürettebatın ve pilotların güvenli geçişini sağlamak önceliğimizdir."
                ]
            }
        ]
    },
    {
        id: "fender-type1",
        name: "AFS Usturmaça Tip 1",
        slug: "afs-usturmaca-tip-1",
        category: "fender",
        image: "/usturmaca-tip-1.webp",
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
        image: "/afs-yacht-usturmaca-kilif.png",
        detailImage: "/afs-yacht-usturmaca-kilifi.png",
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
        image: "/afs-yacht-koc-boynuzu.webp",
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
        image: "/bot-baglama-askisi.webp",
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
        image: "/usturmaca-baglama-halati-tip-1.webp",
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
        image: "/usturmaca-baglama-halati-tip-2.webp",
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
