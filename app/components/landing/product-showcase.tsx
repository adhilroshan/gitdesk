"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const screenshots = [
    "/screenshots/Screenshot (1).png",
    "/screenshots/Screenshot (2).png",
    "/screenshots/Screenshot (3).png",
    "/screenshots/Screenshot (4).png",
    "/screenshots/Screenshot (5).png",
    "/screenshots/Screenshot (6).png",
    "/screenshots/Screenshot (8).png",
];

export function ProductShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section ref={containerRef} className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-ui-secondary/5 skew-y-12 transform origin-top-left scale-150 pointer-events-none" />

            <div className="container mx-auto px-4 mb-16 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    <span className="text-gradient">Power at your Fingertips.</span>
                </h2>
                <p className="text-xl text-text-muted max-w-2xl mx-auto">
                    A native experience designed for speed, clarity, and control.
                </p>
            </div>

            <motion.div
                style={{ x, rotateX: 5 }}
                className="flex gap-10 px-4 w-max perspective-[1000px] perspective-origin-center"
            >
                {screenshots.map((src, index) => (
                    <motion.div
                        key={index}
                        className="relative w-[600px] h-[400px] rounded-xl overflow-hidden glass-card border-border-subtle shadow-2xl shrink-0 group hover:border-ui-primary/50"
                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                    >
                        <div className="absolute inset-0 bg-linear-to-t from-bg-app/80 to-transparent z-10 opacity-50 group-hover:opacity-0 transition-opacity duration-300" />
                        <Image
                            src={src}
                            alt={`GitDesk Screenshot ${index + 1}`}
                            fill
                            className="object-cover object-top"
                        />
                        {/* Reflection/Glow Effect */}
                        <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </motion.div>
                ))}
                {/* Duplicate for infinite loop illusion if needed, or just enough content */}
            </motion.div>
        </section>
    );
}
