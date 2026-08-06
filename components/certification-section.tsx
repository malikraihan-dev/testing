import { certifications } from "@/data/certifications";
import { Award } from "lucide-react";

export function CertificationSection() {
  return (
    <section id="certifications" className="py-24">
      <p className="mb-2 text-xs uppercase tracking-widest text-foreground/50">
        Section // 03
      </p>
      <h2 className="mb-10 text-2xl font-semibold sm:text-3xl">
        Sertifikasi
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="group flex flex-col gap-3 rounded-2xl border border-foreground/10 p-6 transition-colors hover:border-foreground/30"
          >
            <div className="flex items-start justify-between gap-3">
              <Award className="h-5 w-5 shrink-0 text-foreground/60" />
              <span className="text-xs text-foreground/50">{cert.year}</span>
            </div>

            <div>
              <h3 className="font-medium leading-snug">{cert.title}</h3>
              <p className="text-sm text-foreground/60">{cert.issuer}</p>
            </div>

            <div className="mt-auto flex flex-wrap gap-2 pt-2">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-foreground/5 px-3 py-1 text-xs text-foreground/70"
                >
                  {skill}
                </span>
              ))}
            </div>

            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm underline underline-offset-4 text-foreground/70 hover:text-foreground"
              >
                Lihat sertifikat ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
