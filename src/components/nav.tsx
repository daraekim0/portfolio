"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/data";

function useSeattleClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: site.timeZone,
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

function useHideOnScroll() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const scrolledDown = y > lastY;
      setHidden(scrolledDown && y > 80);
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return hidden;
}

export function Nav() {
  const time = useSeattleClock();
  const hidden = useHideOnScroll();

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="flex items-center justify-between px-8 py-5 text-xs uppercase tracking-wide sm:px-12">
        <a href="#top" className="font-medium normal-case tracking-normal text-sm">
          {site.name}
        </a>
        <ul className="hidden items-center gap-8 text-muted sm:flex">
          {site.nav.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <span className="text-muted tabular-nums">
          {site.city}
          {time ? ` — ${time}` : ""}
        </span>
      </nav>
    </header>
  );
}
