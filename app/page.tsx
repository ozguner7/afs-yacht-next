import { Hero } from "@/components/Hero";
import { OrderProcess } from "@/components/OrderProcess";
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
