import Hero from "@/components/landing-page/hero";
import Plans from "@/components/landing-page/plans";
import ProductVideo from "@/components/landing-page/product-video";
import Products from "@/components/landing-page/products";
import StepByStep from "@/components/landing-page/step-by-step";

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <ProductVideo />
      <StepByStep />
      <Plans />
      <Products />
    </div>
  );
}
