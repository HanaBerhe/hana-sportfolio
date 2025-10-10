import { Card } from "@/components/ui/card";
import { User } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation";

export default function About() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: tagsRef, visibleItems: visibleTags } = useStaggeredAnimation(5, 150);

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div 
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 scroll-reveal ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="section-title-about">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div ref={contentRef as React.RefObject<HTMLDivElement>} className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`scroll-reveal-left ${contentVisible ? 'visible' : ''}`}>
            <Card className="p-8 shadow-lg">
              {/* Passport-sized photo */}
              <div className="w-48 h-56 mx-auto mb-6 overflow-hidden rounded-lg shadow-lg" data-testid="photo-container">
                <img 
                  src="/images/passport-photo.jpg" 
                  alt="Hana Berhe Girmay - Passport Photo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = target.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center" style={{display: 'none'}} data-testid="photo-placeholder">
                  <div className="text-center text-muted-foreground">
                    <User className="h-16 w-16 mx-auto mb-2" />
                    <p className="text-sm">Passport Photo</p>
                    <p className="text-xs">Place image at: client/public/images/passport-photo.jpg</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2" data-testid="text-name">Hana Berhe Girmay</h3>
                <p className="text-muted-foreground" data-testid="text-title">Data Analyst</p>
              </div>
            </Card>
          </div>
          
          <div className={`scroll-reveal-right ${contentVisible ? 'visible' : ''}`}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground" data-testid="text-journey-title">My Journey</h3>
              <p className="text-muted-foreground" data-testid="text-journey-description">
                A highly driven and adaptable Information Systems graduate with a strong background in data analysis and software development. I earned my B.Sc. in Information Systems from Addis Ababa University in July 2024.
              </p>
              <p className="text-muted-foreground" data-testid="text-experience-description">
                I've gained proven business experience through internships at the Commercial Bank of Ethiopia and Unilever, applying technical expertise and analytical skills to deliver positive outcomes. I'm passionate about transforming data into meaningful insights and building robust software solutions. Currently available for freelance virtual assistant and data entry projects.
              </p>
              
              <div className={`grid grid-cols-2 gap-4 pt-4 scroll-reveal-scale ${contentVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
                <Card className="p-4 border border-border">
                  <div className="text-2xl font-bold text-accent dark:text-blue-400" data-testid="stat-graduate-year">2024</div>
                  <div className="text-sm text-muted-foreground">Graduate</div>
                </Card>
                <Card className="p-4 border border-border">
                  <div className="text-2xl font-bold text-accent dark:text-blue-400" data-testid="stat-languages-count">6+</div>
                  <div className="text-sm text-muted-foreground">Languages</div>
                </Card>
              </div>
              
              <div ref={tagsRef as React.RefObject<HTMLDivElement>} className="flex flex-wrap gap-2 pt-4">
                {[
                  { text: "Data Analysis", testId: "tag-data-analysis", color: "bg-primary/10 text-primary" },
                  { text: "Machine Learning", testId: "tag-machine-learning", color: "bg-accent/10 text-accent" },
                  { text: "Web Development", testId: "tag-web-development", color: "bg-primary/10 text-primary" },
                  { text: "Available for Freelancing", testId: "tag-freelancing", color: "bg-green-500/10 text-green-600" },
                  { text: "Leadership", testId: "tag-leadership", color: "bg-accent/10 text-accent" }
                ].map((tag, index) => (
                  <span 
                    key={index}
                    className={`${tag.color} px-3 py-1 rounded-full text-sm stagger-item ${
                      visibleTags.has(index) ? 'visible' : ''
                    }`}
                    data-testid={tag.testId}
                  >
                    {tag.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}