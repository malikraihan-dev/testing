"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const capabilities = [
  { num: "01", label: "Hardware Systems" },
  { num: "02", label: "ML / AI Engineering" },
  { num: "03", label: "Workflow Automation" },
];

export default function Hero() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const t = setInterval(() => setCount((c) => (c % 3) + 1), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ minHeight: "100vh", paddingTop: "60px", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>

      {/* Efek Gradien Tertiary Green (Aman untuk Layout) */}
      <div style={{
        position: "absolute",
        top: "-10%",
        left: "-10%",
        width: "60vw",
        height: "60vw",
        background: "radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, rgba(12, 12, 12, 0) 70%)",
        zIndex: 0,
        pointerEvents: "none"
      }} />

      {/* Top section */}
      <div style={{ display: "flex", flex: 1, position: "relative", zIndex: 1 }}>

        {/* Konten kiri */}
        <div style={{ flex: 1, padding: "48px 32px 32px 48px", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>

          {/* Open to opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", display: "block" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.2em", color: "#555", textTransform: "uppercase" }}>
              Open to Opportunities
            </span>
          </motion.div>

          {/* Nama besar */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ 
              fontSize: "clamp(64px, 10vw, 96px)", 
              fontWeight: 700, 
              letterSpacing: "-0.03em", 
              lineHeight: 1, 
              marginBottom: "10px", 
              display: "flex", 
              alignItems: "baseline", 
              gap: "4px",
              background: "linear-gradient(90deg, #e8e8e8 0%, #10b981 120%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            MALIK
            <motion.span
              animate={{ opacity: [1, 0.15, 1] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              style={{
                display: "inline-block",
                width: "0.5em",
                height: "clamp(48px, 7.5vw, 72px)",
                background: "#4ade80",
                marginLeft: "4px",
              }}
            />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.2em",
              color: "#4ade80",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Mohamad Malik Raihan Olii
          </motion.p>

          {/* Deskripsi */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: "13px", color: "#666", lineHeight: 1.7, maxWidth: "380px", marginBottom: "36px" }}
          >
            Mahasiswa Teknologi Rekayasa Komputer yang berfokus pada integrasi
            sistem digital dan pengembangan solusi perangkat keras yang presisi.
            Berbasis di Indonesia, mengeksplorasi batas antara estetika minimalis
            dan fungsionalitas teknis.
          </motion.p>

          {/* Tombol */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
          >
            <a href="#projects" style={{
              fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.15em",
              textTransform: "uppercase", padding: "12px 24px", background: "#e8e8e8",
              color: "#0c0c0c", textDecoration: "none", border: "1px solid #e8e8e8",
              transition: "all 0.2s"
            }}>
              Lihat Project
            </a>
            <a href="#contact" style={{
              fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.15em",
              textTransform: "uppercase", padding: "12px 24px", background: "transparent",
              color: "#e8e8e8", textDecoration: "none", border: "1px solid #2a2a2a",
              transition: "all 0.2s"
            }}>
              Hubungi Saya
            </a>
          </motion.div>
        </div>

        {/* Panel kanan — dark image placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            width: "38%", background: "#111", position: "relative",
            borderLeft: "1px solid #1a1a1a", overflow: "hidden", display: "flex", alignItems: "flex-end"
          }}
        >
          {/* Grid lines dekoratif */}
          <div style={{ position: "absolute", inset: 0, opacity: 0.15 }}>
            {[20, 40, 60, 80].map((p) => (
              <div key={p} style={{ position: "absolute", left: p + "%", top: 0, bottom: 0, width: "1px", background: "#e8e8e8" }} />
            ))}
            {[25, 50, 75].map((p) => (
              <div key={p} style={{ position: "absolute", top: p + "%", left: 0, right: 0, height: "1px", background: "#e8e8e8" }} />
            ))}
          </div>

          {/* Label Current Focus */}
          <div style={{ position: "relative", zIndex: 2, padding: "24px 28px", borderTop: "1px solid #1a1a1a", width: "100%" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.2em", color: "#555", textTransform: "uppercase", marginBottom: "6px" }}>
              Current Focus
            </p>
            <p style={{ fontSize: "13px", color: "#e8e8e8" }}>Computer Engineering & ML Systems</p>
          </div>
        </motion.div>
      </div>

      {/* Capabilities bar bawah */}
      <div style={{ borderTop: "1px solid #1a1a1a", position: "relative", zIndex: 1 }}>
        <div style={{ padding: "16px 48px 8px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.25em", color: "#555", textTransform: "uppercase" }}>
            Selected Capabilities
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#555" }}>
            {String(count).padStart(2, "0")} // 03
          </span>
        </div>
        <div>
          {capabilities.map((c, i) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08 }}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "14px 48px", borderTop: "1px solid #1a1a1a",
                borderLeft: count === i + 1 ? "2px solid #4ade80" : "2px solid transparent",
                background: count === i + 1 ? "#111" : "transparent",
                transition: "background 0.3s, border-color 0.3s"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#444" }}>{c.num}</span>
                <span style={{ fontSize: "13px", color: "#e8e8e8", textTransform: "uppercase", letterSpacing: "0.05em" }}>{c.label}</span>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: count === i + 1 ? "#4ade80" : "#444" }}>
                {count === i + 1 ? "↗" : ""}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}