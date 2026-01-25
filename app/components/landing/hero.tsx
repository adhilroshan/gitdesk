"use client";

import { motion } from "framer-motion";
import { Github, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden pt-20 border-b border-border-subtle bg-bg-app">
            {/* Minimal Background Grid */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-linear-to-t from-bg-app via-transparent to-transparent" />
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-ui-secondary border border-border-base shadow-xs"
                >
                    <Image src="/logo/default.svg" alt="GitDesk Logo" width={16} height={16} className="rounded-sm" />
                    <span className="text-sm font-medium text-text-subtle">
                        v0.1.0 Public Beta
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-5xl md:text-8xl font-bold tracking-tight mb-8 text-text-base"
                >
                    Code Integrity, <br />
                    <span className="text-text-muted">reimagined for AI.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="text-xl md:text-2xl text-text-subtle max-w-2xl mx-auto mb-12 leading-relaxed font-light"
                >
                    GitDesk is your proactive AI security partner.
                    Catch bugs and vulnerabilities before they initiate.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/download"
                        className="h-12 px-6 rounded-md bg-white text-black hover:bg-gray-200 font-semibold text-base flex items-center gap-2 transition-all shadow-sm"
                    >
                        <Terminal className="w-4 h-4" />
                        Download for Windows
                    </Link>
                    <Link
                        href="https://github.com/adhilroshan/gitdesk-io"
                        target="_blank"
                        className="h-12 px-6 rounded-md bg-transparent border border-border-emphasis hover:bg-ui-secondary text-text-base font-medium text-base flex items-center gap-2 transition-all"
                    >
                        <Github className="w-4 h-4" />
                        Star on GitHub
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
