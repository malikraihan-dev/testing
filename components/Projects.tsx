"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    num: "01",
    title: "Sentiment Analysis",
    desc: "Analisis sentimen review aplikasi Indonesia menggunakan LSTM Bi-directional. Akurasi model 91% pada dataset Gojek & Shopee.",
    tech: "Python // TensorFlow // Streamlit",
    href: "",
  },
  {
    num: "02",
    title: "n8n Lead Automation",
    desc: "Workflow otomasi lead form berbasis webhook — integrasi Google Sheets, notifikasi Slack, dan SMS via Twilio. Self-hosted di Railway.",
    tech: "n8n // Railway // Twilio",
    href: "",
  },
  {
    num: "03",
    title: "HTL Reactor AI Control",
    desc: "Sistem kontrol reaktor Hydrothermal Liquefaction menggunakan sensor NIR dan model AI untuk monitoring parameter secara real-time.",
    tech: "Python // Arduino // NIR Sensor",
    href: "",
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="projects" style={{ borderTop: "1px solid #1a1a1a", paddingBottom: "80px" }}>

      {/* Header */}
      <div style={{ padding: "64px 48px 48px 48px", display: "flex", alignItems: "flex-end", gap: "20px" }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.25em", color: "#555", textTransform: "uppercase", paddingBottom: "4px" }}
        >
          Section // 02
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#e8e8e8", textTransform: "uppercase" }}
        >
          Project Pilihan
        </motion.h2>
      </div>

      {/* List */}
      <div style={{ borderTop: "1px solid #1a1a1a" }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            onMouseEnter={() => setHovered(p.num)}
            onMouseLeave={() => setHovered(null)}
            style={{
              display: "grid", gridTemplateColumns: "56px 1fr auto auto",
              gap: "0 32px", alignItems: "center",
              padding: "28px 48px", borderBottom: "1px solid #1a1a1a",
              background: hovered === p.num ? "#111" : "transparent",
              transition: "background 0.25s", cursor: "default"
            }}
          >
            {/* Nomor */}
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#444" }}>{p.num}</span>

            {/* Judul + desc */}
            <div>
              <p style={{ fontSize: "17px", fontWeight: 600, color: "#e8e8e8", marginBottom: hovered === p.num ? "8px" : "0", transition: "margin 0.25s" }}>
                {p.title}
              </p>
              <div style={{ overflow: "hidden", maxHeight: hovered === p.num ? "80px" : "0", opacity: hovered === p.num ? 1 : 0, transition: "all 0.3s" }}>
                <p style={{ fontSize: "12px", color: "#555", lineHeight: 1.6, maxWidth: "480px", paddingTop: "4px" }}>{p.desc}</p>
              </div>
            </div>

            {/* Tech */}
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#444", letterSpacing: "0.1em", textAlign: "right", whiteSpace: "nowrap" }}>
              {p.tech}
            </span>

            {/* Arrow */}
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: "16px",
              color: hovered === p.num ? "#e8e8e8" : "#2a2a2a",
              transition: "color 0.2s, transform 0.2s",
              transform: hovered === p.num ? "translate(2px, -2px)" : "translate(0,0)",
              display: "inline-block"
            }}>
              →
            </span>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
