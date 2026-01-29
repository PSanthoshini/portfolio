"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50/50">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
                <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-blue-200/50 rounded-full blur-[100px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-200/50 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
            </div>

            <div className="container-width relative z-10 flex flex-col items-center text-center py-12 md:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-xs md:text-sm font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50/80 rounded-full border border-indigo-100">
                        Available for hire
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-5xl text-4xl sm:text-5xl font-black tracking-tight text-slate-900 md:text-7xl lg:text-8xl mb-8"
                >
                    Potnuru <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-300% animate-gradient">Santhoshini</span> <br />
                    Full Stack Software Engineer.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl text-base md:text-xl text-slate-600 mb-10 leading-relaxed px-4 md:px-0"
                >
                    Driving end-to-end full-stack ownership with a focus on performance-focused development. I build scalable frontend and backend experiences that solve real-world value.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <Link
                        href="/projects"
                        className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                    >
                        View Projects
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 flex items-center justify-center"
                    >
                        Contact Me
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-16 flex items-center gap-6 text-slate-400"
                >
                    <a href="https://github.com/PSanthoshini" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
                        <Github className="w-6 h-6" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/santhoshini-potnuru-534798244/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
                        <Linkedin className="w-6 h-6" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
