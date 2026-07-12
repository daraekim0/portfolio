export const site = {
  name: "Rae Kim",
  role: "Product Designer",
  prevRole: "Prev. Product Design Intern @ Acme",
  headline:
    "Digital product designer crafting clear, considered experiences for complex problems.",
  intro:
    "I work across research, interaction design, and design systems to help teams ship products people actually understand.",
  email: "dare11021102@gmail.com",
  city: "Seattle",
  timeZone: "America/Los_Angeles",
  nav: [
    { href: "/#work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "#", label: "Resume" },
  ],
};

export const nodes = [
  { label: "Email", href: "mailto:dare11021102@gmail.com" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Resume", href: "#" },
];

export type Project = {
  slug: string;
  year: string;
  title: string;
  description: string;
  paragraphs: string[];
  role: string;
  contributions: string[];
  timeline: string[];
  mockup: "browser-dashboard" | "phone-app" | "browser-map";
};

export const projects: Project[] = [
  {
    slug: "orbit",
    year: "2025",
    title: "Orbit — Team Calendar",
    description:
      "I led the end-to-end design of a scheduling tool that visualizes team availability across time zones.",
    paragraphs: [
      "I led the end-to-end design of an interactive scheduling tool that helps distributed teams find meeting times without the back-and-forth.",
      "I led the 0→1 conceptualization and design, along with running three ideation workshops, six user interviews, stakeholder presentations, and four shipped features in collaboration with two engineers.",
    ],
    role: "Lead Product Designer",
    contributions: [
      "0→1 product strategy and interaction design",
      "Design system for scheduling components",
      "User research and usability testing",
    ],
    timeline: ["Discovery — 3 weeks", "Design — 6 weeks", "Build & QA — 5 weeks"],
    mockup: "browser-dashboard",
  },
  {
    slug: "nectar",
    year: "2024",
    title: "Nectar — Checkout Flow",
    description:
      "A ground-up redesign of a commerce checkout flow to reduce drop-off at payment.",
    paragraphs: [
      "I redesigned the checkout flow from cart to confirmation to reduce friction at the highest-drop-off step in the funnel.",
      "Working closely with a data analyst, I ran five rounds of A/B tests and shipped a version that reduced cart abandonment.",
    ],
    role: "Senior Product Designer",
    contributions: [
      "End-to-end checkout redesign",
      "A/B testing strategy and analysis",
      "Mobile-first responsive design",
    ],
    timeline: ["Audit & research — 2 weeks", "Design — 4 weeks", "Testing — 8 weeks"],
    mockup: "phone-app",
  },
  {
    slug: "fable",
    year: "2023",
    title: "Fable — Learning Platform",
    description:
      "Onboarding and course-path design for a platform helping first-time learners stay in a course.",
    paragraphs: [
      "I designed a step-by-step learning path to reduce early drop-off for first-time learners on the platform.",
      "This involved mapping the full learner journey, prototyping three onboarding concepts, and testing with new users.",
    ],
    role: "Product Designer",
    contributions: [
      "Onboarding flow and course-path design",
      "Learner journey mapping",
      "Prototyping and usability testing",
    ],
    timeline: ["Research — 2 weeks", "Concept & test — 4 weeks", "Handoff — 2 weeks"],
    mockup: "browser-map",
  },
];

export type ResearchImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type ResearchSection = {
  heading: string;
  intro?: string;
  items?: { title: string; body: string }[];
  image?: ResearchImage;
};

export type ResearchStat = {
  value: string;
  label: string;
};

export type ResearchPaper = {
  slug: string;
  year: string;
  venue: string;
  title: string;
  role: string;
  authors: string[];
  doi: string;
  summary: string;
  cover: ResearchImage;
  hero: ResearchImage;
  overview: string[];
  stats: ResearchStat[];
  sections: ResearchSection[];
};

export const research: ResearchPaper[] = [
  {
    slug: "misinformation",
    year: "2026",
    venue: "CHI 2026",
    title:
      "Rethinking Misinformation: A Holistic Community Model for Youth Resilience",
    role: "Co-author",
    authors: [
      "Jason Yip",
      "Michele Newman",
      "Runhua Zhao",
      "Darae Kim",
      "Jan R. Lim",
      "Matthew Kyle Pedraja",
      "Swati Sachdeva",
      "Xiaoyu Zheng",
      "Yifang Zhou",
      "Chris Coward",
      "Jin Ha Lee",
    ],
    doi: "https://dl.acm.org/doi/10.1145/3772318.3790876",
    summary:
      "A 2.5-year co-design study with children ages 6–11 showing why misinformation resilience can't be taught through fact-checking alone — and proposing a community-based model that ties cognitive, socio-emotional, and sociocultural learning together.",
    cover: {
      src: "/research/misinfo-front.jpg",
      width: 1675,
      height: 939,
      alt: "Children and adult researchers co-designing around a table covered in large sheets of paper",
    },
    hero: {
      src: "/research/misinfo-front.jpg",
      width: 1675,
      height: 939,
      alt: "Children and adult researchers co-designing around a table covered in large sheets of paper",
      caption:
        "Children and adults co-designing mis/disinformation concepts across the WeDesign and WeLibraries teams.",
    },
    overview: [
      "Most digital media literacy research treats misinformation as a purely cognitive problem: teach children to reason better, and they'll spot the fake. But critics argue this framing neglects the social, emotional, and cultural contexts in which mis/disinformation is actually created and spread — the peer pressure, the parasocial trust in influencers, the financial incentives baked into platforms.",
      "This study expands beyond the cognitive model by examining how children conceptualize mis/disinformation through socio-emotional learning (SEL) and sociocultural (SC) lenses. Over a 2.5-year period, we conducted 26 co-design workshops with children ages 6–11, letting them articulate how misinformation feels and circulates in their world — not just how it's identified.",
    ],
    stats: [
      { value: "26", label: "co-design sessions" },
      { value: "3", label: "intergenerational teams" },
      { value: "2.5 yrs", label: "study duration" },
    ],
    sections: [
      {
        heading: "Method",
        intro:
          "We used Cooperative Inquiry, a participatory design method built on equal design partnerships between children and adult researchers. Rather than testing children's literacy with pre/post measures, sustained co-design partnerships let children talk honestly about complex emotional topics over time.",
        items: [
          {
            title: "26 sessions, three intergenerational teams",
            body: "Eight sessions with a long-term university co-design team (21 children, 2022–2023) and eighteen sessions across two urban public library sites (28 children), where pre-service librarians facilitated the design work.",
          },
          {
            title: "Design-based elicitation",
            body: "Children co-designed play-based misinformation activities — fake viral videos, influencer skits, posters debating online claims — surfacing beliefs that interviews alone rarely reach.",
          },
        ],
      },
      {
        heading: "Findings",
        intro:
          "Analysis surfaced six themes spanning the emotional, social, and economic life of misinformation for children:",
        image: {
          src: "/research/misinfo-fig-b.jpg",
      width: 1002,
      height: 576,
          alt: "Children in a library watching and debating an online video of a ghost during a co-design session",
          caption:
            "WeLibraries children debating whether an online ghost video is real — trust, emotion, and evidence colliding in real time.",
        },
        items: [
          {
            title: "Empathy is the hard part",
            body: "Children struggled to imagine that others could fall for claims they themselves found obviously false — a theory-of-mind gap that purely cognitive training doesn't address.",
          },
          {
            title: "Social pressure shapes belief",
            body: "Peer dynamics and the desire to belong influenced what children shared and endorsed, sometimes against their own judgment.",
          },
          {
            title: "Fame and analytics stand in for credibility",
            body: "Children used view counts, subscriber numbers, and celebrity as proxies for trustworthiness rather than source quality.",
          },
          {
            title: "Children see the money",
            body: "They recognized 'YouTube voice,' sponsorships, and financial ties as emotionally manipulative tactics — and satirized them in their designs.",
          },
          {
            title: "Misinformation is communal",
            body: "False claims circulate through family and community — even parents tell 'watermelon seed' stories — so children's trust networks are both the problem and the resource.",
          },
          {
            title: "Community is where children turn",
            body: "When unsure, children reached for parents, librarians, and peers rather than verification tools.",
          },
        ],
      },
      {
        heading: "Contribution",
        intro:
          "We propose a community-based model of design for youth misinformation resilience.",
        image: {
          src: "/research/misinfo-fig-c.jpg",
      width: 1150,
      height: 576,
          alt: "Children presenting a wall of co-designed zero fruit waste hack posters at a library",
          caption:
            "Rolling Way children co-designing zero fruit waste hacks — community sensemaking in action.",
        },
        items: [
          {
            title: "Beyond the individual reasoner",
            body: "If conspiracy theorizing is collective sensemaking — where emotion, identity, and storytelling beat accuracy — then resilience must also be built collectively, not one fact-checker at a time.",
          },
          {
            title: "Three lenses, one model",
            body: "The model ties cognitive, socio-emotional, and sociocultural supports together, giving designers concrete direction for building children's epistemic resilience with their communities rather than for them.",
          },
        ],
      },
    ],
  },
  {
    slug: "remix-authorship",
    year: "2026",
    venue: "CHI 2026",
    title:
      "Pringles, Prangles, or Prongles? Negotiating Creative Authorship in Children's Remix Practices",
    role: "Co-author",
    authors: [
      "Michele Newman",
      "Daeun Yoo",
      "Runhua Zhao",
      "Emily Tuy",
      "Hannah Yi",
      "Darae Kim",
      "Jin Ha Lee",
      "Jason Yip",
    ],
    doi: "https://dl.acm.org/doi/10.1145/3772318.3791311",
    summary:
      "Six participatory design sessions with children ages 5–11 exploring what 'my work' means when everything is built from someone else's — culminating in the Creative Agency Framework for designing creativity-support tools.",
    cover: {
      src: "/research/remix-cover.png",
      width: 958,
      height: 513,
      alt: "A child's marker drawing of remixed video game characters, annotated with handwritten rules for reuse",
    },
    hero: {
      src: "/research/remix-cover.png",
      width: 958,
      height: 513,
      alt: "A child's marker drawing of remixed video game characters, annotated with handwritten rules for reuse",
      caption:
        "Jerold's character illustration from Design Session 4, annotated with his own guidelines for potential reuse.",
    },
    overview: [
      "Remix is how children create today: reusing, recombining, and reinterpreting existing cultural artifacts with digital tools. But the implications of remix for authorship remain largely unexamined — what does ownership mean to a child whose creation started as someone else's drawing, song, or meme?",
      "We conducted six participatory design sessions with 16 children ages 5–11, moving from physical collage remixing to digital tools, to trace how children develop their understanding of authorship and creativity — and how the medium itself shapes those beliefs.",
    ],
    stats: [
      { value: "6", label: "design sessions" },
      { value: "16", label: "child co-designers" },
      { value: "3 mo", label: "study duration" },
    ],
    sections: [
      {
        heading: "Method",
        intro:
          "Six 90-minute Cooperative Inquiry design sessions over three months (February–April 2025), each combining snack time, circle time, group design, and discussion.",
        image: {
          src: "/research/remix-method.jpg",
      width: 512,
      height: 384,
          alt: "A handmade 'Portable Remixer' prototype built from decorated tins, tape, and paper by children",
          caption:
            "Jerold and Duncan's 'Portable Remixer' design from Design Session 5.",
        },
        items: [
          {
            title: "From physical to digital",
            body: "Early sessions explored remix with physical media (layered collage on paper); later sessions moved to digital remixing and the design of creativity-support tools, letting us compare how each medium shaped children's reasoning.",
          },
          {
            title: "Authorship and ethics by design",
            body: "Final sessions had children design their own remix tools — like a 'Portable Remixer' — surfacing what permission, credit, and control should look like from a child's perspective.",
          },
        ],
      },
      {
        heading: "Findings",
        intro:
          "Children treated remixing as a negotiated, interpretive process — not copying. Three threads ran through their practices:",
        image: {
          src: "/research/remix-findings.png",
      width: 2948,
      height: 756,
          alt: "A spectrum diagram spanning Author, Co-Creator, and Steward, mapping interpretive stance, ethical attention, and remix tactics",
          caption:
            "Children's interpretive stances in remix span a spectrum from self-driven author to deferential steward.",
        },
        items: [
          {
            title: "Authorship as interpretation",
            body: "Children remixed with three interpretive priorities — personal expression, respect for the original creator, and communication — making remix a site of ethical reasoning, not just production.",
          },
          {
            title: "Authorship as mediation",
            body: "The medium changed the experience of ownership: digital media's easy copying and permanence made creative acts feel more visible and consequential than physical collage, and software norms carried their own assumptions about creativity and control.",
          },
          {
            title: "Authorship as ownership",
            body: "Children voiced strong beliefs about permission — 'you should ask the person who created it' — yet their actual practices diverged, revealing a tension between stated values and what tools make easy.",
          },
        ],
      },
      {
        heading: "Contribution",
        intro:
          "We introduce the Creative Agency Framework: three pathways tracing how remix agency emerges through interpretation and mediation.",
        image: {
          src: "/research/remix-framework.png",
      width: 2436,
      height: 1528,
          alt: "The Creative Agency Framework diagram: expressive, negotiated, and stewardship pathways flowing from interpretive priority through software mediation to myths of creative agency",
          caption:
            "The Creative Agency Framework — three pathways from interpretive priority, through software mediation, to myths of creative agency.",
        },
        items: [
          {
            title: "Three pathways of creative agency",
            body: "Each pathway pairs a form of agency with an authorship concept — assertive agency with the author, dialogic agency with the co-creator, and facilitative agency with the steward — along with the 'myths' about creativity that software makes feel natural.",
          },
          {
            title: "Rebalancing creativity support",
            body: "Most creativity-support tools privilege the expressive, sole-author pathway. We argue for tools that also recognize negotiated and stewardship forms of creativity, so children can see themselves as both creators and cultural producers.",
          },
        ],
      },
    ],
  },
];

export const aboutInfo = {
  paragraphs: [
    "I'm an undergraduate student at the University of Washington, Seattle studying Psychology specializing in Cognitive Psychology and graduating in June, 2025.",
    "I've always been deeply empathetic, drawn to understanding people and improving their experiences. Whether it was solving problems, refining details, or making everyday interactions more meaningful, I found fulfillment in creating positive change. Over time, I realized that my ability to notice subtle nuances, especially in aesthetics, allowed me to shape experiences in ways others might not see. Wanting to understand human behavior on a deeper level, I studied psychology, exploring how people think, feel, and interact. But I didn't want to stop at observation. I wanted to create.",
    "That's when I discovered design as the perfect medium to bridge insight with impact. To me, great design isn't just about aesthetics. It's about emotion, functionality, and usability coming together to holistically enhance people's lives. What began as a desire to help those around me evolved into a passion for creating impact at scale. Through digital experiences, I can reach beyond immediate interactions and design products that feel intuitive, meaningful, and deeply human.",
  ],
};

export const interests = [
  "Mold clay into pottery",
  "Craft cozy coasters with soft fur",
  "Run on a warm, sunny day",
  "Sip coffee in an aesthetic cafe",
];
