"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-surface border-t border-border pt-20 pb-10">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <span className="font-technical text-3xl font-bold text-white tracking-tighter">
                                WUSLA
                            </span>
                        </Link>
                        <p className="text-secondary max-w-sm mb-8 leading-relaxed">
                            Crafting high-performance digital experiences. We build the future of web and mobile interfaces for ambitious brands.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Twitter, href: "https://twitter.com/wusla" },
                                { icon: Github, href: "https://github.com/wusla" },
                                { icon: Linkedin, href: "https://linkedin.com/company/wusla" },
                                { icon: Mail, href: "mailto:hello@wusla.com" },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-hover text-secondary hover:text-white hover:bg-white/10 transition-all"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* SItemap */}
                    <div>
                        <h4 className="font-technical font-bold text-white mb-6">Explore</h4>
                        <ul className="space-y-4">
                            {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-secondary hover:text-white transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services SEO Links */}
                    <div>
                        <h4 className="font-technical font-bold text-white mb-6">Services</h4>
                        <ul className="space-y-4">
                            {[
                                "Web Development",
                                "Mobile Apps (React Native)",
                                "UI/UX Design",
                                "SEO Optimization",
                                "Desktop Applications",
                            ].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-secondary hover:text-white transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-tertiary">
                    <p>© {currentYear} WUSLA Digital. All rights reserved.</p>
                    <div className="flex items-center gap-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-[#008080] transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-[#008080] transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
