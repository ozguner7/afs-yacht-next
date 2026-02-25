import { MultiStepForm } from "@/components/MultiStepForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AFS Yacht: 30 Yıllık Deneyimle Estetik & Teknik Gemi Mühendisliği",
    description: "AFS Yacht, 30 yıllık gemi mühendisliği tecrübesiyle, Türkiye'den dünyaya teknik mükemmellik ve kusursuz estetiği birleştiren yat tasarımları sunar. El işçiliğiyle fark yaratın."
};

export default function QuotePage() {
    return (
        <div className="pt-[125px] pb-20">
            <MultiStepForm />
        </div>
    );
}
