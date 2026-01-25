import { Hero } from "./components/landing/hero";
import { ProductShowcase } from "./components/landing/product-showcase";
import { BentoGrid } from "./components/landing/bento-grid";
import { AgentsSection } from "./components/landing/agents-section";
import { TechMarquee } from "./components/landing/tech-marquee";
import { CtaSection } from "./components/landing/cta-section";
import { Footer } from "./components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-app overflow-x-hidden selection:bg-ui-selection text-text-base">
      <Hero />
      <TechMarquee />
      <ProductShowcase />
      <BentoGrid />
      <AgentsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
