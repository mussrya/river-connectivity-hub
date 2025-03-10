
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-3',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className="text-2xl font-semibold text-primary flex items-center space-x-2"
          >
            <span className="font-semibold italic">//RIVER API</span>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#process" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden fixed inset-x-0 transition-all duration-300 ease-in-out bg-white shadow-md",
        isMobileMenuOpen 
          ? "translate-y-0 opacity-100 h-auto py-4" 
          : "translate-y-[-100%] opacity-0 h-0 py-0"
      )}>
        <div className="container mx-auto px-4 sm:px-6 space-y-4 flex flex-col">
          <a 
            href="#services" 
            className="text-base font-medium text-foreground py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#process" 
            className="text-base font-medium text-foreground py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#testimonials" 
            className="text-base font-medium text-foreground py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="bg-primary hover:bg-primary/90 text-white py-3 px-5 rounded-lg text-center font-medium transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
