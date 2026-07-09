import { ArrowUpRight } from "lucide-react";
import { site, nodes } from "@/lib/data";

export function Contact() {
  return (
    <footer id="contact" className="border-t border-line px-8 py-16 sm:px-12">
      <p className="text-xs uppercase tracking-wide text-muted">
        Let&apos;s work together
      </p>
      <a
        href={`mailto:${site.email}`}
        className="group mt-4 inline-flex items-center gap-3 text-3xl tracking-tight sm:text-5xl"
      >
        {site.email}
        <ArrowUpRight className="h-7 w-7 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-9 sm:w-9" />
      </a>

      <div className="mt-14 max-w-sm">
        <h2 className="text-xs uppercase tracking-wide text-muted">Nodes</h2>
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

      <div className="mt-14 flex items-center justify-between border-t border-line pt-6 text-xs text-muted">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>{site.city}</span>
      </div>
    </footer>
  );
}
