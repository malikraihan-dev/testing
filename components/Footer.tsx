"use client";

const socials = ["GitHub", "LinkedIn", "Twitter"];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-[#060606]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="font-['Liberation_Sans'] text-lg leading-7 text-white">
          MALIK.DEV
        </div>

        <div className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.25em] text-stone-400">
          © 2024 MALIK — ENGINEERED WITH PRECISION
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-6">
          {socials.map((item) => (
            <a
              key={item}
              href="#"
              className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.25em] text-stone-400 transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
