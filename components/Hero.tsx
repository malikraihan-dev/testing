"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-24 pt-24 relative overflow-hidden">

      {/* Background gradient blob */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700 opacity-10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600 opacity-10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-gray-400 text-sm tracking-widest uppercase mb-3"
      >
        Halo, saya
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
      >
        Malik
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-gray-300 max-w-lg mb-8"
      >
        Computer Engineering Student · ML Enthusiast · Project Manager
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex gap-4"
      >
        <a href="#projects"
           className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-200">
          Lihat Project
        </a>
        <a href="#contact"
           className="border border-white/30 px-6 py-3 rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-200">
          Hubungi Saya
        </a>
      </motion.div>
    </section>
  );
}