import type { IconType } from "react-icons";
import {
  SiDjango,
  SiFigma,
  SiGit,
  SiNextdotjs,
  SiNuxt,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

const ITEMS: { name: string; Icon: IconType }[] = [
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Nuxt.js", Icon: SiNuxt },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Django REST", Icon: SiDjango },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Figma", Icon: SiFigma },
  { name: "Vite", Icon: SiVite },
  { name: "Git", Icon: SiGit },
];

export default function Marquee() {
  return (
    <div className="relative z-10 overflow-hidden border-y border-line py-5">
      <div className="flex w-max animate-marquee gap-14 whitespace-nowrap">
        {[...ITEMS, ...ITEMS].map(({ name, Icon }, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-14 text-muted"
            aria-hidden={i >= ITEMS.length}
          >
            <Icon size={24} title={name} />
            <span className="text-[13px] text-accent" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
