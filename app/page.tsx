import Nav from "@/components/Nav";
import MouseOrb from "@/components/MouseOrb";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <MouseOrb />

      {/* ambient top-right corner glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-60 -right-45 h-[720px] w-[720px] rounded-full opacity-[0.09] blur-[60px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 60%)",
        }}
      />

      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
