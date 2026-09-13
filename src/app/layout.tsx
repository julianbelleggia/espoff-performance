import type { Metadata } from "next";
import {
  Geist_Mono,
  IBM_Plex_Mono,
  Manrope,
  Source_Serif_4,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/hooks/use-cart";
import { CurrencyProvider } from "@/hooks/use-currency";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { ScrollIndicator } from "@/components/providers/scroll-indicator";
import { SITE_URL } from "@/lib/site-config";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-nav",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Header nav ("Proyectos / Nosotros / Contacto") only — matches
// https://s-2k.webflow.io/'s progress-nav labels exactly (IBM Plex Mono,
// weight 300, ~12.8px, -0.128px tracking, uppercase).
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["300"],
});

// Titles (font-hero) — free stand-in for Freight Display Pro (the serif on
// scgroup.dk's "Mærk mere" hero, which is a paid Adobe/Typekit font).
// Regular only: titles render at weight 400, not bold.
const sourceSerif = Source_Serif_4({
  variable: "--font-hero",
  subsets: ["latin"],
  weight: ["400"],
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
      className={`${manrope.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable} ${sourceSerif.variable} dark h-full antialiased`}
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
