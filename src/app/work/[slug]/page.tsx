import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, site } from "@/lib/data";
import { Nav } from "@/components/nav";
import { ProjectMockup } from "@/components/mockups";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${site.name} Portfolio`,
    description: project.description,
  };
}

export default async function WorkProjectPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Nav />
      <main className="flex-1">
        <header className="px-[5%] pt-16 pb-12 sm:pt-24">
          <p className="text-xs uppercase tracking-wide text-muted">
            {project.category} — {project.year}
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
            {project.title}
          </h1>

          <div className="mt-8 max-w-3xl text-sm">
            <p className="text-xs uppercase tracking-wide text-muted">Role</p>
            <p className="mt-1">{project.role}</p>
          </div>

          <div className="mt-12 aspect-[16/9] w-full bg-surface p-8 sm:p-14">
            <ProjectMockup type={project.mockup} />
          </div>
        </header>

        <section className="bg-surface px-[5%] py-16">
          <h2 className="text-xs uppercase tracking-wide text-muted">
            Overview
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-lg leading-relaxed">
            {project.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <section className="px-[5%] py-16">
          <h2 className="text-xs uppercase tracking-wide text-muted">
            Contributions
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            {project.contributions.map((c, i) => (
              <div key={c} className="flex gap-3">
                <span className="text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed">{c}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-surface px-[5%] py-16">
          <h2 className="text-xs uppercase tracking-wide text-muted">
            Timeline
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            {project.timeline.map((t, i) => (
              <div key={t} className="flex gap-3">
                <span className="text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
