"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ArrowUpRight } from "lucide-react";

const experiences = [
    {
        id: 1,
        role: "Full Stack Developer",
        company: "Lexci Innovations",
        location: "Remote",
        period: "Dec 2025 - Present",
        description: "Leading end-to-end development, responsible for building production-ready web applications. Handled frontend development using React and backend integration via APIs. Focused on performance optimization and accessibility.",
        skills: ["React", "APIs", "Performance Optimization"],
        links: ["https://jsmcc.in", "https://onyxeduvoyage.com"]
    },
    {
        id: 2,
        role: "Software Developer Intern",
        company: "OpenText (AppWorks Project)",
        location: "Hyderabad, India",
        period: "Mar 2025 - Sep 2025",
        description: "Developed reusable UI components and documented them using Storybook. Built a multi-database migration tool. Gained exposure to MSSQL, Oracle, and PostgreSQL while collaborating in an Agile team.",
        skills: ["Storybook", "MSSQL", "Oracle", "PostgreSQL", "Agile"]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
        }
    }
};

export default function ExperiencePage() {
    return (
        <section className="min-h-screen py-24 bg-slate-950 mesh-gradient">
            <div className="container-width">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mb-20"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight mb-8">
                        Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Journey.</span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                        A chronological breakdown of my professional growth and the engineering challenges I've conquered.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-12 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:w-[2px] before:-ml-px before:h-full before:bg-gradient-to-b before:from-blue-500/50 before:via-purple-500/50 before:to-pink-500/50 before:hidden md:before:block"
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            variants={itemVariants}
                            className={`relative flex items-start md:items-center justify-between md:justify-normal group ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-400 z-10 hidden md:block group-hover:scale-150 transition-transform duration-500 shadow-[0_0_20px_rgba(34,211,238,0.5)]"></div>

                            {/* Mobile Line Fix */}
                            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-slate-800 md:hidden"></div>

                            {/* Spacer for alignment */}
                            <div className="hidden md:block w-1/2" />

                            {/* Content Card */}
                            <div className={`w-full md:w-[calc(50%-4rem)] pl-20 md:pl-0 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16"
                                }`}>
                                <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                            {exp.role}
                                        </h3>
                                        <span className="inline-flex items-center text-xs font-bold tracking-widest px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            {exp.period}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 font-medium mb-8">
                                        <div className="flex items-center gap-2">
                                            <Briefcase className="w-5 h-5 text-blue-500" />
                                            {exp.company}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-5 h-5 text-indigo-500" />
                                            {exp.location}
                                        </div>
                                    </div>

                                    <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3">
                                        {exp.skills.map(skill => (
                                            <span
                                                key={skill}
                                                className="px-4 py-1.5 text-xs font-bold tracking-wider text-cyan-300 bg-cyan-900/20 rounded-lg border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:text-white transition-all duration-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 text-center"
                >
                    <a href="https://drive.google.com/file/d/1H6kVMbjs1lTKqWK284m4H7hEmmS4A4vV/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-5 text-lg font-black text-white transition-all bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:scale-110 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95">
                        Download Résumé
                        <ArrowUpRight className="ml-3 w-6 h-6" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
