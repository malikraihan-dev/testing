export default function Contact() {
  return (
    <section id="contact" className="px-8 md:px-24 py-24">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-gray-400 mb-6">Terbuka untuk kolaborasi, project, atau diskusi!</p>
      <div className="flex flex-col gap-3">
        <a href="mailto:malik@email.com"
           className="text-white hover:text-gray-300 transition">
          📧 malik@email.com
        </a>
        <a href="https://github.com/malik" target="_blank"
           className="text-white hover:text-gray-300 transition">
          🐙 github.com/malik
        </a>
        <a href="https://linkedin.com/in/malik" target="_blank"
           className="text-white hover:text-gray-300 transition">
          💼 linkedin.com/in/malik
        </a>
      </div>
    </section>
  );
}