"use client";

import {
  motion,
  useMotionTemplate,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroVisual from "../HeroVisual";
import { REVEAL, STAGE } from "./heroSource";

const trust = ["Full code ownership", "Ships in 2–4 weeks", "Fixed monthly pricing"];

function useReveal(progress: MotionValue<number>, range: readonly [number, number], yFrom = 16) {
  const opacity = useTransform(progress, [range[0], range[1]], [0, 1]);
  const y = useTransform(progress, [range[0], range[1]], [yFrom, 0]);
  return { opacity, y };
}

/**
 * The assembling hero. Internally this is ALSO a flex row:
 *   [copy text (flex:1)] [HeroVisual (0%→45%, mirrors editor collapse)]
 *
 * This means the overall three-column layout is:
 *   [editor] [copy] [HeroVisual]
 * where editor and HeroVisual mirror each other so the copy column stays stable.
 */
export default function PreviewPanel({ progress }: { progress: MotionValue<number> }) {
  const label     = useReveal(progress, REVEAL.label);
  const headlineA = useReveal(progress, REVEAL.headlineA);
  const headlineB = useReveal(progress, REVEAL.headlineB);
  const paragraph = useReveal(progress, REVEAL.paragraph);
  const actions   = useReveal(progress, REVEAL.actions);
  const trustRow  = useReveal(progress, REVEAL.trust);

  // HeroVisual — expands from 0 to 45% mirroring the editor's collapse.
  const visualPct     = useTransform(progress, [STAGE.dockStart, 1], [0, 45]);
  const visualW       = useMotionTemplate`${visualPct}%`;
  const visualOpacity = useTransform(progress, [STAGE.dockStart, 1], [0, 1]);
  const visualScale   = useTransform(progress, [STAGE.dockStart, 1], [0.94, 1]);

  // Gap between copy and visual — appears as visual expands.
  const innerGapPx = useTransform(progress, [STAGE.dockStart, 1], [0, 40]);
  const innerGap   = useMotionTemplate`${innerGapPx}px`;

  return (
    <motion.div className="flex items-center" style={{ columnGap: innerGap }}>

      {/* Copy column — always fills available width */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <motion.div style={label} className="mono-label mb-7">
          Software team on contract
        </motion.div>

        <h1
          className="font-display mb-7 font-extrabold leading-[0.98]"
          style={{
            fontSize: "clamp(2.6rem, 5.2vw, 5.4rem)",
            color: "var(--color-text)",
          }}
        >
          <motion.span className="block" style={headlineA}>Your dedicated</motion.span>
          <motion.span className="block" style={headlineB}>software team.</motion.span>
        </h1>

        <motion.p
          style={{ ...paragraph, color: "var(--color-text-muted)" }}
          className="text-pretty mb-10 max-w-xl text-lg leading-relaxed"
        >
          WUSLA plugs in as your engineering team — mobile, web, and desktop
          products, shipped fast. On your terms, and the code is 100% yours.
        </motion.p>

        <motion.div style={actions} className="mb-12 flex flex-col gap-3.5 sm:flex-row">
          <Link
            href="#contact"
            className="btn-press group inline-flex items-center justify-center gap-2 rounded-[10px] px-7 py-3.5 text-base font-semibold"
            style={{
              backgroundColor: "var(--color-emerald)",
              color: "#04140D",
              transition: "box-shadow 220ms var(--ease-out), transform 160ms var(--ease-out)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-emerald)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
          >
            Start a project
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              style={{ transitionTimingFunction: "var(--ease-out)" }}
            />
          </Link>
          <Link
            href="#work"
            className="btn-press inline-flex items-center justify-center gap-2 rounded-[10px] px-7 py-3.5 text-base font-semibold"
            style={{
              color: "var(--color-text)",
              border: "1px solid var(--color-border-bright)",
              transition: "background-color 200ms var(--ease-out), transform 160ms var(--ease-out)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--color-bg-card)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
          >
            See our work
          </Link>
        </motion.div>

        <motion.div style={trustRow} className="flex flex-wrap gap-x-6 gap-y-2">
          {trust.map((item) => (
            <span key={item} className="font-mono text-xs tracking-wide" style={{ color: "var(--color-text-muted)" }}>
              <span style={{ color: "var(--color-emerald)" }}>◇</span>&nbsp; {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* HeroVisual column — expands from 0 to 45%, mirroring the editor's departure */}
      <motion.div
        className="hidden sm:block"
        style={{
          width: visualW,
          flexShrink: 0,
          // overflow visible so HeroVisual's floating chips aren't clipped
          overflow: "visible",
        }}
      >
        <motion.div style={{ opacity: visualOpacity, scale: visualScale }}>
          <HeroVisual />
        </motion.div>
      </motion.div>

    </motion.div>
  );
}
