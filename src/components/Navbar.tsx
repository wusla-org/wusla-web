"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, Sparkles } from "lucide-react";
import SearchOverlay from "./SearchOverlay";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"
                    }`}
            >
                <div className="container-custom flex items-center justify-between">

                    {/* LEFT: Menu Trigger (Fooror Style) */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="flex items-center gap-3 group"
                    >
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                            <Menu className="w-5 h-5 text-white group-hover:text-brand-navy transition-colors" />
                        </div>
                        <span className="hidden md:block text-sm font-medium tracking-wider uppercase opacity-80 group-hover:opacity-100 transition-opacity">Menu</span>
                    </button>

                    {/* CENTER: Logo */}
                    <Link href="/" className="absolute left-1/2 -translate-x-1/2 group">
                        <span className="font-display text-3xl font-bold tracking-tighter text-white group-hover:text-brand-accent transition-colors duration-300">
                            WUSLA
                        </span>
                    </Link>

                    {/* RIGHT: Search & CTA */}
                    <div className="flex items-center gap-4 md:gap-6">
                        <a
                            href="https://github.com/mohammedarsh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/80 hover:text-white transition-colors"
                        >
                            <span className="sr-only">GitHub</span>
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>

                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="text-white/80 hover:text-brand-accent transition-colors"
                        >
                            <Search className="w-6 h-6" />
                        </button>

                        <Link
                            href="#contact"
                            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-brand-accent text-white font-bold text-sm tracking-wide rounded-full hover:bg-white hover:text-brand-navy transition-all transform hover:scale-105"
                        >
                            <span>Let&apos;s Talk</span>
                            <Sparkles className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </motion.nav>

            {/* Search Overlay */}
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

            {/* Full Screen Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-50 bg-brand-navy/95 backdrop-blur-xl text-white flex flex-col"
                    >
                        <div className="container-custom py-8 flex justify-between items-center">
                            <span className="font-display text-2xl font-bold">WUSLA</span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-12 h-12 rounded-full border border-brand-navy/20 flex items-center justify-center hover:bg-brand-navy hover:text-brand-accent transition-all"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex-1 container-custom flex flex-col justify-center items-center md:items-start space-y-4 md:space-y-6">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="font-display text-6xl md:text-8xl font-bold tracking-tighter hover:text-white transition-colors relative group block"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <span className="absolute -left-12 top-1/2 -translate-y-1/2 text-2xl font-hand opacity-0 group-hover:opacity-100 transition-opacity">
                                            0{i + 1}
                                        </span>
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="container-custom py-10 border-t border-brand-navy/10 flex flex-col md:flex-row justify-between items-center gap-4 opacity-60 text-sm font-medium">
                            <p>© 2026 WUSLA. All Rights Reserved.</p>
                            <div className="flex gap-6">
                                <a href="#" className="hover:underline">Instagram</a>
                                <a href="#" className="hover:underline">LinkedIn</a>
                                <a href="#" className="hover:underline">Twitter</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

