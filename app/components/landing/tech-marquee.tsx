"use client";

import { motion } from "framer-motion";

const techs = [
    "Rust", "Tauri", "Next.js", "React", "TypeScript",
    "Tailwind CSS", "LanceDB", "Anthropic", "OpenAI",
    "Git", "GitHub", "VS Code"
];

export function TechMarquee() {
    return (
        <section className="py-12 border-y border-ui-border-subtle bg-bg-app/50 backdrop-blur-sm overflow-hidden">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-sm font-semibold text-text-muted uppercase tracking-widest">Built with modern power</p>
            </div>
            <div className="flex overflow-hidden">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                    className="flex whitespace-nowrap gap-16 px-8"
                >
                    {[...techs, ...techs].map((tech, i) => (
                        <span
                            key={i}
                            className="text-2xl font-bold text-text-disabled hover:text-text-base transition-colors cursor-default"
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
