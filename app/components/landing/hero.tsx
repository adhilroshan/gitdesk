"use client";

import { motion } from "framer-motion";
import { Github, Terminal } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ui-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-state-review/20 rounded-full blur-[100px] animate-pulse-glow delay-1000" />
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-ui-secondary/50 border border-ui-border-subtle backdrop-blur-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ui-success opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-ui-success"></span>
                    </span>
                    <span className="text-sm font-medium text-text-muted">
                        v0.1.0 Public Beta is Live
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                >
                    Code Integrity, <br />
                    <span className="text-gradient"> reimagined for AI.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-text-muted max-w-2xl mx-auto mb-10"
                >
                    GitDesk acts as your proactive AI security and code quality partner.
                    Catch bugs, vulnerabilities, and bad patterns before they ever reach your repository.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/download"
                        className="h-12 px-8 rounded-lg bg-ui-primary hover:bg-ui-primary-hover text-white font-medium flex items-center gap-2 transition-all hover:scale-105"
                    >
                        <Terminal className="w-5 h-5" />
                        Download for Windows
                    </Link>
                    <Link
                        href="https://github.com/adhilroshan/gitdesk-io"
                        target="_blank"
                        className="h-12 px-8 rounded-lg bg-ui-secondary hover:bg-ui-secondary-hover border border-ui-border text-text-base font-medium flex items-center gap-2 transition-all hover:scale-105"
                    >
                        <Github className="w-5 h-5" />
                        Star on GitHub
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-bg-app to-transparent pointer-events-none"
            />
        </section>
    );
}
