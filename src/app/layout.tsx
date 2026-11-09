import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sarwar Adhikari | Computer Science & Engineering Student",
  description:
    "Explore the portfolio of Sarwar Adhikari, a Computer Science and Engineering student interested in programming, technology, software, and innovation.",
  keywords: [
    "Sarwar Adhikari",
    "Computer Science Student",
    "Peer Mentor",
    "Software Development",
    "Nepal Developer",
    "C++",
    "Python",
    "Data Structures",
    "Portfolio",
  ],
  authors: [{ name: "Sarwar Adhikari" }],
  creator: "Sarwar Adhikari",
  metadataBase: new URL(siteConfig.siteUrl || "https://sarwaradhikari.dev"),
  openGraph: {
    title: "Sarwar Adhikari | Computer Science & Engineering Student",
    description:
      "Explore the portfolio of Sarwar Adhikari, a Computer Science and Engineering student interested in programming, technology, software, and innovation.",
    type: "website",
    locale: "en_US",
    siteName: "Sarwar Adhikari Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarwar Adhikari | Computer Science & Engineering Student",
    description:
      "Explore the portfolio of Sarwar Adhikari, a Computer Science and Engineering student interested in programming, technology, software, and innovation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sarwar Adhikari",
    jobTitle: "Computer Science and Engineering Student & Peer Mentor",
    nationality: "Nepali",
    knowsLanguage: ["English", "Nepali", "Hindi", "Maithili"],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: siteConfig.education.degree,
    },
    knowsAbout: [
      "Computer Science",
      "C++",
      "Python",
      "Data Structures",
      "SQL",
      "Application Software Concepts",
      "Game Development",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#0a0b0f] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
