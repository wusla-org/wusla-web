"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
    {
        icon: <Search className="w-6 h-6" />,
        title: "Discovery",
        description: "Understanding your business goals, target audience, and functional requirements.",
        delay: 0
    },
    {
        icon: <PenTool className="w-6 h-6" />,
        title: "Design",
        description: "Creating high-fidelity wireframes and interactive prototypes focused on user experience.",
        delay: 0.2
    },
    {
        icon: <Code className="w-6 h-6" />,
        title: "Development",
        description: "Writing clean, scalable code using modern frameworks like Next.js and Tailwind.",
        delay: 0.4
    },
    {
        icon: <Rocket className="w-6 h-6" />,
        title: "Delivery",
        description: "Testing, optimization, deployment, and final handoff with documentation.",
        delay: 0.6
    }
];

export default function Process() {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 uppercase tracking-tighter">
                        How I <span className="text-brand-accent">Work</span>
                    </h2>
                    <p className="text-secondary text-lg max-w-2xl mx-auto">
                        A transparent, streamlined process to take your project from concept to launch in 2-4 weeks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: step.delay, duration: 0.5 }}
                            className="relative group"
                        >
                            <div className="mb-6 relative">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform duration-300">
                                    {step.icon}
                                </div>
                                {/* Connector Line (Desktop only) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 left-20 w-[calc(100%-4rem)] h-[1px] bg-white/5" />
                                )}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-secondary text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
