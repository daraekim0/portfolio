import Link from "next/link";
import { site, type Project } from "@/lib/data";
import { ProjectCoverVideo } from "@/components/project-cover-video";

export function ProjectPending({ title, video }: { title: string; video?: Project["video"] }) {
  return (
    <main className="timely-case pending-project">
      <div className="pending-content">
        <p className="study-label">Case study coming soon</p>
        <h1>{title}</h1>
        {video && <ProjectCoverVideo title={title} video={video} />}
        <p>I’m preparing this case study. Check back for the project story.</p>
        <Link href="/#work">Back to selected work ↗</Link>
        <a href={`mailto:${site.email}`}>Get in touch ↗</a>
      </div>
    </main>
  );
}
