import { LayoutGrid } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { ProjectMockup } from "@/components/mockups";
import { Disclosure } from "@/components/disclosure";

function ProjectRow({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-1 gap-10 border-t border-line py-14 first:border-t-0 lg:grid-cols-[280px_1fr]">
      <div>
        <span className="text-xs text-muted">{project.year}</span>
        <h3 className="mt-2 text-xl tracking-tight">{project.title}</h3>
        <div className="mt-4 space-y-3 text-sm text-muted">
          {project.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-6">
          <Disclosure label="Role" defaultOpen>
            {project.role}
          </Disclosure>
          <Disclosure label="Contributions">
            <ul className="space-y-1.5">
              {project.contributions.map((c) => (
                <li key={c}>— {c}</li>
              ))}
            </ul>
          </Disclosure>
          <Disclosure label="Timeline">
            <ul className="space-y-1.5">
              {project.timeline.map((t) => (
                <li key={t}>— {t}</li>
              ))}
            </ul>
          </Disclosure>
        </div>
      </div>

      <div className="aspect-[4/3] w-full bg-surface p-4 sm:p-8">
        <ProjectMockup type={project.mockup} />
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="px-8 py-16 sm:px-12">
      <div className="flex items-center gap-2 border-t border-line pt-6 text-xs uppercase tracking-wide text-muted">
        <LayoutGrid className="h-3.5 w-3.5" />
        Selected Case Studies
      </div>

      <div>
        {projects.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
