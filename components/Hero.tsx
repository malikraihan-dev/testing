"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-24 pt-24 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white opacity-[0.03] rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.03] rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-4xl">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-gray-400 text-xs tracking-widest uppercase">
            Open to opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-7xl md:text-9xl font-bold tracking-tight mb-6 text-white leading-none"
        >
          Malik
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="origin-left h-px w-24 bg-white/20 mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed"
        >
          Mahasiswa Teknologi Rekayasa Komputer · ML Enthusiast · Project Manager di IPB University
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a href="#projects" className="bg-white text-black px-7 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-200">
            Lihat Project
          </a>
          <a href="#contact" className="text-gray-400 text-sm px-7 py-3 rounded-full border border-white/10 hover:border-white/30 hover:text-white transition-all duration-200">
            Hubungi Saya
          </a>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-8 md:left-24 flex flex-col items-center gap-2"
      >
        <span className="text-gray-600 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>

    </section>
  );
}
