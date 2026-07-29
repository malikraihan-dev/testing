import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}