import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site, research } from "@/lib/data";

export const metadata: Metadata = {
  title: `About — ${site.name} Portfolio`,
  description: "UX researcher and product designer studying Human Centered Design & Engineering at the University of Washington.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="about-layout">
        <div className="about-copy">
          <section className="about-introduction">
            <h1>Hi there, I’m Rae.</h1>
            <p>I’m a UX researcher and product designer studying Human Centered Design &amp; Engineering at the University of Washington.</p>
            <p>My background in cognitive psychology shapes how I understand people. I connect research insights with thoughtful, practical design decisions.</p>
            <p className="about-list-label">Outside of design, you’ll find me:</p>
            <ul><li>Making pottery</li><li>Crafting soft, cozy coasters</li><li>Running on sunny days</li><li>Finding a good coffee spot</li></ul>
            <p className="about-contact">Say hello at <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
          </section>
          <section className="about-records" aria-labelledby="about-work-heading">
            <h2 id="about-work-heading">Selected work</h2>
            <Link href="/work/timely"><span>Timely <small>UX Research &amp; Design</small></span><span aria-hidden="true">↗</span></Link>
            {research.map((paper) => <Link href={`/research/${paper.slug}`} key={paper.slug}><span>{paper.displayTitle} <small>Co-author</small></span><span>{paper.venue}</span></Link>)}
          </section>
          <section className="about-records" aria-labelledby="about-education-heading">
            <h2 id="about-education-heading">Education</h2>
            <div><span>University of Washington <small>MS, Human Centered Design &amp; Engineering</small></span><span>2028</span></div>
            <div><span>University of Washington <small>Psychology · Cognitive Psychology</small></span><span>2025</span></div>
          </section>
        </div>
        <section className="about-gallery" aria-label="Research moments">
          <figure className="about-photo-main"><Image src="/research/misinfo-front.jpg" alt="Children and researchers co-designing around a table" fill sizes="(max-width: 760px) 88vw, 29vw" priority /><figcaption>Ideas take shape together.</figcaption></figure>
          <figure className="about-photo-small"><Image src="/research/remix-method.jpg" alt="A research activity exploring children's remix practices" fill sizes="(max-width: 760px) 43vw, 29vw" /><figcaption>Making, remixing, learning.</figcaption></figure>
          <figure className="about-photo-small"><Image src="/research/misinfo-fig-b.jpg" alt="Children discussing an online video in a library co-design session" fill sizes="(max-width: 760px) 43vw, 29vw" /><figcaption>Listening to different perspectives.</figcaption></figure>
        </section>
      </div>
      <footer className="about-footer"><p>Curiosity, care, and a little human warmth.</p><span>© 2026 Rae Kim</span></footer>
    </main>
  );
}
