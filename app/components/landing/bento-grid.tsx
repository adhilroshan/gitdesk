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

interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    className?: string;
    delay?: number;
}

function FeatureCard({ title, description, icon, className, delay = 0 }: FeatureCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay }}
            className={cn(
                "glass-card p-6 rounded-xl flex flex-col justify-start group hover:bg-ui-secondary/30",
                className
            )}
        >
            <div className="mb-4">
                <div className="w-10 h-10 rounded-md bg-ui-secondary border border-border-subtle flex items-center justify-center text-text-base group-hover:bg-ui-primary-hover group-hover:text-black transition-colors">
                    {icon}
                </div>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2 text-text-base">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
}

export function BentoGrid() {
    return (
        <section className="py-24 relative border-b border-border-subtle bg-bg-app">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-base">
                        Everything needed for <span className="text-text-muted">Modern Git.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">
                    {/* Large Card */}
                    <FeatureCard
                        title="Native Worktrees Support"
                        description="Manage multiple branches simultaneously without switching contexts. worktrees are first-class citizens in GitDesk."
                        icon={<GitBranch className="w-5 h-5" />}
                        className="md:col-span-2 md:row-span-2"
                    />

                    {/* Tall Card */}
                    <FeatureCard
                        title="AI Security Agent"
                        description="Proactive vulnerability scanning that catches secrets and insecure patterns before you commit."
                        icon={<Shield className="w-5 h-5" />}
                        className="md:row-span-2"
                        delay={0.1}
                    />

                    {/* Regular Cards - Adjusted Spans */}
                    <FeatureCard
                        title="LSP Integration"
                        description="Direct integration with Language Servers for precise diagnostics."
                        icon={<Code2 className="w-5 h-5" />}
                        className="md:col-span-2"
                        delay={0.2}
                    />
                    <FeatureCard
                        title="Performance Review"
                        description="Automated complexity analysis and performance impact."
                        icon={<Zap className="w-5 h-5" />}
                        delay={0.3}
                    />

                    <FeatureCard
                        title="Agentic Workflow"
                        description="Orchestrate multiple AI agents to solve complex refactoring tasks."
                        icon={<Bot className="w-5 h-5" />}
                        className="md:col-span-3"
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
}
