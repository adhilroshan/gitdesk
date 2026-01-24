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
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai-meta/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-git-added opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-git-added" />
            </span>
            <span className="text-sm text-text-secondary">Now in Public Beta</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">The Code Review</span>
            <br />
            <span className="text-foreground">That Never Sleeps</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
            Proactive AI code review <em>before</em> you commit. Three specialized agents analyze your changes for security, performance, and maintainability—instantly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group relative px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-full font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 cursor-pointer">
              <span className="flex items-center gap-2">
                Download Beta
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="px-8 py-4 text-foreground hover:text-accent transition-colors duration-200 font-medium cursor-pointer">
              View Documentation
            </button>
          </div>
        </div>

        {/* AI Review Panel Mockup */}
        <div className="relative max-w-4xl mx-auto">
          <GlassCard glow className="p-0 overflow-hidden">
            {/* Panel Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-sm text-text-secondary font-mono ml-2">auth.ts — AI Review</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary">Deep Review</span>
                <div className="w-10 h-5 bg-accent/20 rounded-full relative cursor-pointer">
                  <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-accent rounded-full" />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-0">
              {/* Code Preview */}
              <div className="p-4 border-r border-white/10">
                <CodeBlock code={sampleCode} fileName="auth.ts" />
              </div>

              {/* Agent Analysis */}
              <div className="p-4 space-y-3">
                <div className="text-xs text-text-secondary uppercase tracking-wider font-semibold mb-4">
                  Active Agents
                </div>

                {/* Security Agent */}
                <div className="glass-card rounded-xl p-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-git-removed/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-git-removed" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-foreground">Security Agent</span>
                        <span className="text-xs text-git-removed font-medium">2 issues</span>
                      </div>
                      <p className="text-xs text-text-secondary">SQL injection vulnerability detected. Hardcoded query uses unsafe interpolation.</p>
                    </div>
                  </div>
                </div>

                {/* Performance Agent */}
                <div className="glass-card rounded-xl p-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-foreground">Performance Agent</span>
                        <span className="text-xs text-yellow-500 font-medium">1 issue</span>
                      </div>
                      <p className="text-xs text-text-secondary">O(n) loop searching for email. Use Map/Set for O(1) lookups.</p>
                    </div>
                  </div>
                </div>

                {/* Maintainability Agent */}
                <div className="glass-card rounded-xl p-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-ai-meta/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-ai-meta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-foreground">Maintainability Agent</span>
                        <span className="text-xs text-ai-meta font-medium">3 issues</span>
                      </div>
                      <p className="text-xs text-text-secondary">Missing input validation, no error handling, complex function.</p>
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
