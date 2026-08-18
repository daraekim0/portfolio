"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/data";

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
  const hidden = useHideOnScroll();
  const pathname = usePathname();

  const handleNameClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="grid grid-cols-2 items-center gap-6 px-[5%] py-5 font-mono text-xs tracking-wide">
        <Link
          href="/"
          onClick={handleNameClick}
          className="text-sm font-medium tracking-normal"
        >
          {site.name}
        </Link>
        <div className="flex items-center justify-end">
          <ul className="hidden items-center gap-1 text-xs font-medium lowercase tracking-wide text-muted sm:flex">
            {site.nav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-3 py-1.5 transition-colors hover:bg-accent/10 hover:text-accent focus-visible:bg-accent/10 focus-visible:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
