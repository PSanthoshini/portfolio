"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path) => pathname === path;

    return (
        <header className="sticky top-0 z-50 w-full glass">
            <div className="container-width flex h-20 items-center justify-between">
                <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900 group">
                    San<span className="text-blue-600 group-hover:text-blue-700 transition-colors">thoshini.</span>
                </Link>

                <nav className="hidden md:flex gap-10 items-center">
                    <Link
                        href="/"
                        className={`nav-link ${isActive('/') ? 'active' : ''}`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                    >
                        About
                    </Link>
                    <Link
                        href="/experience"
                        className={`nav-link ${isActive('/experience') ? 'active' : ''}`}
                    >
                        Experience
                    </Link>
                    <Link
                        href="/projects"
                        className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
                    >
                        Projects
                    </Link>
                    <Link
                        href="/contact"
                        className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                    >
                        Contact
                    </Link>
                </nav>

                <div className="md:hidden">
                    {/* Compact mobile menu trigger if needed later */}
                </div>
            </div>
        </header>
    );
}
