"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
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
import AmbientBackground from "@/components/ambient-background";
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
    description:
      "Reusable UI, consistent patterns, and structure that stays maintainable as products grow.",
    icon: Layers3,
  },
  {
    title: "Product-minded polish",
    description:
      "Interfaces that feel clean, smooth, and intentional without becoming noisy or overdesigned.",
    icon: Sparkles,
  },
  {
    title: "Collaborative delivery",
    description:
      "Comfortable working with clients and teams where clarity, ownership, and execution matter.",
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
    <div className="max-w-4xl mx-auto space-y-6 text-center flex flex-col items-center">
      <span className="section-label">{label}</span>
      <h2 className="section-title text-4xl leading-tight text-white md:text-5xl lg:text-[3.5rem] tracking-tight">
        {title}
      </h2>
      {description ? (
        <>
          <div className="h-px w-16 bg-linear-to-r from-transparent via-(--gold) to-transparent opacity-60" />
          <p className="muted-copy text-base leading-8 md:text-lg max-w-2xl">
            {description}
          </p>
        </>
      ) : null}
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
      <motion.article
        whileHover={{ borderColor: "rgba(239,189,84,0.2)" }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="experience-frame rounded-[2rem] p-6 md:p-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/8 pb-6">
          <div className="flex items-center gap-4">
            <div className="experience-index">
              {String(index + 1).padStart(2, "00")}
            </div>
            <div className="space-y-1">
              <h3 className="section-title text-2xl text-white md:text-3xl">
                {item.company}
              </h3>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/60 md:text-sm">
                {item.role}
              </p>
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
              <div
                key={outcome}
                className="experience-point rounded-[1.35rem] p-4"
              >
                <span className="experience-point-dot" />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.article>
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
          <span className="project-year-pill">
            {featured ? `Featured ${project.year}` : project.year}
          </span>
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
          <h3 className="section-title text-3xl text-white md:text-[2rem]">
            {project.name}
          </h3>
          <p className="text-sm leading-7 text-white/74 md:text-base">
            {project.description}
          </p>
        </div>

        <div className="project-tag-row">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`project-tag ${featured ? "project-tag-featured" : ""}`}
            >
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

  return (
    <main className="portfolio-shell">
      <AmbientBackground />
      <CursorAura />
      <div className="portfolio-noise" />

      <header className="sticky top-4 z-50 mx-auto flex w-min max-w-[calc(100%-1rem)] justify-center px-4">
        <nav role="navigation" aria-label="Main navigation" className="nav-pill flex items-center gap-2 rounded-full px-3 py-3 md:gap-3 md:px-5">
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
                className="rounded-full px-4 py-2 text-sm text-white/72 transition-all duration-200 hover:bg-white/8 hover:text-white hover:tracking-wide"
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

      <section
        id="hero"
        className="section-shell hero-shell flex flex-col items-center justify-center text-center pb-24"
      >
        <div className="hero-backlight" />

        <div className="max-w-4xl w-full mx-auto relative z-10">
          <SectionReveal className="space-y-8 flex flex-col items-center">
            <span className="section-label inline-flex">
              <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" />
              {data.hero.badge}
            </span>

            <div className="space-y-6 flex flex-col items-center">
              <p className="hero-kicker">
                Frontend engineer for SaaS, AI products, and modern web teams
              </p>
              <h1 className="section-title hero-display text-white max-w-[12ch]">
                {data.hero.headline}
              </h1>

              <p className="hero-subcopy text-white/90">
                <span className="accent-stroke relative inline-block pb-2">
                  {data.hero.subheadline}
                </span>
              </p>

              <p className="max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
                {data.hero.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
              <Link
                href="#projects"
                className="primary-button text-base px-6 py-3"
              >
                Explore Projects
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="#experience"
                className="secondary-button text-base px-6 py-3"
              >
                View Experience
              </Link>
            </div>

            <div className="mt-12 grid w-full gap-4 sm:grid-cols-3 max-w-3xl">
              {data.hero.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.55, delay: 0.14 + index * 0.08 }}
                  className="hero-stat-card rounded-[1.7rem] p-6 text-center"
                >
                  <p className="text-3xl font-semibold text-white md:text-[2.2rem]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--gold-strong)] font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
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
            <div className="about-panel rounded-[2rem] p-8 md:p-10 space-y-6">
              {data.story.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`leading-8 text-white/80 ${
                    index === 0
                      ? "section-title text-xl md:text-[1.45rem] text-white/95 pb-6 border-b border-white/8"
                      : "text-base"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <div className="about-sidebar rounded-[2rem] p-8 md:p-10">
              <div className="flex flex-col items-center mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--gold)] mb-3">
                  What I Bring
                </p>
                <div className="w-8 h-px bg-linear-to-r from-transparent via-(--gold) to-transparent opacity-60" />
              </div>

              <div className="space-y-6">
                {craftSignals.map((signal) => {
                  const Icon = signal.icon;

                  return (
                    <div
                      key={signal.title}
                      className="flex gap-4 items-start p-4 rounded-[1.1rem] border border-white/6 bg-white/2.5 hover:border-(--gold)/20 hover:bg-white/4 transition-all duration-300"
                    >
                      <div className="craft-card-icon shrink-0 mt-0.5">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-bold uppercase tracking-[0.14em] text-white">
                          {signal.title}
                        </p>
                        <p className="text-sm leading-6 text-white/55">
                          {signal.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
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
        <div className="space-y-12">
          <SectionReveal>
            <SectionHeading
              label="Technical Skills"
              title="A high-performance toolkit refined for enterprise-grade product delivery."
              description="This stack represents a curated selection of tools that enable me to build, scale, and optimize sophisticated web systems without compromise."
            />
          </SectionReveal>

          <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.skills.map((group, groupIndex) => (
              <SectionReveal key={group.title} delay={groupIndex * 0.08}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="skills-board rounded-[2.1rem] p-6 md:p-8 border border-white/10 hover:border-[rgba(239,189,84,0.35)] shadow-lg hover:shadow-2xl hover:shadow-[rgba(239,189,84,0.1)] transition-all flex flex-col items-start h-full"
                >
                  <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--gold)]">
                    {group.title}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <span key={item} className="skill-pill shadow-sm text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
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
              <ProjectCard
                project={project}
                featured={Boolean(project.featured)}
              />
            </SectionReveal>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell pb-20">
        <SectionReveal className="contact-shell rounded-[2.4rem] p-6 md:p-10 xl:p-12">
          <div className="grid gap-10 xl:grid-cols-[0.56fr_0.44fr]">
            <div className="space-y-6">
              <span className="section-label">
                <Sparkles className="h-3.5 w-3.5" />
                Contact
              </span>
              <h2 className="section-title text-3xl leading-tight text-white md:text-[3.25rem]">
                Let&apos;s build something extraordinary together.
              </h2>
              <p className="text-base leading-8 text-[var(--muted)] md:text-lg">
                If you are building something that values clarity, speed, and
                premium execution, I would love to connect and explore how I can
                help.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={`mailto:${data.contact.email}`}
                  className="primary-button"
                >
                  Email Me
                  <Mail className="h-4 w-4" />
                </Link>
                <Link
                  href={`tel:${data.contact.phone.replace(/\s+/g, "")}`}
                  className="secondary-button"
                >
                  Call Me
                  <Phone className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-1">
              <Link
                href={`mailto:${data.contact.email}`}
                className="contact-card rounded-[1.7rem] p-5 hover:border-[rgba(239,189,84,0.35)]"
              >
                <Mail className="h-5 w-5 text-[var(--gold)]" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--gold)]">
                  Email
                </p>
                <p className="mt-2 break-all text-sm leading-7 text-white/82">
                  {data.contact.email}
                </p>
              </Link>

              <Link
                href={`tel:${data.contact.phone.replace(/\s+/g, "")}`}
                className="contact-card rounded-[1.7rem] p-5 hover:border-[rgba(239,189,84,0.35)]"
              >
                <Phone className="h-5 w-5 text-[var(--gold)]" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--gold)]">
                  Phone
                </p>
                <p className="mt-2 text-sm leading-7 text-white/82">
                  {data.contact.phone}
                </p>
              </Link>

              <div className="contact-card rounded-[1.7rem] p-5">
                <MapPin className="h-5 w-5 text-[var(--gold)]" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--gold)]">
                  Location
                </p>
                <p className="mt-2 text-sm leading-7 text-white/82">
                  {data.contact.location}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {data.socials.map((social) => {
              const Icon =
                socialIcons[social.label as keyof typeof socialIcons];

              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-chip transition-all duration-200 hover:scale-105"
                >
                  <Icon className="h-4 w-4" />
                  {social.label}
                </Link>
              );
            })}
          </div>
        </SectionReveal>
      </section>
    </main>
  );
}
