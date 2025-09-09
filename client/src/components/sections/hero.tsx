import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
// import { generateResumePDF } from "@/utils/pdfGenerator";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const downloadResume = () => {
    // Option 1: Download from public folder (recommended)
    const link = document.createElement('a');
    link.href = '/resume/Hana_Berhe_Girmay_Resume.pdf';
    link.download = 'Hana_Berhe_Girmay_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Option 2: Fallback to generated PDF if file not found
    // Uncomment the line below and comment the above if you want to use generated PDF
    // generateResumePDF();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern tech workspace background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Modern tech workspace" 
          className="w-full h-full object-cover opacity-10" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/80 to-accent/20"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" data-testid="hero-title">
            Hi, I'm <span className="gradient-text">Hana</span>
          </h1>
          <div className="text-2xl md:text-3xl text-muted-foreground mb-8">
            <span className="typing-animation" data-testid="hero-subtitle">Data Analyst & Software Developer</span>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto" data-testid="hero-description">
            Transforming complex data into actionable insights with expertise in Python, R, SQL, and modern web technologies. Available for freelance virtual assistant and data entry services. Based in Addis Ababa, Ethiopia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-primary text-primary-foreground px-8 py-3 hover:bg-primary/90"
              data-testid="button-view-work"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border border-border text-foreground px-8 py-3 hover:bg-muted"
              data-testid="button-contact"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              onClick={downloadResume}
              className="border border-border text-foreground px-8 py-3 hover:bg-muted flex items-center gap-2"
              data-testid="button-download-resume"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
