"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Work", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Work");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/blog")) {
      setActive("Blog");
      return;
    }

    const ids = ["projects", "about", "experience", "contact"];
    const labels: Record<string, string> = { projects: "Work", about: "About", experience: "Experience", contact: "Contact" };
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive(labels[e.target.id]); }); },
      { threshold: 0.4 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [pathname]);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "18px 32px", background: "rgba(12,12,12,0.92)",
      backdropFilter: "blur(8px)", borderBottom: "1px solid #1a1a1a"
    }}>
      {/* Hamburger kiri */}
      <button
        style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "flex", flexDirection: "column", gap: "4px" }}
      >
        <span style={{ display: "block", width: "18px", height: "1px", background: "#e8e8e8" }} />
        <span style={{ display: "block", width: "18px", height: "1px", background: "#e8e8e8" }} />
      </button>

      {/* Logo tengah */}
      <Link href="/" style={{
        fontFamily: "var(--font-mono)", fontSize: "13px", letterSpacing: "0.25em",
        color: "#e8e8e8", textDecoration: "none", textTransform: "uppercase",
        position: "absolute", left: "50%", transform: "translateX(-50%)"
      }}>
        MALIK
      </Link>

      {/* Nav links kanan */}
      <div style={{ display: "flex", gap: "28px" }}>
        {links.map((l) => (
          <Link key={l.label} href={l.href} style={{
            fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.1em",
            textDecoration: "none", textTransform: "capitalize",
            color: active === l.label ? "#e8e8e8" : "#555",
            transition: "color 0.2s",
            borderBottom: active === l.label ? "1px solid #e8e8e8" : "1px solid transparent",
            paddingBottom: "1px"
          }}>
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}