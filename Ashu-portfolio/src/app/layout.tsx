import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ashutosh-portfolio.vercel.app"),
  title: "Ashutosh Savani | Frontend Engineer",
  description:
    "A modern portfolio for Ashutosh Savani featuring frontend engineering, polished interfaces, and product-focused web experiences.",
  applicationName: "Ashutosh Portfolio",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Ashutosh Savani | Frontend Engineer",
    description:
      "Modern frontend portfolio with polished motion, strong visual design, and product-focused web experiences.",
    url: "https://ashutosh-portfolio.vercel.app",
    siteName: "Ashutosh Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashutosh Savani | Frontend Engineer",
    description:
      "Modern frontend portfolio with polished motion, strong visual design, and product-focused web experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
