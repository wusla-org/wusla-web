"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
}

const NUM_PARTICLES = 70;
const FOV = 700;
const MAX_CONNECT_DIST = 180;
const MOUSE_STRENGTH = 0.04;

function project(x: number, y: number, z: number, W: number, H: number) {
  const scale = FOV / (FOV + z);
  return { sx: x * scale + W / 2, sy: y * scale + H / 2, scale };
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let W = 0, H = 0;
    let mx = 0, my = 0;
    let camRotX = 0, camRotY = 0;
    const particles: Particle[] = [];

    // canvas and ctx are confirmed non-null above; TypeScript can't narrow across closures
    const c = canvas as HTMLCanvasElement;
    const cx2 = ctx as CanvasRenderingContext2D;

    function resize() {
      W = c.offsetWidth;
      H = c.offsetHeight;
      c.width = W * devicePixelRatio;
      c.height = H * devicePixelRatio;
      cx2.scale(devicePixelRatio, devicePixelRatio);
      init();
    }

    function init() {
      particles.length = 0;
      for (let i = 0; i < NUM_PARTICLES; i++) {
        particles.push({
          x: (Math.random() - 0.5) * W * 1.4,
          y: (Math.random() - 0.5) * H * 1.4,
          z: (Math.random() - 0.5) * 600,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          vz: (Math.random() - 0.5) * 0.4,
        });
      }
    }

    function rotatePoint(x: number, y: number, z: number) {
      // Rotate around X axis
      const cosX = Math.cos(camRotX);
      const sinX = Math.sin(camRotX);
      const y1 = y * cosX - z * sinX;
      const z1 = y * sinX + z * cosX;
      // Rotate around Y axis
      const cosY = Math.cos(camRotY);
      const sinY = Math.sin(camRotY);
      const x2 = x * cosY + z1 * sinY;
      const z2 = -x * sinY + z1 * cosY;
      return { rx: x2, ry: y1, rz: z2 };
    }

    function draw() {
      cx2.clearRect(0, 0, W, H);

      // Smoothly track mouse
      camRotX += ((my - H / 2) / H * MOUSE_STRENGTH - camRotX) * 0.05;
      camRotY += ((mx - W / 2) / W * -MOUSE_STRENGTH - camRotY) * 0.05;

      // Project all particles
      const projected = particles.map((p) => {
        const { rx, ry, rz } = rotatePoint(p.x, p.y, p.z);
        return project(rx, ry, rz + 300, W, H);
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = projected[i].sx - projected[j].sx;
          const dy = projected[i].sy - projected[j].sy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_CONNECT_DIST) {
            const alpha = (1 - dist / MAX_CONNECT_DIST) * 0.25;
            const avgScale = (projected[i].scale + projected[j].scale) / 2;
            cx2.beginPath();
            cx2.moveTo(projected[i].sx, projected[i].sy);
            cx2.lineTo(projected[j].sx, projected[j].sy);
            cx2.strokeStyle = `rgba(34,197,94,${alpha * avgScale})`;
            cx2.lineWidth = 0.6;
            cx2.stroke();
          }
        }
      }

      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const { sx, sy, scale } = projected[i];
        const radius = Math.max(0.5, scale * 2.5);
        const alpha = Math.max(0.05, scale * 0.8);

        cx2.beginPath();
        cx2.arc(sx, sy, radius, 0, Math.PI * 2);
        cx2.fillStyle = `rgba(34,197,94,${alpha})`;
        cx2.fill();

        // Outer glow ring on closer particles
        if (scale > 0.9) {
          cx2.beginPath();
          cx2.arc(sx, sy, radius * 2.5, 0, Math.PI * 2);
          cx2.strokeStyle = `rgba(34,197,94,${alpha * 0.2})`;
          cx2.lineWidth = 0.5;
          cx2.stroke();
        }
      }

      // Advance particle positions
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;
        if (Math.abs(p.x) > W * 0.8) p.vx *= -1;
        if (Math.abs(p.y) > H * 0.8) p.vy *= -1;
        if (Math.abs(p.z) > 320) p.vz *= -1;
      }

      raf = requestAnimationFrame(draw);
    }

    function onMouseMove(e: MouseEvent) {
      mx = e.clientX;
      my = e.clientY;
    }

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
