import Reveal from "./Reveal";

const SKILLS = [
  { name: "React", category: "Frontend", level: 90 },
  { name: "TypeScript", category: "Frontend", level: 85 },
  { name: "JavaScript", category: "Frontend", level: 90 },
  { name: "Nuxt.js", category: "Frontend", level: 75 },
  { name: "Tailwind CSS", category: "Frontend", level: 90 },
  { name: "HTML & CSS", category: "Frontend", level: 95 },
  { name: "Next.js", category: "Fullstack", level: 80 },
  { name: "Django REST", category: "Fullstack", level: 70 },
  { name: "REST APIs", category: "Fullstack", level: 75 },
  { name: "PostgreSQL", category: "Database", level: 70 },
  { name: "SQL", category: "Database", level: 75 },
  { name: "Figma", category: "Tools", level: 70 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 mx-auto flex max-w-[1200px] flex-col gap-14 px-8 py-35"
    >
      <Reveal className="flex flex-col gap-4">
        <span className="font-mono text-xs tracking-[0.14em] uppercase text-accent">
          04 — Skills
        </span>
        <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-normal tracking-[-0.03em]">
          The <em className="font-normal italic">toolkit</em>
        </h2>
      </Reveal>

      <Reveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map(({ name, category, level }) => (
          <div
            key={name}
            className="flex flex-col gap-5 rounded-lg border border-line bg-card p-7 transition-[transform,border-color] duration-350 ease-soft hover:-translate-y-1 hover:border-accent"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-normal">{name}</h3>
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted">
                {category}
              </span>
            </div>
            <div className="h-0.75 w-full overflow-hidden rounded-full bg-line">
              <div
                className="h-full rounded-full bg-accent"
                style={{ width: `${level}%` }}
              />
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
