
import React, { useState, useEffect } from 'react';
import { ArrowRight, Link, Database, Server } from 'lucide-react';
import AnimatedIcon from './AnimatedIcon';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate a staggered animation on component mount
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-river-50 to-background -z-10" />
      
      {/* Animated background shapes */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-river-100/50 blur-3xl animate-float -z-10" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-river-100/30 blur-3xl animate-float animation-delay-1000 -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text content */}
          <div className="lg:col-span-7 space-y-6 max-w-3xl">
            <div className={`inline-flex items-center rounded-full px-3 py-1 bg-river-100 text-river-600 text-sm font-medium transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0 transform translate-y-4'}`}>
              <span className="mr-1">Seamless SaaS Integrations</span>
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight md:leading-tight lg:leading-tight transition-all duration-700 delay-100 ${loaded ? 'opacity-100' : 'opacity-0 transform translate-y-4'}`}>
              Connect Your <span className="text-river-600">Business Tools</span> Without Limitations
            </h1>
            
            <p className={`text-lg md:text-xl text-muted-foreground transition-all duration-700 delay-200 ${loaded ? 'opacity-100' : 'opacity-0 transform translate-y-4'}`}>
              River API specializes in building custom integrations between your critical SaaS applications, creating seamless data flows that power your business processes.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-700 delay-300 ${loaded ? 'opacity-100' : 'opacity-0 transform translate-y-4'}`}>
              <a href="#contact" className="btn-primary inline-flex items-center justify-center">
                Discuss Your Integration
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#services" className="btn-secondary inline-flex items-center justify-center">
                Explore Services
              </a>
            </div>
            
            {/* Features list */}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 transition-all duration-700 delay-400 ${loaded ? 'opacity-100' : 'opacity-0 transform translate-y-4'}`}>
              {[
                'Custom API Development',
                'Bi-directional Data Sync',
                'Real-time Data Flows',
                'Secure & Compliant Solutions'
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="rounded-full bg-river-100 p-1 mr-3">
                    <svg className="h-3 w-3 text-river-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual representation */}
          <div className="lg:col-span-5 relative">
            <div className={`relative bg-white rounded-2xl shadow-soft p-6 transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0 transform translate-y-12'}`}>
              <div className="relative z-10 flex justify-center">
                {/* Connection diagram */}
                <div className="flex flex-col items-center">
                  <AnimatedIcon 
                    icon={<Database className="h-6 w-6" />}
                    className="mb-4 animate-pulse-soft"
                    appearOnScroll={false}
                  />
                  
                  <div className="h-16 w-0.5 bg-gradient-to-b from-river-400 to-river-200" />
                  
                  <div className="relative my-4 flex items-center justify-center w-20 h-20 rounded-full bg-river-500 text-white shadow-md">
                    <Link className="h-10 w-10" />
                    <div className="absolute inset-0 rounded-full border-2 border-river-200 animate-pulse-soft" />
                  </div>
                  
                  <div className="h-16 w-0.5 bg-gradient-to-b from-river-200 to-river-400" />
                  
                  <AnimatedIcon 
                    icon={<Server className="h-6 w-6" />}
                    className="mt-4 animate-pulse-soft"
                    appearOnScroll={false}
                  />
                </div>
              </div>
              
              {/* Left platform */}
              <div className={`absolute top-[30%] left-0 transform -translate-x-1/2 glass-card rounded-lg p-4 text-center transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                <div className="font-medium mb-1">Platform A</div>
                <div className="text-xs text-muted-foreground">e.g., Hubspot CRM</div>
              </div>
              
              {/* Right platform */}
              <div className={`absolute top-[70%] right-0 transform translate-x-1/2 glass-card rounded-lg p-4 text-center transition-all duration-700 delay-700 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                <div className="font-medium mb-1">Platform B</div>
                <div className="text-xs text-muted-foreground">e.g., Iplicit</div>
              </div>
              
              {/* Data flow */}
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 glass-card px-3 py-1 rounded-full text-xs font-medium text-river-700 transition-all duration-700 delay-900 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
                Data Flow
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
