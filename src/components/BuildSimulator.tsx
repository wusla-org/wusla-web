"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, RotateCcw, Check } from "lucide-react";

type Phase = "idle" | "selecting-client" | "selecting-stack" | "building" | "launched";

interface ClientBrief {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  outcome: { line1: string; line2: string; line3: string };
}

interface BuildStep {
  label: string;
  duration: number; // ms
}

const CLIENT_BRIEFS: ClientBrief[] = [
  {
    id: "fintech",
    title: "FINTECH STARTUP",
    subtitle: "Payment infrastructure & dashboard",
    tags: ["B2B", "SaaS", "Payments"],
    outcome: {
      line1: "$2M+ processed monthly",
      line2: "12k+ transactions/day",
      line3: "PCI DSS compliant · 99.99% uptime",
    },
  },
  {
    id: "healthcare",
    title: "HEALTHCARE",
    subtitle: "Patient portal & admin system",
    tags: ["B2C", "HIPAA", "Scheduling"],
    outcome: {
      line1: "60% admin time saved",
      line2: "HIPAA compliant · 5-star reviews",
      line3: "4,000+ patients onboarded",
    },
  },
  {
    id: "ecommerce",
    title: "E-COMMERCE",
    subtitle: "Full-stack storefront & ops",
    tags: ["D2C", "Retail", "Growth"],
    outcome: {
      line1: "340% conversion boost",
      line2: "15k+ products · 99.9% uptime",
      line3: "$1.2M revenue in first quarter",
    },
  },
];

const TECH_CHIPS = [
  "Next.js", "React", "Node.js", "PostgreSQL", "Stripe",
  "AWS", "Supabase", "Redis", "TypeScript", "Algolia",
  "Twilio", "Firebase", "GraphQL", "Tailwind CSS",
];

const BUILD_STEPS: BuildStep[] = [
  { label: "Scaffolding project", duration: 900 },
  { label: "Installing dependencies", duration: 1300 },
  { label: "Writing components", duration: 2200 },
  { label: "Connecting database", duration: 1000 },
  { label: "Running tests", duration: 1500 },
  { label: "Deploying to production", duration: 700 },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function BuildSimulator() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [selectedClient, setSelectedClient] = useState<ClientBrief | null>(null);
  const [selectedStack, setSelectedStack] = useState<Set<string>>(new Set());
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [stepProgress, setStepProgress] = useState(0);
  const buildTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function reset() {
    if (buildTimerRef.current) clearTimeout(buildTimerRef.current);
    setPhase("idle");
    setSelectedClient(null);
    setSelectedStack(new Set());
    setCompletedSteps([]);
    setActiveStep(-1);
    setStepProgress(0);
  }

  function toggleChip(chip: string) {
    setSelectedStack((prev) => {
      const next = new Set(prev);
      if (next.has(chip)) next.delete(chip);
      else next.add(chip);
      return next;
    });
  }

  function startBuild() {
    setPhase("building");
    setCompletedSteps([]);
    setActiveStep(0);
    setStepProgress(0);
  }

  // Drive the build sequence
  useEffect(() => {
    if (phase !== "building" || activeStep < 0) return;

    if (activeStep >= BUILD_STEPS.length) {
      // All steps done
      buildTimerRef.current = setTimeout(() => setPhase("launched"), 600);
      return;
    }

    const step = BUILD_STEPS[activeStep];
    const startTime = Date.now();

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / step.duration, 1);
      setStepProgress(progress);
      if (progress >= 1) clearInterval(progressInterval);
    }, 30);

    buildTimerRef.current = setTimeout(() => {
      clearInterval(progressInterval);
      setStepProgress(1);
      setCompletedSteps((prev) => [...prev, activeStep]);
      setTimeout(() => {
        setActiveStep((s) => s + 1);
        setStepProgress(0);
      }, 200);
    }, step.duration);

    return () => {
      clearInterval(progressInterval);
      if (buildTimerRef.current) clearTimeout(buildTimerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, activeStep]);

  const phaseIndex = { idle: 0, "selecting-client": 1, "selecting-stack": 2, building: 3, launched: 4 };
  const currentPhaseNum = phaseIndex[phase];

  return (
    <section id="build-simulator" className="bg-background border-t border-white/8 py-24">
      <div className="container-custom">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-white/25 tracking-widest">[ WUSLA_BUILD_SIMULATOR ]</span>
          <div className="flex-1 h-px bg-white/8" />
          {phase !== "idle" && (
            <button
              onClick={reset}
              className="flex items-center gap-1.5 font-mono text-xs text-white/35 hover:text-white/60 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              RESET
            </button>
          )}
        </div>

        {/* Phase indicator */}
        <div className="flex items-center gap-3 mb-10">
          {["01", "02", "03", "04"].map((num, i) => (
            <div key={num} className="flex items-center gap-3">
              <span
                className={`font-mono text-xs transition-colors duration-300 ${
                  i + 1 <= currentPhaseNum ? "text-brand-accent" : "text-white/20"
                }`}
              >
                {num}
              </span>
              {i < 3 && (
                <div
                  className={`h-px w-8 transition-colors duration-300 ${
                    i + 1 < currentPhaseNum ? "bg-brand-accent/50" : "bg-white/10"
                  }`}
                />
              )}
            </div>
          ))}
          <span className="font-mono text-xs text-white/20 ml-2">
            {phase === "idle" && "— START"}
            {phase === "selecting-client" && "— SELECT CLIENT"}
            {phase === "selecting-stack" && "— CHOOSE STACK"}
            {phase === "building" && "— BUILDING..."}
            {phase === "launched" && "— LAUNCHED ✓"}
          </span>
        </div>

        {/* Phase content */}
        <AnimatePresence mode="wait">
          {/* IDLE */}
          {phase === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="text-center py-16"
            >
              <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-4 tracking-tight">
                Build a Product.<br />
                <span className="text-brand-accent">In 30 seconds.</span>
              </h2>
              <p className="text-text-secondary text-base mb-8 max-w-sm mx-auto">
                Experience how WUSLA approaches building your product — pick a client, choose a stack, watch it ship.
              </p>
              <button
                onClick={() => setPhase("selecting-client")}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-accent text-white font-mono text-sm rounded-md hover:bg-white hover:text-background transition-all duration-300"
              >
                START SIMULATOR
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          )}

          {/* PHASE 1 — SELECT CLIENT */}
          {phase === "selecting-client" && (
            <motion.div
              key="selecting-client"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <div className="mb-8">
                <p className="font-mono text-xs text-white/40 uppercase tracking-widest mb-2">Phase 01</p>
                <h3 className="font-display font-bold text-white text-2xl">Select Client Brief</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {CLIENT_BRIEFS.map((brief) => (
                  <button
                    key={brief.id}
                    onClick={() => {
                      setSelectedClient(brief);
                      setPhase("selecting-stack");
                    }}
                    className="group text-left p-6 border border-white/10 hover:border-brand-accent/50 hover:bg-brand-accent/5 transition-all duration-200 rounded-sm"
                  >
                    <p className="font-mono text-xs text-white/30 mb-3 tracking-widest">
                      {brief.tags.join(" · ")}
                    </p>
                    <h4 className="font-display font-bold text-white text-xl mb-2 group-hover:text-brand-accent transition-colors">
                      {brief.title}
                    </h4>
                    <p className="text-text-secondary text-sm">{brief.subtitle}</p>
                    <div className="mt-4 flex items-center gap-1.5 text-brand-accent/60 font-mono text-xs group-hover:gap-2.5 transition-all">
                      <span>SELECT</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* PHASE 2 — SELECT STACK */}
          {phase === "selecting-stack" && (
            <motion.div
              key="selecting-stack"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <div className="mb-8">
                <p className="font-mono text-xs text-white/40 uppercase tracking-widest mb-2">Phase 02</p>
                <h3 className="font-display font-bold text-white text-2xl">
                  Choose Your Stack
                  <span className="font-mono text-sm text-white/30 ml-3 font-normal">
                    ({selectedStack.size} selected — need 3+)
                  </span>
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {TECH_CHIPS.map((chip) => {
                  const active = selectedStack.has(chip);
                  return (
                    <button
                      key={chip}
                      onClick={() => toggleChip(chip)}
                      className={`px-4 py-2 border font-mono text-sm rounded-sm transition-all duration-150 ${
                        active
                          ? "border-brand-accent bg-brand-accent/10 text-brand-accent"
                          : "border-white/12 text-white/45 hover:border-white/25 hover:text-white/65"
                      }`}
                    >
                      {active && <Check className="w-3 h-3 inline mr-1.5 -mt-0.5" />}
                      {chip}
                    </button>
                  );
                })}
              </div>
              <AnimatePresence>
                {selectedStack.size >= 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.25, ease: EASE }}
                  >
                    <button
                      onClick={startBuild}
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-accent text-white font-mono text-sm rounded-md hover:bg-white hover:text-background transition-all duration-300"
                    >
                      BUILD IT
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* PHASE 3 — BUILDING */}
          {phase === "building" && (
            <motion.div
              key="building"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="max-w-2xl"
            >
              <div className="mb-8">
                <p className="font-mono text-xs text-white/40 uppercase tracking-widest mb-2">Phase 03</p>
                <h3 className="font-display font-bold text-white text-2xl">
                  Building{" "}
                  <span className="text-brand-accent">{selectedClient?.title}</span>
                </h3>
              </div>
              <div className="bg-surface border border-white/8 p-6 font-mono text-sm space-y-4">
                <p className="text-white/20 mb-4 text-xs">$ wusla deploy --client={selectedClient?.id} --stack={[...selectedStack].slice(0, 3).join(",")}</p>
                {BUILD_STEPS.map((step, i) => {
                  const isDone = completedSteps.includes(i);
                  const isActive = activeStep === i;
                  const isPending = i > activeStep;
                  return (
                    <div key={step.label} className={`transition-opacity duration-300 ${isPending ? "opacity-25" : "opacity-100"}`}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={isDone ? "text-white/70" : isActive ? "text-white" : "text-white/40"}>
                          {step.label}...
                        </span>
                        {isDone && (
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-brand-accent text-xs"
                          >
                            ✓ {(step.duration / 1000).toFixed(1)}s
                          </motion.span>
                        )}
                        {isActive && (
                          <span className="text-white/30 text-xs animate-pulse">running</span>
                        )}
                      </div>
                      {(isActive || isDone) && (
                        <div className="h-1 bg-white/8 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-brand-accent rounded-full"
                            style={{ width: isDone ? "100%" : `${stepProgress * 100}%` }}
                            transition={{ duration: 0.03 }}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* PHASE 4 — LAUNCHED */}
          {phase === "launched" && selectedClient && (
            <motion.div
              key="launched"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="max-w-2xl"
            >
              <div className="mb-10">
                <p className="font-mono text-xs text-white/40 uppercase tracking-widest mb-4">Phase 04</p>
                <motion.h3
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: EASE, delay: 0.1 }}
                  className="font-display font-bold text-white text-3xl md:text-4xl mb-2"
                >
                  PRODUCT LAUNCHED{" "}
                  <span className="text-brand-accent">✓</span>
                </motion.h3>
                <p className="font-mono text-xs text-white/30 tracking-widest">
                  {selectedClient.title} · {[...selectedStack].slice(0, 4).join(" · ")}
                </p>
              </div>

              <div className="bg-surface border border-brand-accent/20 p-6 mb-8">
                <p className="font-mono text-xs text-brand-accent/60 mb-4 uppercase tracking-widest">OUTCOMES</p>
                <div className="space-y-3">
                  {[selectedClient.outcome.line1, selectedClient.outcome.line2, selectedClient.outcome.line3].map(
                    (line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, ease: EASE, delay: 0.3 + i * 0.12 }}
                        className="flex items-center gap-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                        <span className="text-white font-mono text-sm">{line}</span>
                      </motion.div>
                    )
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 bg-brand-accent text-white font-semibold text-sm rounded-md hover:bg-white hover:text-background transition-all duration-300"
                >
                  Ready to build yours for real?
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 px-5 py-3.5 border border-white/12 text-white/45 font-mono text-sm rounded-md hover:border-white/25 hover:text-white/65 transition-all duration-200"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Play Again
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
