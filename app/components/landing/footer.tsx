import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-12 border-t border-ui-border-subtle bg-bg-app">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-ui-primary flex items-center justify-center">
                            <span className="text-white font-bold text-sm">G</span>
                        </div>
                        <span className="font-semibold text-text-base">GitDesk</span>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-text-muted">
                        <Link href="#" className="hover:text-ui-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-ui-primary transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-ui-primary transition-colors">Contact Support</Link>
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
                <div className="mt-8 text-center text-sm text-text-subtle">
                    &copy; {new Date().getFullYear()} GitDesk. The AI-Native Code Integrity Platform.
                </div>
            </div>
        </footer>
    );
}
