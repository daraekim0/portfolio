"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/data";

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header id="top" className={`site-header${isHome ? " site-header-dark site-header-home" : ""}`}>
      <Link href="/#top" className="rae-wordmark" aria-label="Rae Kim, home">{site.name}</Link>
      <nav aria-label="Main navigation">
        {site.nav.map((link) => link.href ? (
          <Link key={link.label} href={link.href} aria-current={
            link.label === "About" && pathname === "/about" ? "page" :
            link.label === "Work" && pathname !== "/about" ? "page" : undefined
          }>{link.label}</Link>
        ) : (
          <span key={link.label} aria-disabled="true" title="Resume coming soon">{link.label}</span>
        ))}
      </nav>
    </header>
  );
}
