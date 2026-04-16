'use client';

import { useEffect, useRef, useState } from 'react';
import { Headphones, MessageCircle, BookOpen } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

const supportOptions = [
  {
    id: 1,
    icon: Headphones,
    title: 'Submit a Ticket',
    description: 'Create a support ticket and get a response within 24 hours.',
    buttonText: 'Get Help',
    iconColor: 'bg-pink-600',
    delay: 0,
  },
  {
    id: 2,
    icon: MessageCircle,
    title: 'Community Forum',
    description: 'Ask questions and get answers from the community.',
    buttonText: 'Visit Forum',
    iconColor: 'bg-purple-600',
    delay: 150,
  },
  {
    id: 3,
    icon: BookOpen,
    title: 'Knowledge Base',
    description: 'Browse FAQs, tutorials, and troubleshooting guides.',
    buttonText: 'Browse Docs',
    iconColor: 'bg-blue-600',
    delay: 300,
  },
];

export function SupportSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-white to-gray-50">
      <Container>
        {/* Section Header */}
        <div
          className="text-center mb-12 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
          }}
        >
          <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-700 text-sm font-semibold rounded-full mb-4">
            Support
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            We're Here to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Help</span>
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Get help instantly with our multi-channel support system.
          </p>
        </div>

        {/* Support Options Grid - Centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-4xl w-full">
            {supportOptions.map((option) => {
              const Icon = option.icon;
              const isHovered = hoveredId === option.id;
              
              return (
                <div
                  key={option.id}
                  className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-xl hover:border-purple-200 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                  onMouseEnter={() => setHoveredId(option.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.9s ease-out',
                    transitionDelay: `${option.delay}ms`,
                  }}
                >
                  {/* Icon - Circular with hover effect */}
                  <div 
                    className={`${option.iconColor} w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all duration-500 ${
                      isHovered ? 'scale-110 shadow-lg' : 'scale-100'
                    }`}
                  >
                    <Icon 
                      className="w-7 h-7 text-white transition-transform duration-500" 
                      strokeWidth={2.5}
                      style={{
                        transform: isHovered ? 'rotate(5deg)' : 'rotate(0deg)',
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg font-bold mb-3 transition-colors duration-300 ${
                    isHovered ? 'text-purple-600' : 'text-gray-900'
                  }`}>
                    {option.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    {option.description}
                  </p>

                  {/* Button with hover effect */}
                  <Button
                    variant="outline"
                    className={`w-full border text-gray-900 font-semibold transition-all duration-300 rounded-lg ${
                      isHovered 
                        ? 'bg-purple-50 border-purple-300 scale-105' 
                        : 'bg-white border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {option.buttonText}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
