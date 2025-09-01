import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Globe, BarChart3, Home, PieChart, Brain } from "lucide-react";
import { Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Banking Analytics Dashboard",
      description: "Interactive dashboard for financial data analysis and reporting using Python, SQL, and Power BI.",
      backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      alt: "Banking dashboard analytics interface",
      icon: TrendingUp,
      tags: ["Python", "Power BI", "SQL"],
    },
    {
      title: "Tourism Information System",
      description: "Web platform for tourism information management built with React, Node.js, and MongoDB.",
      backgroundImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      alt: "Tourism web platform interface",
      icon: Globe,
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Market Analysis Tool",
      description: "Advanced analytics tool for consumer behavior analysis using Python and machine learning.",
      backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      alt: "Market analysis charts and graphs",
      icon: BarChart3,
      tags: ["Python", "Scikit-learn", "Tableau"],
    },
    {
      title: "Real Estate Market Research",
      description: "Comprehensive market analysis and trend prediction for local real estate sector.",
      backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      alt: "Real estate market data visualization",
      icon: Home,
      tags: ["R", "Excel", "Statistics"],
    },
    {
      title: "Data Visualization Portfolio",
      description: "Collection of interactive dashboards and visualizations across various domains.",
      backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      alt: "Interactive data visualization dashboard",
      icon: PieChart,
      tags: ["D3.js", "Tableau", "Power BI"],
    },
    {
      title: "ML Prediction Models",
      description: "Predictive models for business intelligence and decision support systems.",
      backgroundImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      alt: "Machine learning model visualization",
      icon: Brain,
      tags: ["TensorFlow", "Scikit-learn", "Pandas"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="section-title-projects">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="projects-description">
            A showcase of my recent work in data analysis, machine learning, and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="overflow-hidden shadow-lg border border-border card-hover" data-testid={`project-${index}`}>
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <img 
                    src={project.backgroundImage} 
                    alt={project.alt} 
                    className="w-full h-full object-cover opacity-60" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`project-title-${index}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4" data-testid={`project-description-${index}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className={`px-2 py-1 rounded text-xs ${
                          project.tags.indexOf(tag) % 2 === 0 
                            ? 'bg-primary/10 text-primary' 
                            : 'bg-accent/10 text-accent'
                        }`}
                        data-testid={`project-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                      data-testid={`button-view-project-${index}`}
                    >
                      View Project
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="border border-border hover:bg-muted"
                      data-testid={`button-github-${index}`}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
