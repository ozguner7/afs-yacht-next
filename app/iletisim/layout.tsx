import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tekneye Özel Üretim | AFS Yacht İstanbul İletişim",
    description: "Teknenize özel üretim için AFS Yacht ile iletişime geçin. 30 yıllık gemi mühendisliği tecrübesi ve kusursuz el işçiliğiyle estetik ve teknik mükemmelliği birleştiriyoruz."
};

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
