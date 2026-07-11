import { site } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="px-[5%] pt-24 pb-16 sm:pt-32">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div />
        <div>
          <p className="text-xs uppercase tracking-wide text-muted">
            {site.prevRole}
          </p>
          <h1 className="mt-4 text-2xl leading-tight tracking-tight sm:text-3xl md:text-4xl">
            {site.headline}
          </h1>
        </div>
      </div>
    </section>
  );
}
