"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: EASE },
        };

  return (
    <header
      id="top"
      className="relative z-10 mx-auto box-border flex min-h-screen max-w-[1200px] flex-col items-center justify-center gap-9 px-8 pt-35 pb-10 text-center"
    >
      <motion.div
        className="flex items-center gap-3"
        {...(reduce
          ? {}
          : {
              initial: { opacity: 0, y: 28 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, ease: EASE },
            })}
      >
        <span className="h-2 w-2 animate-blink rounded-full bg-accent" />
        <span className="font-mono text-xs tracking-[0.16em] uppercase text-muted">
          Frontend Software Engineer · Nairobi, Kenya
        </span>
      </motion.div>

      <h1 className="flex flex-col font-serif text-[clamp(72px,14vw,190px)] leading-[0.95] font-normal tracking-[-0.02em]">
        <motion.span {...rise(0.08)}>Eleanor</motion.span>
        <motion.em className="font-normal text-accent italic" {...rise(0.18)}>
          Opolo
        </motion.em>
      </h1>

      <motion.div className="flex items-center gap-[18px]" {...rise(0.26)}>
        <span className="h-px w-14 bg-line" />
        <span className="text-[13px] text-accent">✦</span>
        <span className="h-px w-14 bg-line" />
      </motion.div>

      <motion.p
        className="max-w-[48ch] text-[19px] leading-[1.65] font-light text-muted"
        {...rise(0.32)}
      >
        Building thoughtful digital experiences through code — complex ideas
        turned into intuitive, high-performance interfaces.
      </motion.p>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-4"
        {...rise(0.4)}
      >
        <a
          href="#work"
          className="inline-flex items-center gap-2.5 rounded-full bg-brown px-7 py-[15px] text-[15px] font-medium text-fg transition-[transform,background-color,color] duration-250 ease-soft hover:-translate-y-0.5 hover:bg-accent hover:text-[#020403]"
        >
          View selected work <span aria-hidden>↓</span>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2.5 rounded-full border border-line px-7 py-[15px] text-[15px] font-medium transition-[transform,border-color] duration-250 ease-soft hover:-translate-y-0.5 hover:border-accent"
        >
          Get in touch
        </a>
      </motion.div>

      <span className="mt-7 animate-blink-slow font-mono text-[11px] tracking-[0.2em] uppercase text-muted">
        scroll ↓
      </span>
    </header>
  );
}
