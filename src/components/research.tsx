import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, FileText } from "lucide-react";
import { research } from "@/lib/data";

export function Research() {
  return (
    <section id="research" className="px-[5%] py-16">
      <div className="flex items-center gap-2 border-t border-line pt-6 text-xs uppercase tracking-wide text-muted">
        <FileText className="h-3.5 w-3.5" />
        Research
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2">
        {research.map((paper) => (
          <Link
            key={paper.slug}
            href={`/research/${paper.slug}`}
            className="group flex flex-col"
          >
            <span className="text-xs text-muted">{paper.venue}</span>
            <h3 className="mt-2 text-2xl leading-snug tracking-tight">
              {paper.title}
            </h3>

            <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden bg-surface">
              <Image
                src={paper.cover.src}
                alt={paper.cover.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted">
              {paper.summary}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm transition-colors group-hover:text-accent">
              View case study
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
