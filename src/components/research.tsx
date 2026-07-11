import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { research } from "@/lib/data";

export function Research() {
  return (
    <section id="research" className="px-8 py-16 sm:px-12">
      <div className="flex items-center gap-2 border-t border-line pt-6 text-xs uppercase tracking-wide text-muted">
        <FileText className="h-3.5 w-3.5" />
        Research
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
        {research.map((paper) => (
          <Link
            key={paper.slug}
            href={`/research/${paper.slug}`}
            className="group flex flex-col border-t border-line pt-6"
          >
            <span className="text-xs text-muted">{paper.venue}</span>
            <h3 className="mt-2 text-xl leading-snug tracking-tight">
              {paper.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {paper.summary}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm transition-colors group-hover:text-accent">
              View case study
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
