"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Phone, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState("idle"); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("https://formspree.io/f/mbdygjrn", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                alert("Oops! There was a problem submitting your form. Please check your Formspree ID.");
                setTimeout(() => setStatus("idle"), 5000);
            }
        } catch (error) {
            setStatus("error");
            alert("Error sending message. Please try again later.");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <section className="min-h-screen py-24 bg-slate-950 mesh-gradient">
            <div className="container-width max-w-6xl relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
                >
                    {/* Contact Info */}
                    <div>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8">
                            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Forge</span> Something.
                        </h1>
                        <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                            I'm available for new challenges and bold collaborations. Reach out and let's build the future together.
                        </p>

                        <div className="space-y-10">
                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 flex items-center justify-center bg-cyan-500/10 text-cyan-400 rounded-[1.25rem] border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-cyan-500/20">
                                    <Mail className="w-7 h-7" />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Email</p>
                                    <a href="mailto:santhoshinipac@gmail.com" className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">
                                        santhoshinipac@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 flex items-center justify-center bg-purple-500/10 text-purple-400 rounded-[1.25rem] border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-purple-500/20">
                                    <MapPin className="w-7 h-7" />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Location</p>
                                    <p className="text-xl font-bold text-white">
                                        Hyderabad, India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 flex items-center justify-center bg-blue-500/10 text-blue-400 rounded-[1.25rem] border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-blue-600/20">
                                    <Phone className="w-7 h-7" />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Phone</p>
                                    <p className="text-xl font-bold text-white">
                                        +91 8309804089
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-card p-10 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[60px] group-hover:bg-cyan-500/20 transition-all duration-500"></div>
                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                            <div>
                                <label htmlFor="name" className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-4 rounded-2xl bg-slate-900 border border-slate-800 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 text-white outline-none transition-all placeholder:text-slate-700 font-bold"
                                    placeholder="Jane Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-4 rounded-2xl bg-slate-900 border border-slate-800 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 text-white outline-none transition-all placeholder:text-slate-700 font-bold"
                                    placeholder="jane@tech.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-4 rounded-2xl bg-slate-900 border border-slate-800 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 text-white outline-none transition-all placeholder:text-slate-700 font-bold resize-none"
                                    placeholder="Describe your vision..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting" || status === "success"}
                                className={`w-full py-5 px-8 font-black text-lg tracking-widest uppercase rounded-2xl flex items-center justify-center gap-3 transition-all ${status === "success"
                                    ? "bg-green-500 text-white hover:bg-green-600 shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                                    : status === "error"
                                        ? "bg-red-500 text-white hover:bg-red-600 shadow-[0_0_30px_rgba(239,68,68,0.3)]"
                                        : "bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:scale-105 hover:shadow-[0_0_40px_rgba(8,145,178,0.4)] active:scale-95"
                                    } disabled:opacity-70 disabled:cursor-not-allowed`}
                            >
                                {status === "submitting" ? (
                                    <>
                                        <Loader2 className="w-6 h-6 animate-spin" />
                                        Transmitting...
                                    </>
                                ) : status === "success" ? (
                                    <>
                                        <CheckCircle className="w-6 h-6" />
                                        Success!
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Dispatch
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

