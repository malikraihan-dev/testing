"use client";
import { motion } from "framer-motion";

const contacts = [
  { label: "Email", value: "malik@email.com", href: "mailto:malik@email.com" },
  { label: "GitHub", value: "github.com/malik", href: "https://github.com/malik" },
  { label: "LinkedIn", value: "linkedin.com/in/malik", href: "https://linkedin.com/in/malik" },
];

export default function Contact() {
  return (
    <section id="contact" className="px-8 md:px-24 py-32 border-t border-white/5">
      <div className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 text-xs tracking-widest uppercase mb-4"
        >
          03 — Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-white"
        >
          Mari Berkolaborasi
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-500 mb-12 max-w-md leading-relaxed"
        >
          Terbuka untuk project, kolaborasi, atau sekadar ngobrol soal tech dan ML.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-0"
        >
          {contacts.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-t border-white/5 py-5 hover:border-white/20 transition-colors duration-300">
              <div className="flex items-center gap-6">
                <span className="text-gray-600 text-xs w-16">{item.label}</span>
                <span className="text-white text-sm group-hover:text-gray-300 transition-colors">{item.value}</span>
              </div>
              <span className="text-gray-700 group-hover:text-white transition-all duration-300">
                {String.fromCharCode(8594)}
              </span>
            </a>
          ))}
          <div className="border-t border-white/5" />
        </motion.div>
      </div>
    </section>
  );
}
