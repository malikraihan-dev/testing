import Link from "next/link";
import { getAllPostsMeta } from "@/lib/blog";

export const metadata = {
  title: "Notes — Malik",
  description: "Catatan singkat seputar machine learning, automation, dan engineering.",
};

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();

  return (
    <main className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
      <p className="mb-2 text-xs uppercase tracking-widest text-foreground/50">
        04 // Notes
      </p>
      <h1 className="mb-10 text-3xl font-semibold sm:text-4xl">
        Tulisan &amp; Catatan
      </h1>

      {posts.length === 0 && (
        <p className="text-foreground/60">
          Belum ada tulisan. Tambahkan file .md baru di content/blog untuk
          mulai menulis.
        </p>
      )}

      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <p className="text-xs text-foreground/50">
                {post.date} · {post.readTime}
              </p>
              <h2 className="mt-1 text-lg font-medium group-hover:underline underline-offset-4">
                {post.title}
              </h2>
              <p className="mt-1 text-sm text-foreground/60">
                {post.excerpt}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
