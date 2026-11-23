import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Achievements from "@/components/achievements/Achievements";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import Skills from "@/components/skills/Skills";
import Certifications from "@/components/certifications/Certifications";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Achievements />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
