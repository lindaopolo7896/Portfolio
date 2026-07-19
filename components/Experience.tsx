import Reveal from "./Reveal";

const ROWS = [
  {
    name: "Exceed ERP",
    description:
      "Contributed frontend features to business management software inside a live production codebase — improving interfaces and collaborating with an established engineering team.",
    role: "Client — Frontend Dev",
  },
  {
    name: "ElimuApp",
    description:
      "Led the redesign of an educational platform's public-facing experience: landing, auth, pricing, and blog — shipped responsive and accessible.",
    role: "Client — Frontend Dev",
  },
  {
    name: "Votex",
    description:
      "Designed and built the frontend of a blockchain-based voting system — voter flows, live results, and the election dashboard UI.",
    role: "Independent — Frontend Dev",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 border-t border-line bg-bg2">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-14 px-8 py-30">
        <Reveal className="flex flex-col gap-4">
          <span className="font-mono text-xs tracking-[0.14em] uppercase text-accent">
            03 — Experience
          </span>
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-normal tracking-[-0.03em]">
            Professional <em className="font-normal italic">work</em>
          </h2>
        </Reveal>

        <Reveal className="flex flex-col">
          {ROWS.map(({ name, description, role }, i) => (
            <div
              key={name}
              className={`grid items-baseline gap-2 border-t border-line py-8 transition-[padding-left] duration-300 ease-soft hover:pl-4 md:grid-cols-[minmax(0,3fr)_minmax(0,6fr)_minmax(0,3fr)] md:gap-6 ${
                i === ROWS.length - 1 ? "border-b" : ""
              }`}
            >
              <h3 className="font-serif text-[22px] font-medium tracking-[-0.01em]">
                {name}
              </h3>
              <p className="text-[15px] leading-[1.7] font-light text-muted">
                {description}
              </p>
              <span className="font-mono text-xs text-muted md:text-right">
                {role}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
