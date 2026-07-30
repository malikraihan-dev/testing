"use client";
import { motion } from "framer-motion";

const skills = [
  { num: "01", label: "Machine Learning & Deep Learning" },
  { num: "02", label: "Workflow Automation & Integration" },
  { num: "03", label: "IoT & Hardware Engineering" },
  { num: "04", label: "Web Development (Next.js)" },
  { num: "05", label: "Project Management" },
];

export default function About() {
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

        {/* Kiri — foto placeholder + info */}
        <div style={{ width: "200px", flexShrink: 0, marginRight: "48px", marginBottom: "32px" }}>
          {/* Foto placeholder */}
          <div style={{
            width: "180px", height: "220px", background: "#161616",
            border: "1px solid #1a1a1a", marginBottom: "12px",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#333", textTransform: "uppercase", letterSpacing: "0.2em" }}>Foto.jpg</span>
          </div>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#444", letterSpacing: "0.1em" }}>
            Based in Bogor, Indonesia · 2025 · IPB Univ.
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
          "Teknologi terbaik adalah yang tidak terlihat — ia hanya bekerja, dengan presisi yang konsisten, setiap saat."
        </p>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#444", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          — Malik, Statement of Intent
        </p>
      </motion.div>

    </section>
  );
}
