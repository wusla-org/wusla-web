<script setup lang="ts">
import { HERO_CODE, STAGE } from "./heroSource";

/* Lightweight JSX syntax highlighter — not a real parser, just enough token
 * coloring to read like a code editor. Ported from the original React version. */
const TOKEN =
  /(\/\/[^\n]*)|("(?:[^"\\]|\\.)*"?)|(\b(?:export|default|function|return|const)\b)|(className)|(<\/?[A-Za-z][A-Za-z0-9]*|\/?>)|([{}();,])/g;

const COLOR = {
  default: "var(--color-text)",
  comment: "var(--color-text-faint)",
  string: "rgba(161, 98, 7, 0.8)",
  keyword: "var(--color-accent)",
  attr: "var(--color-text-muted)",
  tag: "var(--color-text-muted)",
  punct: "var(--color-text-faint)",
} as const;

interface CharToken {
  ch: string;
  color: string;
  i: number;
}

function tokenize(code: string): CharToken[] {
  const result: CharToken[] = [];
  let last = 0;
  let i = 0;
  const push = (s: string, color: string) => {
    for (const ch of s) result.push({ ch, color, i: i++ });
  };

  const regex = new RegExp(TOKEN);
  let m: RegExpExecArray | null;
  while ((m = regex.exec(code)) !== null) {
    if (m.index > last) push(code.slice(last, m.index), COLOR.default);
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
    push(m[0], color);
    last = m.index + m[0].length;
  }
  if (last < code.length) push(code.slice(last), COLOR.default);
  return result;
}

const chars = tokenize(HERO_CODE);
const codeLength = HERO_CODE.length;
const typeEnd = STAGE.typeEnd;
const dockStart = STAGE.dockStart;
</script>

<template>
  <div class="code-perspective" aria-hidden="true">
    <div class="code-tilt">
      <div class="surface code-surface">
        <div class="code-titlebar">
          <span class="dot" />
          <span class="dot" />
          <span class="dot" />
          <span class="ml-3 font-mono text-xs" style="color: var(--color-text-muted)">Hero.tsx</span>
        </div>

        <pre class="code-body font-mono"><span
            v-for="c in chars"
            :key="c.i"
            class="char"
            :style="{ '--i': c.i, color: c.color }"
          >{{ c.ch }}</span></pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.code-perspective {
  width: 100%;
  perspective: 1200px;
}
.code-tilt {
  --tilt-t: clamp(0, calc(var(--p) / v-bind(dockStart)), 1);
  transform: rotateY(calc(8deg - 8deg * var(--tilt-t))) rotateX(calc(-2deg + 2deg * var(--tilt-t)));
  transform-style: preserve-3d;
}
.code-surface {
  overflow: hidden;
  box-shadow: var(--shadow-lift);
  pointer-events: none;
}
.code-titlebar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.25rem;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-bg-elevated);
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--color-border-bright);
}
.code-body {
  font-size: clamp(0.68rem, 1vw, 0.8rem);
  line-height: 1.55;
  white-space: pre-wrap;
  min-height: clamp(16rem, 40vh, 24rem);
  margin: 0;
  padding: 1.25rem;
}
.char {
  --t-type: clamp(0, calc(var(--p) / v-bind(typeEnd)), 1);
  opacity: calc((var(--t-type) * v-bind(codeLength) - var(--i)) * 999);
}
</style>
