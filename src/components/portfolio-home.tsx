"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects, research, site } from "@/lib/data";
import { TimelyVisual } from "@/components/timely-visual";

const filters = ["All", "Product Design", "Research"] as const;

export function PortfolioHome() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const works = projects.filter((project) => !project.draft);
  return (
    <main className="portfolio-home">
      <section className="intro-card" aria-label="Introduction">
        <div className="business-card-details">
          <p>Product Designer &amp; Researcher</p>
          <p>MS HCDE @ University of Washington</p>
        </div>
        <div className="personal-seal">
          <svg viewBox="0 0 400 115" aria-hidden="true">
            <defs><path id="seal-arc" d="M 20,105 Q 200,-55 380,105" /></defs>
            <text><textPath href="#seal-arc" startOffset="50%" textAnchor="middle">CURIOUS, CONSIDERED, HUMAN</textPath></text>
          </svg>
          <p className="seal-location">Seattle, WA</p>
          <p className="seal-message">Driven by why, creating intuitive experiences for positive impact.</p>
          
        </div>
        <a className="scroll-cue" href="#work">Scroll to explore <span>↓</span></a>
        <span className="intro-edition">PORTFOLIO — 2026</span>
      </section>

      <section className="selected-section" id="work">
        <div className="projects-heading">
          <h1>Projects</h1>
          <div className="project-filters" aria-label="Filter projects">
            {filters.map((item) => <button key={item} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}
          </div>
        </div>
        <div className="project-table">
          {filter !== "Research" && works.map((project, index) => (
            <Link className="project-row" key={project.slug} href={`/work/${project.slug}`}>
              <span className="row-index">0{index + 1}</span>
              <h3>{project.title.split(" — ")[0]}<small>{project.description || "Case study coming soon"}</small></h3>
              <span className="row-category">{project.category}</span><span className="row-year">{project.year}</span><span className="row-arrow">↗</span>
              {project.slug === "timely" ? (
                <div className="floating-preview preview-0" aria-hidden="true"><TimelyVisual frame="timer" /></div>
              ) : project.video ? (
                <div className="floating-preview research-preview" aria-hidden="true"><Image src={project.video.poster} alt="" fill sizes="(max-width: 1000px) 400px, 520px" className="object-cover" /></div>
              ) : null}
            </Link>
          ))}
          {filter !== "Product Design" && research.map((paper, index) => (
            <Link className="project-row" key={paper.slug} href={`/research/${paper.slug}`}>
              <span className="row-index">{String(works.length + index + 1).padStart(2, "0")}</span>
              <h3>{paper.displayTitle}<small>{paper.venue}</small></h3>
              <span className="row-category">Research</span><span className="row-year">{paper.year}</span><span className="row-arrow">↗</span>
              <div className="floating-preview research-preview" aria-hidden="true"><Image src={paper.cover.src} alt="" fill sizes="(max-width: 1000px) 400px, 520px" className="object-cover" /></div>
            </Link>
          ))}
        </div>
        <div className="work-note"><span>Research-led. Detail-minded. Always curious.</span></div>
        <footer className="portfolio-footer"><p>Have something<br /><em>in mind?</em></p><a href={`mailto:${site.email}`}>Let’s make it meaningful ↗</a><div><span>© 2026 Rae Kim</span><a href="#top">Back to top ↑</a></div></footer>
      </section>
    </main>
  );
}
