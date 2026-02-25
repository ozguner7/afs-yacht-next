import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AFS Yacht: Kalite, Estetik ve 30 Yıllık Denizcilik Tecrübesi",
    description: "30 yıllık gemi mühendisliği tecrübesiyle AFS Yacht, uluslararası standartlarda, deniz şartlarına dayanıklı ve estetik yat çözümleri sunar. Türkiye'de tasarlanan üstün kaliteli ürünlerimizle müşteri memnuniyetini önceliğimizdir."
};

export default function KalitePolitikasiLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
