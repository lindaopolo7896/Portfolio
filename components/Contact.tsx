"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "opololinda@gmail.com",
    href: "mailto:opololinda@gmail.com",
    external: false,
  },
  {
    label: "GitHub",
    value: "@lindaopolo7896",
    href: "https://github.com/lindaopolo7896",
    external: true,
  },
  {
    // TODO: point at the real LinkedIn profile URL
    label: "LinkedIn",
    value: "Eleanor Opolo",
    href: "https://linkedin.com",
    external: true,
  },
];

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          company: data.get("company"), // honeypot
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong — please retry.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong — please retry.",
      );
    }
  }

  const buttonLabel =
    status === "sending"
      ? "Sending…"
      : status === "sent"
        ? "Message sent ✓"
        : "Send message";

  const fieldClass =
    "rounded-xl border border-line bg-bg px-4 py-3.5 text-[15px] font-sans font-normal text-fg outline-none transition-colors duration-200 placeholder:text-muted/60 focus:border-accent";

  return (
    <section id="contact" className="relative z-10 overflow-hidden border-t border-line">
      {/* bottom-center accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-75 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.12] blur-[70px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 62%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-[72px] px-8 py-35 lg:grid-cols-2">
        <Reveal className="flex flex-col gap-8">
          <span className="font-mono text-xs tracking-[0.14em] uppercase text-accent">
            05 — Contact
          </span>
          <h2 className="font-serif text-[clamp(40px,5.5vw,76px)] leading-[1.05] font-normal tracking-[-0.02em]">
            Let&apos;s build something{" "}
            <em className="font-normal text-accent italic">worth using</em>.
          </h2>
          <p className="max-w-[44ch] text-base leading-[1.75] font-light text-muted">
            Open to frontend software engineering opportunities — internships,
            junior roles, and freelance projects.
          </p>

          <div className="mt-2 flex flex-col border-b border-line">
            {CONTACT_LINKS.map(({ label, value, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="flex items-center justify-between gap-4 border-t border-line py-[22px] text-base font-normal transition-[padding-left,color] duration-300 ease-soft hover:pl-3.5 hover:text-accent"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-[11px] text-muted">
                    {label}
                  </span>
                  {value}
                </span>
                <span aria-hidden>↗</span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-3xl border border-line bg-card p-9 text-left"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="cf-name"
                  className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted"
                >
                  Name
                </label>
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  required
                  maxLength={200}
                  placeholder="Your name"
                  className={fieldClass}
                  suppressHydrationWarning
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="cf-email"
                  className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted"
                >
                  Email
                </label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  required
                  maxLength={200}
                  placeholder="you@example.com"
                  className={fieldClass}
                  suppressHydrationWarning
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="cf-msg"
                className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted"
              >
                Message
              </label>
              <textarea
                id="cf-msg"
                name="message"
                required
                rows={5}
                maxLength={5000}
                placeholder="Tell me about your project or opportunity…"
                className={`${fieldClass} resize-y leading-[1.6]`}
                suppressHydrationWarning
              />
            </div>

            {/* honeypot — hidden from humans, bots tend to fill it */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
              suppressHydrationWarning
            />

            <button
              type="submit"
              disabled={status === "sending"}
              suppressHydrationWarning
              className="inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full bg-brown px-8 py-4 text-[15px] font-medium text-fg transition-[transform,background-color,color] duration-250 ease-soft hover:-translate-y-0.5 hover:bg-accent hover:text-[#020403] disabled:cursor-wait disabled:opacity-70"
            >
              {buttonLabel} <span aria-hidden>→</span>
            </button>

            {status === "error" && (
              <p role="alert" className="text-sm font-normal text-accent">
                {error}{" "}
                <a href="mailto:opololinda@gmail.com" className="underline">
                  Or email me directly.
                </a>
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
