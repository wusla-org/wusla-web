"use client";

import { motion } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-background relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white uppercase tracking-tighter">
                            Let&apos;s <span className="text-brand-accent">Build</span>
                        </h2>
                        <p className="text-secondary text-xl max-w-2xl mx-auto">
                            Ready to dominate your market? Tell us about your project.
                        </p>
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        <div className="space-y-2 group">
                            <label htmlFor="name" className="text-xs font-bold text-brand-accent uppercase tracking-widest">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full py-4 bg-transparent border-b border-white/20 focus:border-brand-accent focus:outline-none transition-colors text-white text-xl placeholder:text-white/10 font-medium"
                                placeholder="YOUR NAME"
                            />
                        </div>
                        <div className="space-y-2 group">
                            <label htmlFor="email" className="text-xs font-bold text-brand-accent uppercase tracking-widest">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full py-4 bg-transparent border-b border-white/20 focus:border-brand-accent focus:outline-none transition-colors text-white text-xl placeholder:text-white/10 font-medium"
                                placeholder="YOUR@EMAIL.COM"
                            />
                        </div>
                        <div className="md:col-span-1 space-y-2 group">
                            <label htmlFor="service" className="text-xs font-bold text-brand-accent uppercase tracking-widest">Service</label>
                            <select
                                id="service"
                                className="w-full py-4 bg-transparent border-b border-white/20 focus:border-brand-accent focus:outline-none transition-colors text-white text-xl appearance-none cursor-pointer"
                            >
                                <option className="bg-brand-navy text-white">Full-Stack Web App</option>
                                <option className="bg-brand-navy text-white">Business Website</option>
                                <option className="bg-brand-navy text-white">Landing Page</option>
                                <option className="bg-brand-navy text-white">UI/UX Design</option>
                            </select>
                        </div>
                        <div className="md:col-span-1 space-y-2 group">
                            <label htmlFor="budget" className="text-xs font-bold text-brand-accent uppercase tracking-widest">Budget Range</label>
                            <select
                                id="budget"
                                className="w-full py-4 bg-transparent border-b border-white/20 focus:border-brand-accent focus:outline-none transition-colors text-white text-xl appearance-none cursor-pointer"
                            >
                                <option className="bg-brand-navy text-white">₹20k - ₹30k</option>
                                <option className="bg-brand-navy text-white">₹30k - ₹50k</option>
                                <option className="bg-brand-navy text-white">₹50k+</option>
                                <option className="bg-brand-navy text-white">Not Sure</option>
                            </select>
                        </div>
                        <div className="md:col-span-2 space-y-2 mb-8 group">
                            <label htmlFor="message" className="text-xs font-bold text-brand-accent uppercase tracking-widest">Project Details</label>
                            <textarea
                                id="message"
                                rows={2}
                                className="w-full py-4 bg-transparent border-b border-white/20 focus:border-brand-accent focus:outline-none transition-colors text-white text-xl placeholder:text-white/10 resize-none font-medium"
                                placeholder="TELL US ABOUT THE FUTURE..."
                            ></textarea>
                        </div>

                        <div className="md:col-span-2 pt-8 flex flex-col items-center gap-4">
                            <button
                                type="submit"
                                className="group relative px-10 py-5 bg-white text-brand-navy font-bold text-lg rounded-full overflow-hidden hover:scale-105 transition-all duration-300 w-full md:w-auto"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    INITIATE PROJECT
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </span>
                                <div className="absolute inset-0 bg-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                            </button>
                            <p className="text-white/40 text-sm font-medium">
                                Response time: Within 24 hours
                            </p>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}

