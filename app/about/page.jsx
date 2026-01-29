"use client";

import { motion } from "framer-motion";
import { User, Code, Database, Sparkles } from "lucide-react";

export default function AboutPage() {
    return (
        <section className="min-h-screen py-20 bg-white">
            <div className="container-width">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        {/* Content */}
                        <div className="flex-1">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-8">
                                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Me.</span>
                            </h1>

                            <div className="prose prose-lg prose-slate text-slate-600 leading-relaxed mb-10">
                                <p className="mb-6">
                                    I am a <span className="font-bold text-slate-900">Full Stack Software Engineer</span> with extensive experience building end-to-end web applications. I take ownership of the entire development lifecycle, from designing maintainable architectures to deploying production-ready systems.
                                </p>
                                <p className="mb-6">
                                    My focus is on writing clean, maintainable code and dealing with APIs and databases efficiently. I thrive in collaborative environments where I can apply my skills in React, Node.js, and Java to deliver high-quality software solutions.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 bg-slate-50/50 hover:bg-slate-50 rounded-2xl border border-slate-100 transition-colors duration-300">
                                    <div className="w-10 h-10 bg-blue-100/50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                                        <Code className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">Web Development</h3>
                                    <p className="text-sm text-slate-500">
                                        HTML5, CSS3, React.js, Node.js, Express.js
                                    </p>
                                </div>
                                <div className="p-6 bg-slate-50/50 hover:bg-slate-50 rounded-2xl border border-slate-100 transition-colors duration-300">
                                    <div className="w-10 h-10 bg-indigo-100/50 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                                        <Database className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">Backend & APIs</h3>
                                    <p className="text-sm text-slate-500">
                                        RESTful APIs, Spring Boot (Learning), Hibernate
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar / Skills */}
                        <div className="w-full md:w-1/3">

                            <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-blue-600" />
                                Technical Expertise
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">Programming Languages</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["Java", "JavaScript"].map(item => (
                                            <span key={item} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 shadow-sm">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">Databases</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["MongoDB", "MySQL"].map(item => (
                                            <span key={item} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 shadow-sm">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">Full-Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["MERN Stack", "CRUD Operations", "Auth & Authorization"].map(item => (
                                            <span key={item} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 shadow-sm">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">Problem Solving</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["DSA", "Logical Thinking"].map(item => (
                                            <span key={item} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 shadow-sm">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">Tools & Platforms</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["Git & GitHub", "Vercel", "Netlify", "Postman", "VS Code"].map(item => (
                                            <span key={item} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 shadow-sm">
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
