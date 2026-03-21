"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 3, suffix: "+", label: "Years Active" },
  { value: 100, suffix: "%", label: "On-Time Delivery" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-surface border-y border-white/8">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
          {stats.map((stat, i) => (
            <div key={i} className="py-12 px-8 first:pl-0 last:pr-0">
              <div className="font-display font-bold text-5xl md:text-6xl text-white mb-2 tabular-nums">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-text-secondary text-xs font-mono uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
