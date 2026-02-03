"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Scene from "./Three/Scene";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Background Decor Layer 2 */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-1 pointer-events-none opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-cyan-500 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-purple-600 rounded-full blur-[120px]"></div>
            </div>

            <div className="container-width relative z-10 flex flex-col items-center text-center py-12 md:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-xs md:text-sm font-bold tracking-wider text-cyan-400 uppercase bg-cyan-950/30 rounded-full border border-cyan-500/30">
                        Available for hire
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-3xl text-3xl sm:text-4xl font-black tracking-tight text-white md:text-6xl lg:text-7xl mb-6 leading-[1.1]"
                >
                    Potnuru <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-300% animate-gradient drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">Santhoshini</span> <br />
                    <span className="text-slate-300">Software Engineer.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl text-lg md:text-2xl text-slate-400 mb-12 leading-relaxed px-4 md:px-0"
                >
                    Building high-performance, immersive digital experiences with
                    <span className="text-cyan-400 font-bold"> Full-Stack</span> mastery.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto px-4"
                >
                    <Link
                        href="/projects"
                        className="group relative w-full sm:w-auto px-10 py-5 text-lg font-bold text-white bg-transparent rounded-full overflow-hidden transition-all active:scale-95 flex items-center justify-center gap-2"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 transition-transform group-hover:scale-110"></div>
                        <span className="relative flex items-center gap-2">
                            View Projects
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto px-10 py-5 text-lg font-bold text-slate-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all active:scale-95 flex items-center justify-center"
                    >
                        Contact Me
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-20 flex items-center gap-8 text-slate-500"
                >
                    <a href="https://github.com/PSanthoshini" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                        <Github className="w-8 h-8" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/santhoshini-potnuru-534798244/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
                        <Linkedin className="w-8 h-8" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

