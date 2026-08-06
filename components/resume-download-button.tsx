import { Download } from "lucide-react";

// Taruh file PDF resume kamu di /public/resume.pdf
// supaya link di bawah ini langsung jalan.

export function ResumeDownloadButton({
  href = "/resume.pdf",
  fileName = "Mohamad-Malik-Raihan-Olii-CV.pdf",
}: {
  href?: string;
  fileName?: string;
}) {
  return (
    <a
      href={href}
      download={fileName}
      className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground/40 hover:bg-foreground/5"
    >
      <Download className="h-4 w-4" />
      Download CV
    </a>
  );
}
