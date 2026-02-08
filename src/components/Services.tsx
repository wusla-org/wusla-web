"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Smartphone, Globe, Layout, Database, ChevronRight, Activity } from "lucide-react";

const services = [
    {
        icon: <Smartphone className="w-8 h-8 text-brand-accent" />,
        title: "Mobile Ecosystems",
        description: "Native-performance apps for iOS and Android. Gesture-driven interfaces that feel alive.",
        colSpan: "md:col-span-2"
    },
    {
        icon: <Layout className="w-8 h-8 text-white" />,
        title: "UI/UX Design",
        description: "Radical minimalism meets functional beauty. Designs that convert.",
        colSpan: "md:col-span-1"
    },
    {
        icon: <Globe className="w-8 h-8 text-white" />,
        title: "Web Platforms",
        description: "Next.js applications optimized for speed, SEO, and AI interaction.",
        colSpan: "md:col-span-1"
    },
    {
        icon: <Database className="w-8 h-8 text-brand-accent" />,
        title: "Full-Stack Solutions",
        description: "End-to-end development from database design to frontend implementation. Secure and scalable.",
        colSpan: "md:col-span-2"
    }
];

function MagicCard({ service, index }: { service: { icon: React.ReactNode; title: string; description: string; colSpan: string }, index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`${service.colSpan} group relative rounded-none bg-white/5 border border-white/10 overflow-hidden hover:border-brand-accent/50 transition-colors duration-500`}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 111, 74, 0.1),
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative h-full p-10 flex flex-col justify-between z-10">
                <div>
                    <div className="mb-6 p-3 bg-white/5 rounded-full w-fit group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-brand-accent/30">
                        {service.icon}
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white mb-4 uppercase tracking-tight">{service.title}</h3>
                    <p className="text-secondary leading-relaxed mb-6 group-hover:text-white/80 transition-colors">
                        {service.description}
                    </p>
                </div>

                <div className="flex items-center text-sm font-bold text-brand-accent opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 uppercase tracking-widest">
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </div>
            </div>
        </motion.div>
    );
}

export default function Services() {
    return (
        <section id="services" className="py-20 md:py-32 bg-surface rounded-[40px] md:rounded-[60px] mx-2 md:mx-4 my-4 overflow-hidden relative">
            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 uppercase tracking-tighter">
                            Our <span className="text-stroke-accent">Expertise</span>
                        </h2>
                        <p className="text-secondary text-lg max-w-xl">
                            We don&apos;t just write code. We engineer digital ecosystems designed to dominate your market.
                        </p>
                    </div>
                    <Activity className="w-12 h-12 text-brand-accent animate-pulse hidden md:block" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <MagicCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

