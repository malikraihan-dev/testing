"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Sentiment Analysis",
    desc: "Analisis sentimen review aplikasi Indonesia menggunakan deep learning LSTM Bi-directional.",
    tech: ["Python", "TensorFlow", "Streamlit"],
    emoji: "🧠",
  },
  {
    title: "n8n Automation",
    desc: "Workflow otomasi lead form dengan webhook, Google Sheets, Slack notifikasi, dan SMS.",
    tech: ["n8n", "Railway", "Twilio"],
    emoji: "⚙️",
  },
  {
    title: "HTL Reactor AI",
    desc: "Sistem kontrol reaktor Hydrothermal Liquefaction menggunakan sensor NIR dan AI.",
    tech: ["Python", "Arduino", "NIR Sensor"],
    emoji: "🔬",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-8 md:px-24 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-10"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="border border-gray-800 rounded-2xl p-6 hover:border-gray-500 hover:bg-white/5 transition-colors duration-300 cursor-default"
          >
            <span className="text-3xl mb-4 block">{p.emoji}</span>
            <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t}
                      className="bg-gray-800 px-3 py-1 rounded-full text-xs text-gray-300">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}