"use client";
import { motion } from "framer-motion";

const experience = [
  {
    num: "01",
    type: "Pekerjaan",
    role: "Web Developer",
    org: "Asuransi Bangun Askrida",
    period: "6 Bulan",
    desc: "Mengembangkan dan memelihara sistem backend untuk kebutuhan internal perusahaan asuransi, menggunakan Java dan framework Spring Boot.",
    tech: ["Java", "Spring Boot"],
  },
  {
    num: "02",
    type: "Bootcamp",
    role: "AI Engineer",
    org: "Dicoding",
    period: "Program Bootcamp",
    desc: "Mengikuti program bootcamp terstruktur yang berfokus pada machine learning dan pengembangan sistem berbasis AI.",
    tech: ["Python", "Machine Learning"],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ borderTop: "1px solid #1a1a1a" }}>
      {/* Header */}
      <div style={{ padding: "64px 48px 48px 48px" }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            letterSpacing: "0.25em",
            color: "#4ade80",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Section // Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#e8e8e8", textTransform: "uppercase" }}
        >
          Perjalanan Profesional
        </motion.h2>
      </div>

      {/* List */}
      <div style={{ borderTop: "1px solid #1a1a1a" }}>
        {experience.map((e, i) => (
          <motion.div
            key={e.num}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            style={{
              display: "flex",
              gap: "32px",
              padding: "32px 48px",
              borderBottom: "1px solid #1a1a1a",
              flexWrap: "wrap",
            }}
          >
            {/* Nomor + periode */}
            <div style={{ width: "120px", flexShrink: 0 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#444", display: "block", marginBottom: "8px" }}>
                {e.num}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  letterSpacing: "0.1em",
                  color: "#4ade80",
                  textTransform: "uppercase",
                  border: "1px solid #1f2f24",
                  padding: "3px 8px",
                  display: "inline-block",
                }}
              >
                {e.type}
              </span>
            </div>

            {/* Konten */}
            <div style={{ flex: 1, minWidth: "260px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "10px", flexWrap: "wrap", marginBottom: "6px" }}>
                <p style={{ fontSize: "17px", fontWeight: 600, color: "#e8e8e8" }}>{e.role}</p>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#555" }}>— {e.org}</span>
              </div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#555", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "14px" }}>
                {e.period}
              </p>
              <p style={{ fontSize: "12px", color: "#888", lineHeight: 1.7, maxWidth: "480px", marginBottom: "16px" }}>
                {e.desc}
              </p>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {e.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "9px",
                      letterSpacing: "0.05em",
                      color: "#666",
                      border: "1px solid #1f1f1f",
                      padding: "4px 8px",
                      textTransform: "uppercase",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
