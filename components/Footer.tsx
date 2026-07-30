"use client";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid #1a1a1a",
      padding: "20px 48px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "12px",
      marginBottom: 0,
    }}>
      <span style={{
        fontFamily: "var(--font-mono)", fontSize: "9px", color: "#444",
        letterSpacing: "0.15em", textTransform: "uppercase"
      }}>
        © 2025 Malik. All Rights Reserved.
      </span>
      <div style={{ display: "flex", gap: "24px" }}>
        {["LinkedIn", "Archive", "RSS"].map((l) => (
          <a key={l} href="#" style={{
            fontFamily: "var(--font-mono)", fontSize: "9px", color: "#444",
            textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase",
            transition: "color 0.2s"
          }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#e8e8e8"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#444"; }}
          >
            {l}
          </a>
        ))}
      </div>
    </footer>
  );
}
