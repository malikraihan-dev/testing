"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const capabilities = [
  { num: "01", label: "COMPUTER ENGINEERING" },
  { num: "02", label: "MACHINE LEARNING" },
  { num: "03", label: "WORKFLOW AUTOMATION" },
];

const statusItems = [
  "> Fetching kernel modules...",
  "> Loading ML_MODELS [98.2%]",
  "> Hardware link: ESTABLISHED",
  "> Loc: Bogor, Indonesia",
];

export default function Hero() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const t = setInterval(() => setCount((c) => (c % capabilities.length) + 1), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-zinc-900 bg-[radial-gradient(circle_at_top_left,_rgba(77,224,130,0.12),_transparent_35%)] px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#4de082]" />
            <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.25em] text-stone-300">
              Open to opportunities
            </span>
          </div>
          <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.25em] text-zinc-500">
            Based in Bogor • Remote ready
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.3em] text-[#4de082]"
            >
              Computer Engineering • ML • Automation
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-5 font-['Liberation_Sans'] text-[clamp(3.2rem,7vw,6.8rem)] font-extrabold uppercase leading-[0.9] text-white"
            >
              MALIK
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-base leading-7 text-stone-300"
            >
              I build practical systems at the edge of hardware, intelligent software, and automation — from embedded thinking to real-world ML workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="border border-white bg-white px-5 py-3 font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.15em] text-[#0c0c0c] transition hover:bg-transparent hover:text-white"
              >
                Lihat Project
              </a>
              <a
                href="#contact"
                className="border border-zinc-800 bg-transparent px-5 py-3 font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.15em] text-white transition hover:border-[#4de082] hover:text-[#4de082]"
              >
                Hubungi Saya
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-2xl border border-zinc-900 bg-[#121212] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#4de082]" />
              <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.25em] text-stone-300">
                System status
              </p>
            </div>

            <div className="space-y-2">
              {statusItems.map((item) => (
                <div key={item} className="font-['JetBrains_Mono'] text-xs leading-5 text-[#4de082]">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-5 border-t border-zinc-900 pt-4">
              <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.25em] text-stone-500">
                Current stack
              </div>
              <div className="mt-3 space-y-2 text-sm text-stone-300">
                <div>Python / PyTorch / TensorFlow</div>
                <div>C++ / Embedded Systems</div>
                <div>n8n / LLM Orchestration</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="rounded-2xl border border-zinc-900 bg-[#101010] p-4 sm:p-5">
          <div className="flex flex-col gap-3 border-b border-zinc-900 pb-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.25em] text-stone-400">
              Selected capabilities
            </span>
            <span className="font-['JetBrains_Mono'] text-[10px] text-stone-400">
              {String(count).padStart(2, "0")} // 03
            </span>
          </div>

          <div className="mt-2 divide-y divide-zinc-900">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.num}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.08 }}
                className={`flex items-center justify-between px-1 py-4 ${count === index + 1 ? "bg-[#121212]" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#4de082]">{cap.num}</span>
                  <span className="text-sm uppercase tracking-[0.08em] text-stone-200">{cap.label}</span>
                </div>
                <span className="font-['JetBrains_Mono'] text-sm text-stone-400">{count === index + 1 ? "↗" : ""}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
