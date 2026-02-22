"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background-secondary border-t border-white/5 pt-20 pb-10">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">

                    {/* Brand Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <Link href="/" className="inline-block">
                            <span className="font-display text-4xl font-bold text-white tracking-tighter">
                                WUSLA
                            </span>
                        </Link>
                        <p className="text-secondary text-lg max-w-md leading-relaxed">
                            Crafting high-performance digital experiences. I build the future of web and mobile interfaces for ambitious brands.
                        </p>

                    </div>

                    {/* SItemap */}
                    <div className="space-y-6">
                        <h4 className="font-display font-medium text-white/40 uppercase tracking-widest text-sm">Explore</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Services", href: "#services" },
                                { name: "Work", href: "#work" },
                                { name: "Process", href: "#process" },
                                { name: "Contact", href: "#contact" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-xl text-white font-medium hover:text-brand-accent transition-colors flex items-center gap-2 group">
                                        <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-accent" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div className="space-y-6">
                        <h4 className="font-display font-medium text-white/40 uppercase tracking-widest text-sm">Connect</h4>
                        <div className="flex gap-4">
                            {[
                                { icon: Github, href: "https://github.com/mohammedarsh" }, // Replace with actual
                                { icon: Twitter, href: "https://twitter.com/mohammedarsh" }, // Replace with actual
                                { icon: Linkedin, href: "https://linkedin.com/in/mohammedarsh" }, // Replace with actual
                                { icon: Mail, href: "mailto:hello@wusla.com" },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-brand-navy hover:bg-brand-accent hover:border-brand-accent transition-all duration-300 group"
                                >
                                    <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Big Footer Text */}
                <div className="relative border-t border-white/5 pt-10 flex flex-col items-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4">
                        <span className="font-hand text-3xl text-brand-accent rotate-[-5deg] block">thank you</span>
                    </div>

                    {/* Bottom Bar */}
                    <div className="w-full flex flex-col md:flex-row items-center justify-between text-xs text-white/30 uppercase tracking-wider mt-12 gap-4">
                        <p>© {currentYear} WUSLA Digital.</p>
                        <div className="flex items-center gap-8">
                            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

