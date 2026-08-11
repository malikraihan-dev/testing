"use client";
import { motion } from "framer-motion";
import { MouseEvent } from "react";

const contacts = [
  { num: "01", label: "Email", value: "malik@email.com", href: "mailto:malik.33@email.com" },
  { num: "02", label: "GitHub", value: "@malikraihan-dev", href: "https://github.com/malikraihan-dev" },
  { num: "03", label: "LinkedIn", value: "malik-engineering", href: "https://www.linkedin.com/in/malikraihan" }
];

// Ganti dengan nomor WhatsApp kamu (format: 628xxxxxxxxxx)
const WHATSAPP_NUMBER = "6285174251302";
const WHATSAPP_MESSAGE = "Halo Malik, saya tertarik untuk berkolaborasi dengan kamu!";
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export default function Contact() {
  const handleEnter = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.background = "#111";
  };
  const handleLeave = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.background = "transparent";
  };

  return (
    <section id="contact" style={{ borderTop: "1px solid #1a1a1a" }}>

      {/* Header */}
      <div style={{ padding: "64px 48px 48px 48px" }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "var(--font-mono)", fontSize: "9px",
            letterSpacing: "0.25em", color: "#555",
            textTransform: "uppercase", marginBottom: "12px"
          }}
        >
          04 / Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700,
            color: "#e8e8e8", letterSpacing: "-0.01em", marginBottom: "16px"
          }}
        >
          Mari Berkolaborasi
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: "13px", color: "#555", maxWidth: "400px", lineHeight: 1.7 }}
        >
          Terbuka untuk project kolaborasi, internship, dan freelance. Respon dalam 24 jam.
        </motion.p>
      </div>

      {/* WhatsApp Button — CTA utama */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        style={{ padding: "0 48px 40px 48px" }}
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: "12px",
            background: "#e8e8e8", color: "#0c0c0c",
            padding: "14px 28px", textDecoration: "none",
            fontFamily: "var(--font-mono)", fontSize: "11px",
            letterSpacing: "0.15em", textTransform: "uppercase",
            transition: "all 0.2s", border: "1px solid #e8e8e8",
          }}
          onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#e8e8e8";
          }}
          onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => {
            e.currentTarget.style.background = "#e8e8e8";
            e.currentTarget.style.color = "#0c0c0c";
          }}
        >
          {/* WhatsApp Icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Chat via WhatsApp
        </a>
      </motion.div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #1a1a1a" }} />

      {/* Contact links */}
      <div>
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
              padding: "20px 48px", borderBottom: "1px solid #1a1a1a",
              textDecoration: "none", transition: "background 0.2s"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#444" }}>{c.num}</span>
              <span style={{ fontSize: "16px", fontWeight: 600, color: "#e8e8e8" }}>{c.label}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#555" }}>{c.value}</span>
              <span style={{ color: "#555", fontSize: "14px" }}>↗</span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Info bawah */}
      <div style={{ display: "flex", gap: "64px", padding: "40px 48px", flexWrap: "wrap" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.2em", color: "#555", textTransform: "uppercase", marginBottom: "10px" }}>
            Availability
          </p>
          <p style={{ fontSize: "12px", color: "#888", lineHeight: 1.7, maxWidth: "220px" }}>
            Terbuka untuk project kolaborasi, internship, dan freelance work di bidang ML dan engineering.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.2em", color: "#555", textTransform: "uppercase", marginBottom: "10px" }}>
            Location
          </p>
          <p style={{ fontSize: "12px", color: "#888", lineHeight: 1.7 }}>
            Bogor, Indonesia<br />— Remote Worldwide
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.2em", color: "#555", textTransform: "uppercase", marginBottom: "10px" }}>
            Response Time
          </p>
          <p style={{ fontSize: "12px", color: "#888", lineHeight: 1.7 }}>
            Within 24 hours<br />— via WhatsApp / Email
          </p>
        </motion.div>
      </div>

    </section>
  );
}
