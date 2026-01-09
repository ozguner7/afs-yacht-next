export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    specs: string[];
    fullDescription: {
        title: string;
        content: string[];
    }[];
    image: string;
}

export const productsData: Product[] = [
    {
        id: "thetis",
        name: "AFS Thetis",
        slug: "afs-thetis",
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
    }
];
