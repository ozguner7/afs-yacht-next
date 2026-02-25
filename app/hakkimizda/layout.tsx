import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AFS Yacht: Yat Donanımları & Özel Denizcilik Çözümleri | Türk Mühendisliği",
    description: "AFS Yacht olarak, yılların tecrübesi ve Türk mühendisliği ile yatlarınıza özel paslanmaz çelik donanımlar, halat ve usturmaça çözümleri sunuyoruz. Güvenliğiniz için!"
};

export default function HakkimizdaLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
