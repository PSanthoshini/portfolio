"use client";

import Link from "next/link";
import { Github, Linkedin, Heart } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-slate-950 border-t border-white/5 py-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

            <div className="container-width flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <Link href="/" className="text-2xl font-black tracking-tighter text-white">
                        San<span className="text-cyan-400">thoshini.</span>
                    </Link>
                </div>

                <div className="flex items-center gap-8">
                    <a href="https://github.com/PSanthoshini" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-all hover:scale-125">
                        <Github className="w-6 h-6" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/santhoshini-potnuru-534798244/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-purple-500 transition-all hover:scale-125">
                        <Linkedin className="w-6 h-6" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}

