"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
    return (
        <section className="py-24 px-4 bg-bg-app border-t border-border-subtle relative overflow-hidden">
            {/* Background Block */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
            </div>

            <div className="container mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="max-w-4xl mx-auto bg-bg-card border border-border-highlight p-12 rounded-xl shadow-2xl relative overflow-hidden group"
                >
                    <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-primary via-indigo-500 to-primary" />

                    <h2 className="text-4xl md:text-5xl font-black font-mono mb-6 text-text-base tracking-tight">
                        READY TO SHIP <span className="text-primary">BETTER CODE?</span>
                    </h2>
                    <p className="text-xl text-text-muted mb-10 leading-relaxed max-w-xl mx-auto font-sans">
                        Download GitDesk beta for Windows and start shipping proactive code integrity today.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="https://github.com/adhilroshan/gitdesk/releases/latest"
                            className="h-14 px-8 rounded-lg bg-primary hover:bg-primary-hover text-white font-bold font-mono text-lg flex items-center gap-3 transition-all shadow-lg hover:shadow-primary/25 hover:scale-[1.02]"
                        >
                            <Terminal className="w-5 h-5" />
                            DOWNLOAD FOR WINDOWS
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
