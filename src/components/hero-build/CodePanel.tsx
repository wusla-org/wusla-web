"use client";

import { Fragment, type ReactNode, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { HERO_CODE, STAGE } from "./heroSource";

/* ── Lightweight JSX syntax highlighter ───────────────────────────────────
 * Not a real parser — just enough token coloring to read like a code editor.
 * Tolerates an unterminated trailing string so partially typed code colors cleanly. */
const TOKEN =
  /(\/\/[^\n]*)|("(?:[^"\\]|\\.)*"?)|(\b(?:export|default|function|return|const)\b)|(className)|(<\/?[A-Za-z][A-Za-z0-9]*|\/?>)|([{}();,])/g;

const COLOR = {
  comment: "var(--color-text-faint)",
  string: "rgba(31, 191, 128, 0.72)",
  keyword: "var(--color-emerald)",
  attr: "var(--color-text-muted)",
  tag: "var(--color-text-muted)",
  punct: "var(--color-text-faint)",
} as const;

function highlight(code: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (let m = TOKEN.exec(code); m !== null; m = TOKEN.exec(code)) {
    if (m.index > last) {
      nodes.push(<Fragment key={key++}>{code.slice(last, m.index)}</Fragment>);
    }
    const color = m[1]
      ? COLOR.comment
      : m[2]
        ? COLOR.string
        : m[3]
          ? COLOR.keyword
          : m[4]
            ? COLOR.attr
            : m[5]
              ? COLOR.tag
              : COLOR.punct;
    nodes.push(
      <span key={key++} style={{ color }}>
        {m[0]}
      </span>,
    );
    last = m.index + m[0].length;
  }
  if (last < code.length) {
    nodes.push(<Fragment key={key++}>{code.slice(last)}</Fragment>);
  }
  return nodes;
}

export default function CodePanel({ progress }: { progress: MotionValue<number> }) {
  // Scroll position → number of characters revealed.
  const charCount = useTransform(progress, [0, STAGE.typeEnd], [0, HERO_CODE.length], {
    clamp: true,
  });
  const [n, setN] = useState(() => Math.round(charCount.get()));
  useMotionValueEvent(charCount, "change", (v) => setN(Math.round(v)));

  // 3D tilt: starts at a slight angle, straightens as the hero assembles.
  // Mirrors the depth aesthetic from HeroVisual.
  const rotateY = useTransform(progress, [0, STAGE.dockStart], [8, 0]);
  const rotateX = useTransform(progress, [0, STAGE.dockStart], [-2, 0]);

  return (
    // perspective wrapper — same pattern as HeroVisual
    <div style={{ perspective: "1200px", width: "100%" }}>
      <motion.div
        aria-hidden
        style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      >
        <div
          className="surface overflow-hidden"
          style={{ boxShadow: "var(--shadow-lift)", pointerEvents: "none" }}
        >
          {/* window bar — mirrors HeroVisual's editor chrome */}
          <div
            className="flex items-center gap-2 px-5 py-3.5"
            style={{
              borderBottom: "1px solid var(--color-border)",
              backgroundColor: "var(--color-bg-elevated)",
            }}
          >
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#3A4048" }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#3A4048" }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#3A4048" }} />
            <span className="ml-3 font-mono text-xs" style={{ color: "var(--color-text-muted)" }}>
              Hero.tsx
            </span>
          </div>

          <pre
            className="font-mono leading-[1.55] overflow-hidden m-0 p-5"
            style={{
              fontSize: "clamp(0.68rem, 1vw, 0.8rem)",
              color: "var(--color-text)",
              whiteSpace: "pre-wrap",
              minHeight: "clamp(16rem, 40vh, 24rem)",
            }}
          >
            {highlight(HERO_CODE.slice(0, n))}
            <span
              className="animate-caret"
              style={{
                display: "inline-block",
                width: "0.5em",
                height: "1.05em",
                marginLeft: "1px",
                transform: "translateY(0.18em)",
                backgroundColor: "var(--color-emerald)",
                boxShadow: "0 0 8px var(--color-emerald)",
              }}
            />
          </pre>
        </div>
      </motion.div>
    </div>
  );
}
