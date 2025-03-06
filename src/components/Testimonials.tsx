
import React, { useRef, useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  delay?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, company, delay = 0 }) => {
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            testimonialRef.current?.classList.add('is-visible');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={testimonialRef}
      className="fade-in-when-visible glass-card rounded-xl p-6 relative"
    >
      <Quote className="absolute top-4 right-4 h-6 w-6 text-river-300 opacity-50" />
      <p className="text-foreground mb-6">"{quote}"</p>
      <div>
        <div className="font-medium">{author}</div>
        <div className="text-sm text-muted-foreground">
          {role}, {company}
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [active, setActive] = useState(0);
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

  const testimonials = [
    {
      quote: "River API transformed how our business operates. Their integration between our CRM and accounting software eliminated hours of manual data entry and reduced errors significantly.",
      author: "Sarah Johnson",
      role: "Operations Director",
      company: "TechSolutions Inc."
    },
    {
      quote: "The team at River API delivered an integration solution that seemed impossible. They understood our complex requirements and built a seamless connection between our legacy systems and modern SaaS tools.",
      author: "Mark Thompson",
      role: "CTO",
      company: "GrowthWorks"
    },
    {
      quote: "Working with River API was refreshingly straightforward. They clearly communicated throughout the process and delivered a robust integration solution that continues to perform flawlessly.",
      author: "Emily Chen",
      role: "IT Manager",
      company: "InnovateGroup"
    }
  ];

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-river-50 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl -z-10" />
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 ref={titleRef} className="section-title fade-in-when-visible">
            What Our <span className="text-river-600">Clients Say</span>
          </h2>
          <p ref={subtitleRef} className="section-subtitle fade-in-when-visible">
            We've helped businesses across industries streamline their operations through custom integrations.
          </p>
        </div>

        {/* Desktop view */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Mobile view with carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${active * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Testimonial
                      quote={testimonial.quote}
                      author={testimonial.author}
                      role={testimonial.role}
                      company={testimonial.company}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-colors",
                    index === active ? "bg-river-500" : "bg-gray-300"
                  )}
                  onClick={() => setActive(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-white border border-border shadow-sm text-foreground hover:bg-gray-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-white border border-border shadow-sm text-foreground hover:bg-gray-50 transition-colors"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Logos */}
        <div className="mt-16">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by innovative companies
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {[...Array(6)].map((_, index) => (
              <div 
                key={index} 
                className="h-8 bg-gray-200 rounded w-24 fade-in-when-visible"
                style={{ 
                  animationDelay: `${index * 100}ms`, 
                  opacity: 0.7 - (index * 0.05)
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
