"use client";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Sentiment Analysis",
    desc: "Analisis sentimen review aplikasi Indonesia menggunakan deep learning LSTM Bi-directional.",
    tech: ["Python", "TensorFlow", "Streamlit"],
  },
  {
    number: "02",
    title: "n8n Automation",
    desc: "Workflow otomasi lead form dengan webhook, Google Sheets, Slack notifikasi, dan SMS.",
    tech: ["n8n", "Railway", "Twilio"],
  },
  {
    number: "03",
    title: "HTL Reactor AI",
    desc: "Sistem kontrol reaktor Hydrothermal Liquefaction menggunakan sensor NIR dan AI.",
    tech: ["Python", "Arduino", "NIR Sensor"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-8 md:px-24 py-32 border-t border-white/5">
      <div className="max-w-4xl">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 text-xs tracking-widest uppercase mb-4"
        >
          02 — Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-white"
        >
          Project Pilihan
        </motion.h2>

        <div className="flex flex-col gap-0">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col md:flex-row md:items-start gap-6 py-10 border-t border-white/5 hover:border-white/20 transition-colors duration-300 cursor-default"
            >
              {/* Nomor */}
              <span className="text-gray-700 text-sm font-mono group-hover:text-gray-500 transition-colors duration-300 md:pt-1 md:w-12 flex-shrink-0">
                {p.number}
              </span>

              {/* Konten */}
              <div className="flex-1">
                <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-gray-200 transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-lg">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-gray-600 text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <span className="text-gray-700 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 text-lg md:pt-1">
                →
              </span>
            </motion.div>
          ))}
          {/* Border bawah project terakhir */}
          <div className="border-t border-white/5" />
        </div>

      </div>
    </section>
  );
}