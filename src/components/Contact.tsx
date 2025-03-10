
import React, { useRef, useEffect, useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      },
      { threshold: 0.1 }
    );

    const elements = [titleRef.current, subtitleRef.current, formContainerRef.current];
    
    elements.forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach(element => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 ref={titleRef} className="section-title fade-in-when-visible">
              Ready to <span className="text-river-600">Connect</span> Your Business Systems?
            </h2>
            <p ref={subtitleRef} className="section-subtitle fade-in-when-visible">
              Get in touch with our integration experts to discuss your specific needs and discover how River API can transform your business processes.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-start space-x-4 fade-in-when-visible" style={{ transitionDelay: '100ms' }}>
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-river-50 flex items-center justify-center text-river-600">
                    <Phone className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Call Us</h3>
                  <p className="text-muted-foreground mt-1">(+44) 1234 567890</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 fade-in-when-visible" style={{ transitionDelay: '200ms' }}>
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-river-50 flex items-center justify-center text-river-600">
                    <Mail className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Email Us</h3>
                  <p className="text-muted-foreground mt-1">contact@riverapi.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 fade-in-when-visible" style={{ transitionDelay: '300ms' }}>
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-river-50 flex items-center justify-center text-river-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Visit Us</h3>
                  <p className="text-muted-foreground mt-1">123 Tech Hub Street, London, UK</p>
                </div>
              </div>
            </div>
          </div>
          
          <div ref={formContainerRef} className="fade-in-when-visible">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-soft border border-border">
              <h3 className="text-xl font-medium mb-6">Send us a message</h3>
              
              {submitted ? (
                <div className="rounded-lg bg-green-50 p-4 text-green-800 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">
                        Thank you! Your message has been sent successfully.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-1 focus:ring-river-400 focus:border-river-400 outline-none transition-all"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-1 focus:ring-river-400 focus:border-river-400 outline-none transition-all"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-1 focus:ring-river-400 focus:border-river-400 outline-none transition-all resize-none"
                        placeholder="Tell us about your integration needs..."
                        required
                      />
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={loading}
                        className={cn(
                          "w-full btn-primary flex items-center justify-center",
                          loading && "opacity-80 cursor-not-allowed"
                        )}
                      >
                        {loading ? (
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
