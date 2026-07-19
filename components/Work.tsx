"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Reveal from "./Reveal";
import votexShot from "@/public/votex.webp";
import elimuappShot from "@/public/elimuapp.webp";
import bingeboxShot from "@/public/bingebox.webp";

type Project = {
  eyebrow: string;
  name: string;
  description: string;
  highlights: string[];
  stack: string[];
  image: StaticImageData;
  links: { github?: string; live?: string; figma?: string };
};

// TODO: replace placeholder GitHub / Live / Figma URLs with the real ones
const PROJECTS: Project[] = [
  {
    eyebrow: "01 / Blockchain voting system — Frontend",
    name: "Votex",
    description:
      "A secure online voting platform for institutional and community elections, built on blockchain. I built the frontend — voter flows, live results, and role-based election dashboards.",
    highlights: [
      "One-time secure voting links",
      "On-chain vote verification (simulated hash chain)",
      "Real-time election results",
    ],
    stack: ["React", "Django REST", "PostgreSQL", "SHA-256 hashing"],
    image: votexShot,
    links: {
      github: "https://github.com/lindaopolo7896/Online-Voting-System",
      live: "https://votex.ramscode.tech/",
      figma: "https://figma.com",
    },
  },
  {
    eyebrow: "02 / Client project — EdTech",
    name: "ElimuApp",
    description:
      "Redesigned and modernized an educational platform: responsive landing pages, authentication flows, pricing sections, and blog integration — lifting the entire user experience.",
    highlights: ["Full responsive redesign", "Auth, pricing & blog flows"],
    stack: ["Nuxt.js", "Tailwind CSS", "JavaScript"],
    image: elimuappShot,
    // private client work — no public repo or design files
    links: {
      live: "https://www.elimuapp.com/",
    },
  },
  {
    eyebrow: "03 / Movie discovery app",
    name: "BingeBox",
    description:
      "A modern movie discovery application built on the TMDB API — explore trending titles, search across the catalogue, and dive into rich movie detail views.",
    highlights: [],
    stack: ["React", "Tailwind CSS", "TMDB API"],
    image: bingeboxShot,
    links: {
      github: "https://github.com/lindaopolo7896/BingeBox",
      live: "https://binge-box-chi.vercel.app/",
      figma:
        "https://www.figma.com/design/aqe5q8C6hkRWzCB6E8EOni/BingeBox?node-id=3-46&t=wxSFXlOiIJcSU2Ce-1",
    },
  },
];

function ProjectImage({
  project,
  overlayOn,
}: {
  project: Project;
  overlayOn: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const visible = hovered || overlayOn;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="striped-placeholder relative aspect-16/11 overflow-hidden rounded-[20px] border border-line transition-[transform,border-color] duration-400 ease-soft hover:-translate-y-1.5 hover:border-accent"
    >
      <Image
        src={project.image}
        alt={`${project.name} screenshot`}
        fill
        sizes="(min-width: 1024px) 58vw, 100vw"
        className="object-cover"
        placeholder="blur"
      />

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-[18px] bg-[rgba(2,4,3,0.82)] backdrop-blur-[8px] transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[rgba(237,235,230,0.65)]">
          {project.name}
        </span>
        <div className="flex flex-wrap justify-center gap-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-fg px-[22px] py-3 text-sm font-medium text-[#020403] transition-transform duration-250 hover:-translate-y-0.5"
            >
              GitHub
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-brown px-[22px] py-3 text-sm font-medium text-fg transition-transform duration-250 hover:-translate-y-0.5"
            >
              Live preview
            </a>
          )}
          {project.links.figma && (
            <a
              href={project.links.figma}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-[rgba(237,235,230,0.35)] px-[22px] py-3 text-sm font-medium text-fg transition-colors duration-250 hover:border-accent"
            >
              Figma
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  // overlays auto-alternate every 5s; hover always shows (per card)
  const [overlayOn, setOverlayOn] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setOverlayOn((on) => !on), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="work"
      className="relative z-10 mx-auto flex max-w-[1200px] flex-col gap-24 px-8 pt-10 pb-30"
    >
      <Reveal className="flex flex-wrap items-baseline justify-between gap-6">
        <span className="font-mono text-xs tracking-[0.14em] uppercase text-accent">
          02 — Featured Work
        </span>
        <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-normal tracking-[-0.03em]">
          Selected <em className="font-normal italic">projects</em>
        </h2>
      </Reveal>

      {PROJECTS.map((project, i) => {
        const imageFirst = i % 2 === 1;
        return (
          <Reveal
            key={project.name}
            className={`grid items-center gap-14 ${
              imageFirst
                ? "lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
                : "lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
            }`}
          >
            <div
              className={`flex flex-col gap-5 ${imageFirst ? "lg:order-2" : ""}`}
            >
              <span className="font-mono text-xs text-muted">
                {project.eyebrow}
              </span>
              <h3 className="font-serif text-[40px] font-medium tracking-[-0.02em]">
                {project.name}
              </h3>
              <p className="text-base leading-[1.7] font-light text-muted">
                {project.description}
              </p>
              {project.highlights.length > 0 && (
                <ul className="flex flex-col gap-2.5">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-3 text-[14.5px] font-light"
                    >
                      <span className="text-accent">→</span> {h}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-1.5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line px-3 py-1.5 font-mono text-[11px] tracking-[0.06em] text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className={imageFirst ? "lg:order-1" : ""}>
              <ProjectImage project={project} overlayOn={overlayOn} />
            </div>
          </Reveal>
        );
      })}
    </section>
  );
}
