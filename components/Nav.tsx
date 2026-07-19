"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-line bg-nav backdrop-blur-[16px]">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-6 px-8">
        <a
          href="#top"
          className="font-serif text-[22px] italic tracking-[0.01em] transition-colors hover:text-accent"
        >
          e.opolo
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`border-b px-0.5 py-1.5 text-sm transition-colors ${
                active === id
                  ? "border-accent text-accent"
                  : "border-transparent text-muted hover:text-accent"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="/cv"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-[#020403]"
        >
          View CV <span aria-hidden>↗</span>
        </a>
      </div>
    </nav>
  );
}
