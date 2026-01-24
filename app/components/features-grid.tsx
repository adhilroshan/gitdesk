import { GlassCard } from "./ui/glass-card";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Agentic AI Code Review",
    description: "Three specialized AI agents run in parallel—Security scans for vulnerabilities and secrets (OWASP Top 10), Performance spots O(n²) patterns, Maintainability enforces clean code and detects zombie imports.",
    color: "bg-accent/20 text-accent",
    linkText: "See how it works",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "LSP Bridge Integration",
    description: "Language servers analyze staged changes in real-time. What you commit is what gets reviewed. Shadow workspace ensures accurate diagnostics merged with AI analysis.",
    color: "bg-ai-meta/20 text-ai-meta",
    linkText: "Learn about LSP Bridge",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Visual Worktree Manager",
    description: "One-click PR review workflow: Fetch → Create worktree → Sync deps → Open editor. Auto-cleanup, node_modules symlinking, isolated environments. Stop git stash'ing.",
    color: "bg-git-added/20 text-git-added",
    linkText: "Explore worktrees",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: "AI-Powered Commits",
    description: "Auto-generate commit messages from your changes. Configurable commit blocking enforces quality before pushing. Review diffs side-by-side with AI suggestions applied instantly.",
    color: "bg-git-added/20 text-git-added",
    linkText: "Learn about commits",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Redacted Mode",
    description: "Privacy-first AI review. Code logic is redacted while signatures are preserved for analysis. Your secrets and proprietary logic never leave your machine.",
    color: "bg-ai-meta/20 text-ai-meta",
    linkText: "Explore privacy",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Multi-Language Ready",
    description: "Native support for TypeScript, Rust, Python, and Go from day one. LSP integration for each language provides accurate diagnostics and intelligent suggestions.",
    color: "bg-accent/20 text-accent",
    linkText: "View language support",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for the <span className="text-gradient">modern workflow</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Everything you need to ship quality code faster, without sacrificing safety or performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <GlassCard key={index} hover className="flex flex-col h-full">
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed mb-4 flex-1">
                {feature.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors font-medium text-sm group cursor-pointer"
              >
                {feature.linkText}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
