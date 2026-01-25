import { GlassCard } from "./ui/glass-card";
import { CodeBlock } from "./ui/code-block";

const beforeCode = `export async function login(req: Request) {
  const email = req.body.email;
  const password = req.body.password;

  // Direct SQL - vulnerable to injection!
  const query = \`SELECT * FROM users WHERE email = '\${email}'\`;

  // O(n) search instead of O(1)
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return users[i];
    }
  }

  // SECRET LEAKED - API key hardcoded!
  const API_KEY = "sk_live_51AbCdEf1234567890";
  const response = await fetch('https://api.example.com', {
    headers: { 'Authorization': \`Bearer \${API_KEY}\` }
  });

  return db.execute(query);
}`;

const afterCode = `import { hash, compare } from '@/lib/crypto';
import { findUserByEmail } from '@/lib/db/queries';
import { apiClient } from '@/lib/api/client';

export async function login(req: Request) {
  // Input validation
  const { email, password } = await loginSchema.parseAsync(req.body);

  // Parameterized query - injection safe
  const user = await findUserByEmail(email);

  // Constant-time comparison
  if (!user || !(await compare(password, user.passwordHash))) {
    throw new UnauthorizedError('Invalid credentials');
  }

  // API key loaded from secure environment
  const response = await apiClient.fetch('/user', {
    headers: apiClient.getAuthHeaders()
  });

  return { user: sanitizeUser(user) };
}`;

const fixes = [
  {
    agent: "Security Agent",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    color: "text-git-removed",
    bgColor: "bg-git-removed/10",
    fixes: [
      "Replaced raw SQL with parameterized queries",
      "Added input validation with schema",
      "Implemented constant-time password comparison",
    ],
  },
  {
    agent: "Secret Scanning Agent",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    color: "text-git-removed",
    bgColor: "bg-git-removed/10",
    fixes: [
      "Detected leaked Stripe API key (sk_live_*)",
      "Moved API credentials to environment variables",
      "Created secure API client with auth headers",
    ],
  },
  {
    agent: "Performance Agent",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    fixes: [
      "Replaced O(n) loop with indexed database query",
      "Added proper caching for user lookups",
    ],
  },
  {
    agent: "Maintainability Agent",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "text-ai-meta",
    bgColor: "bg-ai-meta/10",
    fixes: [
      "Extracted queries to separate module",
      "Added proper error handling with typed errors",
      "Improved type safety with schema validation",
    ],
  },
];

export function AgentShowcase() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-ui-primary/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-base">
            Watch AI agents <span className="text-gradient">fix your code</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            See how four specialized agents work together to transform vulnerable code into production-ready implementations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Before Code */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-git-removed" />
              <span className="text-sm font-medium text-text-muted">Before</span>
            </div>
            <CodeBlock code={beforeCode} fileName="auth.ts" highlights={[
              { line: 5, type: "removed" },
              { line: 8, type: "removed" },
              { line: 9, type: "removed" },
              { line: 19, type: "removed" },
            ]} />
          </div>

          {/* After Code */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-git-added" />
              <span className="text-sm font-medium text-text-muted">After</span>
            </div>
            <CodeBlock code={afterCode} fileName="auth.ts" highlights={[
              { line: 2, type: "added" },
              { line: 3, type: "added" },
              { line: 5, type: "added" },
              { line: 8, type: "added" },
              { line: 10, type: "added" },
            ]} />
          </div>
        </div>

        {/* Agent Fixes Breakdown */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fixes.map((fix, index) => (
            <GlassCard key={index} className="p-5 border border-border-subtle bg-panel/30">
              <div className={`w-10 h-10 rounded-lg ${fix.bgColor} ${fix.color} flex items-center justify-center mb-4`}>
                {fix.icon}
              </div>
              <h4 className="font-semibold mb-3 text-text-base">{fix.agent}</h4>
              <ul className="space-y-2">
                {fix.fixes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                    <svg className="w-4 h-4 text-git-added flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
