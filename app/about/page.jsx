"use client";

import { motion } from "framer-motion";
import { User, Code, Database, Sparkles } from "lucide-react";

export default function AboutPage() {
    return (
        <section className="min-h-screen py-24 bg-slate-950 mesh-gradient">
            <div className="container-width relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="flex flex-col lg:flex-row gap-20 items-start">
                        {/* Content */}
                        <div className="flex-1">
                            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tight mb-12">
                                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Me.</span>
                            </h1>

                            <div className="prose prose-xl prose-invert text-slate-400 leading-relaxed mb-12">
                                <p className="mb-8 text-xl">
                                    I am a <span className="font-bold text-cyan-400">Full Stack Software Engineer</span> dedicated to crafting immersive, high-performance digital experiences. I bridge the gap between complex backend logic and pixel-perfect frontend aesthetics.
                                </p>
                                <p className="text-lg">
                                    My approach combines a deep understanding of <span className="text-white font-semibold">architectural patterns</span> with a passion for <span className="text-white font-semibold">modern technologies</span>. I don't just write code; I build engineering solutions that scale.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="glass-card p-8 rounded-3xl border border-white/10"
                                >
                                    <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 border border-cyan-500/20">
                                        <Code className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Architecting</h3>
                                    <p className="text-slate-500 leading-relaxed">
                                        High-performance React ecosystems and modern CSS architectures.
                                    </p>
                                </motion.div>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="glass-card p-8 rounded-3xl border border-white/10"
                                >
                                    <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
                                        <Database className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Engineering</h3>
                                    <p className="text-slate-500 leading-relaxed">
                                        Scalable RESTful services and robust database schemas.
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                        {/* Sidebar / Skills */}
                        <div className="w-full lg:w-1/3 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] p-10 border border-white/10 shadow-2xl">
                            <h3 className="text-2xl font-black text-white mb-10 flex items-center gap-3">
                                <Sparkles className="w-6 h-6 text-cyan-400" />
                                Meta Skills
                            </h3>

                            <div className="space-y-10 text-lg">
                                <div>
                                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Core Languages</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {["Java (J2EE)", "JavaScript (ES6+)"].map(item => (
                                            <span key={item} className="px-5 py-2 bg-slate-900 border border-slate-800 rounded-xl text-sm font-bold text-cyan-300 shadow-lg">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Data Systems</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {["MongoDB", "PostgreSQL", "Oracle"].map(item => (
                                            <span key={item} className="px-5 py-2 bg-slate-900 border border-slate-800 rounded-xl text-sm font-bold text-purple-300 shadow-lg">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Ecosystem</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {["React", "Next.js", "Spring Boot", "Three.js"].map(item => (
                                            <span key={item} className="px-5 py-2 bg-slate-900 border border-slate-800 rounded-xl text-sm font-bold text-pink-300 shadow-lg">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Deployment</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {["GitHub Actions", "Vercel", "Docker"].map(item => (
                                            <span key={item} className="px-5 py-2 bg-slate-900 border border-slate-800 rounded-xl text-sm font-bold text-white shadow-lg">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
