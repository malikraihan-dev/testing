"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Award } from "lucide-react";
import { certifications } from "@/data/certifications";

export function CertificationSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="certifications" style={{ borderTop: "1px solid #1a1a1a" }}>

      {/* Header */}
      <div style={{ padding: "64px 48px 40px 48px" }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.25em",
            color: "#4ade80", textTransform: "uppercase", marginBottom: "12px",
          }}
        >
          Section // Sertifikasi
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#e8e8e8", textTransform: "uppercase" }}
        >
          Sertifikasi
        </motion.h2>
      </div>

      {/* Grid kartu sertifikasi */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "16px", padding: "0 48px 80px 48px"
      }}>
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            onMouseEnter={() => setHovered(cert.title)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === cert.title ? "#111" : "#0e0e0e",
              border: `1px solid ${hovered === cert.title ? "#2d3d2f" : "#1a1a1a"}`,
              borderRadius: "14px",
              padding: "28px",
              display: "flex", flexDirection: "column", gap: "16px",
              transition: "all 0.25s",
              transform: hovered === cert.title ? "translateY(-3px)" : "translateY(0)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{
                width: "36px", height: "36px", borderRadius: "50%",
                background: "rgba(74, 222, 128, 0.08)", border: "1px solid rgba(74, 222, 128, 0.25)",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <Award size={16} color="#4ade80" strokeWidth={1.5} />
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#555", letterSpacing: "0.1em" }}>
                {cert.year}
              </span>
            </div>

            <div>
              <p style={{ fontSize: "16px", fontWeight: 600, color: "#e8e8e8", lineHeight: 1.4, marginBottom: "5px" }}>
                {cert.title}
              </p>
              <p style={{ fontSize: "12px", color: "#666" }}>{cert.issuer}</p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "auto", paddingTop: "4px" }}>
              {cert.skills.map((skill) => (
                <span key={skill} style={{
                  fontFamily: "var(--font-mono)", fontSize: "8.5px", color: "#888",
                  background: "#161616", border: "1px solid #232323",
                  borderRadius: "999px", padding: "5px 11px",
                  letterSpacing: "0.06em", textTransform: "uppercase"
                }}>
                  {skill}
                </span>
              ))}
            </div>

            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: "var(--font-mono)", fontSize: "10px", color: "#4ade80",
                  textDecoration: "none", letterSpacing: "0.08em"
                }}
              >
                Lihat Sertifikat ↗
              </a>
            )}
          </motion.div>
        ))}
      </div>

    </section>
  );
}