"use client";

import Link from "next/link";
import { Github, Linkedin, Heart } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-white border-t border-slate-100 py-12">
            <div className="container-width flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="flex flex-col items-center md:items-start gap-2">
                    <Link href="/" className="text-xl font-black tracking-tighter text-slate-900">
                        San<span className="text-blue-600">thoshini.</span>
                    </Link>
                    <p className="text-sm text-slate-500">
                        © {currentYear} Santhoshini. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/PSanthoshini" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                        <Github className="w-5 h-5" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/santhoshini-potnuru-534798244/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-700 transition-colors">
                        <Linkedin className="w-5 h-5" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
