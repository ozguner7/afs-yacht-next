import { Blog } from "@/components/Blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AFS Yacht: 30 Yıllık Yat Mühendisliği, Tasarım & El İşçiliği",
    description: "AFS Yacht olarak 30 yıllık yat mühendisliği tecrübesi ve kusursuz el işçiliğini birleştiriyoruz. Teknik mükemmellik ve estetiği buluşturan tasarımlarımızı keşfedin."
};
export default function BlogPage() {
    return (
        <div className="pt-24">
            <Blog />
        </div>
    );
}
