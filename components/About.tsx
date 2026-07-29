"use client";
import { motion } from "framer-motion";

const skills = ["Python", "TensorFlow", "Next.js", "n8n", "Arduino", "Git", "Streamlit", "Railway"];

export default function About() {
  return (
    <section id="about" className="px-8 md:px-24 py-32 border-t border-white/5">
      <div className="max-w-4xl">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 text-xs tracking-widest uppercase mb-4"
        >
          01 — About
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-white"
        >
          Tentang Saya
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-12"
        >
          Mahasiswa Teknologi Rekayasa Komputer di IPB University, aktif di
          HIMAVO Micro IT dan berpengalaman sebagai Project Manager di berbagai
          project kelompok. Tertarik di bidang Machine Learning, IoT, dan otomasi workflow.
        </motion.p>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-white/10 px-4 py-2 rounded-full text-sm text-gray-400 hover:border-white/30 hover:text-white transition-all duration-200 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}