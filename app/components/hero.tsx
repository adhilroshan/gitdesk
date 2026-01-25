import { GlassCard } from "./ui/glass-card";
import { CodeBlock } from "./ui/code-block";

const sampleCode = `export async function login(req: Request) {
  const email = req.body.email;
  const password = req.body.password;

  const query = \`SELECT * FROM users WHERE email = '\${email}'\`;

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return users[i];
    }
  }

  return db.execute(query);
}`;

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden bg-app">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-ui-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ui-primary/10 rounded-full blur-3xl pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-state-review/10 rounded-full blur-3xl pointer-events-none mix-blend-screen" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border-border-subtle">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ui-success opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ui-success" />
            </span>
            <span className="text-sm text-text-muted">Now in Public Beta</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-text">
            <span className="text-gradient">The Code Review</span>
            <br />
            <span className="text-text">That Never Sleeps</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            Proactive AI code review <em>before</em> you commit. Three specialized agents analyze your changes for security, performance, and maintainability—instantly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group relative px-8 py-4 bg-ui-primary hover:bg-ui-primary-hover text-white rounded-full font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-ui-primary/25 hover:-translate-y-0.5 cursor-pointer">
              <span className="flex items-center gap-2">
                Download Beta
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="px-8 py-4 text-text hover:text-ui-primary transition-colors duration-200 font-medium cursor-pointer">
              View Documentation
            </button>
          </div>
        </div>

        {/* AI Review Panel Mockup */}
        <div className="relative max-w-4xl mx-auto animate-slide-up">
          <GlassCard glow className="p-0 overflow-hidden border-border-subtle bg-panel/50">
            {/* Panel Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border-base bg-panel">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-ui-error/80" />
                  <div className="w-3 h-3 rounded-full bg-ui-warning/80" />
                  <div className="w-3 h-3 rounded-full bg-ui-success/80" />
                </div>
                <span className="text-sm text-text-muted font-mono ml-2">auth.ts — AI Review</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-muted">Deep Review</span>
                <div className="w-10 h-5 bg-ui-primary/20 rounded-full relative cursor-pointer">
                  <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-ui-primary rounded-full transition-transform" />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-0">
              {/* Code Preview */}
              <div className="p-4 border-r border-border-base bg-app/50">
                <CodeBlock code={sampleCode} fileName="auth.ts" />
              </div>

              {/* Agent Analysis */}
              <div className="p-4 space-y-3 bg-panel/30">
                <div className="text-xs text-text-muted uppercase tracking-wider font-semibold mb-4">
                  Active Agents
                </div>

                {/* Security Agent */}
                <div className="glass-card rounded-xl p-3 border-border-subtle bg-panel/40">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-ui-error/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-ui-error" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-text">Security Agent</span>
                        <span className="text-xs text-ui-error font-medium">2 issues</span>
                      </div>
                      <p className="text-xs text-text-muted">SQL injection vulnerability detected. Hardcoded query uses unsafe interpolation.</p>
                    </div>
                  </div>
                </div>

                {/* Performance Agent */}
                <div className="glass-card rounded-xl p-3 border-border-subtle bg-panel/40">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-ui-warning/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-ui-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-text">Performance Agent</span>
                        <span className="text-xs text-ui-warning font-medium">1 issue</span>
                      </div>
                      <p className="text-xs text-text-muted">O(n) loop searching for email. Use Map/Set for O(1) lookups.</p>
                    </div>
                  </div>
                </div>

                {/* Maintainability Agent */}
                <div className="glass-card rounded-xl p-3 border-border-subtle bg-panel/40">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-state-review/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-state-review" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-text">Maintainability Agent</span>
                        <span className="text-xs text-state-review font-medium">3 issues</span>
                      </div>
                      <p className="text-xs text-text-muted">Missing input validation, no error handling, complex function.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
