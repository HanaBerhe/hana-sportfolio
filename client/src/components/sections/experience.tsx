import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Data Analyst",
      company: "Commercial Bank of Ethiopia",
      location: "Addis Ababa",
      period: "Present",
      description: "Analyzing financial data and market trends to support strategic decision-making. Developing automated reporting systems and data visualization dashboards to improve operational efficiency.",
      tags: ["Data Analysis", "Financial Modeling", "Python", "SQL"],
      color: "accent",
    },
    {
      title: "Virtual Assistant & Data Entry Specialist (Freelancer)",
      company: "Freelance",
      location: "Remote",
      period: "Present",
      description: "Providing comprehensive virtual assistance services including data entry, administrative support, research, and client communication. Managing multiple projects efficiently while maintaining high accuracy and meeting tight deadlines.",
      tags: ["Virtual Assistant", "Data Entry", "Administrative Support", "Project Management"],
      color: "green-500",
    },
    {
      title: "Software Engineer Intern",
      company: "Ministry of Tourism",
      location: "Addis Ababa",
      period: "3 Months (September 2024)",
      description: "Contributed to the development of tourism information systems and digital platforms. Collaborated with cross-functional teams to implement user-friendly interfaces and optimize system performance.",
      tags: ["Software Development", "React", "JavaScript", "UI/UX"],
      color: "primary",
    },
    {
      title: "Marketing Data Analyst (Contract)",
      company: "Unilever",
      location: "Addis Ababa",
      period: "3 Months (May 2024)",
      description: "Analyzed consumer behavior and market trends to support marketing campaign optimization. Created comprehensive reports and visualizations to guide strategic marketing decisions.",
      tags: ["Market Analysis", "Data Visualization", "Consumer Insights", "Excel"],
      color: "green-500",
    },
    {
      title: "Information System Intern",
      company: "Ethio Telecom (Information System Dept.)",
      location: "Addis Ababa",
      period: "3 Months (June 2023)",
      description: "Gained hands-on experience in enterprise information systems management and database administration. Supported system maintenance and user support activities.",
      tags: ["System Administration", "Database Management", "Technical Support"],
      color: "purple-500",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="section-title-experience">Work Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="relative">
          <div className="timeline-line"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative pl-16 fade-in" data-testid={`experience-${index}`}>
                <div className={`timeline-dot ${index === 0 ? 'bg-accent' : index === 1 ? 'bg-green-500' : index === 2 ? 'bg-primary' : index === 3 ? 'bg-green-500' : 'bg-purple-500'}`}></div>
                <Card className="p-6 shadow-lg border border-border">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground" data-testid={`experience-title-${index}`}>
                        {experience.title}
                      </h3>
                      <p className={`font-medium ${index === 0 ? 'text-accent' : index === 1 ? 'text-green-600' : index === 2 ? 'text-primary' : index === 3 ? 'text-green-600' : 'text-purple-600'}`} data-testid={`experience-company-${index}`}>
                        {experience.company}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center" data-testid={`experience-location-${index}`}>
                      <MapPin className="h-4 w-4 mr-1" />
                      {experience.location} | {experience.period}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4" data-testid={`experience-description-${index}`}>
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className={`px-2 py-1 rounded text-xs ${
                          index % 2 === 0 
                            ? 'bg-primary/10 text-primary' 
                            : 'bg-accent/10 text-accent'
                        }`}
                        data-testid={`experience-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
