import Link from "next/link";
import { Github, Twitter } from "lucide-react";

import Image from "next/image";

export function Footer() {
    return (
        <footer className="py-12 border-t border-border-subtle bg-bg-panel relative z-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Image src="/logo/default.svg" alt="GitDesk Logo" width={32} height={32} className="rounded-md bg-ui-secondary border border-border-base" />
                        <span className="font-semibold text-text-base tracking-tight">GitDesk</span>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-text-muted hover:text-text-subtle transition-colors">
                        <Link href="#" className="hover:text-text-base transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-text-base transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-text-base transition-colors">Contact Support</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="https://github.com/adhilroshan/gitdesk-io" target="_blank" className="text-text-muted hover:text-text-base transition-colors">
                            <Github className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-text-muted hover:text-text-base transition-colors">
                            <Twitter className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm text-text-disabled">
                    &copy; {new Date().getFullYear()} GitDesk. The AI-Native Code Integrity Platform.
                </div>
            </div>
        </footer>
    );
}
