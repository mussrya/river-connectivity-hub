
import React, { useRef, useEffect } from 'react';
import { BrainCircuit, Fingerprint, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            cardRef.current?.classList.add('is-visible');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef} 
      className="fade-in-when-visible p-6 border border-border rounded-xl bg-white shadow-soft hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-start">
        <div className="mr-4 flex-shrink-0 p-3 bg-river-50 rounded-lg text-river-600">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    if (subtitleRef.current) {
      observer.observe(subtitleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      
      if (subtitleRef.current) {
        observer.unobserve(subtitleRef.current);
      }
    };
  }, []);

  const features = [
    {
      title: "Expertise",
      description: "Our team consists of experienced professionals who specialize in software integration across various industries.",
      icon: <BrainCircuit className="h-6 w-6" />
    },
    {
      title: "Customization",
      description: "We understand that every business is unique, and we tailor our solutions to meet your specific needs.",
      icon: <Fingerprint className="h-6 w-6" />
    },
    {
      title: "Customer-Centric Approach",
      description: "We prioritize your satisfaction and work closely with you throughout the integration process to ensure your goals are met.",
      icon: <Users className="h-6 w-6" />
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 relative">
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-river-50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl -z-10" />
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 ref={titleRef} className="section-title fade-in-when-visible">
            Why <span className="text-river-600">Choose Us</span>?
          </h2>
          <p ref={subtitleRef} className="section-subtitle fade-in-when-visible">
            Partner with us for seamless integrations that transform how your business operates.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
