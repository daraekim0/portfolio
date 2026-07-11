import { ArrowUpRight, FileText } from "lucide-react";
import { research, type ResearchPaper } from "@/lib/data";
import { Disclosure } from "@/components/disclosure";

function PaperRow({ paper }: { paper: ResearchPaper }) {
  return (
    <div className="grid grid-cols-1 gap-10 border-t border-line py-14 first:border-t-0 lg:grid-cols-[280px_1fr]">
      <div>
        <span className="text-xs text-muted">{paper.venue}</span>
        <h3 className="mt-2 text-xl tracking-tight">{paper.title}</h3>
        <a
          href={paper.link}
          className="group mt-4 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
        >
          Read the paper
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      <div className="max-w-2xl">
        <div className="space-y-3 text-sm text-muted">
          {paper.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-6">
          <Disclosure label="Role" defaultOpen>
            {paper.role}
          </Disclosure>
          <Disclosure label="Method">
            <ul className="space-y-1.5">
              {paper.method.map((m) => (
                <li key={m}>— {m}</li>
              ))}
            </ul>
          </Disclosure>
          <Disclosure label="Findings">
            <ul className="space-y-1.5">
              {paper.findings.map((f) => (
                <li key={f}>— {f}</li>
              ))}
            </ul>
          </Disclosure>
          <Disclosure label="Contribution">
            <ul className="space-y-1.5">
              {paper.contribution.map((c) => (
                <li key={c}>— {c}</li>
              ))}
            </ul>
          </Disclosure>
        </div>
      </div>
    </div>
  );
}

export function Research() {
  return (
    <section id="research" className="px-8 py-16 sm:px-12">
      <div className="flex items-center gap-2 border-t border-line pt-6 text-xs uppercase tracking-wide text-muted">
        <FileText className="h-3.5 w-3.5" />
        Research
      </div>

      <div>
        {research.map((paper) => (
          <PaperRow key={paper.slug} paper={paper} />
        ))}
      </div>
    </section>
  );
}
