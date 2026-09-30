"use client";

import { useEffect, useState } from "react";

type Section = { id: string; label: string };

export function CaseStudyNav({ sections }: { sections: readonly Section[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const targets = sections.flatMap(({ id }) => {
      const element = document.getElementById(id);
      return element ? [{ id, element }] : [];
    });
    let frame: number | null = null;

    const update = () => {
      frame = null;
      const readingLine = Math.max(125, window.innerHeight * 0.25);
      let current = targets[0]?.id ?? "";
      for (const { id, element } of targets) {
        if (element.getBoundingClientRect().top <= readingLine) current = id;
        else break;
      }
      // The last, short section may never reach the reading line at page end.
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        current = targets.at(-1)?.id ?? current;
      }
      setActive(current);
    };
    const schedule = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = new ResizeObserver(schedule);
    for (const { element } of targets) observer.observe(element);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [sections]);

  return (
    <nav className="case-section-nav" aria-label="On this page">
      {sections.map(({ id, label }) => (
        <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined}>
          <span className="case-section-dot" aria-hidden="true" />
          {label}
        </a>
      ))}
    </nav>
  );
}
