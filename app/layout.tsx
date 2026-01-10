import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";

import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsapp } from "@/components/FloatingWhatsapp";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AFS Yacht - En iyilerin tercihi",
  description: "Zanaatın Deniz Hali - Handmade Marine Goods",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${manrope.variable} ${playfair.variable} antialiased transition-colors duration-500`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <FloatingWhatsapp />
        </Providers>
      </body>
    </html>
  );
}
