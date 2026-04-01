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
      "I build product interfaces that feel sharp, dependable, and production ready across AI platforms, SaaS products, and enterprise systems.",
    status: "Software Engineer at Openxcell Technolabs",
    location: "Ahmedabad, India",
    availability: "Open to frontend and product engineering opportunities",
    stats: [
      { value: "4+", label: "Years of experience" },
      { value: "AI", label: "SaaS and enterprise product focus" },
      { value: "B2B", label: "Client-facing delivery and collaboration" },
    ],
  },
  story: {
    eyebrow: "About",
    title: "From polished frontend delivery to building larger AI and enterprise product systems.",
    paragraphs: [
      "I am a frontend engineer with 4+ years of experience building scalable web applications with React.js, Next.js, TypeScript, and modern UI systems. I enjoy turning product requirements into interfaces that feel fast, polished, and dependable.",
      "My recent work spans AI-powered SaaS platforms, enterprise dashboards, role-based admin systems, and multi-tenant B2B products. I work comfortably in agile, client-facing teams where requirement clarity, ownership, and execution matter.",
      "I care about product feel as much as implementation quality, so I pay attention to motion, structure, responsiveness, and the small details that make an interface feel complete.",
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
      location: "Ahmedabad",
      summary:
        "Building pixel-perfect, responsive interfaces for AI-powered SaaS platforms using React.js, Next.js, TypeScript, and Tailwind CSS.",
      outcomes: [
        "Architected and merged a chatbot product and a fullscreen AI avatar experience into one unified codebase, cutting redundant code by roughly 35% and simplifying maintenance.",
        "Built role-based admin and client dashboards with analytics, content management, and configuration flows for a multi-tenant B2B AI platform.",
        "Worked directly in client meetings to gather requirements, show progress, and ship feedback-driven updates across multiple projects.",
      ],
      stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Three.js"],
    },
    {
      company: "Brainvire Infotech Pvt. Ltd.",
      role: "Frontend Engineer",
      period: "Nov 2022 - Dec 2024",
      location: "Ahmedabad",
      summary:
        "Grew from trainee to software engineer while building and scaling enterprise frontend modules for real client products.",
      outcomes: [
        "Enhanced and scaled modules for the Pidilite Mpower lead management system using React.js, Redux, and Material UI.",
        "Improved reusable UI components and frontend workflows, increasing development efficiency and helping maintain consistent performance.",
        "Communicated directly with clients for requirement gathering, task updates, and progress reporting throughout active sprint delivery.",
      ],
      stack: ["React", "Redux", "Material UI", "JavaScript", "GraphQL", "Agile Delivery"],
    },
    {
      company: "iBoon Technologies",
      role: "Software Developer",
      period: "Apr 2022 - Nov 2022",
      location: "Ahmedabad",
      summary:
        "Built responsive, cross-browser web interfaces and collaborated with a small team to deliver frontend features across multiple projects.",
      outcomes: [
        "Improved page performance and frontend stability while supporting modern browser compatibility.",
        "Worked with a team of developers to ship UI features more reliably and reduce bugs during QA cycles.",
      ],
      stack: ["HTML", "CSS", "JavaScript", "Responsive UI", "WordPress"],
    },
    {
      company: "TechNEOS Solutions",
      role: "Web Developer Intern",
      period: "Jan 2022 - Apr 2022",
      location: "Ahmedabad",
      summary:
        "Started the professional path by learning web foundations and shipping responsive websites with WordPress.",
      outcomes: [
        "Built a strong base in HTML, CSS, content structure, and responsive web layouts.",
        "Gained early experience with CMS-driven delivery and client-facing website work.",
      ],
      stack: ["HTML", "CSS", "WordPress"],
    },
  ] satisfies ExperienceItem[],
  skills: [
    {
      title: "Frontend",
      items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
    },
    {
      title: "Styling & UI",
      items: ["Tailwind CSS", "Shadcn UI", "Material UI", "Responsive Design", "Framer Motion"],
    },
    {
      title: "State & Data",
      items: ["Redux", "Zustand", "TanStack Query", "GraphQL", "Firebase"],
    },
    {
      title: "Platform & Workflow",
      items: ["Node.js", "Express.js", "Git", "GitHub", "WordPress"],
    },
  ] satisfies SkillGroup[],
  projects: [
    {
      name: "DigitalYou AI Avatar Platform - B2C",
      year: "2025",
      image: "/project/digital-you-b2c.png",
      description:
        "An AI-powered video creation platform where users generate personalized marketing videos using avatars, custom scripts, multilingual voiceovers, and a polished end-to-end creation flow.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI SaaS"],
      href: "https://digitalyou.sa/",
      featured: true,
    },
    {
      name: "DigitalYou AI Avatar Platform - B2B",
      year: "2025",
      image: "/project/digital-you-b2b.png",
      description:
        "A multi-tenant B2B avatar platform with fullscreen kiosk experiences, embeddable chatbot widgets, super-admin tools, and client portals unified into one product system.",
      tags: ["Next.js", "React", "TypeScript", "Multi-tenant", "B2B AI"],
      href: "https://viariyadh.digitalyou.sa/",
      featured: true,
    },
    {
      name: "Chat With PDF",
      year: "2025",
      image: "/project/chat-with-pdf.png",
      description:
        "An AI-powered product that lets users upload documents and chat with them through a streamlined, modern interface.",
      tags: ["Next.js", "React", "Firebase", "TypeScript", "AI UX"],
      href: "https://chat-with-pdf-lime-beta.vercel.app/",
      featured: true,
    },
    {
      name: "3D Game",
      year: "2024",
      image: "/project/3D-game.png",
      description:
        "A playful React Three Fiber experience focused on immersive motion, spatial interaction, and creative frontend experimentation.",
      tags: ["React", "Three.js", "React Three Fiber", "Animation"],
      href: "https://as-game-three.vercel.app/",
    },
    {
      name: "3D T-shirt Customizer",
      year: "2024",
      image: "/project/threejsproject.png",
      description:
        "A 3D customization tool with color controls, logo uploads, and AI-assisted visuals layered into a product-style workflow.",
      tags: ["React", "Three.js", "Tailwind CSS", "Creative Tooling"],
    },
    {
      name: "Amazon Clone",
      year: "2023",
      image: "/project/amazon-clone.png",
      description:
        "A feature-rich commerce clone with authentication, state management, and dynamic product flows.",
      tags: ["React", "Redux Toolkit", "Firebase", "Commerce UI"],
    },
    {
      name: "Netflix Clone",
      year: "2023",
      image: "/project/netflix-clone.png",
      description:
        "A streaming-inspired interface backed by authentication and genre-based content fetching for a polished browsing experience.",
      tags: ["React", "Firebase", "TMDB API", "Responsive UI"],
    },
    {
      name: "Portfolio Legacy Build",
      year: "2023",
      image: "/project/portfolio.png",
      description:
        "The original portfolio that set the foundation for this complete 2026 rebuild and redesign.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Portfolio"],
    },
  ] satisfies ProjectItem[],
};

export type PortfolioData = typeof portfolioData;
