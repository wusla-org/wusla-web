"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import CodePanel from "./CodePanel";
import PreviewPanel from "./PreviewPanel";
import { EASE_OUT, STAGE } from "./heroSource";

/**
 * Scroll-Build Hero — split-screen layout.
 *
 * Three flex children share the container:
 *   [editor (48%→0%)] [copy (flex:1)] [HeroVisual (0%→45%)]
 *
 * The editor and HeroVisual are mirrors — one collapses as the other expands.
 * The copy column always fills the remaining space (flex:1) so it never clips.
 */
export default function HeroBuild() {
  const reduce = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(true);

  const trackRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });
  const timeline = useMotionValue(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setIsDesktop(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduce) { timeline.set(1); return; }
    if (isDesktop) return;
    timeline.set(0);
    const controls = animate(timeline, 1, { duration: 2.6, delay: 0.35, ease: EASE_OUT });
    return () => controls.stop();
  }, [reduce, isDesktop, timeline]);

  const scrubbed = isDesktop && !reduce;
  const progress: MotionValue<number> = scrubbed ? scrollYProgress : timeline;

  // Editor column: 48% → 0% (collapses left)
  const editorPct = useTransform(progress, [STAGE.dockStart, 1], [48, 0]);
  const editorW = useMotionTemplate`${editorPct}%`;

  // Gap between editor and copy: shrinks as editor goes away
  const gapPx = useTransform(progress, [STAGE.dockStart, 1], [40, 0]);
  const gap = useMotionTemplate`${gapPx}px`;

  const hintOpacity = useTransform(progress, [0, 0.05], [1, 0]);

  // `stage` renders three flex columns: [editor][copy][visual]
  // HeroVisual is managed inside PreviewPanel which gets the same progress.
  const stage = (
    <div className="container-custom w-full">
      <motion.div className="flex items-center" style={{ columnGap: gap }}>

        {/* Col 1: editor — shrinks to 0 */}
        <motion.div
          style={{ width: editorW, flexShrink: 0, overflow: "hidden" }}
          aria-hidden
        >
          <CodePanel progress={progress} />
        </motion.div>

        {/* Col 2+3: copy text + HeroVisual (PreviewPanel owns the inner split) */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <PreviewPanel progress={progress} />
        </div>

      </motion.div>
    </div>
  );

  if (scrubbed) {
    return (
      <section ref={trackRef} className="relative" style={{ height: "300vh" }}>
        <div
          className="sticky top-0 flex items-center"
          style={{ height: "100vh", overflow: "hidden" }}
        >
          {stage}
          <motion.div
            aria-hidden
            style={{ opacity: hintOpacity }}
            className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 font-mono text-xs uppercase tracking-[0.18em]"
          >
            <span style={{ color: "var(--color-text-muted)" }}>scroll to build</span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              style={{ color: "var(--color-emerald)" }}
            >
              ↓
            </motion.span>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={trackRef}
      className="relative flex items-center overflow-hidden pt-32 pb-24"
      style={{ minHeight: "100dvh" }}
    >
      {stage}
    </section>
  );
}
