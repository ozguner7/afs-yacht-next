import { Hero } from "@/components/Hero";
import { OrderProcess } from "@/components/OrderProcess";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AFS Yacht Usturmaça Askısı | Harken 280 Cam Cleat - Paslanmaz & Güvenli",
  description: "AFS Yacht'ın Harken 280 Cam Cleat'li paslanmaz usturmaça askıları ile güvenliği, uzun ömrü ve estetiği keşfedin. 30 yıllık tecrübeyle Ø6-16mm halatlar için ideal."
};
import { SatisfactionPolicy } from "@/components/SatisfactionPolicy";
import { ProductCarousel } from "@/components/ProductCarousel";
import { ContactForm } from "@/components/ContactForm";
import { Blog } from "@/components/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductCarousel />
      <SatisfactionPolicy />
      <ContactForm />
    </>
  );
}
