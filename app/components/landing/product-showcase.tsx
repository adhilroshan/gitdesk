"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/app/lib/utils";
import { GitBranch, Shield, Zap, Terminal } from "lucide-react";

interface Feature {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
    image: string;
}

const features: Feature[] = [
    {
        id: "review",
        title: "AI Security Agent",
        description: "Your automated security partner. GitDesk analyzes every line of code for vulnerabilities, exposed secrets, and logic errors before you commit. It's like having a senior security engineer in your pocket.",
        icon: Shield,
        image: "/screenshots/Screenshot (5).png"
    },
    {
        id: "history",
        title: "Smart Git Graph",
        description: "Visualize your repository history with clarity. Our custom-built graph engine renders complex merge strategies and branch structures beautifully, giving you instant context on your project's evolution.",
        icon: GitBranch,
        image: "/screenshots/Screenshot (2).png"
    },
    {
        id: "worktrees",
        title: "Native Worktrees",
        description: "Switch contexts instantly without stashing. GitDesk treats Git Worktrees as first-class citizens, allowing you to work on multiple features simultaneously in parallel directories.",
        icon: Zap,
        image: "/screenshots/Screenshot (1).png"
    },
    {
        id: "workflows",
        title: "Agentic Workflows",
        description: "Orchestrate specialized AI agents to handle complex refactors and security hardening. Supervise the swarm as they autonomously improve your code integrity.",
        icon: Zap,
        image: "/screenshots/Screenshot (3).png"
    }
];

export function ProductShowcase() {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <section className="py-32 relative bg-bg-app border-b border-border-base">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-base tracking-tight">
                        Built for <span className="text-aurora-2">Velocity.</span>
                    </h2>
                    <p className="text-xl text-text-muted">
                        Every tool you need to ship secure code, consolidated into one beautiful native interface.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Tabs / Content */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        {features.map((feature, index) => {
                            const isActive = activeFeature === index;
                            return (
                                <button
                                    key={feature.id}
                                    onClick={() => setActiveFeature(index)}
                                    className={cn(
                                        "group flex items-start gap-5 p-6 rounded-xl transition-all duration-300 text-left border border-transparent",
                                        isActive
                                            ? "bg-bg-elevated border-border-highlight shadow-lg"
                                            : "hover:bg-bg-panel hover:border-border-subtle"
                                    )}
                                >
                                    <div className={cn(
                                        "shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300",
                                        isActive ? "bg-aurora-1/10 text-aurora-1" : "bg-bg-card text-text-muted group-hover:text-text-base border border-border-subtle"
                                    )}>
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className={cn(
                                            "text-lg font-semibold mb-2 transition-colors",
                                            isActive ? "text-text-base" : "text-text-subtle group-hover:text-text-base"
                                        )}>
                                            {feature.title}
                                        </h3>
                                        <p className={cn(
                                            "text-sm leading-relaxed transition-colors",
                                            isActive ? "text-text-muted" : "text-text-dim"
                                        )}>
                                            {feature.description}
                                        </p>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Visual / Screenshot */}
                    <div className="lg:col-span-7 pb-8 lg:pb-0">
                        <div className="relative aspect-[16/10] w-full rounded-2xl border border-border-highlight bg-bg-card shadow-2xl overflow-hidden glass">
                            {/* Inner glow */}
                            <div className="absolute inset-0 bg-aurora-1/5 pointer-events-none" />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeFeature}
                                    initial={{ opacity: 0, x: 20, scale: 0.98 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: -20, scale: 0.98 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 p-1"
                                >
                                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-bg-app">
                                        <Image
                                            src={features[activeFeature].image}
                                            alt={features[activeFeature].title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

