"use client";
import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Work");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ids = ["projects", "about", "contact"];
    const labels: Record<string, string> = {
      projects: "Work",
      about: "About",
      contact: "Contact",
    };

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(labels[entry.target.id]);
        });
      },
      { threshold: 0.4 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-900/80 bg-[#070707]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex flex-col gap-1.5 rounded-full border border-zinc-800 p-2 text-zinc-100 transition hover:border-[#4de082]"
          aria-label="Toggle menu"
        >
          <span className="block h-px w-4 bg-current" />
          <span className="block h-px w-4 bg-current" />
          <span className="block h-px w-4 bg-current" />
        </button>

        <a href="#" className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.35em] text-white">
          MALIK
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.25em] transition ${
                active === link.label ? "text-white" : "text-zinc-500 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-zinc-900 bg-[#0a0a0a] px-4 py-4 sm:px-6 lg:px-8 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.25em] text-zinc-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
