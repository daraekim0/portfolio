import Link from "next/link";
import { site } from "@/lib/data";

export function ProjectPending({ title }: { title: string }) {
  return (
    <main className="timely-case pending-project">
      <header className="study-header"><Link href="/">Rae Kim</Link><Link href="/#work">← Selected work</Link></header>
      <div className="pending-content"><p className="study-label">Case study coming soon</p><h1>{title}</h1><p>I’m preparing this case study. Check back for the project story.</p><Link href="/#work">Back to selected work ↗</Link><a href={`mailto:${site.email}`}>Get in touch ↗</a></div>
    </main>
  );
}
