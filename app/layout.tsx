import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
// @ts-ignore: allow side-effect CSS import without type declarations
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";
import ScrollToTop from "@/components/layout/ScrollToTop";
import CustomCursor from "@/components/layout/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://portfolio-ayyappanmj2004.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ayyappan M | Portfolio",
  description:
    "Portfolio of Ayyappan M: AI apps, data pipelines, backends and infrastructure projects with live demos and source code.",
  keywords: [
    "Ayyappan M",
    "Portfolio",
    "AI",
    "Data Pipelines",
    "Backend Systems",
    "Infrastructure",
    "Python",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: "Ayyappan M", url: siteUrl }],
  creator: "Ayyappan M",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Ayyappan M | Portfolio",
    description:
      "Portfolio of Ayyappan M: AI apps, data pipelines, backends and infrastructure projects with live demos and source code.",
    url: siteUrl,
    siteName: "Ayyappan M | Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ayyappan M | Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayyappan M | Portfolio",
    description:
      "Portfolio of Ayyappan M: AI apps, data pipelines, backends and infrastructure projects with live demos and source code.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ayyappan M",
    url: siteUrl,
    sameAs: [
      "https://github.com/Ayyappanmj",
      "https://www.linkedin.com/in/ayyappanmj",
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "Kerala",
      addressCountry: "India",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University College of Engineering, Kariyavattom",
    },
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#09090B] text-[#FAFAFA] antialiased selection:bg-zinc-800 selection:text-white`}
      >
        <ThemeProvider>
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
