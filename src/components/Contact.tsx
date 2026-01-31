"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-surface">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Great</h2>
                        <p className="text-secondary text-lg">
                            Ready to start your project? Get in touch for a free consultation.
                        </p>
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 md:p-12 rounded-3xl bg-background border border-border">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-secondary">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all text-white"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-secondary">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all text-white"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="md:col-span-2 space-y-2">
                            <label htmlFor="service" className="text-sm font-medium text-secondary">Service Interest</label>
                            <select
                                id="service"
                                className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all text-white appearance-none"
                            >
                                <option>Mobile App Development</option>
                                <option>Web Development</option>
                                <option>Desktop Application</option>
                                <option>UI/UX Design</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="md:col-span-2 space-y-2 mb-4">
                            <label htmlFor="message" className="text-sm font-medium text-secondary">Project Details</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg bg-surface border border-border focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-all text-white resize-none"
                                placeholder="Tell us about your project..."
                            ></textarea>
                        </div>

                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group"
                            >
                                Send Message
                                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
