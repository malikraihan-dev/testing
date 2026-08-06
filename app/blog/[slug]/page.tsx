import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPostsMeta, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPostsMeta().map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
      <Link href="/blog" className="text-sm text-foreground/50 hover:text-foreground">
        ← Semua tulisan
      </Link>

      <p className="mt-6 text-xs text-foreground/50">
        {post.meta.date} · {post.meta.readTime}
      </p>
      <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
        {post.meta.title}
      </h1>

      <article
        className="prose prose-neutral dark:prose-invert mt-10 max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </main>
  );
}
