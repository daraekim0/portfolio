import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/nav";
import { Contact } from "@/components/contact";
import { research, site } from "@/lib/data";

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
    title: `${paper.title} — ${site.name}`,
    description: paper.summary,
  };
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
        <header className="px-8 pt-16 pb-12 sm:px-12 sm:pt-24">
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
        </header>

        <section className="border-t border-line px-8 py-12 sm:px-12">
          <h2 className="text-xs uppercase tracking-wide text-muted">
            Overview
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed">
            {paper.overview.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {paper.sections.map((section) => (
          <section
            key={section.heading}
            className="border-t border-line px-8 py-12 sm:px-12"
          >
            <h2 className="text-xs uppercase tracking-wide text-muted">
              {section.heading}
            </h2>
            {section.intro && (
              <p className="mt-4 max-w-3xl text-base leading-relaxed">
                {section.intro}
              </p>
            )}
            {section.items && (
              <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
                {section.items.map((item) => (
                  <div key={item.title} className="border-t border-line pt-4">
                    <h3 className="text-sm font-medium">{item.title}</h3>
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
      <Contact />
    </>
  );
}
