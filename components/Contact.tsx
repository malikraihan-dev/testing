"use client";
import { motion } from "framer-motion";
import { MouseEvent } from "react";

const contacts = [
  { num: "01", label: "Email", value: "malik@email.com", href: "mailto:malik@email.com" },
  { num: "02", label: "GitHub", value: "@malik_dev", href: "https://github.com/malik" },
  { num: "03", label: "LinkedIn", value: "malik-engineering", href: "https://linkedin.com/in/malik" },
];

export default function Contact() {
  const handleEnter = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.background = "#111";
  };
  const handleLeave = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.background = "transparent";
  };

  return (
    <section id="contact" style={{ borderTop: "1px solid #1a1a1a" }}>

      <div style={{ padding: "64px 48px 48px 48px" }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.25em", color: "#555", textTransform: "uppercase", marginBottom: "12px" }}
        >
          04 / Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "#e8e8e8", letterSpacing: "-0.01em" }}
        >
          Mari Berkolaborasi
        </motion.h2>
      </div>

      <div style={{ borderTop: "1px solid #1a1a1a" }}>
        {contacts.map((c, i) => (
          <motion.a
            key={c.num}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "22px 48px", borderBottom: "1px solid #1a1a1a",
              textDecoration: "none", transition: "background 0.2s"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#444" }}>{c.num}</span>
              <span style={{ fontSize: "18px", fontWeight: 600, color: "#e8e8e8" }}>{c.label}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#555" }}>{c.value}</span>
              <span style={{ color: "#555", fontSize: "14px" }}>↗</span>
            </div>
          </motion.a>
        ))}
      </div>

      <div style={{ display: "flex", gap: "64px", padding: "40px 48px", flexWrap: "wrap" }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.2em", color: "#555", textTransform: "uppercase", marginBottom: "10px" }}>
            Availability
          </p>
          <p style={{ fontSize: "12px", color: "#888", lineHeight: 1.7, maxWidth: "220px" }}>
            Terbuka untuk project kolaborasi, internship, dan freelance work di bidang ML dan engineering.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.2em", color: "#555", textTransform: "uppercase", marginBottom: "10px" }}>
            Location
          </p>
          <p style={{ fontSize: "12px", color: "#888", lineHeight: 1.7 }}>
            Bogor, Indonesia<br />— Remote Worldwide
          </p>
        </motion.div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", margin: "0 48px 64px 48px", borderTop: "1px solid #1a1a1a", paddingTop: "1px" }}>
        {[1, 2].map((n) => (
          <div key={n} style={{ height: "180px", background: "#111", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #1a1a1a" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#2a2a2a", letterSpacing: "0.2em" }}>
              IMAGE.{n.toString().padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}
