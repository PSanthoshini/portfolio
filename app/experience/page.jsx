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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 20
        }
    }
};

export default function ExperiencePage() {
    return (
        <section className="min-h-screen py-20 bg-slate-50/50">
            <div className="container-width">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Experience</span>
                    </h1>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                        A timeline of my professional journey, building scalable software and solving complex problems with modern technologies.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:w-0.5 before:-ml-px before:h-full before:bg-slate-200 before:hidden md:before:block"
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            variants={itemVariants}
                            className={`relative flex items-start md:items-center justify-between md:justify-normal group ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-[3px] border-blue-600 z-10 hidden md:block group-hover:scale-125 transition-transform duration-300 shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"></div>

                            {/* Mobile Line Fix */}
                            <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 md:hidden"></div>

                            {/* Spacer for alignment */}
                            <div className="hidden md:block w-1/2" />

                            {/* Content Card */}
                            <div className={`w-full md:w-[calc(50%-3rem)] pl-16 md:pl-0 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                                }`}>
                                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 group-hover:border-blue-100">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                            {exp.role}
                                        </h3>
                                        <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700">
                                            <Calendar className="w-3 h-3 mr-1.5" />
                                            {exp.period}
                                        </span>
                                    </div>

                                    <div className="flex items-center text-sm text-slate-500 font-medium mb-4">
                                        <Briefcase className="w-4 h-4 mr-1.5 text-slate-400" />
                                        {exp.company}
                                        <span className="mx-2 text-slate-300">•</span>
                                        <MapPin className="w-4 h-4 mr-1.5 text-slate-400" />
                                        {exp.location}
                                    </div>

                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map(skill => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 text-xs font-medium text-slate-600 bg-slate-100 rounded-md group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
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
                    className="mt-20 text-center"
                >
                    <a href="https://drive.google.com/file/d/1H6kVMbjs1lTKqWK284m4H7hEmmS4A4vV/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95">
                        View Resume
                        <ArrowUpRight className="ml-2 w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
