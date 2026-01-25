"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Wrench, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/app/lib/utils";

const agents = [
    {
        id: "security",
        name: "Security Agent",
        icon: Shield,
        color: "text-ui-error",
        bg: "bg-ui-error/10",
        border: "border-ui-error/20",
        description: "Scans for vulnerabilities, leaked secrets, and unsafe patterns.",
        capabilities: [
            "Dependency vulnerability scanning",
            "Secret detection (API keys, tokens)",
            "Injection attack prevention analysis",
        ],
    },
    {
        id: "performance",
        name: "Performance Agent",
        icon: Zap,
        color: "text-ui-warning",
        bg: "bg-ui-warning/10",
        border: "border-ui-warning/20",
        description: "Analyzes code complexity and identifies bottlenecks.",
        capabilities: [
            "Big-O complexity warnings",
            "React re-render analysis",
            "Database query optimization tips",
        ],
    },
    {
        id: "maintainability",
        name: "Maintainability Agent",
        icon: Wrench,
        color: "text-ui-success",
        bg: "bg-ui-success/10",
        border: "border-ui-success/20",
        description: "Ensures clean code, proper typing, and best practices.",
        capabilities: [
            "Type safety enforcement",
            "Code smell detection",
            "Documentation coverage checks",
        ],
    },
];

export function AgentsSection() {
    const [activeAgent, setActiveAgent] = useState(agents[0]);

    return (
        <section className="py-24 bg-bg-panel/50 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Meet your <span className="text-gradient">AI Swarm.</span>
                    </h2>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto">
                        Specialized agents working together to perfect your codebase.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Agent Selection List */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-4">
                        {agents.map((agent) => (
                            <button
                                key={agent.id}
                                onClick={() => setActiveAgent(agent)}
                                className={cn(
                                    "p-6 rounded-xl text-left transition-all border outline-hidden group",
                                    activeAgent.id === agent.id
                                        ? "bg-ui-elevated border-border-glow shadow-[0_0_20px_rgba(0,0,0,0.3)] translate-x-2"
                                        : "bg-transparent border-transparent hover:bg-ui-elevated/30 hover:border-border-subtle"
                                )}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={cn("p-3 rounded-lg transition-transform group-hover:scale-110", agent.bg, agent.color)}>
                                        <agent.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className={cn("font-semibold text-lg transition-colors", activeAgent.id === agent.id ? "text-text-base" : "text-text-muted group-hover:text-text-base")}>
                                            {agent.name}
                                        </h3>
                                        <p className="text-sm text-text-muted/60 mt-1 line-clamp-1">
                                            {agent.description}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Active Agent Detail View */}
                    <div className="w-full lg:w-2/3 h-full min-h-[400px]">
                        <motion.div
                            key={activeAgent.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className={cn(
                                "glass-panel p-8 md:p-12 rounded-2xl h-full border-t-4 shadow-2xl relative overflow-hidden",
                                activeAgent.id === 'security' && "border-t-ui-error",
                                activeAgent.id === 'performance' && "border-t-ui-warning",
                                activeAgent.id === 'maintainability' && "border-t-ui-success",
                            )}
                        >
                            <div className={cn("absolute top-0 right-0 w-64 h-64 opacity-10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2",
                                activeAgent.id === 'security' && "bg-ui-error",
                                activeAgent.id === 'performance' && "bg-ui-warning",
                                activeAgent.id === 'maintainability' && "bg-ui-success"
                            )} />

                            <div className="flex items-start justify-between mb-8 relative z-10">
                                <div>
                                    <h3 className="text-3xl font-bold mb-2 flex items-center gap-3">
                                        {activeAgent.name}
                                        <span className={cn("text-xs px-2 py-1 rounded-full bg-bg-app border uppercase tracking-wider font-mono", activeAgent.color, activeAgent.border)}>Active</span>
                                    </h3>
                                    <p className="text-xl text-text-muted">{activeAgent.description}</p>
                                </div>
                                <div className={cn("p-4 rounded-xl hidden md:block shadow-inner", activeAgent.bg, activeAgent.color)}>
                                    <activeAgent.icon className="w-12 h-12" />
                                </div>
                            </div>

                            <div className="space-y-6 relative z-10">
                                <h4 className="font-semibold text-text-subtle uppercase tracking-wider text-sm flex items-center gap-2">
                                    <span className="w-8 h-[1px] bg-text-subtle/50"></span>
                                    Capabilities
                                </h4>
                                <div className="grid gap-4">
                                    {activeAgent.capabilities.map((cap, i) => (
                                        <motion.div
                                            key={cap}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 + (i * 0.1) }}
                                            className="flex items-center gap-3 p-4 rounded-lg bg-bg-app/40 border border-border-subtle hover:border-ui-primary/30 transition-colors"
                                        >
                                            <CheckCircle2 className={cn("w-5 h-5 shrink-0", activeAgent.color)} />
                                            <span className="font-medium text-text-base">{cap}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
