import Image from "next/image";
import Link from "next/link";
import { projects, research, site } from "@/lib/data";
import { TimelyVisual } from "@/components/timely-visual";

export function PortfolioHome() {
  const works = projects.filter((project) => !project.draft);
  const featured = works.filter((project) => project.slug === "timely" || project.video);
  const inProgress = works.filter((project) => !featured.includes(project));

  return (
    <main className="minimal-portfolio" id="work">
      <h1 className="sr-only">Rae Kim — product design and UX research</h1>
      <div className="portfolio-gallery">
        {featured.map((project) => (
          <article className="portfolio-gallery-item" key={project.slug}>
            <Link href={`/work/${project.slug}`} aria-label={`${project.title.split(" — ")[0]} project`}>
              <figure>
                {project.slug === "timely" ? (
                  <div className="portfolio-gallery-image timely-gallery-image">
                    <TimelyVisual frame="timer" priority />
                    <TimelyVisual frame="physical" priority />
                  </div>
                ) : project.video ? (
                  <div className="portfolio-gallery-image">
                    <Image src={project.video.poster} alt="Toss logo over a soft blue gradient" fill sizes="(max-width: 640px) 92vw, 48vw" />
                  </div>
                ) : null}
                <figcaption>{project.title.split(" — ")[0]}<span>{project.category ? `, ${project.category}` : ", case study in progress"}</span></figcaption>
              </figure>
            </Link>
          </article>
        ))}
        {research.map((paper) => (
          <article className="portfolio-gallery-item" key={paper.slug}>
            <Link href={`/research/${paper.slug}`} aria-label={`${paper.displayTitle} research`}>
              <figure>
                <div className="portfolio-gallery-image">
                  <Image src={paper.cover.src} alt={paper.cover.alt} fill sizes="(max-width: 640px) 92vw, 48vw" />
                </div>
                <figcaption>{paper.displayTitle}, <span>{paper.venue}</span></figcaption>
              </figure>
            </Link>
          </article>
        ))}
      </div>
      {inProgress.length > 0 && (
        <section className="portfolio-upcoming" aria-label="More work">
          {inProgress.map((project) => (
            <Link key={project.slug} href={`/work/${project.slug}`}>{project.title}<span> — case study in progress</span></Link>
          ))}
        </section>
      )}
      <footer className="portfolio-colophon">
        <span>© 2026 {site.name}</span>
        <a href={`mailto:${site.email}`}>Email</a>
      </footer>
    </main>
  );
}
