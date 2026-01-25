"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
    return (
        <section className="py-24 px-4 bg-bg-app border-t border-border-subtle relative overflow-hidden">
            <div className="container mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-base">
                        Ready to ship better code?
                    </h2>
                    <p className="text-xl text-text-muted mb-10 leading-relaxed max-w-xl mx-auto">
                        Download GitDesk beta for Windows and start shipping proactive code integrity today.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="https://github.com/adhilroshan/gitdesk/releases/latest"
                            className="h-12 px-8 rounded-md bg-white hover:bg-gray-200 text-black font-semibold text-base flex items-center gap-2 transition-all shadow-sm"
                        >
                            <Terminal className="w-4 h-4" />
                            Start Free Trial
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
