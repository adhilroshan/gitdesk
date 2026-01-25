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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={cn(
                "glass-card p-6 rounded-2xl flex flex-col justify-between group",
                className
            )}
        >
            <div>
                <div className="w-12 h-12 rounded-lg bg-ui-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-ui-primary shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                    {icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-text-base group-hover:text-text-glow transition-colors">{title}</h3>
                <p className="text-text-muted">{description}</p>
            </div>
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="h-1 w-full bg-linear-to-r from-ui-primary to-transparent rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
            </div>
        </motion.div>
    );
}

export function BentoGrid() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-ui-primary/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Everything you need for <span className="text-gradient">Modern Git.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
                    {/* Large Card */}
                    <FeatureCard
                        title="Native Worktrees Support"
                        description="Manage multiple branches simultaneously without switching contexts. worktrees are first-class citizens in GitDesk."
                        icon={<GitBranch className="w-6 h-6" />}
                        className="md:col-span-2 md:row-span-2 bg-linear-to-br from-ui-secondary/80 to-bg-panel/50 border-ui-primary/20"
                    />

                    {/* Tall Card */}
                    <FeatureCard
                        title="AI Security Agent"
                        description="Proactive vulnerability scanning that catches secrets and insecure patterns before you commit."
                        icon={<Shield className="w-6 h-6" />}
                        className="md:row-span-2 border-ui-error/20 bg-ui-error/5 hover:border-ui-error/50"
                        delay={0.1}
                    />

                    {/* Regular Cards */}
                    <FeatureCard
                        title="LSP Integration"
                        description="Direct integration with Language Servers for precise diagnostics."
                        icon={<Code2 className="w-6 h-6" />}
                        delay={0.2}
                    />
                    <FeatureCard
                        title="Performance Review"
                        description="Automated complexity analysis and performance impact predictions."
                        icon={<Zap className="w-6 h-6" />}
                        delay={0.3}
                    />
                    <FeatureCard
                        title="Agentic Workflow"
                        description="Orchestrate multiple AI agents to solve complex refactoring tasks."
                        icon={<Bot className="w-6 h-6" />}
                        className="md:col-span-3 bg-linear-to-r from-ui-secondary/50 to-bg-app border-ui-primary/10"
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
}
