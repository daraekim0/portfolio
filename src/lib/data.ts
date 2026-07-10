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
