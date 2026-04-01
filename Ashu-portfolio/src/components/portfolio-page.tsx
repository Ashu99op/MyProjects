"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Camera,
  GitBranch,
  Globe,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Workflow,
} from "lucide-react";
import CursorAura from "@/components/cursor-aura";
import SectionReveal from "@/components/section-reveal";
import type { PortfolioData } from "@/data/portfolio";

type PortfolioPageProps = {
  data: PortfolioData;
};

const socialIcons = {
  LinkedIn: Globe,
  GitHub: GitBranch,
  Instagram: Camera,
};

const marqueeItems = [
  "Premium UI Systems",
  "Next.js Delivery",
  "Motion Craft",
  "AI Product Interfaces",
  "Frontend Architecture",
  "B2B Experience",
  "Product-Led Execution",
  "Visual Polish",
];

const craftSignals = [
  {
    title: "Scalable frontend systems",
    description: "Reusable UI, consistent patterns, and structure that stays maintainable as products grow.",
    icon: Layers3,
  },
  {
    title: "Product-minded polish",
    description: "Interfaces that feel clean, smooth, and intentional without becoming noisy or overdesigned.",
    icon: Sparkles,
  },
  {
    title: "Collaborative delivery",
    description: "Comfortable working with clients and teams where clarity, ownership, and execution matter.",
    icon: Workflow,
  },
];

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl space-y-4">
      <span className="section-label">{label}</span>
      <h2 className="section-title text-4xl leading-tight text-white md:text-5xl">{title}</h2>
      {description ? <p className="muted-copy text-base leading-8 md:text-lg">{description}</p> : null}
    </div>
  );
}

function ExperienceCard({
  item,
  index,
}: {
  item: PortfolioData["experience"][number];
  index: number;
}) {
  return (
    <SectionReveal delay={index * 0.08}>
      <article className="experience-frame rounded-[2rem] p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/8 pb-6">
          <div className="flex items-center gap-4">
            <div className="experience-index">{String(index + 1).padStart(2, "0")}</div>
            <div className="space-y-1">
              <h3 className="section-title text-3xl text-white">{item.company}</h3>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/62">{item.role}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="experience-meta-chip">{item.period}</span>
            <span className="experience-meta-chip">
              <MapPin className="h-3.5 w-3.5 text-[var(--gold)]" />
              {item.location}
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-[0.38fr_0.62fr]">
          <div className="experience-rail space-y-5">
            <p className="text-base leading-8 text-white/78">{item.summary}</p>

            <div className="flex flex-wrap gap-2">
              {item.stack.map((stackItem) => (
                <span key={stackItem} className="stack-pill">
                  {stackItem}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            {item.outcomes.map((outcome) => (
              <div key={outcome} className="experience-point rounded-[1.35rem] p-4">
                <span className="experience-point-dot" />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </article>
    </SectionReveal>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: PortfolioData["projects"][number];
  featured?: boolean;
}) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`project-showcase group ${featured ? "project-showcase-featured" : ""}`}
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <div className="project-image-glow" />
        <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-4">
          <span className="project-year-pill">{featured ? `Featured ${project.year}` : project.year}</span>
          {project.href ? (
            <Link
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="project-icon-button"
              aria-label={`Open ${project.name}`}
            >
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      </div>

      <div className="space-y-5 p-6 md:p-7">
        <div className="space-y-3">
          <h3 className="section-title text-3xl text-white md:text-[2rem]">{project.name}</h3>
          <p className="text-sm leading-7 text-white/74 md:text-base">{project.description}</p>
        </div>

        <div className="project-tag-row">
          {project.tags.map((tag) => (
            <span key={tag} className={`project-tag ${featured ? "project-tag-featured" : ""}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function PortfolioPage({ data }: PortfolioPageProps) {
  const projects = data.projects;
  const focusAreas = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "AI Product UI",
  ];

  return (
    <main className="portfolio-shell">
      <CursorAura />
      <div className="portfolio-noise" />
      <div className="portfolio-grid" />
      <div className="portfolio-aurora portfolio-aurora-left" />
      <div className="portfolio-aurora portfolio-aurora-right" />
      <div className="portfolio-aurora portfolio-aurora-center" />

      <header className="sticky top-4 z-50 mx-auto flex w-min max-w-[calc(100%-1rem)] justify-center px-4">
        <nav className="nav-pill flex items-center gap-2 rounded-full px-3 py-3 md:gap-3 md:px-5">
          <Link
            href="#hero"
            className="brand-pill inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em]"
          >
            <span className="brand-pill-mark" />
            AS
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {data.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-white/72 hover:bg-white/6 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link href="#contact" className="primary-button px-4 py-2 text-sm">
            Contact
            <ArrowRight className="h-4 w-4" />
          </Link>

          <span className="nav-progress" />
        </nav>
      </header>

      <section id="hero" className="section-shell hero-shell">
        <div className="hero-backlight" />
        <div className="hero-rings" />

        <div className="grid items-start gap-8 xl:grid-cols-[0.62fr_0.38fr]">
          <SectionReveal className="space-y-8">
            <span className="section-label">
              <BriefcaseBusiness className="h-3.5 w-3.5" />
              {data.hero.badge}
            </span>

            <div className="space-y-5">
              <p className="hero-kicker">Frontend engineer for SaaS, AI products, and modern web teams</p>
              <h1 className="section-title hero-display text-white">{data.hero.headline}</h1>

              <p className="hero-subcopy text-white/90">
                <span className="accent-stroke relative inline-block pb-2">{data.hero.subheadline}</span>
              </p>

              <p className="max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
                {data.hero.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="#projects" className="primary-button">
                Explore Projects
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="#experience" className="secondary-button">
                View Experience
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {data.hero.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.55, delay: 0.14 + index * 0.08 }}
                  className="hero-stat-card rounded-[1.7rem] p-5"
                >
                  <p className="text-3xl font-semibold text-white md:text-[2rem]">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="hero-summary-card rounded-[2rem] p-6 md:p-7">
              <div className="space-y-3">
                <p className="hero-kicker">Snapshot</p>
                <h2 className="section-title text-3xl leading-tight text-white md:text-[2.35rem]">
                  Building clean, scalable interfaces with strong product instincts.
                </h2>
                <p className="text-base leading-8 text-white/72">
                  Recent work spans AI-powered platforms, enterprise dashboards, and multi-tenant SaaS
                  products with a focus on clarity, responsiveness, and polished execution.
                </p>
              </div>

              <div className="mt-6 grid gap-3">
                <div className="hero-note-card">
                  <BadgeCheck className="h-4 w-4 text-[var(--gold)]" />
                  <div>
                    <p className="hero-signal-label">Current Role</p>
                    <p className="hero-signal-value">{data.hero.status}</p>
                  </div>
                </div>

                <div className="hero-note-card">
                  <MapPin className="h-4 w-4 text-[var(--gold)]" />
                  <div>
                    <p className="hero-signal-label">Location</p>
                    <p className="hero-signal-value">{data.hero.location}</p>
                  </div>
                </div>

                <div className="hero-note-card">
                  <Sparkles className="h-4 w-4 text-[var(--gold)]" />
                  <div>
                    <p className="hero-signal-label">Availability</p>
                    <p className="hero-signal-value">{data.hero.availability}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">
                  Core Focus
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {focusAreas.map((item) => (
                    <span key={item} className="stack-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {data.socials.map((social) => {
                  const Icon = socialIcons[social.label as keyof typeof socialIcons];

                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="social-chip"
                    >
                      <Icon className="h-4 w-4" />
                      {social.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section-shell section-shell-tight pt-0">
        <div className="marquee-shell rounded-full border border-white/8 bg-[linear-gradient(90deg,rgba(255,255,255,0.04),rgba(239,189,84,0.08),rgba(255,255,255,0.04))] py-4">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="inline-flex items-center gap-4 px-6 text-sm font-semibold uppercase tracking-[0.34em] text-[var(--gold)]/92"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--teal)]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-shell">
        <div className="section-glow section-glow-left" />
        <SectionReveal>
          <SectionHeading
            label={data.story.eyebrow}
            title="Building frontend systems that feel clean, fast, and dependable."
            description="I enjoy turning product requirements into interfaces that are easy to use, visually polished, and solid enough for real production work."
          />
        </SectionReveal>

        <div className="mt-10 grid gap-6 xl:grid-cols-[0.6fr_0.4fr]">
          <SectionReveal>
            <div className="about-panel rounded-[2rem] p-6 md:p-8">
              <p className="about-lead">{data.story.paragraphs[0]}</p>

              <div className="about-story-list mt-8">
                {data.story.paragraphs.map((paragraph, index) => (
                  <div key={paragraph} className="about-story-row">
                    <div className="story-panel-index">{String(index + 1).padStart(2, "0")}</div>
                    <p className="text-base leading-8 text-white/76">{paragraph}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <div className="about-sidebar rounded-[2rem] p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">
                What I Bring
              </p>

              <div className="mt-5 space-y-3">
                {craftSignals.map((signal) => {
                  const Icon = signal.icon;

                  return (
                    <div key={signal.title} className="about-principle">
                      <div className="craft-card-icon">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/76">
                          {signal.title}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-white/64">{signal.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="about-summary-row mt-6">
                <div className="about-summary-card">
                  <p className="hero-signal-label">Based In</p>
                  <p className="hero-signal-value">{data.contact.location}</p>
                </div>
                <div className="about-summary-card">
                  <p className="hero-signal-label">Current Role</p>
                  <p className="hero-signal-value">{data.hero.status}</p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section id="experience" className="section-shell">
        <div className="section-glow section-glow-right" />
        <SectionReveal>
          <SectionHeading
            label="Experience"
            title="Client-facing product work that sharpened speed, clarity, and frontend judgment."
            description="Each role added a different layer: shipping with teams, handling product ambiguity, and creating interfaces that still feel refined under pressure."
          />
        </SectionReveal>

        <div className="mt-10 space-y-5">
          {data.experience.map((item, index) => (
            <ExperienceCard key={item.company} item={item} index={index} />
          ))}
        </div>
      </section>

      <section id="skills" className="section-shell">
        <div className="section-glow section-glow-left" />
        <div className="grid gap-8 xl:grid-cols-[0.38fr_0.62fr]">
          <SectionReveal>
            <SectionHeading
              label="Skills"
              title="A toolkit shaped around shipping premium interfaces with real product constraints."
              description="The stack matters, but the bigger advantage is knowing how these pieces work together in delivery, performance, and design execution."
            />
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <div className="skills-board rounded-[2.1rem] p-6 md:p-8">
              <div className="grid gap-6 xl:grid-cols-2">
                {data.skills.map((group) => (
                  <motion.div
                    key={group.title}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="skills-group"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">
                      {group.title}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {group.items.map((item) => (
                        <span key={item} className="skill-pill">
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section id="projects" className="section-shell">
        <div className="section-glow section-glow-right" />
        <SectionReveal>
          <SectionHeading
            label="Projects"
            title="Selected interfaces and product builds designed to feel sharp, fast, and memorable."
            description="From AI avatar platforms to experimental 3D interfaces, these projects show how I approach usability, visual hierarchy, and product polish."
          />
        </SectionReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <SectionReveal key={project.name} delay={index * 0.05}>
              <ProjectCard project={project} featured={Boolean(project.featured)} />
            </SectionReveal>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell pb-20">
        <SectionReveal className="contact-shell rounded-[2.4rem] p-8 md:p-10 xl:p-12">
          <div className="grid gap-10 xl:grid-cols-[0.56fr_0.44fr]">
            <div className="max-w-3xl space-y-6">
              <span className="section-label">
                <Sparkles className="h-3.5 w-3.5" />
                Contact
              </span>
              <h2 className="section-title text-4xl leading-tight text-white md:text-6xl">
                Open to frontend engineering roles, strong product teams, and meaningful collaborations.
              </h2>
              <p className="text-base leading-8 text-[var(--muted)] md:text-lg">
                If you are building something that values clarity, speed, and premium execution, I would
                love to connect and explore how I can help.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href={`mailto:${data.contact.email}`} className="primary-button">
                  Email Me
                  <Mail className="h-4 w-4" />
                </Link>
                <Link href={`tel:${data.contact.phone.replace(/\s+/g, "")}`} className="secondary-button">
                  Call Me
                  <Phone className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <Link
                href={`mailto:${data.contact.email}`}
                className="contact-card rounded-[1.7rem] p-5 hover:border-[rgba(239,189,84,0.35)]"
              >
                <Mail className="h-5 w-5 text-[var(--gold)]" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--gold)]">
                  Email
                </p>
                <p className="mt-2 break-all text-sm leading-7 text-white/82">{data.contact.email}</p>
              </Link>

              <Link
                href={`tel:${data.contact.phone.replace(/\s+/g, "")}`}
                className="contact-card rounded-[1.7rem] p-5 hover:border-[rgba(239,189,84,0.35)]"
              >
                <Phone className="h-5 w-5 text-[var(--gold)]" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--gold)]">
                  Phone
                </p>
                <p className="mt-2 text-sm leading-7 text-white/82">{data.contact.phone}</p>
              </Link>

              <div className="contact-card rounded-[1.7rem] p-5">
                <MapPin className="h-5 w-5 text-[var(--gold)]" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--gold)]">
                  Location
                </p>
                <p className="mt-2 text-sm leading-7 text-white/82">{data.contact.location}</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {data.socials.map((social) => {
              const Icon = socialIcons[social.label as keyof typeof socialIcons];

              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-chip"
                >
                  <Icon className="h-4 w-4" />
                  {social.label}
                </Link>
              );
            })}
          </div>
        </SectionReveal>

        <div className="portfolio-footer">
          <p>Designed and built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.</p>
          <p>{data.hero.location}</p>
        </div>
      </section>
    </main>
  );
}
