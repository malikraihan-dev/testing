"use client";
import { motion } from "framer-motion";

const expertise = [
  { num: "01", label: "System Architecture", level: "Expert" },
  { num: "02", label: "Data Preprocessing", level: "Advanced" },
  { num: "03", label: "Cloud Orchestration", level: "Fluent" },
  { num: "04", label: "Hardware Logic", level: "Expert" },
];

export default function About() {
  return (
    <section id="about" className="border-b border-zinc-900 bg-[#0c0c0c] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex items-center gap-3">
          <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.3em] text-stone-300">
            01 //
          </span>
          <h2 className="font-['Liberation_Sans'] text-2xl font-semibold uppercase tracking-[2.4px] text-white">
            Tentang Saya
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="relative min-h-[320px] overflow-hidden rounded-[24px] border border-zinc-900 bg-gradient-to-br from-white/20 via-stone-200/10 to-transparent">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(77,224,130,0.25),_transparent_45%)]" />
            <div className="absolute bottom-4 left-4 rounded-full border border-zinc-800 bg-zinc-950/80 px-3 py-1 backdrop-blur-sm">
              <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.24em] text-[#4de082]">
                ID_001_MLK
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl text-base leading-7 text-stone-300"
            >
              Saya adalah engineer yang tertarik pada persilangan antara hardware, machine learning, dan automasi. Saya suka membangun sistem yang berfungsi secara nyata, efisien, dan siap dikembangkan.
            </motion.p>

            <div className="flex flex-col gap-4 rounded-2xl border border-zinc-900 bg-[#101010] p-5">
              {expertise.map((item) => (
                <div key={item.num} className="flex items-center justify-between gap-4">
                  <div className="font-['JetBrains_Mono'] text-sm leading-6 text-stone-300">
                    {item.num} {item.label}
                  </div>
                  <div className="h-px flex-1 bg-zinc-900" />
                  <div className="font-['JetBrains_Mono'] text-sm leading-6 text-[#4de082]">
                    {item.level}
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-zinc-900 bg-stone-950/70 p-6"
            >
              <p className="text-base leading-7 text-white">
                Engineering is not just about solving problems; it&apos;s about defining the constraints and optimizing for the future.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
