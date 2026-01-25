"use client";

import { motion } from "framer-motion";

const techs = [
    "Rust", "Tauri", "Next.js", "React", "TypeScript",
    "Tailwind CSS", "LanceDB", "Anthropic", "OpenAI",
    "Git", "GitHub", "VS Code"
];

export function TechMarquee() {
    return (
        <section className="py-12 bg-bg-app overflow-hidden">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-xs font-medium text-text-muted uppercase tracking-widest">Powered by modern best-in-class tech</p>
            </div>
            <div className="flex overflow-hidden relative">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-bg-app to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-bg-app to-transparent z-10"></div>

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40,
                    }}
                    className="flex whitespace-nowrap gap-16 px-8 items-center"
                >
                    {[...techs, ...techs].map((tech, i) => (
                        <span
                            key={i}
                            className="text-lg font-medium text-text-disabled hover:text-text-base transition-colors cursor-default"
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
