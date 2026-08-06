import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";

// Generate satu halaman statis per project saat build.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Malik`,
    description: project.tagline,
  };
}

export default function ProjectCaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <Link
        href="/#projects"
        className="text-sm text-foreground/50 hover:text-foreground"
      >
        ← Kembali ke Project
      </Link>

      <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-3 text-lg text-foreground/60">{project.tagline}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-foreground/5 px-3 py-1 text-xs text-foreground/70"
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.demoUrl || project.repoUrl) && (
        <div className="mt-6 flex gap-4 text-sm">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-foreground/80"
            >
              Demo ↗
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-foreground/80"
            >
              Source ↗
            </a>
          )}
        </div>
      )}

      <section className="mt-16 space-y-14">
        <div>
          <p className="mb-2 text-xs uppercase tracking-widest text-foreground/50">
            01 // Masalah
          </p>
          <p className="text-foreground/80 leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div>
          <p className="mb-2 text-xs uppercase tracking-widest text-foreground/50">
            02 // Pendekatan
          </p>
          <p className="text-foreground/80 leading-relaxed">
            {project.approach}
          </p>
        </div>

        <div>
          <p className="mb-2 text-xs uppercase tracking-widest text-foreground/50">
            03 // Arsitektur
          </p>
          <ol className="space-y-2">
            {project.architecture.map((step, i) => (
              <li key={i} className="flex gap-3 text-foreground/80">
                <span className="text-foreground/40">{String(i + 1).padStart(2, "0")}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <p className="mb-2 text-xs uppercase tracking-widest text-foreground/50">
            04 // Hasil
          </p>
          <ul className="space-y-2">
            {project.result.map((r, i) => (
              <li key={i} className="flex gap-3 text-foreground/80">
                <span className="text-foreground/40">—</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.images && project.images.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2">
            {project.images.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                className="rounded-xl border border-foreground/10"
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
