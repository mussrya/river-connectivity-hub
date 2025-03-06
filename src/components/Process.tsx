
import React, { useRef, useEffect } from 'react';
import { ClipboardList, MessageCircle, Code, Database, ArrowRight, CheckCircle } from 'lucide-react';
import AnimatedIcon from './AnimatedIcon';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, icon, isLast = false }) => {
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          stepRef.current?.classList.add('is-visible');
        }
      },
      { threshold: 0.1 }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, []);

  return (
    <div ref={stepRef} className="fade-in-when-visible relative pl-16 pb-10">
      {!isLast && <div className="connect-line" />}
      
      <AnimatedIcon 
        icon={icon}
        className="absolute left-0 top-0 z-10"
        delay={number * 150}
        appearOnScroll={false}
      />
      
      <div className="ml-4">
        <span className="inline-block px-2.5 py-0.5 bg-river-50 text-river-600 rounded-full text-xs font-medium mb-2">
          Step {number}
        </span>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const Process = () => {
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

  const steps = [
    {
      number: 1,
      title: "Assessment & Requirements",
      description: "We collaborate closely with your team to understand your integration needs, current systems, and desired outcomes.",
      icon: <ClipboardList className="h-6 w-6" />
    },
    {
      number: 2,
      title: "Strategy & Design",
      description: "Our experts develop a strategic integration plan and technical design that aligns with your business objectives.",
      icon: <MessageCircle className="h-6 w-6" />
    },
    {
      number: 3,
      title: "Development & Testing",
      description: "We build your custom integrations with meticulous attention to detail and rigorous testing throughout.",
      icon: <Code className="h-6 w-6" />
    },
    {
      number: 4,
      title: "Deployment & Validation",
      description: "Once thoroughly tested, we deploy your integration solutions and validate they're working as expected.",
      icon: <Database className="h-6 w-6" />
    },
    {
      number: 5,
      title: "Ongoing Support",
      description: "We provide continued support and maintenance to ensure your integrations evolve with your business needs.",
      icon: <CheckCircle className="h-6 w-6" />
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 ref={titleRef} className="section-title fade-in-when-visible">
              Our Integration<br />
              <span className="text-river-600">Process</span>
            </h2>
            <p ref={subtitleRef} className="section-subtitle fade-in-when-visible">
              We follow a structured approach to deliver reliable, high-performance integrations that meet your specific business requirements.
            </p>
            
            <div className="mt-8 p-5 rounded-xl bg-white shadow-soft border border-border fade-in-when-visible">
              <h3 className="text-lg font-medium mb-3 flex items-center">
                <ArrowRight className="mr-2 h-5 w-5 text-river-500" />
                Ready to get started?
              </h3>
              <p className="text-muted-foreground mb-4">
                Book a free consultation to discuss your integration needs and how we can help.
              </p>
              <a 
                href="#contact" 
                className="btn-primary inline-flex items-center justify-center w-full"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="space-y-0">
              {steps.map((step, index) => (
                <ProcessStep
                  key={index}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
