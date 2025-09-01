import { Card } from "@/components/ui/card";
import { TrendingUp, Code, BarChart3, Users } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Data Analysis & ML",
      icon: TrendingUp,
      backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      alt: "Data visualization dashboard",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "R", level: 80 },
      ],
      tags: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow"],
    },
    {
      title: "Software Development",
      icon: Code,
      backgroundImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      alt: "Code editor on multiple screens",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Node.js", level: 75 },
      ],
      tags: ["HTML5", "CSS3", "Express.js", "REST APIs"],
    },
    {
      title: "Data Visualization",
      icon: BarChart3,
      backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      alt: "Data analytics workspace with charts",
      skills: [
        { name: "Power BI", level: 85 },
        { name: "Tableau", level: 80 },
        { name: "Excel", level: 90 },
      ],
      tags: ["Statistical Analysis", "Predictive Modeling"],
    },
    {
      title: "Virtual Assistant & Admin",
      icon: Users,
      backgroundImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      alt: "Professional workspace with office tools",
      skills: [
        { name: "Data Entry", level: 95 },
        { name: "Admin Support", level: 90 },
        { name: "Client Communication", level: 85 },
      ],
      tags: ["Project Management", "Research", "Documentation"],
    },
  ];

  const languages = [
    { name: "English", level: "Native" },
    { name: "Amharic", level: "Fluent" },
    { name: "Afan Oromo", level: "Fluent" },
    { name: "Af-Somali", level: "Fluent" },
    { name: "Tigrigna", level: "Intermediate" },
    { name: "Arabic", level: "Intermediate" },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="section-title-skills">Technical Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="skills-description">
            Proficient in modern data analysis and software development technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.title} className="p-6 shadow-lg card-hover border border-border" data-testid={`skill-card-${index}`}>
                <div className="w-full h-32 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={category.backgroundImage} 
                    alt={category.alt} 
                    className="w-full h-full object-cover opacity-30" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4" data-testid={`skill-title-${index}`}>{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm" data-testid={`skill-name-${skill.name.toLowerCase()}`}>{skill.name}</span>
                        <span className="text-sm text-muted-foreground" data-testid={`skill-level-${skill.name.toLowerCase()}`}>{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                          data-testid={`skill-progress-${skill.name.toLowerCase()}`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                      data-testid={`skill-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Languages Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8" data-testid="languages-title">Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {languages.map((language) => (
              <Card key={language.name} className="p-4 text-center border border-border" data-testid={`language-${language.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="text-lg font-semibold" data-testid={`language-name-${language.name.toLowerCase().replace(/\s+/g, '-')}`}>{language.name}</div>
                <div className="text-sm text-muted-foreground" data-testid={`language-level-${language.name.toLowerCase().replace(/\s+/g, '-')}`}>{language.level}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
