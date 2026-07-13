import { site } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="px-[5%] pt-24 pb-16 sm:pt-32">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div />
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs uppercase tracking-wide text-muted">
              {site.prevRole}
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-600">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-[ping_2.4s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              {site.availability}
            </span>
          </div>
          <h1 className="mt-4 text-2xl leading-tight tracking-tight sm:text-3xl md:text-4xl">
            {site.headline}
          </h1>
        </div>
      </div>
    </section>
  );
}
