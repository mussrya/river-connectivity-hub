
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedIconProps {
  icon: React.ReactNode;
  className?: string;
  delay?: number;
  appearOnScroll?: boolean;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ 
  icon, 
  className, 
  delay = 0,
  appearOnScroll = true
}) => {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!appearOnScroll) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            iconRef.current?.classList.add('is-visible');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (iconRef.current) {
      observer.observe(iconRef.current);
    }

    return () => {
      if (iconRef.current) {
        observer.unobserve(iconRef.current);
      }
    };
  }, [delay, appearOnScroll]);

  return (
    <div 
      ref={iconRef}
      className={cn(
        'relative flex items-center justify-center w-12 h-12 rounded-full bg-river-50 text-river-600',
        'shadow-soft transition-all duration-500 ease-out',
        appearOnScroll ? 'fade-in-when-visible' : '',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {icon}
    </div>
  );
};

export default AnimatedIcon;
