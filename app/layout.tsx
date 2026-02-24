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

import Script from "next/script";

export const metadata: Metadata = {
  title: "AFS Yacht - Gerçek Deniz Koşulları İçin Özel Tasarım",
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
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AFS Yacht",
    "url": "https://www.afsyacht.com.tr",
    "logo": "https://www.afsyacht.com.tr/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-532-277-5214",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.instagram.com/afsyacht/",
      "https://www.linkedin.com/company/afs-yacht"
    ]
  };

  return (
    <html lang="tr">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-558EJE70SQ`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-558EJE70SQ', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* Organization Schema */}
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body
        className={`${manrope.variable} ${playfair.variable} antialiased transition-colors duration-500`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

