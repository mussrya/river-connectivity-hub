
import React, { useRef, useEffect } from 'react';
import { ArrowRightLeft, Link, Database, Server, Code, Cloud, MessageSquare, PuzzleIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            cardRef.current?.classList.add('is-visible');
          }, index * 150);
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
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="fade-in-when-visible group relative rounded-xl overflow-hidden bg-white border border-border p-6 shadow-soft hover:shadow-md transition-all duration-300"
    >
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-river-50 text-river-600 group-hover:bg-river-100 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-river-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

const Services = () => {
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

  const services = [
    {
      title: "Custom API Integration",
      description: "Build tailored connections between any SaaS applications with our custom API development services.",
      icon: <Link className="h-6 w-6" />
    },
    {
      title: "Data Synchronization",
      description: "Keep your systems in perfect harmony with automated bi-directional data synchronization.",
      icon: <ArrowRightLeft className="h-6 w-6" />
    },
    {
      title: "Workflow Automation",
      description: "Transform manual processes into efficient, automated workflows across your software ecosystem.",
      icon: <PuzzleIcon className="h-6 w-6" />
    },
    {
      title: "Legacy System Integration",
      description: "Connect modern SaaS platforms with your legacy systems to extend their utility and lifespan.",
      icon: <Server className="h-6 w-6" />
    },
    {
      title: "Database Connectivity",
      description: "Create seamless connections between databases and cloud applications for unified data access.",
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "API Development",
      description: "Design and build custom APIs that enable powerful integrations between your critical business tools.",
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Cloud Integration",
      description: "Seamlessly connect your cloud services and ensure smooth data flows between platforms.",
      icon: <Cloud className="h-6 w-6" />
    },
    {
      title: "Integration Consulting",
      description: "Get expert advice on the best integration approaches for your unique business requirements.",
      icon: <MessageSquare className="h-6 w-6" />
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-river-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl -z-10" />
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 ref={titleRef} className="section-title fade-in-when-visible">
            Seamless Integrations for<br />
            <span className="text-river-600">Complex Business Ecosystems</span>
          </h2>
          <p ref={subtitleRef} className="section-subtitle fade-in-when-visible">
            We specialize in connecting the dots between your essential business applications, 
            creating powerful data flows that eliminate silos and boost efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
