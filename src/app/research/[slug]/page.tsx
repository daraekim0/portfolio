import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/nav";
import { research, site, type ResearchImage } from "@/lib/data";

export function generateStaticParams() {
  return research.map((paper) => ({ slug: paper.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/research/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const paper = research.find((p) => p.slug === slug);
  if (!paper) return {};
  return {
    title: `${paper.title} — ${site.name} Portfolio`,
    description: paper.summary,
  };
}

function Figure({ image }: { image: ResearchImage }) {
  return (
    <figure>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(max-width: 640px) 100vw, 80vw"
        className="h-auto w-full bg-surface"
      />
      {image.caption && (
        <figcaption className="mt-3 text-xs text-muted">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

export default async function ResearchPaperPage({
  params,
}: PageProps<"/research/[slug]">) {
  const { slug } = await params;
  const paper = research.find((p) => p.slug === slug);
  if (!paper) notFound();

  return (
    <>
      <Nav />
      <main className="flex-1">
        <header className="px-[5%] pt-16 pb-12 sm:pt-24">
          <p className="text-xs uppercase tracking-wide text-muted">
            {paper.venue}
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl leading-tight tracking-tight sm:text-4xl">
            {paper.title}
          </h1>

          <div className="mt-8 grid max-w-3xl grid-cols-1 gap-6 text-sm sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-wide text-muted">Role</p>
              <p className="mt-1">{paper.role}</p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-xs uppercase tracking-wide text-muted">
                Authors
              </p>
              <p className="mt-1 text-muted">{paper.authors.join(", ")}</p>
            </div>
          </div>

          <a
            href={paper.doi}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-foreground px-5 py-2.5 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            Read the paper
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <div className="mt-12">
            <Figure image={paper.hero} />
          </div>
        </header>

        <section className="bg-surface px-[5%] py-16">
          <h2 className="text-xs uppercase tracking-wide text-muted">
            Overview
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl space-y-4 text-lg leading-relaxed">
              {paper.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-6 lg:flex-col lg:gap-6 lg:border-l lg:border-line lg:pl-10">
              {paper.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl tracking-tight text-accent">
                    {stat.value}
                  </p>
                  <p className="mt-1 max-w-[10rem] text-xs uppercase tracking-wide text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {paper.sections.map((section, sIndex) => (
          <section
            key={section.heading}
            className={`px-[5%] py-16 ${sIndex % 2 === 0 ? "bg-background" : "bg-surface"}`}
          >
            <h2 className="text-xs uppercase tracking-wide text-muted">
              {section.heading}
            </h2>
            {section.intro && (
              <p className="mt-4 max-w-3xl text-base leading-relaxed">
                {section.intro}
              </p>
            )}
            {section.image && (
              <div className="mt-8 max-w-3xl">
                <Figure image={section.image} />
              </div>
            )}
            {section.items && (
              <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
                {section.items.map((item, i) => (
                  <div key={item.title}>
                    <span className="text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-sm font-medium">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </main>
    </>
  );
}
