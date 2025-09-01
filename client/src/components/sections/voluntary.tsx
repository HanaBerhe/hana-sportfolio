import { Card } from "@/components/ui/card";
import { Heart, Users, Shield, MessageCircle } from "lucide-react";

export default function Voluntary() {
  const voluntaryWork = [
    {
      title: "Human Rights Trainer & Facilitator",
      description: "Leading training sessions and workshops on human rights awareness, advocacy, and protection in campus and community settings.",
      icon: Shield,
      tags: ["Human Rights", "Training", "Advocacy", "Education"],
      backgroundImage: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      alt: "Human rights advocacy meeting",
    },
    {
      title: "Women's Rights Advocate",
      description: "Promoting gender equality and women's empowerment through educational programs and community engagement initiatives.",
      icon: Users,
      tags: ["Women's Rights", "Gender Equality", "Empowerment", "Community"],
      backgroundImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      alt: "Women empowerment workshop",
    },
    {
      title: "Child Rights Protection Leader",
      description: "Developing and implementing programs focused on child protection, education rights, and welfare in local communities.",
      icon: Heart,
      tags: ["Child Rights", "Protection", "Education", "Welfare"],
      backgroundImage: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      alt: "Educational support for children",
    },
    {
      title: "Disability Rights Facilitator",
      description: "Advocating for accessibility and inclusion while facilitating awareness programs about disability rights and support systems.",
      icon: Users,
      tags: ["Disability Rights", "Accessibility", "Inclusion", "Support"],
      backgroundImage: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      alt: "Inclusive community meeting",
    },
    {
      title: "Sustainable Peace Dialogue Leader & Initiator",
      description: "Initiating and leading peace dialogue sessions on campus, fostering understanding and conflict resolution among diverse communities.",
      icon: MessageCircle,
      tags: ["Peace Building", "Dialogue", "Leadership", "Conflict Resolution"],
      backgroundImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      alt: "Community dialogue session",
    },
  ];

  return (
    <section id="voluntary" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="section-title-voluntary">Voluntary Participation</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="voluntary-description">
            Dedicated to social impact through leadership roles in human rights advocacy, community development, and peace building initiatives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {voluntaryWork.map((work, index) => {
            const IconComponent = work.icon;
            return (
              <Card key={index} className="overflow-hidden shadow-lg border border-border card-hover" data-testid={`voluntary-${index}`}>
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <img 
                    src={work.backgroundImage} 
                    alt={work.alt} 
                    className="w-full h-full object-cover opacity-60" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`voluntary-title-${index}`}>
                    {work.title}
                  </h3>
                  <p className="text-muted-foreground mb-4" data-testid={`voluntary-description-${index}`}>
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className={`px-2 py-1 rounded text-xs ${
                          work.tags.indexOf(tag) % 2 === 0 
                            ? 'bg-primary/10 text-primary' 
                            : 'bg-accent/10 text-accent'
                        }`}
                        data-testid={`voluntary-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {tag}
                      </span>
                    ))}
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