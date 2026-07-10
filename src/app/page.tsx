import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Work />
      </main>
    </>
  );
}
