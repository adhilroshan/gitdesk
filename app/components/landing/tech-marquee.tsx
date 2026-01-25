"use client";

import { motion } from "framer-motion";

const techs = [
    "Rust", "Tauri", "Next.js", "React", "TypeScript",
    "Tailwind CSS", "LanceDB", "Anthropic", "OpenAI",
    "Git", "GitHub", "VS Code"
];

export function TechMarquee() {
    return (
        <section className="py-16 bg-bg-app overflow-hidden border-b border-border-base/50">
            <div className="container mx-auto px-4 mb-10 text-center">
                <p className="text-sm font-semibold text-text-subtle uppercase tracking-widest">
                    Built with <span className="text-text-base">Modern Powerhouses</span>
                </p>
            </div>
            <div className="flex overflow-hidden relative fade-mask">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-40 bg-linear-to-r from-bg-app to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-40 bg-linear-to-l from-bg-app to-transparent z-10" />

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30, // Slightly faster for energy
                    }}
                    className="flex whitespace-nowrap gap-6 pl-4 items-center"
                >
                    {[...techs, ...techs].map((tech, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-bg-elevated border border-border-subtle text-base font-medium text-text-muted hover:text-text-base hover:border-border-hover hover:bg-bg-card transition-all cursor-default select-none shadow-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

