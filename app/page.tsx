import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import { CertificationSection } from "@/components/certification-section";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ background: "#0c0c0c", minHeight: "100vh", position: "relative" }}>
      {/* Vertical side label */}
      <div style={{
        position: "fixed", left: "16px", top: "50%", transform: "translateY(-50%) rotate(180deg)",
        writingMode: "vertical-rl", zIndex: 40, pointerEvents: "none", userSelect: "none",
        fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.25em",
        color: "#413e3e", textTransform: "uppercase"
      }}>
        MALIK
      </div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Experience />
      <CertificationSection />
      <Contact />
      <Footer />
    </main>
  );
}