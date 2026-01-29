"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path) => pathname === path;

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/experience", label: "Experience" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 z-[100] w-full bg-white md:glass">
            <div className="container-width flex h-16 md:h-20 items-center justify-between">
                <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-slate-900 group relative z-[101]">
                    San<span className="text-blue-600 group-hover:text-blue-700 transition-colors">thoshini.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-10 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden relative z-[101] p-2 -mr-2 text-slate-900 hover:text-blue-600 transition-colors focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center space-y-8 md:hidden px-6"
                        >
                            {/* Decorative Background */}
                            <div className="absolute top-[-10%] left-[-10%] w-[20rem] h-[20rem] bg-blue-50 rounded-full blur-[80px] -z-10"></div>
                            <div className="absolute bottom-[-10%] right-[-10%] w-[20rem] h-[20rem] bg-indigo-50 rounded-full blur-[80px] -z-10"></div>

                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="w-full text-center"
                                >
                                    <Link
                                        href={link.href}
                                        className={`text-4xl font-bold transition-all ${isActive(link.href)
                                            ? "text-blue-600"
                                            : "text-slate-400 hover:text-slate-900"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
