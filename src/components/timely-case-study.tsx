import Link from "next/link";
import { CaseStudyNav } from "@/components/case-study-nav";
import { site } from "@/lib/data";
import { TimelyVisual } from "@/components/timely-visual";

const steps = [
  ["01", "Research", "Understand students’ routines and the strategies they already use.", "research"],
  ["02", "Synthesis", "Translate time boundaries, flexibility, and tool friction into design priorities.", "synthesis"],
  ["03", "App flow", "Connect task selection with a manageable focus session.", "app-flow"],
  ["04", "Physical interaction", "Explore a focus cue outside the phone.", "physical"],
];
const chapters = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "research", label: "Research" },
  { id: "synthesis", label: "Synthesis" },
  { id: "app-flow", label: "App flow" },
  { id: "physical", label: "Physical interaction" },
  { id: "outcome", label: "Outcome / Next steps" },
] as const;

const methods = [
  ["Secondary research", "Academic barriers, ADHD, and access to support"],
  ["Survey", "Diagnosis, accommodations, tools, and social barriers"],
  ["Interviews", "Personal routines, motivation, and existing strategies"],
  ["Card sorting & ranking", "Difficult academic situations and helpful resources"],
  ["Diary activities", "Daily routines and annotated study-space photos"],
  ["Visual schedules", "How students approach assignments and organize time"],
];

export function TimelyCaseStudy() {
  return (
    <main className="timely-case" id="timely-top">
      <div className="study-container">
        <section className="study-project-meta">
          <div><h1>Timely</h1><p>UX Research · Product Design</p></div>
          <dl><div><dt>Role</dt><dd>UX Researcher &amp; Designer</dd></div><div><dt>Audience</dt><dd>College students with ADHD</dd></div><div><dt>Surface</dt><dd>Mobile app + physical timer</dd></div><div><dt>Project</dt><dd>Team design concept</dd></div></dl>
        </section>
      </div>
      <figure className="study-cover"><div className="study-cover-inner"><TimelyVisual frame="timer" priority /><TimelyVisual frame="physical" priority /></div><figcaption>Timely / App and physical timer concept</figcaption></figure>
      <div className="study-layout">
        <CaseStudyNav sections={chapters} />
        <div className="study-content">
        <section className="study-section" id="overview"><h2 className="study-label">Overview</h2><div className="study-body"><p className="study-opening">A task-planning app and physical timer designed to help college students with ADHD begin manageable focus sessions.</p><p>Students were already using reminders, checklists, and personal routines to navigate academic work. Timely builds on those strategies: choose one task, give it a time boundary, and start a session at your own pace.</p><p>I contributed to interviews, research synthesis, app design, physical-timer design, and user testing as part of the team.</p></div></section>
        <nav className="study-steps" aria-label="Case study sections">{steps.map(([number,title,description,id])=><a href={`#${id}`} key={id}><span>{number}</span><div><h2>{title}</h2><p>{description}</p></div><span aria-hidden="true">↘</span></a>)}</nav>
        <section className="study-section" id="challenge"><h2 className="study-label">The design challenge</h2><div className="study-body"><p className="study-opening">Create enough structure to make a task manageable, while leaving room for individual routines and energy.</p><p>Our initial brief explored how to support students with learning disabilities in college. Focusing on ADHD led us to examine everyday work: how students planned assignments, sustained attention, and balanced study with rest. The opportunity was to support a workable next step without prescribing one productivity routine.</p></div></section>
        <section className="study-section" id="research"><h2 className="study-label">01 — Research</h2><div className="study-body"><p className="study-opening">We explored academic challenges alongside the strategies students had already developed.</p><p>The team combined a survey and interviews with activities that made routines and task planning visible. The research presentation reported 20 survey respondents.</p><table className="study-table"><caption className="sr-only">Research methods and areas of inquiry</caption><thead><tr><th scope="col">Method</th><th scope="col">What we explored</th></tr></thead><tbody>{methods.map(([method,purpose])=><tr key={method}><th scope="row">{method}</th><td>{purpose}</td></tr>)}</tbody></table><aside className="study-insight"><h3 className="study-label">What stood out</h3><p>Students had their own ways of managing work. The design needed to support those strategies while reducing the effort required to set up a focus session.</p></aside></div></section>
        <section className="study-section" id="synthesis"><h2 className="study-label">02 — Synthesis</h2><div className="study-body"><p className="study-opening">Three patterns shaped the direction: time boundaries, flexibility, and friction in existing tools.</p><div className="study-findings"><article><h3>Defined time made work more concrete.</h3><p>Research notes described motivation around defined work periods and smaller task intervals. Different assignments also required different planning approaches.</p><p className="study-response">Design direction → Pair one task with an adjustable duration.</p></article><article><h3>Personal routines needed room to change.</h3><p>Interview notes emphasized flexibility and self-compassion, while pressure and punishment were described as sources of stress.</p><p className="study-response">Design direction → Offer a choice of pace instead of requiring one fixed rhythm.</p></article><article><h3>Tools could help and add effort.</h3><p>Reminders and task-management tools were useful, but complex platforms and login requirements were also identified as barriers.</p><p className="study-response">Design direction → Keep task selection and session setup close together.</p></article></div></div></section>
        <section className="study-section" id="app-flow"><h2 className="study-label">03 — App flow</h2><div className="study-body"><p className="study-opening">Choose a rhythm. Set one task. Begin.</p><p>The app concept translates the research direction into a short setup flow. Students can set their own duration or choose a mode, then create a block with one task and a clear time boundary.</p><div className="study-screen-pair"><figure><TimelyVisual frame="timer" /><figcaption>Choose a custom duration or a structured focus mode.</figcaption></figure><div className="study-screen-explanation"><h3>Preset structure, personal control.</h3><p>A preset gives students a starting point. Custom time leaves room for different tasks, routines, and energy levels.</p><h3>A clear purpose for each session.</h3><p>A block makes the purpose of the session explicit. It gives the student a defined piece of work to focus on.</p></div></div><figure className="study-figure"><TimelyVisual frame="block" /><figcaption>The task block brings the title, duration, and task-selection options into one screen.</figcaption></figure><h3 className="study-subheading">Connect a reminder to the next action.</h3><p>The designs also explore task suggestions from Canvas and Notion. These proposed integrations aim to reduce repeated task entry and connect a reminder with session setup.</p><figure className="study-figure"><TimelyVisual frame="reminder" /><figcaption>Task reminder and suggested-task concepts.</figcaption></figure></div></section>
        <section className="study-section" id="physical"><h2 className="study-label">04 — Physical interaction</h2><div className="study-body"><p className="study-opening">The timer moves the focus cue outside the phone.</p><p>Interview notes suggested that study environments mattered: one participant described working more productively in a library than in a comfortable room. The physical timer extends this environmental direction into a tangible cue, paired with a prompt to place the phone away.</p><div className="study-screen-pair"><figure><TimelyVisual frame="physical" /><figcaption>The app introduces a physical timer and phone-distance prompt.</figcaption></figure><div className="study-screen-explanation"><h3>A hypothesis to evaluate</h3><p>A cue outside the phone may support a focus session. The next iteration should examine whether that benefit outweighs the effort of carrying and connecting another device.</p></div></div></div></section>
        <section className="study-section" id="outcome"><h2 className="study-label">Outcome &amp; next iteration</h2><div className="study-body"><p className="study-opening">The project produced an app flow and physical timer concept. I also participated in user testing.</p><p>The redesign will focus on the experience of starting and adjusting a session: beginning without account integrations, taking a break or changing the duration, and understanding the physical timer’s role.</p><p>The research gives the concept a direction. Further evaluation is needed to understand its effect on everyday study habits.</p></div></section>
        <footer className="study-footer"><Link href="/#work">← Selected work</Link><a href="#timely-top">Back to top ↑</a></footer>
      </div>
      </div>
      <div className="study-bottom"><span>© Rae Kim</span><a href={`mailto:${site.email}`}>Let’s chat ↗</a></div>
    </main>
  );
}
