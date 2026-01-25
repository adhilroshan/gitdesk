import { GlassCard } from "./ui/glass-card";

export function LSPBridge() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-base">
            Language servers analyze <span className="text-gradient">what you&apos;ll commit</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Other Git clients review your working directory. GitDesk creates a shadow workspace
            so language servers analyze exactly what will be committed.
          </p>
        </div>

        <GlassCard glow className="p-8 border border-border-subtle bg-panel/30">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Flow Diagram */}
            <div className="space-y-6">
              {/* Step 1: Staged Changes */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-ui-primary/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-ui-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-text-base">Staged Changes</div>
                  <div className="text-sm text-text-muted">Your selected files</div>
                </div>
                <svg className="w-6 h-6 text-text-disabled flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Step 2: Shadow Workspace */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-state-review/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-state-review" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-text-base">Shadow Workspace</div>
                  <div className="text-sm text-text-muted">Isolated LSP environment</div>
                </div>
                <svg className="w-6 h-6 text-text-disabled flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Step 3: LSP Analysis */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-ui-success/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-ui-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-text-base">LSP Analysis</div>
                  <div className="text-sm text-text-muted">Real-time diagnostics</div>
                </div>
              </div>

              {/* Key Points */}
              <div className="pt-4 space-y-2">
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-4 h-4 text-ui-success flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-muted">Real-time analysis of staged changes</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-4 h-4 text-ui-success flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-muted">LSP diagnostics merged with AI review</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <svg className="w-4 h-4 text-ui-success flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-muted">Multi-language support</span>
                </div>
              </div>
            </div>

            {/* Code Preview with Diagnostics */}
            <div className="code-block rounded-xl p-5 border border-border-base bg-app/80">
              <div className="text-xs text-text-muted mb-3 font-mono">lsp-diagnostics.ts</div>
              <div className="space-y-3 font-mono text-sm">
                {/* Error */}
                <div className="flex items-start gap-2 text-ui-error">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="font-medium">unused variable: &apos;temp&apos;</div>
                    <div className="text-xs opacity-70">line 12, col 5</div>
                  </div>
                </div>
                {/* Warning */}
                <div className="flex items-start gap-2 text-ui-warning">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <div className="font-medium">missing export: &apos;handleAuth&apos;</div>
                    <div className="text-xs opacity-70">line 45, col 0</div>
                  </div>
                </div>
                {/* Info */}
                <div className="flex items-start gap-2 text-ui-primary">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="font-medium">3 quick fixes available</div>
                    <div className="text-xs opacity-70">Apply with Ctrl+.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Supported Languages */}
          <div className="mt-8 pt-8 border-t border-border-base">
            <div className="text-sm text-text-muted mb-4">Supported Languages</div>
            <div className="flex flex-wrap gap-3">
              {["TypeScript", "Rust", "Python", "Go"].map((lang) => (
                <div
                  key={lang}
                  className="px-4 py-2 rounded-lg glass-card text-sm font-medium text-text-base hover:bg-white/10 transition-colors cursor-pointer border border-border-subtle"
                >
                  {lang}
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
