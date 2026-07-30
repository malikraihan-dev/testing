"use client";
import { motion } from "framer-motion";

const contacts = [
  { num: "01", label: "Email", value: "malik@email.com", href: "mailto:malik@email.com" },
  { num: "02", label: "GitHub", value: "@malik_dev", href: "https://github.com/malik" },
  { num: "03", label: "LinkedIn", value: "malik-engineering", href: "https://linkedin.com/in/malik" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0c0c0c] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-3">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.25em] text-stone-300"
          >
            04 / Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-['Liberation_Sans'] text-2xl font-semibold uppercase tracking-[2.4px] text-white"
          >
            Mari Berkolaborasi
          </motion.h2>
        </div>

        <div className="flex w-full flex-col gap-0 rounded-[24px] border border-zinc-900 bg-[#101010] p-2 sm:p-4">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.num}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex flex-col gap-3 rounded-[16px] border-b border-zinc-900 px-3 py-5 transition hover:bg-[#141414] sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-4">
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#4de082]">{contact.num}</span>
                <span className="font-['Liberation_Sans'] text-lg font-semibold uppercase text-white">{contact.label}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.12em] text-stone-300">{contact.value}</span>
                <span className="text-sm text-[#4de082]">↗</span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-[260px]">
            <p className="mb-3 font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.2em] text-stone-400">Availability</p>
            <p className="text-sm leading-7 text-stone-300">Terbuka untuk project kolaborasi, internship, dan freelance work di bidang ML dan engineering.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="max-w-[260px]">
            <p className="mb-3 font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.2em] text-stone-400">Location</p>
            <p className="text-sm leading-7 text-stone-300">Bogor, Indonesia<br />Remote Worldwide</p>
          </motion.div>
        </div>

        <motion.a
          href="mailto:malik@email.com"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="w-fit border border-[#4de082] px-5 py-3 font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-[#4de082] transition hover:bg-[#4de082] hover:text-[#0c0c0c]"
        >
          Start a Conversation
        </motion.a>
      </div>
    </section>
  );
}
