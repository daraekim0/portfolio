import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { ProjectMockup } from "@/components/mockups";

export function Work() {
  return (
    <section id="work" className="px-[5%] py-16">
      <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group flex flex-col"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface p-6 sm:p-10">
              <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.02]">
                <ProjectMockup type={project.mockup} />
              </div>
            </div>

            <span className="mt-6 text-xs uppercase tracking-wide text-muted">
              {project.category} — {project.year}
            </span>
            <h3 className="mt-2 font-serif text-2xl leading-snug tracking-tight">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {project.description}
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
