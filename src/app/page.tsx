import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { StickyShowcase } from "@/components/home/sticky-showcase";
import { InteriorCarousel } from "@/components/home/interior-carousel";
import { GalleryBento } from "@/components/home/gallery-bento";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <StickyShowcase />
      <GalleryBento />
      <InteriorCarousel />
    </>
  );
}
