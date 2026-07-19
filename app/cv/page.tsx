import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CV — Eleanor Opolo",
  description: "View or download Eleanor Opolo's CV.",
};

export default function CVPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="border-b border-line bg-nav backdrop-blur-[16px]">
        <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between gap-6 px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-muted transition-colors hover:text-accent"
          >
            <span aria-hidden>←</span> Back to portfolio
          </Link>

          <span className="hidden font-serif text-[18px] italic text-muted sm:block">
            Curriculum Vitae
          </span>

          <a
            href="/ELEANOR%20OPOLO%20CV.pdf"
            download="Eleanor-Opolo-CV.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-[#020403]"
          >
            Download <span aria-hidden>↓</span>
          </a>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-[1000px] flex-1 flex-col px-4 py-6 sm:px-8">
        <object
          data="/ELEANOR%20OPOLO%20CV.pdf"
          type="application/pdf"
          className="min-h-[80vh] w-full flex-1 rounded-lg border border-line bg-card"
        >
          {/* fallback for browsers without an inline PDF viewer (mostly mobile) */}
          <div className="flex min-h-[80vh] flex-col items-center justify-center gap-6 px-6 text-center">
            <p className="max-w-md text-muted">
              Your browser can&apos;t display the PDF here — you can open it
              directly or download a copy instead.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/ELEANOR%20OPOLO%20CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-5 py-2.5 font-mono text-[11px] tracking-[0.12em] uppercase text-[#020403] transition-opacity hover:opacity-85"
              >
                Open PDF
              </a>
              <a
                href="/ELEANOR%20OPOLO%20CV.pdf"
                download="Eleanor-Opolo-CV.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors hover:border-accent hover:text-accent"
              >
                Download <span aria-hidden>↓</span>
              </a>
            </div>
          </div>
        </object>
      </div>
    </main>
  );
}
