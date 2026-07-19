export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 p-8">
        <span className="font-serif text-lg italic">e.opolo</span>
        <span className="font-mono text-xs text-muted">
          © 2026 Eleanor Linda Opolo — Nairobi, Kenya
        </span>
        <a
          href="#top"
          className="font-mono text-xs text-muted transition-colors hover:text-accent"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
