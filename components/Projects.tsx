const projects = [
  {
    title: "Sentiment Analysis",
    desc: "Analisis sentimen review aplikasi Indonesia menggunakan deep learning LSTM Bi-directional.",
    tech: ["Python", "TensorFlow", "Streamlit"],
  },
  {
    title: "n8n Automation",
    desc: "Workflow otomasi lead form dengan webhook, Google Sheets, Slack notifikasi, dan SMS.",
    tech: ["n8n", "Railway", "Twilio"],
  },
  {
    title: "HTL Reactor AI",
    desc: "Sistem kontrol reaktor Hydrothermal Liquefaction menggunakan sensor NIR dan AI.",
    tech: ["Python", "Arduino", "NIR Sensor"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-8 md:px-24 py-24">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title}
               className="border border-gray-800 rounded-xl p-6 hover:border-gray-500 transition">
            <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="bg-gray-800 px-3 py-1 rounded-full text-xs text-gray-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}