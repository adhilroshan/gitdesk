"use client";

import { motion } from "framer-motion";
import { Github, Star, Shield, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden bg-bg-app border-b border-border-base">

            {/* Geometric Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:64px_64px]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full mix-blend-screen" />
            </div>

            <div className="container relative z-10 px-4 text-center max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-lg bg-border-subtle/50 border border-border-highlight backdrop-blur-md">
                        <Terminal className="w-4 h-4 text-primary" />
                        <span className="text-sm font-mono font-medium text-text-muted tracking-wide">
                            PUBLIC BETA v0.1.0
                        </span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black font-mono tracking-tighter mb-8 text-text-base leading-none"
                >
                    CODE INTEGRITY
                    <span className="block text-primary mt-2">
                        REIMAGINED.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto mb-12 font-sans leading-relaxed"
                >
                    Your AI-native security partner. Catch vulnerabilities, secrets, and bugs <span className="text-text-base font-semibold">before you push</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                >
                    <Link
                        href="https://github.com/adhilroshan/gitdesk/releases/latest"
                        className="group relative h-14 px-8 rounded-lg bg-primary hover:bg-primary-hover text-white font-bold font-mono text-base flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    >
                        <span>DOWNLOAD BETA</span>
                        <div className="bg-white/20 p-1 rounded-sm">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:rotate-90 transition-transform">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </div>
                    </Link>
                    <Link
                        href="https://github.com/adhilroshan/gitdesk-io"
                        target="_blank"
                        className="h-14 px-8 rounded-lg bg-secondary hover:bg-secondary-hover text-text-base font-semibold font-mono text-base flex items-center justify-center gap-3 border border-border-base transition-all"
                    >
                        <Github className="w-5 h-5" />
                        <span>STAR ON GITHUB</span>
                    </Link>
                </motion.div>

                {/* Trust/Rating Block */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center gap-8 mb-16 text-text-muted"
                >
                    <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-500" />
                        <span className="font-mono text-sm">Enterprise Security</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                            ))}
                        </div>
                        <span className="font-mono text-sm">Developer Loved</span>
                    </div>
                </motion.div>

                {/* Hero Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "backOut" }}
                    className="relative mx-auto max-w-6xl rounded-xl border border-border-active/30 bg-bg-card shadow-2xl overflow-hidden group"
                >
                    <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-primary via-indigo-500 to-primary" />
                    <div className="bg-bg-panel p-2 flex items-center gap-2 border-b border-border-base">
                        <div className="flex gap-2 px-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                        </div>
                        <div className="text-xs font-mono text-text-dim px-2">gitdesk-preview — 85% clean</div>
                    </div>
                    <div className="aspect-[16/10] relative bg-bg-app">
                        <Image
                            src="/screenshots/Screenshot (1).png"
                            alt="GitDesk Interface"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Overlay Glare */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 pointer-events-none group-hover:opacity-75 transition-opacity duration-700" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

