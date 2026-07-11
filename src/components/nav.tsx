"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
      <nav className="grid grid-cols-2 items-center gap-6 px-[5%] py-5 text-xs tracking-wide">
        <Link href="/" className="text-sm font-medium tracking-normal">
          {site.name}
        </Link>
        <div className="flex items-center">
          <ul className="hidden items-center gap-5 text-xs font-medium uppercase tracking-wide sm:flex">
            {site.nav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-sm transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent active:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <span className="ml-auto tabular-nums">
            {site.city}.{time ? ` ${time}` : ""}
          </span>
        </div>
      </nav>
    </header>
  );
}
