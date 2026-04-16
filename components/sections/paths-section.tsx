'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Code, Server } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

const paths = [
  {
    id: 1,
    title: 'Become a Frontend Developer',
    gradient: 'from-blue-600 via-indigo-600 to-purple-600',
    hoverGradient: 'hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700',
    icon: Code,
    steps: [
      'HTML & CSS',
      'JavaScript ES6+',
      'React & Next.js',
      'UI/UX Design',
      'Portfolio Projects',
    ],
  },
  {
    id: 2,
    title: 'Become a Backend Developer',
    gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    hoverGradient: 'hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700',
    icon: Server,
    steps: [
      'Python Fundamentals',
      'Databases & SQL',
      'REST APIs',
      'Node.js & Express',
      'DevOps & Deployment',
    ],
  },
];

function PathCard({ path, index }: { path: typeof paths[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
  }, []);

  const Icon = path.icon;

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${path.gradient} ${path.hoverGradient} p-6 md:p-7 text-white shadow-lg hover:shadow-2xl cursor-pointer ${
        isHovered ? 'scale-[1.02]' : 'scale-100'
      }`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.9s ease-out',
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
      </div>

      {/* Glow Effect on Hover */}
      <div className={`absolute inset-0 bg-white transition-opacity duration-500 ${isHovered ? 'opacity-5' : 'opacity-0'}`} />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon & Title */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold">{path.title}</h3>
        </div>

        {/* Steps - More Compact */}
        <div className="space-y-2.5 mb-6">
          {path.steps.map((step, stepIndex) => (
            <div
              key={stepIndex}
              className="flex items-center gap-3 transition-all duration-500"
              style={{
                transitionDelay: isVisible ? `${(index * 100) + (stepIndex * 80) + 150}ms` : '0ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              }}
            >
              {/* Step Number - Smaller */}
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-xs">
                {stepIndex + 1}
              </div>
              {/* Step Text - Smaller */}
              <div className="text-sm md:text-base font-medium">{step}</div>
            </div>
          ))}
        </div>

        {/* CTA Button - More Compact */}
        <Button
          className="w-full bg-white text-gray-900 hover:bg-gray-50 font-semibold py-5 rounded-xl shadow-md transition-all duration-300 group-hover:shadow-lg"
        >
          <span>Start Path</span>
          <ArrowRight className={`ml-2 w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : 'translate-x-0'}`} />
        </Button>
      </div>
    </div>
  );
}

export function PathsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
    <section ref={sectionRef} className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        {/* Section Header - More Compact */}
        <div
          className="text-center mb-10 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
          }}
        >
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-3">
            Learning Paths
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Choose Your Path
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Follow a structured roadmap designed to take you from beginner to professional developer.
          </p>
        </div>

        {/* Paths Grid - Reduced Gap */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {paths.map((path, index) => (
            <PathCard key={path.id} path={path} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
