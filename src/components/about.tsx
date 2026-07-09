import { about } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="border-t border-line px-8 py-16 sm:px-12">
      <h2 className="text-xs uppercase tracking-wide text-muted">About</h2>
      <div className="mt-4 max-w-md space-y-4 text-lg leading-relaxed">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
