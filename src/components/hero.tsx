import { site } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="px-8 pt-24 pb-16 sm:px-12 sm:pt-32">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div />
        <div>
          <p className="text-xs uppercase tracking-wide text-muted">
            {site.prevRole}
          </p>
          <h1 className="mt-4 text-3xl leading-snug tracking-tight sm:text-4xl md:text-5xl">
            {site.headline}
          </h1>
        </div>
      </div>
    </section>
  );
}
