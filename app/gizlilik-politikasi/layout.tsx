import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AFS Yacht | 30 Yıllık Gemi Mühendisliği ve Kusursuz Yat Tasarımı",
    description: "AFS Yacht, 30 yıllık tecrübesiyle Türkiye'de tasarladığı, teknik mükemmellik ve estetiği buluşturan yat ürünleri sunar. Dünya standartlarında el işçiliği."
};

export default function GizlilikPolitikasiLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
