import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="section-title-about">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <Card className="p-8 shadow-lg">
              {/* Passport-sized photo placeholder */}
              <div className="w-48 h-56 bg-muted rounded-lg mx-auto mb-6 flex items-center justify-center" data-testid="photo-placeholder">
                <div className="text-center text-muted-foreground">
                  <User className="h-16 w-16 mx-auto mb-2" />
                  <p className="text-sm">Passport Photo</p>
                  <p className="text-xs">Placeholder</p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2" data-testid="text-name">Hana Berhe Girmay</h3>
                <p className="text-muted-foreground" data-testid="text-title">Data Analyst</p>
              </div>
            </Card>
          </div>
          
          <div className="fade-in">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground" data-testid="text-journey-title">My Journey</h3>
              <p className="text-muted-foreground" data-testid="text-journey-description">
                A highly driven and adaptable Information Systems graduate with a strong background in data analysis and software development. I earned my B.Sc. in Information Systems from Addis Ababa University in July 2024.
              </p>
              <p className="text-muted-foreground" data-testid="text-experience-description">
                I've gained proven business experience through internships at the Commercial Bank of Ethiopia and Unilever, applying technical expertise and analytical skills to deliver positive outcomes. I'm passionate about transforming data into meaningful insights and building robust software solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <Card className="p-4 border border-border">
                  <div className="text-2xl font-bold text-accent" data-testid="stat-graduate-year">2024</div>
                  <div className="text-sm text-muted-foreground">Graduate</div>
                </Card>
                <Card className="p-4 border border-border">
                  <div className="text-2xl font-bold text-accent" data-testid="stat-languages-count">6+</div>
                  <div className="text-sm text-muted-foreground">Languages</div>
                </Card>
              </div>
              
              <div className="flex flex-wrap gap-2 pt-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm" data-testid="tag-data-analysis">Data Analysis</span>
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm" data-testid="tag-machine-learning">Machine Learning</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm" data-testid="tag-web-development">Web Development</span>
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm" data-testid="tag-leadership">Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
