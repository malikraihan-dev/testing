"use client";

const skills = [
  {
    name: "React",
    color: "#61DAFB",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
        <circle cx="12" cy="12" r="2.2" fill="currentColor"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
  {
    name: "Next.js",
    color: "#ffffff",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <path d="M8 16.5V7.5l9 11H14V12l-6 4.5z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
        <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <path d="M8 10h4M10 10v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M14 14c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
      </svg>
    ),
  },
  {
    name: "Python",
    color: "#4B8BBE",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
        <path d="M12 2C9 2 7 3.5 7 6v2h5v1H6C4 9 2 10.5 2 13s1.5 4 4 4h1v-2.5c0-1.5 1-2.5 2.5-2.5h5c1.5 0 2.5-1 2.5-2.5V6C17 3.5 15 2 12 2z" stroke="currentColor" strokeWidth="1.1" fill="none"/>
        <path d="M12 22c3 0 5-1.5 5-4v-2h-5v-1h6c2 0 4-1.5 4-4s-1.5-4-4-4h-1v2.5c0 1.5-1 2.5-2.5 2.5h-5C8 12 7 13 7 14.5V18c0 2.5 2 4 5 4z" stroke="currentColor" strokeWidth="1.1" fill="none"/>
        <circle cx="10" cy="5.5" r="0.8" fill="currentColor"/>
        <circle cx="14" cy="18.5" r="0.8" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Git",
    color: "#F05032",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
        <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <path d="M6 16v-8M8 6h8M6 8v4a4 4 0 004 4h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Java",
    color: "#F89820",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
        <path d="M9 3c0 3-3 4-3 7s2 5 6 5 6-2 6-5-3-4-3-7" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        <path d="M6 18s-1 .5 1 1c2.5.6 4 .6 6.5 0 1-.3 2-1 2-1" stroke="currentColor" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
        <path d="M5.5 20.5s-1 .5 1 1c3 .8 5.5.8 8.5-.2 1-.3 1.5-.8 1.5-.8" stroke="currentColor" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Spring",
    color: "#6DB33F",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
        <path d="M21 7c-1 3-3 5-6 6.5C10 15.5 5 14 3 11c-1.5-2.5-.5-6 2-7.5" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        <path d="M7 17c1 2 3 4 6 4 4 0 7-3 7-7 0-2-.8-4-2-5.5" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        <circle cx="19.5" cy="4.5" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "TensorFlow",
    color: "#FF6F00",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
        <path d="M12 2L3 7v5l4 2.3V9.7L12 7l5 2.9v4.6l-3 1.7V13l-2-1.2V17l5 2.9V9L12 2z" stroke="currentColor" strokeWidth="1.1" fill="none"/>
        <path d="M12 17v5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Arduino",
    color: "#00979D",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
        <path d="M7 12h3M14 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 9.5C9 8.1 8 7 6.5 7S4 8.1 4 9.5v5C4 15.9 5 17 6.5 17S9 15.9 9 14.5" stroke="currentColor" strokeWidth="1.1" fill="none"/>
        <path d="M15 14.5c0 1.4 1 2.5 2.5 2.5S20 15.9 20 14.5v-5C20 8.1 19 7 17.5 7S15 8.1 15 9.5" stroke="currentColor" strokeWidth="1.1" fill="none"/>
      </svg>
    ),
  },
  {
    name: "n8n",
    color: "#EA4B71",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
        <circle cx="5" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <circle cx="12" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <circle cx="19" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <circle cx="12" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <path d="M7.2 10.8l3-3.4M14.8 8.8l2.5 2M17.2 14l-2.8 2.5M6.8 14l3 2.3" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const doubled = [...skills, ...skills, ...skills];

export default function Skills() {
  return (
    <div style={{
      borderTop: "1px solid #1a1a1a",
      borderBottom: "1px solid #1a1a1a",
      overflow: "hidden",
      position: "relative",
      height: "80px",
      display: "flex",
      alignItems: "center",
    }}>

      {/* Fade kiri */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: "120px", zIndex: 10,
        background: "linear-gradient(to right, #0c0c0c 40%, transparent)",
        pointerEvents: "none", display: "flex", alignItems: "center", paddingLeft: "20px"
      }}>
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: "8px", color: "#2a2a2a",
          letterSpacing: "0.25em", textTransform: "uppercase", whiteSpace: "nowrap"
        }}>
          Tech Stack
        </span>
      </div>

      {/* Fade kanan */}
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: "80px", zIndex: 10,
        background: "linear-gradient(to left, #0c0c0c 40%, transparent)",
        pointerEvents: "none"
      }} />

      {/* Track wrapper */}
      <div style={{ display: "flex", alignItems: "center", width: "100%", overflow: "hidden" }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          animation: "marquee 28s linear infinite",
          willChange: "transform",
          flexShrink: 0,
        }}>
          {doubled.map((skill, i) => (
            <div
              key={i}
              className="skill-item"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
                padding: "0 28px",
                borderRight: "1px solid #1a1a1a",
                height: "80px",
                flexShrink: 0,
                opacity: 0.55,
                cursor: "default",
                color: "#888",
                transition: "opacity 0.2s, color 0.25s",
                ["--accent" as any]: skill.color,
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.55"; }}
            >
              <span className="skill-icon" style={{ display: "flex", transition: "transform 0.25s ease, color 0.25s ease" }}>
                {skill.svg}
              </span>
              <span
                className="skill-name"
                style={{
                  fontFamily: "var(--font-mono)", fontSize: "9px", color: "inherit",
                  letterSpacing: "0.15em", textTransform: "uppercase", whiteSpace: "nowrap",
                  transition: "color 0.25s ease",
                }}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        div[style*="animation: marquee"]:hover {
          animation-play-state: paused;
        }
        .skill-item:hover {
          color: var(--accent);
        }
        .skill-item:hover .skill-icon {
          transform: scale(1.45);
        }
      `}</style>
    </div>
  );
}
