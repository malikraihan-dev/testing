"use client";
import { motion } from "framer-motion";

const projects = [
  {
    num: "[01]",
    title: "SENTIMENT ANALYSIS",
    tag: "NATURAL LANGUAGE PROCESSING",
    tech: ["Python", "BERT", "PyTorch"],
  },
  {
    num: "[02]",
    title: "N8N AUTOMATION",
    tag: "WORKFLOW ORCHESTRATION",
    tech: ["NodeJS", "API Integration", "Self-Hosted"],
  },
  {
    num: "[03]",
    title: "HTL REACTOR",
    tag: "EMBEDDED CONTROL SYSTEMS",
    tech: ["Arduino", "Sensors", "Real-time Control"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-b border-zinc-900 bg-[#0c0c0c] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex items-center gap-3">
          <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.3em] text-stone-300">
            02 //
          </span>
          <h2 className="font-['Liberation_Sans'] text-2xl font-semibold uppercase tracking-[2.4px] text-white">
            Project Pilihan
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex h-full flex-col justify-between rounded-[22px] border border-zinc-900 bg-[#101010] p-6"
            >
              <div>
                <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.25em] text-stone-400">
                  {project.num}
                </div>
                <h3 className="mt-4 font-['Liberation_Sans'] text-xl font-semibold uppercase leading-7 text-white">
                  {project.title}
                </h3>
                <p className="mt-2 font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.18em] text-stone-400">
                  {project.tag}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-full border border-zinc-800 px-2.5 py-1 font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.18em] text-stone-300">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
