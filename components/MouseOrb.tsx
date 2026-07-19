"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed 640px radial accent glow that eases toward the cursor
 * at 0.07/frame. Disabled for prefers-reduced-motion.
 */
export default function MouseOrb() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      orb.style.display = "none";
      return;
    }

    let tx = window.innerWidth / 2;
    let ty = 300;
    let x = tx;
    let y = ty;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      x += (tx - x) * 0.07;
      y += (ty - y) * 0.07;
      orb.style.transform = `translate(${x}px, ${y}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={orbRef}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-0 -mt-80 -ml-80 h-[640px] w-[640px] rounded-full opacity-[0.18] blur-[70px] will-change-transform"
      style={{
        background:
          "radial-gradient(circle, var(--color-accent) 0%, transparent 62%)",
      }}
    />
  );
}
