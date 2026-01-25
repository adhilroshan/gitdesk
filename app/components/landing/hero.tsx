"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AuroraBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-aurora-1 opacity-[0.08] blur-[100px] animate-pulse" />
            <div className="absolute top-[10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-aurora-4 opacity-[0.08] blur-[100px] animate-pulse delay-1000" />
            <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-aurora-2 opacity-[0.05] blur-[120px]" />
        </div>
    );
};

export function Hero() {
    return (
        <section className="relative min-h-[95vh] flex flex-col justify-center items-center pt-24 pb-16 overflow-hidden bg-bg-app border-b border-border-base">
            <AuroraBackground />

            {/* Grid Pattern */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            <div className="container relative z-10 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-border-subtle/50 border border-border-highlight backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aurora-4 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-aurora-4"></span>
                        </span>
                        <span className="text-xs font-medium text-text-muted tracking-wide">
                            PUBLIC BETA NOW LIVE
                        </span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl md:text-8xl font-black tracking-tight mb-8 text-text-base leading-[1.1] relative"
                >
                    <span className="block text-transparent bg-clip-text bg-linear-to-b from-white to-white/70">
                        Code Integrity,
                    </span>
                    <span className="block text-transparent bg-clip-text bg-linear-to-r from-aurora-1 via-aurora-2 to-aurora-1 bg-[length:200%_auto] animate-aurora">
                        Reimagined.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Meet GitDesk—your native AI security partner.
                    <br className="hidden md:block" />
                    Proactively catch vulnerabilities, secrets, and bugs <span className="text-text-base font-medium">before</span> you push.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                >
                    <Link
                        href="/download"
                        className="group relative h-12 px-8 rounded-full bg-white text-black font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        <span>Download Beta</span>
                        <div className="w-4 h-4 relative">
                            <div className="absolute inset-0 bg-black rotate-45 transform group-hover:rotate-90 transition-transform duration-300" />
                        </div>
                    </Link>
                    <Link
                        href="https://github.com/adhilroshan/gitdesk-io"
                        target="_blank"
                        className="h-12 px-8 rounded-full bg-border-subtle/50 text-text-base font-medium text-sm flex items-center justify-center gap-2 border border-border-base hover:bg-border-hover transition-all backdrop-blur-sm"
                    >
                        <Github className="w-4 h-4" />
                        <span>Star on GitHub</span>
                    </Link>
                </motion.div>

                {/* Hero Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "backOut" }}
                    className="relative mx-auto max-w-5xl rounded-xl border border-border-highlight bg-bg-card/50 shadow-2xl backdrop-blur-sm overflow-hidden"
                >
                    <div className="absolute top-0 w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    <div className="aspect-[16/10] relative bg-bg-app">
                        <Image
                            src="/screenshots/Screenshot (1).png"
                            alt="GitDesk Interface"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Overlay Glare */}
                        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

