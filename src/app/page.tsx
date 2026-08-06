import { Hero } from "@/components/home/hero";
import { StickyShowcase } from "@/components/home/sticky-showcase";
import { FeaturedProducts } from "@/components/home/featured-products";
import { GalleryBento } from "@/components/home/gallery-bento";

export default function Home() {
  return (
    <>
      <Hero />
      <StickyShowcase />
      <GalleryBento />
      <FeaturedProducts />
    </>
  );
}
