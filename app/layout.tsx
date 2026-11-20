import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
// @ts-ignore: allow side-effect CSS import without type declarations
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";
import ScrollToTop from "@/components/layout/ScrollToTop";
import CustomCursor from "@/components/layout/CustomCursor";
import LoadingScreen from "@/components/layout/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AYYAPPAN M | Software Engineer & AI / Distributed Systems Developer",
    template: "%s | AYYAPPAN M"
  },
  description:
    "Professional portfolio of AYYAPPAN M, a software engineer specializing in Python, AI agents, distributed systems, and enterprise data analytics pipelines.",
  keywords: [
    "Software Engineer",
    "Distributed Systems",
    "AI Agents",
    "Data Engineering",
    "Full Stack Developer",
    "Python",
    "TypeScript",
    "Next.js",
    "Portfolio"
  ],
  authors: [{ name: "AYYAPPAN M" }],
  creator: "AYYAPPAN M",
  openGraph: {
    title: "AYYAPPAN M | Software Engineer & AI / Distributed Systems Developer",
    description:
      "Minimalist, production-grade portfolio showcasing distributed systems, AI agents, data engineering pipelines, and certifications.",
    url: siteUrl,
    siteName: "AYYAPPAN M Portfolio",
    images: [
      {
        url: "/avatar.png",
        width: 1200,
        height: 630,
        alt: "AYYAPPAN M Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AYYAPPAN M | Software Engineer",
    description:
      "Minimalist engineering portfolio showcasing distributed systems, AI agents, data pipelines, and infrastructure.",
    images: ["/avatar.png"]
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090B"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#09090B] text-[#FAFAFA] antialiased selection:bg-zinc-800 selection:text-white`}>
        <ThemeProvider>
          <LoadingScreen />
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
