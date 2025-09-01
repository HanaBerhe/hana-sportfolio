import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  const certifications = [
    "Introduction to Data Analytics",
    "Introduction to Artificial Intelligence",
    "Virtual Assistant",
    {
      name: "Employability, Entrepreneurship, Servant Leadership",
      organization: "Mastercard Foundation",
    },
    {
      name: "Digital Literacy (Serve Global)",
      organization: "Mastercard Foundation",
    },
    {
      name: "Human Rights Awareness Program",
      organization: "AAU Center of Human Rights & Sweden Embassy",
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="section-title-education">Education & Certifications</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="p-6 shadow-lg border border-border card-hover" data-testid="education-card">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground" data-testid="education-section-title">Education</h3>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-4">
              <h4 className="font-semibold text-lg text-foreground" data-testid="degree-title">B.Sc. in Information Systems</h4>
              <p className="text-accent font-medium" data-testid="university-name">Addis Ababa University</p>
              <p className="text-sm text-muted-foreground" data-testid="graduation-period">2021 – 2024</p>
              <p className="text-muted-foreground mt-2" data-testid="degree-description">
                Comprehensive study of information systems, database management, software development, and business analysis.
              </p>
            </div>
          </Card>

          {/* Certifications */}
          <Card className="p-6 shadow-lg border border-border card-hover" data-testid="certifications-card">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground" data-testid="certifications-section-title">Certifications</h3>
              </div>
            </div>
            
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className={`border-l-4 pl-4 ${index % 2 === 0 ? 'border-accent' : 'border-primary'}`}
                  data-testid={`certification-${index}`}
                >
                  {typeof cert === 'string' ? (
                    <h4 className="font-medium text-foreground" data-testid={`cert-name-${index}`}>{cert}</h4>
                  ) : (
                    <>
                      <h4 className="font-medium text-foreground" data-testid={`cert-name-${index}`}>{cert.name}</h4>
                      <p className="text-sm text-muted-foreground" data-testid={`cert-org-${index}`}>{cert.organization}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
