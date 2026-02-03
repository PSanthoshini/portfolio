"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Github, Star } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        id: 0,
        title: "Botaniq Flora",
        description: "A visually rich web app built with modern technologies to help users identify and explore plant species. Features intuitive UI, responsive design, and seamless performance.",
        tags: ["React.js", "Next.js", "Tailwind CSS"],
        github: "https://github.com/PSanthoshini", // Assuming the GitHub repo is present on their profile
        demo: "https://botaniq-flora.vercel.app/",
        featured: true
    },
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
        <section className="min-h-screen py-24 bg-slate-950 mesh-gradient">
            <div className="container-width relative">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mb-16"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight mb-8">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Creations.</span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed">
                        A showcase of engineering excellence, combining aesthetics with scalable code.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                rotateX: 2,
                                rotateY: -2,
                                transition: { duration: 0.2 }
                            }}
                            className="glass-card rounded-3xl p-10 border border-white/10 hover:border-cyan-500/50 transition-colors duration-500 group flex flex-col h-full perspective-1000"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="p-4 bg-cyan-500/10 text-cyan-400 rounded-2xl group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-cyan-500/20">
                                    <FolderGit2 className="w-8 h-8" />
                                </div>
                                <div className="flex gap-4">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                                            <Github className="w-6 h-6" />
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
                                            <ExternalLink className="w-6 h-6" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-slate-400 mb-8 flex-grow leading-[1.8] text-lg">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-3 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-4 py-1.5 text-xs font-bold tracking-wider text-cyan-300 bg-cyan-950/40 rounded-full border border-cyan-500/30">
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
                    className="mt-24 text-center"
                >
                    <a href="https://github.com/PSanthoshini" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-cyan-500/50 transition-all shadow-xl">
                        <Github className="w-6 h-6" />
                        Explore More on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

