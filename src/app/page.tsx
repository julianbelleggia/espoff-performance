import { Hero } from "@/components/home/hero";
import { FeaturedCategories } from "@/components/home/featured-categories";
import { FeaturedProducts } from "@/components/home/featured-products";
import { BrandsStrip } from "@/components/home/brands-strip";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <BrandsStrip />
      <FeaturedProducts />
    </>
  );
}
