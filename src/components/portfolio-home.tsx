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
  const [papersOpen, setPapersOpen] = useState(false);
  return (
    <main className="portfolio-home" id="top">
      <section className="intro-card" aria-label="Introduction">
        <nav className="intro-nav" aria-label="Main navigation">
          <a href="#work">Selected work</a>
          <Link href="/about">About</Link>
        </nav>
        <div className="business-card-details">
          <h1>{site.name}</h1>
          <p>Product Designer &amp; Researcher</p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>MS HCDE @ University of Washington</p>
          <p>Seattle, WA</p>
        </div>
        <div className="personal-seal">
          <svg viewBox="0 0 400 115" aria-hidden="true">
            <defs><path id="seal-arc" d="M 20,105 Q 200,-55 380,105" /></defs>
            <text><textPath href="#seal-arc" startOffset="50%" textAnchor="middle">CURIOUS, CONSIDERED, HUMAN</textPath></text>
          </svg>
          <p className="seal-location">Seattle, WA · est. in curiosity</p>
          <p className="seal-message">Thoughtful design.<br />A little human warmth.</p>
          
        </div>
        <a className="scroll-cue" href="#work">Scroll to explore <span>↓</span></a>
        <span className="intro-edition">PORTFOLIO — 2026</span>
      </section>

      <section className="selected-section" id="work">
        <header className="work-nav">
          <a className="wordmark" href="#top">rk<span>✳</span></a>
          <nav aria-label="Portfolio sections">
            <a href="#work">Projects</a><Link href="/about">About</Link><a href={`mailto:${site.email}`}>Contact</a>
          </nav>
          <a className="contact-pill" href={`mailto:${site.email}`}>Let’s talk ↗</a>
        </header>
        <div className="projects-heading">
          <p className="eyebrow">A few things I’ve put care into</p>
          <h2>Projects<sup>({works.length + 1})</sup></h2>
          <div className="project-filters" aria-label="Filter projects">
            {filters.map((item) => <button key={item} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}
          </div>
        </div>
        <div className="project-table">
          <div className="table-labels"><span>Index</span><span>Project</span><span>Discipline</span><span>Year</span><span /></div>
          {filter !== "Research" && works.map((project, index) => (
            <Link className="project-row" key={project.slug} href={`/work/${project.slug}`}>
              <span className="row-index">0{index + 1}</span>
              <h3>{project.title.split(" — ")[0]}<small>{project.description || "Case study coming soon"}</small></h3>
              <span className="row-category">{project.category}</span><span className="row-year">{project.year}</span><span className="row-arrow">↗</span>
              {project.slug === "timely" ? (
                <div className="floating-preview preview-0" aria-hidden="true"><TimelyVisual frame="timer" /></div>
              ) : project.video ? (
                <div className="floating-preview research-preview" aria-hidden="true"><Image src={project.video.poster} alt="" fill sizes="340px" className="object-cover" /></div>
              ) : null}
            </Link>
          ))}
          {filter !== "Product Design" && (
            <div className="papers-group">
              <button type="button" className="project-row papers-toggle" onClick={() => setPapersOpen((open) => !open)} aria-expanded={papersOpen} aria-controls="papers-list">
                <span className="row-index">04</span>
                <span className="project-row-title">Research Papers<small>{research.length} publications · CHI 2026</small></span>
                <span className="row-category">Research</span><span className="row-year">2026</span><span className="row-arrow" aria-hidden="true">{papersOpen ? "−" : "+"}</span>
              </button>
              <div id="papers-list" className="papers-list" hidden={!papersOpen}>
                {research.map((paper) => (
                  <Link href={`/research/${paper.slug}`} className="paper-index-entry" key={paper.slug}>
                    <span>{paper.venue}</span><h3>{paper.title}</h3><span aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="work-note"><span>Research-led. Detail-minded. Always curious.</span></div>
        <footer className="portfolio-footer"><p>Have something<br /><em>in mind?</em></p><a href={`mailto:${site.email}`}>Let’s make it meaningful ↗</a><div><span>© 2026 Rae Kim</span><a href="#top">Back to top ↑</a></div></footer>
      </section>
    </main>
  );
}
