import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Malik",
  description: "Tulisan tentang machine learning, engineering, dan teknologi.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main style={{ background: "#0c0c0c", minHeight: "100vh", paddingTop: "80px" }}>

      {/* Header */}
      <div style={{ padding: "64px 48px 0 48px", borderBottom: "1px solid #1a1a1a", paddingBottom: "48px" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.25em", color: "#555", textTransform: "uppercase", marginBottom: "12px" }}>
          — Notes & Writing
        </p>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, color: "#e8e8e8", letterSpacing: "-0.02em", marginBottom: "16px" }}>
          Blog
        </h1>
        <p style={{ fontSize: "13px", color: "#555", maxWidth: "400px", lineHeight: 1.7 }}>
          Tulisan tentang machine learning, engineering, workflow automation, dan perjalanan belajar teknologi.
        </p>
      </div>

      {/* Post list */}
      <div style={{ borderBottom: "1px solid #1a1a1a" }}>
        {posts.length === 0 ? (
          <div style={{ padding: "64px 48px", textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#333", letterSpacing: "0.1em" }}>
              Belum ada artikel. Coming soon.
            </p>
          </div>
        ) : (
          posts.map((post, i) => (
            <Link key={post.slug} href={"/blog/" + post.slug} style={{ textDecoration: "none" }}>
              <div
                className="blog-post-row"
                style={{
                  display: "grid", gridTemplateColumns: "56px 1fr auto",
                  gap: "0 32px", alignItems: "start",
                  padding: "28px 48px", borderTop: "1px solid #1a1a1a",
                  cursor: "pointer"
                }}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#333", paddingTop: "3px" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p style={{ fontSize: "17px", fontWeight: 600, color: "#e8e8e8", marginBottom: "6px" }}>
                    {post.title}
                  </p>
                  <p style={{ fontSize: "12px", color: "#555", lineHeight: 1.6, maxWidth: "480px", marginBottom: "12px" }}>
                    {post.description}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#444", letterSpacing: "0.1em" }}>
                      {post.date}
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#333" }}>·</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#444", letterSpacing: "0.1em" }}>
                      {post.readTime} read
                    </span>
                    {post.tags.map((tag) => (
                      <span key={tag} style={{
                        fontFamily: "var(--font-mono)", fontSize: "8px", color: "#444",
                        border: "1px solid #1a1a1a", padding: "2px 8px", letterSpacing: "0.1em",
                        textTransform: "uppercase"
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span style={{ color: "#2a2a2a", fontSize: "16px", paddingTop: "2px" }}>→</span>
              </div>
            </Link>
          ))
        )}
      </div>

      {/* Back link */}
      <div style={{ padding: "32px 48px" }}>
        <Link href="/" className="blog-back-link" style={{
          fontFamily: "var(--font-mono)", fontSize: "10px",
          textDecoration: "none", letterSpacing: "0.15em", textTransform: "uppercase"
        }}>
          ← Kembali ke Home
        </Link>
      </div>

    </main>
  );
}