// Core technologies
const coreTech = [
  {
    name: "Rust",
    description: "Blazing fast Git operations",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Tauri",
    description: "Native, cross-platform desktop",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.09 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "React 19",
    description: "Modern, responsive UI",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor" opacity="0.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    description: "Type-safe throughout",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2" fill="currentColor" opacity="0.2" />
        <path d="M11 10.5v3H9v-3H7.5v5.25h1.5v-1.5h2v1.5h1.5v-5.25H11zm4.5 0v5.25h1.5v-1.75h1c1.1 0 2-.9 2-2s-.9-2-2-2h-2.5zm1.5 1.25h1c.28 0 .5.22.5.5s-.22.5-.5.5h-1v-1z" fill="currentColor" />
      </svg>
    ),
  },
];

// AI providers
const aiTech = [
  {
    name: "OpenAI",
    description: "GPT-4 Turbo models",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.0993 3.8558L12.6 8.3829l2.02-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Anthropic",
    description: "Claude models",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Ollama",
    description: "Local LLM support",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "OpenRouter",
    description: "Unified AI API",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z" fill="currentColor" opacity="0.2" />
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" />
      </svg>
    ),
  },
];

// Integration technologies
const integrationTech = [
  {
    name: "LSP",
    description: "Language Server Protocol",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" fill="currentColor" opacity="0.2" />
        <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" fill="none" stroke="currentColor" strokeWidth={2} />
      </svg>
    ),
  },
  {
    name: "Tree-sitter",
    description: "Syntax parsing",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="currentColor" opacity="0.2" />
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.09 5.1 7.63 12 4.18z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "libgit2",
    description: "Git operations",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="9" cy="12" r="3" fill="currentColor" opacity="0.2" />
        <path d="M9 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" fill="none" stroke="currentColor" strokeWidth={2} />
        <path d="M9 15c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6v9c0 1.7-1.3 3-3 3s-3-1.3-3-3v-7c0-.6.4-1 1-1s1 .4 1 1v7c0 .6.4 1 1 1s1-.4 1-1v-9c0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6h10" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Zustand",
    description: "State management",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" opacity="0.2" />
        <path d="M9 12h6M12 9v6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      </svg>
    ),
  },
];

function TechBadge({ tech }: { tech: typeof coreTech[number] }) {
  return (
    <div className="group glass-card rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer transition-all duration-200 hover:bg-panel/50 border border-border-subtle">
      <div className="text-ui-primary">{tech.icon}</div>
      <div className="text-left">
        <div className="font-mono font-semibold text-ui-primary group-hover:text-ui-primary-hover transition-colors text-sm">
          {tech.name}
        </div>
        <div className="text-xs text-text-muted">{tech.description}</div>
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-text-base mb-2">Built with modern technologies</h2>
          <p className="text-text-muted">Native performance, local-first architecture</p>
        </div>

        {/* Core Technologies */}
        <div className="mb-10">
          <div className="text-sm text-text-muted mb-4 font-medium uppercase tracking-wider">Core</div>
          <div className="flex flex-wrap justify-center gap-3">
            {coreTech.map((tech) => (
              <TechBadge key={tech.name} tech={tech} />
            ))}
          </div>
        </div>

        {/* AI Providers */}
        <div className="mb-10">
          <div className="text-sm text-text-muted mb-4 font-medium uppercase tracking-wider">AI</div>
          <div className="flex flex-wrap justify-center gap-3">
            {aiTech.map((tech) => (
              <TechBadge key={tech.name} tech={tech} />
            ))}
          </div>
        </div>

        {/* Integration Technologies */}
        <div className="mb-12">
          <div className="text-sm text-text-muted mb-4 font-medium uppercase tracking-wider">Integration</div>
          <div className="flex flex-wrap justify-center gap-3">
            {integrationTech.map((tech) => (
              <TechBadge key={tech.name} tech={tech} />
            ))}
          </div>
        </div>

        {/* Performance highlights */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-1">&lt;100ms</div>
            <div className="text-sm text-text-muted">Startup time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-1">&lt;50MB</div>
            <div className="text-sm text-text-muted">Memory footprint</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-1">100%</div>
            <div className="text-sm text-text-muted">Offline capable</div>
          </div>
        </div>
      </div>
    </section>
  );
}
