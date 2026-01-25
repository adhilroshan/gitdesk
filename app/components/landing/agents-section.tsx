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
        <section className="py-24 bg-bg-app border-b border-border-subtle relative overflow-hidden">

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-base">
                        Meet your <span className="text-text-subtle">AI Swarm.</span>
                    </h2>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto">
                        Specialized agents working together to perfect your codebase.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Agent Selection List */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-2">
                        {agents.map((agent) => (
                            <button
                                key={agent.id}
                                onClick={() => setActiveAgent(agent)}
                                className={cn(
                                    "p-4 rounded-lg text-left transition-all border group",
                                    activeAgent.id === agent.id
                                        ? "bg-bg-elevated border-border-emphasis shadow-sm"
                                        : "bg-transparent border-transparent hover:bg-ui-secondary/50"
                                )}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={cn("p-2 rounded-md transition-colors", activeAgent.id === agent.id ? "bg-ui-secondary" : "bg-transparent")}>
                                        <agent.icon className={cn("w-5 h-5", agent.color)} />
                                    </div>
                                    <div>
                                        <h3 className={cn("font-medium text-base transition-colors", activeAgent.id === agent.id ? "text-text-base" : "text-text-muted group-hover:text-text-base")}>
                                            {agent.name}
                                        </h3>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Active Agent Detail View */}
                    <div className="w-full lg:w-2/3">
                        <motion.div
                            key={activeAgent.id}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-bg-panel border border-border-base rounded-xl p-8 md:p-12 shadow-sm"
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 flex items-center gap-3 text-text-base">
                                        {activeAgent.name}
                                        <span className={cn("text-xs px-2 py-0.5 rounded-full border bg-bg-app uppercase tracking-widest font-mono text-text-muted", activeAgent.border)}>Active</span>
                                    </h3>
                                    <p className="text-lg text-text-muted">{activeAgent.description}</p>
                                </div>
                                <div className={cn("p-3 rounded-lg hidden md:block border bg-bg-app", activeAgent.border)}>
                                    <activeAgent.icon className={cn("w-8 h-8", activeAgent.color)} />
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h4 className="font-semibold text-text-subtle uppercase tracking-wider text-xs border-b border-border-subtle pb-2">
                                    Capabilities
                                </h4>
                                <div className="grid gap-3">
                                    {activeAgent.capabilities.map((cap, i) => (
                                        <motion.div
                                            key={cap}
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.05 + (i * 0.05) }}
                                            className="flex items-center gap-3 p-3 rounded-md bg-ui-secondary/30 border border-transparent hover:border-border-subtle transition-colors"
                                        >
                                            <CheckCircle2 className={cn("w-4 h-4 shrink-0", activeAgent.color)} />
                                            <span className="font-medium text-text-base text-sm">{cap}</span>
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
