import { Hero } from "./components/landing/hero";
import { ProductShowcase } from "./components/landing/product-showcase";
import { BentoGrid } from "./components/landing/bento-grid";
import { AgentsSection } from "./components/landing/agents-section";
import { TechMarquee } from "./components/landing/tech-marquee";
import { CtaSection } from "./components/landing/cta-section";
import { Footer } from "./components/landing/footer";

async function getLatestVersion() {
  try {
    const res = await fetch("https://github.com/adhilroshan/gitdesk/releases/latest", {
      redirect: "follow",
      next: { revalidate: 60 } // Revalidate every minute
    });

    // URL will be something like .../releases/tag/v0.1.9
    const segments = res.url.split("/");
    const tag = segments[segments.length - 1];

    console.log(`[Version Fetch] Fetched URL: ${res.url}, Tag detected: ${tag}`);

    return tag.startsWith("v") ? tag : `v${tag}`;
  } catch (e) {
    console.error("Failed to fetch latest version:", e);
    return "v0.1.0"; // Fallback
  }
}

export default async function Home() {
  const version = await getLatestVersion();

  return (
    <main className="min-h-screen bg-bg-app overflow-x-hidden selection:bg-ui-selection text-text-base">
      <Hero version={version} />
      <TechMarquee />
      <ProductShowcase />
      <BentoGrid />
      <AgentsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
