import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
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
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap"
});
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AYYAPPAN M | Software Engineer & AI / Data Systems Developer",
    template: "%s | AYYAPPAN M"
  },
  description:
    "Professional portfolio of AYYAPPAN M, a software engineer specializing in Python, AI agents, full-stack systems, and enterprise data analytics.",
  keywords: [
    "Software Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Portfolio"
  ],
  authors: [{ name: "AYYAPPAN M" }],
  creator: "AYYAPPAN M",
  openGraph: {
    title: "AYYAPPAN M | Full Stack Software Developer",
    description:
      "Premium developer portfolio showcasing projects, skills, experience, services, and contact information.",
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
    title: "AYYAPPAN M | Full Stack Software Developer",
    description:
      "Full stack software developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
    images: ["/avatar.png"]
  },
  icons: {
    icon: "/favicon.ico"
  }
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617"
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-inter`}>
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