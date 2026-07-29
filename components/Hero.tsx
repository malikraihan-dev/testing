export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-24">
      <p className="text-gray-400 text-sm tracking-widest uppercase mb-3">
        Halo, saya
      </p>
      <h1 className="text-6xl md:text-8xl font-bold mb-4">
        Malik
      </h1>
      <p className="text-xl text-gray-300 max-w-lg mb-8">
        Computer Engineering Student · ML Enthusiast · Project Manager
      </p>
      <div className="flex gap-4">
        <a href="#projects"
           className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
          Lihat Project
        </a>
        <a href="#contact"
           className="border border-white px-6 py-3 rounded-full hover:bg-white/10 transition">
          Hubungi Saya
        </a>
      </div>
    </section>
  );
}