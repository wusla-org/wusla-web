"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Smartphone, Globe, Layout, Database, ChevronRight } from "lucide-react";

const services = [
    {
        icon: <Smartphone className="w-8 h-8 text-[#008080]" />,
        title: "Mobile App Development",
        description: "Native-performance apps for iOS and Android using React Native. We build gesture-driven, fluid interfaces that feel alive.",
        colSpan: "md:col-span-2"
    },
    {
        icon: <Layout className="w-8 h-8 text-[#008080]" />,
        title: "UI/UX Design",
        description: "Radical minimalism meets functional beauty. Designs that convert.",
        colSpan: "md:col-span-1"
    },
    {
        icon: <Globe className="w-8 h-8 text-[#008080]" />,
        title: "Modern Web Platforms",
        description: "Next.js applications optimized for speed, SEO, and AI interaction. Scalable architectures for growing businesses.",
        colSpan: "md:col-span-1"
    },
    {
        icon: <Database className="w-8 h-8 text-[#008080]" />,
        title: "Full-Stack Solutions",
        description: "End-to-end development from database design to frontend implementation. Secure, robust, and built for scale.",
        colSpan: "md:col-span-2"
    }
];

function MagicCard({ service, index }: { service: any, index: number }) {
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
            className={`${service.colSpan} group relative rounded-3xl bg-surface border border-border overflow-hidden`}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 128, 128, 0.15),
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative h-full p-8 flex flex-col justify-between z-10">
                <div>
                    <div className="mb-6 p-3 bg-surface-hover rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-[#008080]/30 shadow-none group-hover:shadow-[0_0_15px_rgba(0,128,128,0.2)]">
                        {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#008080] transition-colors">{service.title}</h3>
                    <p className="text-secondary leading-relaxed mb-6 group-hover:text-white/80 transition-colors">
                        {service.description}
                    </p>
                </div>

                <div className="flex items-center text-sm font-bold text-white opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Learn More <ChevronRight className="w-4 h-4 ml-1 text-[#008080]" />
                </div>
            </div>
        </motion.div>
    );
}

export default function Services() {
    return (
        <section id="services" className="py-32 relative">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-20 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Expertise</h2>
                    <p className="text-secondary text-lg">
                        We don't just write code. We engineer digital ecosystems designed to dominate your market.
                    </p>
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
