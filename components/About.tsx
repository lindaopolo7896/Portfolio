import Image from "next/image";
import Reveal from "./Reveal";
import portrait from "@/public/portrait.jpeg";

const FACTS = [
  { label: "Base", value: "Nairobi, Kenya" },
  { label: "Study", value: "3rd Year CS, Strathmore" },
  { label: "Focus", value: "Frontend & UI/UX" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 mx-auto flex max-w-[1200px] flex-col gap-16 px-8 py-35"
    >
      <Reveal className="flex flex-col gap-6">
        <span className="font-mono text-xs tracking-[0.14em] uppercase text-accent">
          01 — About
        </span>
        <h2 className="max-w-[24ch] font-serif text-[clamp(32px,4.6vw,60px)] leading-[1.18] font-normal tracking-[-0.02em]">
          I care about the details most people{" "}
          <em className="font-normal text-accent italic">scroll past</em>.
        </h2>
      </Reveal>

      <Reveal className="grid items-center gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="relative mx-auto aspect-square w-full max-w-[420px] transition-transform duration-400 ease-soft hover:-translate-y-1">
          {/* soft halo glow behind the portrait, like a studio backlight */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[70px]"
            style={{
              background:
                "radial-gradient(circle, rgba(237, 235, 230, 0.9) 0%, var(--color-accent) 45%, transparent 70%)",
            }}
          />
          <div className="relative h-full w-full overflow-hidden rounded-full border border-line bg-bg2">
            <Image
              src={portrait}
              alt="Portrait of Eleanor Opolo"
              fill
              sizes="(min-width: 1024px) 420px, 80vw"
              className="object-cover object-top"
            />
            {/* tint + vignette so the white studio backdrop blends into the dark page */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(2, 4, 3, 0.12) 45%, rgba(2, 4, 3, 0.45) 100%)",
              }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <p className="text-xl leading-[1.65] font-light">
              I&apos;m a Computer Science student at Strathmore University,
              passionate about building beautiful, accessible, high-performance
              web applications.
            </p>
            <p className="text-base leading-[1.8] font-light text-muted">
              I enjoy turning complex ideas into intuitive user experiences
              while writing clean, scalable code. Right now I&apos;m looking for
              frontend engineering opportunities where I can create exceptional
              digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 border-y border-line py-6 sm:grid-cols-3">
            {FACTS.map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-1.5">
                <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted">
                  {label}
                </span>
                <span className="text-[17px] font-medium">{value}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-8">
            <a
              href="/ELEANOR%20OPOLO%20CV.pdf"
              download="Eleanor-Opolo-CV.pdf"
              className="inline-flex items-center gap-2.5 rounded-full bg-brown px-6 py-3 text-[15px] font-medium transition-[background-color,transform] duration-250 ease-soft hover:-translate-y-0.5 hover:bg-accent hover:text-[#020403]"
            >
              Download CV <span aria-hidden>↓</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 text-[15px] font-medium text-accent transition-[gap] duration-250 ease-soft hover:gap-4"
            >
              Say hello <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
