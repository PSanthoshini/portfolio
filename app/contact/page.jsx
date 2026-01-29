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
        <section className="min-h-screen py-20 bg-white">
            <div className="container-width max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-16"
                >
                    {/* Contact Info */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
                            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Connect.</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                            I'm always interested in hearing about new projects, opportunities, or just having a chat about technology.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">Email Me</p>
                                    <a href="mailto:santhoshinipac@gmail.com" className="text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors">
                                        santhoshinipac@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">Location</p>
                                    <p className="text-lg font-semibold text-slate-900">
                                        Hyderabad, India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">Phone</p>
                                    <p className="text-lg font-semibold text-slate-900">
                                        +91 8309804089
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400 font-medium"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400 font-medium"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400 font-medium resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting" || status === "success"}
                                className={`w-full py-4 px-6 font-bold rounded-xl flex items-center justify-center gap-2 transition-all ${status === "success"
                                    ? "bg-green-500 text-white hover:bg-green-600"
                                    : status === "error"
                                        ? "bg-red-500 text-white hover:bg-red-600"
                                        : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95"
                                    } disabled:opacity-70 disabled:cursor-not-allowed`}
                            >
                                {status === "submitting" ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : status === "success" ? (
                                    <>
                                        <CheckCircle className="w-5 h-5" />
                                        Message Sent!
                                    </>
                                ) : status === "error" ? (
                                    <>
                                        Error! Try Again
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        Send Message
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
