import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";

interface SectionSeparatorProps {
  variant?: 'line' | 'particles' | 'gradient' | 'dots';
  className?: string;
}

export default function SectionSeparator({ 
  variant = 'line', 
  className = '' 
}: SectionSeparatorProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.5 });
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    if (variant === 'particles' && isVisible) {
      const newParticles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 3,
      }));
      setParticles(newParticles);
    }
  }, [variant, isVisible]);

  const renderSeparator = () => {
    switch (variant) {
      case 'particles':
        return (
          <div className="relative h-32 flex items-center justify-center bg-gradient-to-r from-transparent via-accent/5 to-transparent">
            <div className="floating-particles">
              {particles.map((particle) => (
                <div
                  key={particle.id}
                  className="particle"
                  style={{
                    left: `${particle.left}%`,
                    animationDelay: `${particle.delay}s`,
                    opacity: isVisible ? 1 : 0,
                  }}
                />
              ))}
            </div>
            <div className={`w-96 h-2 bg-gradient-to-r from-transparent via-accent via-primary to-transparent transition-all duration-3000 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            } transform origin-left shadow-lg shadow-accent/50`} />
          </div>
        );

      case 'gradient':
        return (
          <div className="relative h-32 flex items-center justify-center bg-gradient-to-r from-transparent via-primary/5 to-transparent">
            <div className={`w-[32rem] h-2 bg-gradient-to-r from-transparent via-primary via-accent to-transparent transition-all duration-3000 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            } transform origin-left shadow-lg shadow-primary/50`} />
            <div className={`absolute w-6 h-6 rounded-full bg-accent transition-all duration-3000 delay-500 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            } shadow-lg shadow-accent/50`} />
          </div>
        );

      case 'dots':
        return (
          <div className="relative h-32 flex items-center justify-center space-x-4 bg-gradient-to-r from-transparent via-accent/5 to-transparent">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`w-5 h-5 rounded-full bg-accent transition-all duration-1000 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                } shadow-lg shadow-accent/50`}
                style={{ transitionDelay: `${index * 300}ms` }}
              />
            ))}
            <div className={`w-48 h-2 bg-gradient-to-r from-accent to-primary ml-8 transition-all duration-3000 delay-900 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            } transform origin-left shadow-lg shadow-primary/50`} />
            {[0, 1, 2].map((index) => (
              <div
                key={index + 3}
                className={`w-5 h-5 rounded-full bg-primary transition-all duration-1000 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                } shadow-lg shadow-primary/50`}
                style={{ transitionDelay: `${(index + 6) * 300}ms` }}
              />
            ))}
          </div>
        );

      default: // line
        return (
          <div className="section-separator">
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-2 bg-gradient-to-r from-transparent via-accent via-primary to-transparent transition-all duration-3000 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            } transform origin-left shadow-lg shadow-accent/50`} />
          </div>
        );
    }
  };

  return (
    <section 
      ref={ref}
      className={`py-8 flex items-center justify-center ${className}`}
    >
      {renderSeparator()}
    </section>
  );
}