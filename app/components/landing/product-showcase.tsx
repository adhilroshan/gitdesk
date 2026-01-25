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
        <section ref={containerRef} className="py-24 relative overflow-hidden bg-bg-app">
            <div className="container mx-auto px-4 mb-16 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-base">
                    Power at your Fingertips.
                </h2>
                <p className="text-xl text-text-muted max-w-2xl mx-auto">
                    A native experience designed for speed, clarity, and control.
                </p>
            </div>

            <motion.div
                style={{ x }}
                className="flex gap-8 px-4 w-max"
            >
                {screenshots.map((src, index) => (
                    <motion.div
                        key={index}
                        className="relative w-[600px] h-[400px] rounded-lg overflow-hidden border border-border-subtle shadow-lg shrink-0 group hover:border-border-emphasis transition-colors bg-bg-panel"
                    >
                        <Image
                            src={src}
                            alt={`GitDesk Screenshot ${index + 1}`}
                            fill
                            className="object-cover object-top"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
