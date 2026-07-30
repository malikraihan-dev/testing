import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070707] text-stone-100">
      <div className="pointer-events-none fixed left-3 top-1/2 z-40 hidden -translate-y-1/2 rotate-180 text-[9px] uppercase tracking-[0.35em] text-zinc-700 sm:block [writing-mode:vertical-rl]">
        MALIK • ENGINEER
      </div>

      <div className="mx-auto flex max-w-7xl flex-col">
        <Navbar />

        <div className="px-3 pt-24 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[28px] border border-zinc-900 bg-[#0c0c0c] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <Hero />
            <Projects />
            <About />
            <Contact />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
