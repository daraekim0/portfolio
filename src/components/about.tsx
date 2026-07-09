import { ArrowUpRight } from "lucide-react";
import { about, nodes } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="border-t border-line px-8 py-16 sm:px-12">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <div>
          <h2 className="text-xs uppercase tracking-wide text-muted">
            About
          </h2>
          <div className="mt-4 max-w-md space-y-4 text-lg leading-relaxed">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-wide text-muted">
            Nodes
          </h2>
          <ul className="mt-4">
            {nodes.map((node, i) => (
              <li key={node.label} className="border-t border-line first:border-t-0">
                <a
                  href={node.href}
                  className="group flex items-center justify-between py-3 text-sm"
                >
                  <span>
                    {String(i + 1).padStart(2, "0")}. {node.label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
