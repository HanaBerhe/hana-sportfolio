import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import Voluntary from "@/components/sections/voluntary";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import ScrollToTop from "@/components/scroll-to-top";
import SectionSeparator from "@/components/section-separator";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      <SectionSeparator variant="gradient" />
      <About />
      
      <SectionSeparator variant="dots" />
      <Skills />
      
      <SectionSeparator variant="particles" />
      <Experience />
      
      <SectionSeparator variant="line" />
      <Education />
      
      <SectionSeparator variant="gradient" />
      <Voluntary />
      
      <SectionSeparator variant="dots" />
      <Projects />
      
      <SectionSeparator variant="particles" />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-foreground font-semibold mb-4 md:mb-0">
              Hana Berhe Girmay
            </div>
            <div className="text-muted-foreground text-sm">
              © 2024 All rights reserved. Built with passion for data and technology.
            </div>
          </div>
        </div>
      </footer>
      
      <ScrollToTop />
    </div>
  );
}
