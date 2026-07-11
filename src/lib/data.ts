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
    { href: "#", label: "Résumé" },
  ],
};

export const nodes = [
  { label: "Email", href: "mailto:dare11021102@gmail.com" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Résumé", href: "#" },
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

export type ResearchPaper = {
  slug: string;
  year: string;
  venue: string;
  title: string;
  role: string;
  paragraphs: string[];
  method: string[];
  findings: string[];
  contribution: string[];
  link: string;
};

export const research: ResearchPaper[] = [
  {
    slug: "misinformation",
    year: "2026",
    venue: "CHI 2026",
    title:
      "Rethinking Mis/disinformation: A Holistic Community-Based Model for Youth Resilience",
    role: "Co-author",
    paragraphs: [
      "Most digital media literacy research treats misinformation as a purely cognitive problem — teach children to reason better, and they'll spot the fake. This study asks what that framing misses: the social, emotional, and cultural forces that shape how children actually encounter and spread mis/disinformation.",
      "Over 2.5 years, we ran co-design workshops with 26 children (ages 6–11) across three intergenerational design teams, using the Cooperative Inquiry method to let children articulate how misinformation feels — not just how it's identified.",
    ],
    method: [
      "26 co-design sessions across three intergenerational teams (2022–2023)",
      "Cooperative Inquiry — equal design partnerships between children and adult researchers",
      "Two settings: a long-term lab team and two urban public library sites",
    ],
    findings: [
      "Children are acutely aware of emotional manipulation, peer pressure, and financial incentives behind misinformation",
      "Trust online is shaped by fame signals and view counts, not source credibility",
      "Community support — family, librarians, peers — is where children actually turn when unsure",
    ],
    contribution: [
      "A community-based design model connecting cognitive, socio-emotional, and sociocultural lenses",
      "Design guidance for building children's epistemic resilience, beyond fact-checking skills",
    ],
    link: "#",
  },
  {
    slug: "remix-authorship",
    year: "2026",
    venue: "CHI 2026",
    title:
      "Pringles, Prangles, or Prongles? Negotiating Creative Authorship in Children's Remix Practices",
    role: "Co-author",
    paragraphs: [
      "Remix is how children create today — reusing, recombining, and reinterpreting existing cultural artifacts with digital tools. But what does 'my work' mean when everything is built from someone else's? This study examines how children develop their sense of authorship and ownership through remixing.",
      "We conducted six participatory design sessions with 16 children (ages 5–11), moving from physical collage remixing to digital tools, to trace how the medium itself shapes children's beliefs about creative ownership.",
    ],
    method: [
      "Six Cooperative Inquiry design sessions with 16 children over three months",
      "Progression from physical remix (layered collage) to digital remix tools",
      "Sessions covering perception, authorship, and the ethics of creativity-support tools",
    ],
    findings: [
      "Children treat remixing as a negotiated, interpretive process — not copying",
      "The medium mediates ownership: physical and digital remixing produce different authorship beliefs",
      "Children actively negotiate control and reuse rules with peers while creating",
    ],
    contribution: [
      "The Creative Agency Framework — three pathways pairing agency types (assertive, dialogic, facilitative) with authorship roles (author, co-creator, steward)",
      "Design implications for creativity-support tools that let children see themselves as both creators and cultural producers",
    ],
    link: "#",
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
