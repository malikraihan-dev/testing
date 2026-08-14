"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const skills = [
  { num: "01", label: "Machine Learning & Deep Learning" },
  { num: "02", label: "Workflow Automation & Integration" },
  { num: "03", label: "IoT & Hardware Engineering" },
  { num: "04", label: "Web Development (Next.js)" },
  { num: "05", label: "Project Management" },
];

const stats = [
  { label: "Project", target: 4 },
  { label: "Tahun Pengalaman", target: 2 },
  { label: "Organisasi Aktif", target: 2 },
];

function easeOutCubic(value: number) {
  return 1 - Math.pow(1 - value, 3);
}

export default function About() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const hasAnimatedRef = useRef(false);
  const [displayValues, setDisplayValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const element = statsRef.current;

    if (!element) {
      return;
    }

    const runAnimation = () => {
      if (hasAnimatedRef.current) {
        return;
      }

      hasAnimatedRef.current = true;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (time: number) => {
        const elapsed = Math.min((time - startTime) / duration, 1);
        const eased = easeOutCubic(elapsed);

        setDisplayValues(stats.map((stat) => Math.round(stat.target * eased)));

        if (elapsed < 1) {
          animationFrameRef.current = window.requestAnimationFrame(animate);
        }
      };

      animationFrameRef.current = window.requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section id="about" style={{ borderTop: "1px solid #1a1a1a" }}>

      {/* Header */}
      <div style={{ padding: "64px 48px 0 48px", display: "flex", alignItems: "center", gap: "16px" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "48px", fontWeight: 700, color: "#1a1a1a" }}>01</span>
        <motion.h2
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#e8e8e8", textTransform: "uppercase", letterSpacing: "0.05em" }}
        >
          Tentang Saya
        </motion.h2>
      </div>

      {/* Body — dua kolom */}
      <div style={{ display: "flex", gap: "0", padding: "40px 48px 0 48px", flexWrap: "wrap" }}>

        {/* Kiri — foto + info */}
        <div style={{ width: "200px", flexShrink: 0, marginRight: "48px", marginBottom: "32px" }}>
          {/* Foto */}
          <div style={{
            width: "180px", height: "220px", background: "#161616",
            border: "1px solid #1a1a1a", marginBottom: "12px",
            overflow: "hidden"
          }}>
            <img
              src="/foto.jpg"
              alt="Foto Malik"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#444", letterSpacing: "0.1em" }}>
            Based in Bogor, Indonesia · 2023 · IPB University
          </p>
        </div>

        {/* Kanan — teks */}
        <div style={{ flex: 1, minWidth: "260px" }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ fontSize: "13px", color: "#888", lineHeight: 1.8, marginBottom: "16px", maxWidth: "520px" }}
          >
            Mahasiswa Teknologi Rekayasa Komputer di Sekolah Vokasi IPB University.
            Saya percaya bahwa teknologi yang baik adalah teknologi yang bekerja dengan presisi —
            bukan sekadar berfungsi, melainkan memberikan dampak yang terukur.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontSize: "13px", color: "#888", lineHeight: 1.8, marginBottom: "16px", maxWidth: "520px" }}
          >
            Aktif di HIMAVO Micro IT dan berpengalaman sebagai Project Manager di berbagai
            project kelompok. Fokus pada machine learning, otomasi sistem, dan pengembangan
            solusi IoT yang fungsional.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontSize: "13px", color: "#888", lineHeight: 1.8, maxWidth: "520px" }}
          >
            Dengan pendekatan yang disiplin terhadap data dan sistem, saya terus mendorong
            diri untuk membangun solusi yang tidak hanya bekerja — tetapi bekerja dengan baik.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ fontSize: "13px", color: "#888", lineHeight: 1.8, marginBottom: "16px", maxWidth: "520px" }}
          >
            Selain di bangku kuliah, saya juga membawa pengalaman ini ke dunia kerja —
            mengembangkan sistem backend berbasis Java &amp; Spring Boot selama masa kerja
            di industri asuransi, sekaligus memperdalam machine learning lewat bootcamp AI Engineer.
          </motion.p>

          <div
            ref={statsRef}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "24px",
              marginTop: "36px",
              marginBottom: "34px",
            }}
          >
            {stats.map((stat, index) => (
              <div key={stat.label} style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "clamp(34px, 5vw, 56px)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    color: "#ffffff",
                    marginBottom: "10px",
                  }}
                >
                  {String(displayValues[index]).padStart(2, "0")}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#bdbdbd",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Kompetensi */}
          <div style={{ marginTop: "40px", borderTop: "1px solid #1a1a1a", paddingTop: "24px" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.25em", color: "#444", textTransform: "uppercase", marginBottom: "16px" }}>
              Kompetensi Teknis
            </p>
            {skills.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                style={{ display: "flex", alignItems: "center", gap: "24px", padding: "10px 0", borderBottom: "1px solid #161616" }}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#333" }}>{s.num}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#888", letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote block */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ margin: "48px 48px 64px 48px", borderTop: "1px solid #1a1a1a", paddingTop: "32px", paddingLeft: "24px", borderLeft: "2px solid #4ade80" }}
      >
        <p style={{ fontSize: "13px", color: "#555", fontStyle: "italic", lineHeight: 1.8, maxWidth: "480px", marginBottom: "12px" }}>
          &quot;Teknologi terbaik adalah yang tidak terlihat — ia hanya bekerja, dengan presisi yang konsisten, setiap saat.&quot;
        </p>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#444", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          — Malik, Statement of Intent
        </p>
      </motion.div>

    </section>
  );
}