import { Hero } from "./components/hero";
import { LSPBridge } from "./components/lsp-bridge";
import { FeaturesGrid } from "./components/features-grid";
import { AgentShowcase } from "./components/agent-showcase";
import { TechStack } from "./components/tech-stack";
import { DownloadSection } from "./components/download-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <LSPBridge />
      <FeaturesGrid />
      <AgentShowcase />
      <TechStack />
      <DownloadSection />

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-ui-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="font-semibold text-text-base">GitDesk</span>
            </div>
            <p className="text-sm text-text-muted">
              © 2025 GitDesk. The AI-Native Code Integrity Platform.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-text-muted hover:text-ui-primary transition-colors cursor-pointer">
                Privacy
              </a>
              <a href="#" className="text-text-muted hover:text-ui-primary transition-colors cursor-pointer">
                Terms
              </a>
              <a href="#" className="text-text-muted hover:text-ui-primary transition-colors cursor-pointer">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
