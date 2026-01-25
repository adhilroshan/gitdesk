"use client";

import { motion } from "framer-motion";
import {
    GitBranch,
    Shield,
    Zap,
    Code2,
    Bot
} from "lucide-react";
import { cn } from "@/app/lib/utils";
import { SpotlightCard } from "@/app/components/ui/spotlight-card";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ElementType;
    className?: string;
    delay?: number;
    spotlight?: string;
}

function FeatureCard({ title, description, icon: Icon, className, delay = 0, spotlight }: FeatureCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            className={cn("h-full", className)}
        >
            <SpotlightCard className="h-full p-8 flex flex-col justify-start" spotlightColor={spotlight}>
                <div className="mb-6">
                    <div className="w-12 h-12 rounded-xl bg-bg-elevated border border-border-subtle flex items-center justify-center text-text-base shadow-sm">
                        <Icon className="w-6 h-6" />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-3 text-text-base">{title}</h3>
                    <p className="text-text-muted text-base leading-relaxed">{description}</p>
                </div>
            </SpotlightCard>
        </motion.div>
    );
}

export function BentoGrid() {
    return (
        <section className="py-32 relative border-b border-border-base bg-bg-app overflow-hidden">
            {/* Background glow for section */}
            <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[400px] bg-aurora-1/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-base tracking-tight">
                        Everything needed for <span className="text-aurora-4">Modern Git.</span>
                    </h2>
                    <p className="text-xl text-text-muted">
                        Replacing your fragmented toolchain with one cohesive, high-performance platform.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
                    {/* Large Card */}
                    <FeatureCard
                        title="Native Worktrees Support"
                        description="Stop stashing. Manage multiple branches simultaneously in parallel directories. Worktrees are treated as first-class citizens, making context switching instant."
                        icon={GitBranch}
                        className="md:col-span-2 md:row-span-2"
                        spotlight="rgba(99, 102, 241, 0.25)" // Aurora-1
                    />

                    {/* Tall Card */}
                    <FeatureCard
                        title="AI Security Agent"
                        description="Proactive vulnerability scanning that catches secrets (API keys, tokens) and insecure patterns before you commit. Runs locally, keeping your code private."
                        icon={Shield}
                        className="md:row-span-2"
                        delay={0.1}
                        spotlight="rgba(139, 92, 246, 0.25)" // Aurora-2
                    />

                    {/* Regular Cards - Adjusted Spans */}
                    <FeatureCard
                        title="LSP Integration"
                        description="Direct integration with Language Servers for precise diagnostics and auto-fix capabilities."
                        icon={Code2}
                        className="md:col-span-2"
                        delay={0.2}
                        spotlight="rgba(6, 182, 212, 0.25)" // Aurora-4
                    />
                    <FeatureCard
                        title="Performance Review"
                        description="Automated complexity analysis and performance impact scoring for every change."
                        icon={Zap}
                        delay={0.3}
                        spotlight="rgba(217, 70, 239, 0.25)" // Aurora-3
                    />

                    <FeatureCard
                        title="Agentic Workflow"
                        description="Orchestrate multiple AI agents to solve complex refactoring tasks autonomously under your supervision."
                        icon={Bot}
                        className="md:col-span-3"
                        delay={0.4}
                        spotlight="rgba(255, 255, 255, 0.2)"
                    />
                </div>
            </div>
        </section>
    );
}
