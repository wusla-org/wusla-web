"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search as SearchIcon, ArrowRight } from "lucide-react";

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
    const [query, setQuery] = useState("");

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const popularSearches = ["Web Development", "Mobile Apps", "UI/UX Design", "Consultation"];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center p-6"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 md:top-10 md:right-10 p-2 text-white/60 hover:text-brand-accent transition-colors"
                    >
                        <X size={32} />
                    </button>

                    <div className="w-full max-w-4xl relative">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="relative"
                        >
                            <SearchIcon className="absolute left-0 top-1/2 -translate-y-1/2 text-white/30 w-8 h-8 md:w-12 md:h-12" />
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                autoFocus
                                className="w-full bg-transparent border-b-2 border-white/10 py-6 pl-12 md:pl-20 text-3xl md:text-5xl lg:text-6xl font-hand text-white placeholder:text-white/20 focus:outline-none focus:border-brand-accent transition-colors"
                            />
                        </motion.div>

                        {/* Popular Searches */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mt-12 md:mt-16"
                        >
                            <p className="text-secondary uppercase tracking-widest text-xs font-bold mb-6">Popular Searches</p>
                            <div className="flex flex-wrap gap-4">
                                {popularSearches.map((term, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setQuery(term)}
                                        className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-brand-yellow/50 hover:bg-white/5 transition-all text-sm md:text-base text-white/80"
                                    >
                                        <span>{term}</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-yellow" />
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
