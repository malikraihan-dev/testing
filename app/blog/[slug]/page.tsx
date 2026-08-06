import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title + " — Malik",
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main style={{ background: "#0c0c0c", minHeight: "100vh", paddingTop: "80px" }}>

      {/* Header artikel */}
      <div style={{ padding: "64px 48px 48px 48px", borderBottom: "1px solid #1a1a1a", maxWidth: "760px" }}>
        <Link href="/blog" className="blog-back-link" style={{
          fontFamily: "var(--font-mono)", fontSize: "9px",
          textDecoration: "none", letterSpacing: "0.15em", textTransform: "uppercase",
          display: "inline-block", marginBottom: "32px"
        }}>
          ← Blog
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px", flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#444", letterSpacing: "0.1em" }}>
            {post.date}
          </span>
          <span style={{ color: "#333" }}>·</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "#444", letterSpacing: "0.1em" }}>
            {post.readTime} read
          </span>
          {post.tags.map((tag) => (
            <span key={tag} style={{
              fontFamily: "var(--font-mono)", fontSize: "8px", color: "#555",
              border: "1px solid #1a1a1a", padding: "2px 8px",
              letterSpacing: "0.1em", textTransform: "uppercase"
            }}>
              {tag}
            </span>
          ))}
        </div>

        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#e8e8e8", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "16px" }}>
          {post.title}
        </h1>
        <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.7 }}>
          {post.description}
        </p>
      </div>

      {/* Konten artikel */}
      <div
        style={{ padding: "48px 48px 80px 48px", maxWidth: "720px" }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* CSS untuk konten markdown */}
      <style>{`
        main p { font-size: 14px; color: #888; line-height: 1.85; margin-bottom: 20px; }
        main h2 { font-size: 22px; font-weight: 700; color: #e8e8e8; margin: 40px 0 16px; letter-spacing: -0.01em; }
        main h3 { font-size: 17px; font-weight: 600; color: #ccc; margin: 32px 0 12px; }
        main code { font-family: var(--font-mono); font-size: 12px; background: #111; color: #e8e8e8; padding: 2px 6px; border: 1px solid #1a1a1a; }
        main pre { background: #111; border: 1px solid #1a1a1a; padding: 20px 24px; margin: 24px 0; overflow-x: auto; }
        main pre code { background: none; border: none; padding: 0; font-size: 12px; line-height: 1.7; }
        main ul, main ol { color: #888; font-size: 14px; line-height: 1.85; padding-left: 20px; margin-bottom: 20px; }
        main li { margin-bottom: 6px; }
        main blockquote { border-left: 2px solid #2a2a2a; padding: 12px 0 12px 20px; margin: 24px 0; }
        main blockquote p { color: #555; font-style: italic; margin: 0; }
        main a { color: #e8e8e8; text-decoration: underline; text-decoration-color: #2a2a2a; }
        main hr { border: none; border-top: 1px solid #1a1a1a; margin: 40px 0; }
        main strong { color: #e8e8e8; font-weight: 600; }
      `}</style>

    </main>
  );
}