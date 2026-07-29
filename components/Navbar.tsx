"use client";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["about", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navClass = scrolled
    ? "bg-black/80 backdrop-blur-md border-b border-white/10"
    : "bg-transparent";

  return (
    <nav className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 " + navClass}>
      <div className="max-w-6xl mx-auto px-8 md:px-24 py-4 flex justify-between items-center">
        <a href="#" className="text-white font-bold text-lg tracking-tight hover:text-gray-300 transition">
          Malik.
        </a>
        <div className="flex gap-8">
          {navLinks.map((link) => {
            const isActive = active === link.href.replace("#", "");
            const linkClass = isActive
              ? "text-sm text-white font-medium transition-all duration-200"
              : "text-sm text-gray-400 hover:text-white transition-all duration-200";
            return (
              <a key={link.label} href={link.href} className={linkClass}>
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}