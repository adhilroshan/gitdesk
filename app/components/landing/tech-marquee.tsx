"use client";

import { motion } from "framer-motion";

const techs = [
    "Rust", "Tauri", "Next.js", "React", "TypeScript",
    "Tailwind CSS", "LanceDB", "Anthropic", "OpenAI",
    "Git", "GitHub", "VS Code"
];

export function TechMarquee() {
    return (
        <section className="py-12 border-y border-border-subtle bg-bg-app/30 backdrop-blur-xl overflow-hidden shadow-inner">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-sm font-semibold text-text-subtle uppercase tracking-[0.2em] animate-pulse">Built with modern power</p>
            </div>
            <div className="flex overflow-hidden relative">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-bg-app to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-bg-app to-transparent z-10"></div>

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                    }}
                    className="flex whitespace-nowrap gap-16 px-8"
                >
                    {[...techs, ...techs].map((tech, i) => (
                        <span
                            key={i}
                            className="text-2xl font-bold text-text-muted/60 hover:text-text-glow hover:scale-110 transition-all duration-300 cursor-default shadow-black drop-shadow-lg"
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
