import { Hero } from "@/components/Hero";
import { OrderProcess } from "@/components/OrderProcess";
import { SatisfactionPolicy } from "@/components/SatisfactionPolicy";
import { Products } from "@/components/Products";
import { ContactForm } from "@/components/ContactForm";
import { Blog } from "@/components/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <SatisfactionPolicy />
      <ContactForm />
    </>
  );
}
