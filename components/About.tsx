export default function About() {
  const skills = ["Python", "TensorFlow", "Next.js", "n8n", "Arduino", "Git"];

  return (
    <section id="about" className="px-8 md:px-24 py-24">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-gray-300 max-w-2xl mb-8 leading-relaxed">
        Mahasiswa Teknologi Rekayasa Komputer di IPB University, aktif di
        HIMAVO Micro IT dan berpengalaman sebagai Project Manager di berbagai
        project kelompok. Tertarik di bidang Machine Learning, IoT, dan otomasi.
      </p>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span key={skill}
                className="border border-gray-600 px-4 py-1 rounded-full text-sm text-gray-300">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}