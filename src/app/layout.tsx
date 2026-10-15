import type { Metadata } from "next";
import {
  DM_Sans,
  Geist_Mono,
  Hanken_Grotesk,
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

const dmSans = DM_Sans({
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

// Header/footer chrome and titles both use Hanken Grotesk — a free stand-in
// for FF Mark (the header/hero typeface on hennesseyperformance.com, a
// commercial Monotype font we can't license/self-host here). Two separate
// next/font calls, not one aliased variable: Tailwind v4's @theme inline
// only resolves a next/font variable when the theme key and the font's
// `variable` are the same name (see --font-plex-mono/--font-hero below).
const hankenGroteskNav = Hanken_Grotesk({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["300"],
});

const hankenGroteskHero = Hanken_Grotesk({
  variable: "--font-hero",
  subsets: ["latin"],
  weight: ["800"],
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
      className={`${dmSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${hankenGroteskNav.variable} ${hankenGroteskHero.variable} dark h-full antialiased`}
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
