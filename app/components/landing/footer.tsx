import Link from "next/link";
import { Github, Twitter } from "lucide-react";

import Image from "next/image";

export function Footer() {
    return (
        <footer className="py-12 border-t border-border-base bg-bg-app relative z-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-bg-elevated border border-border-subtle flex items-center justify-center">
                            <Image src="/logo/default.svg" alt="GitDesk Logo" width={20} height={20} className="" />
                        </div>
                        <span className="font-bold text-lg text-text-base tracking-tight">GitDesk</span>
                    </div>

                    <div className="flex items-center gap-8 text-sm font-medium text-text-muted">
                        <Link href="#" className="hover:text-aurora-1 transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-aurora-1 transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-aurora-1 transition-colors">Contact</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="https://github.com/adhilroshan/gitdesk-io" target="_blank" className="p-2 rounded-full text-text-muted hover:text-text-base hover:bg-bg-elevated transition-all border border-transparent hover:border-border-subtle">
                            <Github className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="p-2 rounded-full text-text-muted hover:text-text-base hover:bg-bg-elevated transition-all border border-transparent hover:border-border-subtle">
                            <Twitter className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <p className="text-sm text-text-disabled">
                        &copy; {new Date().getFullYear()} GitDesk. <span className="text-text-dim">Code Integrity, Reimagined.</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
