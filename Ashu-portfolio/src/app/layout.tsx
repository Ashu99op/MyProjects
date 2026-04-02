import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ashutosh-portfolio.vercel.app"),
  title: {
    default: "Ashutosh Savani | Frontend Engineer — React, Next.js & AI Product UI",
    template: "%s | Ashutosh Savani",
  },
  description:
    "Frontend engineer with 4+ years of experience building scalable SaaS, AI-powered products, and enterprise-grade interfaces using React.js, Next.js, TypeScript, and Tailwind CSS. Based in Ahmedabad, India.",
  keywords: [
    "Ashutosh Savani",
    "Frontend Engineer",
    "React.js",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "UI Engineer",
    "SaaS Frontend",
    "AI Product UI",
    "Framer Motion",
    "Three.js",
    "Web Developer Ahmedabad",
    "Portfolio",
    "Openxcell",
  ],
  authors: [{ name: "Ashutosh Savani", url: "https://ashutosh-portfolio.vercel.app" }],
  creator: "Ashutosh Savani",
  applicationName: "Ashutosh Savani Portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://ashutosh-portfolio.vercel.app",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: "https://ashutosh-portfolio.vercel.app",
    siteName: "Ashutosh Savani — Frontend Engineer",
    title: "Ashutosh Savani | Frontend Engineer — React, Next.js & AI Product UI",
    description:
      "4+ years building polished SaaS, AI & enterprise interfaces. React.js · Next.js · TypeScript · Tailwind CSS · Framer Motion.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ashutoshsavani",
    creator: "@ashutoshsavani",
    title: "Ashutosh Savani | Frontend Engineer",
    description:
      "Frontend engineer crafting premium product interfaces with React, Next.js, and AI-powered tooling.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ashutosh Savani",
  jobTitle: "Frontend Engineer",
  url: "https://ashutosh-portfolio.vercel.app",
  email: "ashutoshsavani0@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/ashutosh-savani-a3772a228/",
    "https://github.com/Ashu99op",
  ],
  knowsAbout: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
  worksFor: { "@type": "Organization", name: "Openxcell Technolabs" },
  address: { "@type": "PostalAddress", addressLocality: "Ahmedabad", addressCountry: "IN" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#04070d" />
        <meta name="color-scheme" content="dark" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
