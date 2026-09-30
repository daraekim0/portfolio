import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CaseStudyNav } from "@/components/case-study-nav";
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

function Figure({ image, cover = false }: { image: ResearchImage; cover?: boolean }) {
  return (
    <figure className={cover ? "study-cover research-cover" : "study-figure research-figure"}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={cover ? "(max-width: 800px) 88vw, 760px" : "(max-width: 800px) 88vw, 65vw"}
        preload={cover}
      />
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  );
}

export default async function ResearchPaperPage({
  params,
}: PageProps<"/research/[slug]">) {
  const { slug } = await params;
  const paper = research.find((p) => p.slug === slug);
  if (!paper) notFound();
  const chapters = [
    { id: "overview", label: "Overview" },
    ...paper.sections.map((section) => ({
      id: section.heading.toLowerCase().replace(/\s+/g, "-"),
      label: section.heading,
    })),
  ];

  return (
    <main className="timely-case research-case" id="research-top">
      <div className="study-container">
        <section className="study-project-meta">
          <div>
            <h1>{paper.title}</h1>
            <p>{paper.venue}</p>
            <div className="research-authors">
              <p className="study-label">Authors</p>
              <p>{paper.authors.join(", ")}</p>
            </div>
            <a className="research-paper-link" href={paper.doi} target="_blank" rel="noopener noreferrer">
              Read the paper <span aria-hidden="true">↗</span>
            </a>
          </div>
          <dl>
            <div><dt>Role</dt><dd>{paper.role}</dd></div>
            {paper.stats.map((stat) => (
              <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>
            ))}
          </dl>
        </section>
      </div>
      <Figure image={paper.hero} cover />
      <div className="study-layout">
        <CaseStudyNav sections={chapters} />
        <div className="study-content">
          <section className="study-section" id="overview">
            <h2 className="study-label">Overview</h2>
            <div className="study-body">
              {paper.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
          {paper.sections.map((section, index) => (
            <section className="study-section" key={section.heading} id={chapters[index + 1].id}>
              <h2 className="study-label">{String(index + 1).padStart(2, "0")} — {section.heading}</h2>
              <div className="study-body">
                {section.intro && <p>{section.intro}</p>}
                {section.image && <Figure image={section.image} />}
                {section.items && (
                  <div className="study-findings">
                    {section.items.map((item) => (
                      <article key={item.title}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ))}
          <footer className="study-footer">
            <Link href="/#work">← Selected work</Link>
            <a href="#research-top">Back to top ↑</a>
          </footer>
        </div>
      </div>
      <div className="study-bottom"><span>© Rae Kim</span><a href={`mailto:${site.email}`}>Let’s chat ↗</a></div>
    </main>
  );
}
