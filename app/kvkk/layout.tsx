import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AFS Yacht: 30 Yıllık Tecrübe ile Lüks Yat Tasarımı ve Gemi Mühendisliği",
    description: "AFS Yacht, 30 yıllık gemi mühendisliği tecrübesiyle Türkiye'de teknik mükemmellik ve estetiği buluşturan lüks yat tasarımları sunar. Kusursuz el işçiliği."
};

export default function KvkkLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
