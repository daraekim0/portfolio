import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Contact } from "@/components/contact";
import { AnimatedGradient } from "@/components/animated-gradient";
import { PhotoCollage } from "@/components/photo-collage";
import { site, aboutInfo, interests } from "@/lib/data";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
  description: aboutInfo.paragraphs[0],
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="relative flex-1 overflow-hidden">
        <AnimatedGradient />

        <section className="grid grid-cols-1 gap-10 px-[5%] pt-16 pb-16 sm:grid-cols-2 sm:pt-24">
          <h1 className="text-7xl font-medium leading-[0.9] tracking-tight sm:text-8xl md:text-9xl">
            {site.name.split(" ").map((word) => (
              <span key={word} className="block">
                {word}
              </span>
            ))}
          </h1>
          <div>
            <h2 className="text-xs uppercase tracking-wide text-muted">
              Info
            </h2>
            <div className="mt-4 max-w-md space-y-4 text-sm leading-relaxed text-muted">
              {aboutInfo.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-10 px-[5%] py-16 sm:grid-cols-2">
          <div>
            <h2 className="text-xs uppercase tracking-wide text-muted">
              Things I Love To Do
            </h2>
            <ul className="mt-4 space-y-1 text-sm">
              {interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </div>
          <PhotoCollage />
        </section>
      </main>
      <Contact />
    </>
  );
}
