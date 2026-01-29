"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Github, Star } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "JSMCC Website",
        description: "A production-ready responsive website with performance-optimized frontend.",
        tags: ["React.js", "JavaScript"],
        github: null, // Private or client project
        demo: "https://jsmcc.in",
        featured: true
    },
    {
        id: 2,
        title: "Onyx Edu Voyage",
        description: "Education-focused web platform with scalable frontend architecture and backend API integration.",
        tags: ["React.js", "Node.js"],
        github: null, // Private or client project
        demo: "https://onyxeduvoyage.com",
        featured: true
    },
    {
        id: 3,
        title: "Timetable Management System",
        description: "Automated conflict-free timetable generation system that reduced manual scheduling by ~30% with real-time update handling.",
        tags: ["JavaScript"],
        github: "https://github.com/PSanthoshini", // Assuming personal project
        demo: null,
        featured: false
    },
    {
        id: 4,
        title: "Personal Finance Manager",
        description: "Expense tracking and budgeting system with secure data storage and spending analytics.",
        tags: ["Java", "SQL"],
        github: "https://github.com/PSanthoshini", // Assuming personal project
        demo: null,
        featured: false
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

export default function ProjectsPage() {
    return (
        <section className="min-h-screen py-20 bg-slate-50/50">
            <div className="container-width">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Projects.</span>
                    </h1>
                    <p className="text-lg text-slate-600">
                        A collection of projects exploring various technologies and solving real-world problems.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    <FolderGit2 className="w-6 h-6" />
                                </div>
                                <div className="flex gap-3">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 text-xs font-semibold text-slate-500 bg-slate-100 rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 text-center"
                >
                    <a href="https://github.com/PSanthoshini" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all">
                        <Github className="w-4 h-4" />
                        View more on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
