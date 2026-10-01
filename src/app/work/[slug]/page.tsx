import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, site } from "@/lib/data";
import { ProjectPending } from "@/components/project-pending";
import { TimelyCaseStudy } from "@/components/timely-case-study";
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
  if (slug === "timely") return <TimelyCaseStudy />;
  if (project.pending) return <ProjectPending title={project.title} video={project.video} />;

  return (
    <>
      <main className="flex-1">
        <header className="px-[5%] pt-16 pb-12 sm:pt-24">
          <p className="text-xs tracking-wide text-muted">
            {project.category} — {project.year}
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
            {project.title}
          </h1>

          <div className="mt-8 max-w-3xl text-sm">
            <p className="text-xs tracking-wide text-muted">Role</p>
            <p className="mt-1">{project.role}</p>
          </div>

          <div
            className={`mt-12 aspect-[16/9] w-full overflow-hidden rounded-3xl shadow-lg ${
              project.video ? "" : "bg-surface p-8 sm:p-14"
            }`}
          >
            {project.video ? (
              <video
                className="h-full w-full object-cover"
                src={project.video.src}
                poster={project.video.poster}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <ProjectMockup type={project.mockup} />
            )}
          </div>
        </header>

        <section className="bg-surface px-[5%] py-16">
          <h2 className="text-xs tracking-wide text-muted">
            Overview
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-lg leading-relaxed">
            {project.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <section className="px-[5%] py-16">
          <h2 className="text-xs tracking-wide text-muted">
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
          <h2 className="text-xs tracking-wide text-muted">
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
