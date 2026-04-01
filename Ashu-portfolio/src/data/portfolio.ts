export type NavItem = {
  label: string;
  href: string;
};

export type SocialItem = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  outcomes: string[];
  stack: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ProjectItem = {
  name: string;
  year: string;
  image: string;
  description: string;
  tags: string[];
  href?: string;
  featured?: boolean;
};

export const portfolioData = {
  navigation: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
  ] satisfies NavItem[],
  hero: {
    badge: "Frontend Engineer",
    headline: "Ashutosh Savani",
    subheadline:
      "Frontend engineer building scalable SaaS, AI-powered products, and enterprise-grade interfaces with sharp execution and modern frontend craft.",
    description:
      "I specialize in architecting sophisticated product interfaces that feel exceptionally fluid, dependable, and production-ready. My focus lies in AI platforms, massive enterprise dashboards, and multi-tenant systems.",
    status: "Software Engineer at Openxcell Technolabs",
    location: "Ahmedabad, India",
    availability: "Open to cutting-edge frontend and product engineering roles",
    stats: [
      { value: "4+", label: "Years of experience" },
      { value: "Scalable", label: "SaaS & enterprise systems" },
      { value: "AI UIs", label: "High-performance interfaces" },
    ],
  },
  story: {
    eyebrow: "About",
    title: "From polished frontend delivery to building expansive AI and enterprise architectures.",
    paragraphs: [
      "As a software engineer with over 4 years of dedicated experience, my core expertise revolves around React.js, Next.js, TypeScript, and modern state management ecosystems. I thrive on translating complex business requirements into high-performance, maintainable user interfaces that feel visually premium.",
      "My recent focus targets highly interactive AI-powered SaaS platforms and enterprise multi-tenant dashboards. Whether it's rendering realtime 3D avatars, streamlining legacy lead management systems, or maintaining robust client portals, scaling frontend codebases elegantly is my priority.",
      "I care obsessively about the nuances of product feel just as much as deep implementation quality. From buttery-smooth micro-animations to bulletproof component architecture and responsive design constraints, the details dictate the difference between a good product and a phenomenal one.",
    ],
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ashutosh-savani-a3772a228/" },
    { label: "GitHub", href: "https://github.com/Ashu99op" },
    { label: "Instagram", href: "https://www.instagram.com/l_ashuuuuu_l/" },
  ] satisfies SocialItem[],
  contact: {
    email: "ashutoshsavani0@gmail.com",
    phone: "+91 9601573653",
    location: "Ahmedabad, Gujarat, India",
  },
  experience: [
    {
      company: "Openxcell Technolabs",
      role: "Software Engineer",
      period: "Jan 2025 - Present",
      location: "Ahmedabad, India",
      summary:
        "Building pixel-perfect, responsive interfaces for AI-powered SaaS platforms from Figma designs using React.js, Next.js, TypeScript, and Tailwind CSS.",
      outcomes: [
        "Architected and merged a chatbot product and a fullscreen AI avatar experience into one unified codebase, cutting redundant code by roughly 35% and drastically simplifying maintenance.",
        "Engineered comprehensive role-based admin and client dashboards with heavy data analytics, content management, and configuration flows for a multi-tenant B2B AI platform.",
        "Operated directly in high-stakes client meetings to gather requirements, demo progress, and ship rapid feedback-driven updates across parallel projects.",
      ],
      stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Three.js"],
    },
    {
      company: "Brainvire Infotech Pvt. Ltd.",
      role: "Software Engineer",
      period: "Nov 2022 - Dec 2024",
      location: "Ahmedabad, India",
      summary:
        "Grew from trainee to software engineer while building and scaling robust enterprise frontend modules for massive client products.",
      outcomes: [
        "Enhanced, built, and scaled crucial modules for the Pidilite Mpower lead management system serving high-tier enterprise clients using React.js, Redux, and Material UI.",
        "Improved sophisticated reusable UI components and frontend workflows, increasing overall team development efficiency by 20% and guaranteeing optimal performance.",
        "Consistently shipped advanced client-specific features scheduled tightly across continuous agile sprints for over 2 years.",
      ],
      stack: ["React", "Redux", "Material UI", "JavaScript", "GraphQL", "Agile Execution"],
    },
    {
      company: "iBoon Technologies",
      role: "Software Developer",
      period: "Apr 2022 - Nov 2022",
      location: "Ahmedabad, India",
      summary:
        "Built responsive, cross-browser web interfaces and collaborated globally with a sharp team to deliver complex frontend features.",
      outcomes: [
        "Dramatically improved page load performance and frontend stability while expanding robust modern browser support.",
        "Worked alongside a core team of 5+ developers to release mission-critical UI features consistently and visibly reduce interactive bugs during aggressive QA cycles.",
      ],
      stack: ["HTML5", "CSS3", "JavaScript", "SCSS", "Responsive UI"],
    },
    {
      company: "TechNEOS Solutions",
      role: "Web Developer Intern",
      period: "Jan 2022 - Apr 2022",
      location: "Ahmedabad, India",
      summary:
        "Initiated professional engineering journey by establishing hardcore web foundations and pushing responsive architectures.",
      outcomes: [
        "Solidified an unshakable base in DOM structure, semantic HTML, cascading styling hierarchies, and highly responsive web layouts.",
        "Navigated early career production pipelines handling content management driven delivery and engaging client-facing digital projects.",
      ],
      stack: ["HTML", "CSS", "WordPress"],
    },
  ] satisfies ExperienceItem[],
  skills: [
    {
      title: "Frontend & Architecture",
      items: ["React.js", "Next.js", "Vue.js", "TypeScript", "JavaScript (ES6+)", "HTML5"],
    },
    {
      title: "Styling, UI & Visuals",
      items: ["Tailwind CSS", "Three.js", "React Three Fiber", "Shadcn UI", "Material UI", "Framer Motion"],
    },
    {
      title: "State, Data & Backend",
      items: ["Redux", "Zustand", "Context API", "TanStack Query", "GraphQL", "Node.js"],
    },
    {
      title: "Ecosystem & Workflow",
      items: ["Git/GitHub/GitLab", "Azure", "Figma", "Cursor", "Windsurf", "Claude / ChatGPT"],
    },
  ] satisfies SkillGroup[],
  projects: [
    {
      name: "DigitalYou AI Avatar Platform - B2B",
      year: "2025",
      image: "/project/digital-you-b2b.png",
      description:
        "An enterprise-grade multi-tenant platform delivering interactive AI experiences via a fullscreen kiosk interface and embeddable Web Chatbot, utilizing HeyGen and Livekit for realtime processing.",
      tags: ["Next.js", "TypeScript", "WebRTC", "Multi-tenant", "B2B AI"],
      href: "https://viariyadh.digitalyou.sa/",
      featured: true,
    },
    {
      name: "DigitalYou AI Avatar Platform - B2C",
      year: "2025",
      image: "/project/digital-you-b2c.png",
      description:
        "AI-powered SaaS tool providing fully custom marketing videos featuring dynamic AI avatars, multi-lingual scripts, voiceovers, and a deep Canvas-editing integration (Polotno) for post-production.",
      tags: ["Next.js", "React", "Polotno SDK", "Tailwind CSS", "AI SaaS"],
      href: "https://digitalyou.sa/",
      featured: true,
    },
    {
      name: "Edu Bridge Insight",
      year: "2024",
      image: "/project/edu-bridge.png", 
      description:
        "An intricate EdTech platform featuring AI-analyzed academic insights, generating complex visual data-reports via LLMs directly, powered by Stripe billing and role-based ACLs for massive educator scaling.",
      tags: ["React", "TypeScript", "Data Visualization", "Stripe", "LLM APIs"],
      href: "https://expert-bridge.apps.openxcell.dev/",
      featured: true,
    },
    {
      name: "Pidilite Mpower LMS",
      year: "2023",
      image: "/project/pidilite.png", 
      description:
        "The flagship enterprise Lead Management System custom-engineered for Pidilite. Handles vast pipelines, granular assignments, tracking, and analytics seamlessly across nationwide employee branches.",
      tags: ["React", "Redux Toolkit", "Material UI", "Enterprise Scale"],
      href: "https://mpower.pidilite.com/",
      featured: true,
    },
    {
      name: "Chat With PDF",
      year: "2025",
      image: "/project/chat-with-pdf.png",
      description:
        "A streamlined AI product enabling dynamic query-based document navigation. Users upload thick manuals and extract instant conversational intelligence natively.",
      tags: ["Next.js", "React", "Firebase", "Vector Store"],
      href: "https://chat-with-pdf-lime-beta.vercel.app/",
    },
    {
      name: "3D Game",
      year: "2024",
      image: "/project/3D-game.png",
      description:
        "A playful and highly experimental React Three Fiber physics sandbox focused immensely on spatial UI interaction, lighting, and performance tuning.",
      tags: ["Three.js", "React Three Fiber", "WebGL", "Animation"],
      href: "https://as-game-three.vercel.app/",
    },
    {
      name: "3D T-shirt Customizer",
      year: "2024",
      image: "/project/threejsproject.png",
      description:
        "A premium 3D configurator letting customers modify material shaders, paint decals via AI integrations, and dynamically toggle lighting setups globally.",
      tags: ["React", "Three.js", "Tailwind CSS", "Configurators"],
    },
    {
      name: "Amazon Clone",
      year: "2023",
      image: "/project/amazon-clone.png",
      description:
        "A comprehensive commerce replica proving deep state management logic handling global cart syncs, authentications, and multi-step checkouts.",
      tags: ["React", "Redux Toolkit", "Firebase Ecosystem"],
    },
    {
      name: "Netflix Clone",
      year: "2023",
      image: "/project/netflix-clone.png",
      description:
        "A media streaming layout testing cinematic dark modes, high-density asset loading architectures, and real-time backend API synchronization.",
      tags: ["React", "Firebase auth", "TMDB API"],
    },
  ] satisfies ProjectItem[],
};

export type PortfolioData = typeof portfolioData;
