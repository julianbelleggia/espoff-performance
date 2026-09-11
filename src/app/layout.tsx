import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Geist_Mono,
  Montserrat,
  Space_Mono,
} from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/hooks/use-cart";
import { CurrencyProvider } from "@/hooks/use-currency";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { ScrollIndicator } from "@/components/providers/scroll-indicator";
import { SITE_URL } from "@/lib/site-config";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-nav",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["italic", "normal"],
});

const description =
  "Spoilers, volantes, lips, difusores y escapes premium (Akrapovic, Milltek y más) para llevar tu auto al siguiente nivel.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ESPOFF Performance",
    template: "%s | ESPOFF Performance",
  },
  description,
  openGraph: {
    title: "ESPOFF Performance",
    description,
    url: SITE_URL,
    siteName: "ESPOFF Performance",
    locale: "es_AR",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ESPOFF Performance",
    description,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${geistMono.variable} ${spaceMono.variable} ${cormorantGaramond.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <ScrollIndicator />
        <CurrencyProvider>
          <CartProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </CartProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}
