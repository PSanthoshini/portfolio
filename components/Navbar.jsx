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
        <header className="sticky top-0 z-[100] w-full bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
            <div className="container-width flex h-16 md:h-24 items-center justify-between">
                <Link href="/" className="text-2xl md:text-3xl font-black tracking-tighter text-white group relative z-[101]">
                    San<span className="text-cyan-400 group-hover:text-purple-500 transition-colors">thoshini.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-12 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`relative text-sm font-bold tracking-widest uppercase transition-all ${isActive(link.href)
                                    ? 'text-cyan-400'
                                    : 'text-slate-400 hover:text-white'
                                }`}
                        >
                            {link.label}
                            {isActive(link.href) && (
                                <motion.div
                                    layoutId="nav-active"
                                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden relative z-[101] p-2 -mr-2 text-white hover:text-cyan-400 transition-colors focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsOpen(false)}
                                className="fixed inset-0 z-[99] bg-slate-950/90 backdrop-blur-md md:hidden"
                            />

                            <motion.div
                                initial={{ opacity: 0, x: "100%" }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: "100%" }}
                                transition={{ type: "spring", damping: 30, stiffness: 200 }}
                                className="fixed top-0 right-0 bottom-0 w-[80vw] z-[100] bg-slate-900 border-l border-white/10 flex flex-col items-center justify-center space-y-10 md:hidden px-6 shadow-2xl"
                            >
                                {/* Decorative Background */}
                                <div className="absolute top-[-10%] left-[-10%] w-[20rem] h-[20rem] bg-cyan-500/10 rounded-full blur-[80px] -z-10"></div>
                                <div className="absolute bottom-[-10%] right-[-10%] w-[20rem] h-[20rem] bg-purple-500/10 rounded-full blur-[100px] -z-10"></div>

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
                                            className={`text-4xl font-black tracking-tight transition-all ${isActive(link.href)
                                                ? "text-cyan-400"
                                                : "text-slate-600 hover:text-white"
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}

