"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
    return (
        <section className="py-24 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-ui-primary/5" />
            <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-ui-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
            <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-state-review/20 rounded-full blur-[100px] animate-pulse-glow delay-1000" />

            <div className="container mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Ready to ship <span className="text-gradient">better code?</span>
                    </h2>
                    <p className="text-xl text-text-muted mb-10 leading-relaxed">
                        Join developers who are saving hours on code reviews and shipping with confidence.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/download"
                            className="h-14 px-8 rounded-full bg-ui-primary hover:bg-ui-primary-hover text-white font-bold text-lg flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_30px_rgba(139,92,246,0.5)]"
                        >
                            <Terminal className="w-5 h-5" />
                            Start Free Trial
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
