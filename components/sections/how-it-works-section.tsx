'use client';

import { useEffect, useRef, useState } from 'react';
import { Rocket, BookOpen, Code, FolderGit2, Award } from 'lucide-react';
import { Container } from '@/components/ui/container';

const steps = [
  {
    id: 1,
    number: 'STEP 1',
    title: 'Sign Up',
    description: 'Create your free account in seconds',
    icon: Rocket,
    delay: 0,
  },
  {
    id: 2,
    number: 'STEP 2',
    title: 'Enroll',
    description: 'Browse and join courses that interest you',
    icon: BookOpen,
    delay: 100,
  },
  {
    id: 3,
    number: 'STEP 3',
    title: 'Learn & Practice',
    description: 'Watch lessons, take quizzes, build projects',
    icon: Code,
    delay: 200,
  },
  {
    id: 4,
    number: 'STEP 4',
    title: 'Complete Projects',
    description: 'Submit real projects via GitHub',
    icon: FolderGit2,
    delay: 300,
  },
  {
    id: 5,
    number: 'STEP 5',
    title: 'Get Certified',
    description: 'Earn certificates and level up',
    icon: Award,
    delay: 400,
  },
];

function StepCard({ step, index, isVisible }: { step: typeof steps[0]; index: number; isVisible: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = step.icon;

  return (
    <div className="relative flex flex-col items-center">
      {/* Connecting Line - Hidden on last item */}
      {index < steps.length - 1 && (
        <div
          className="absolute left-1/2 top-8 hidden md:block h-0.5 bg-gray-200"
          style={{
            width: 'calc(100% - 2rem)',
            transform: 'translateX(1rem)',
            opacity: isVisible ? 1 : 0,
            transition: `opacity 0.8s ease ${step.delay + 500}ms`,
          }}
        />
      )}

      {/* Step Card */}
      <div
        className="flex flex-col items-center text-center relative z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.9s ease-out',
          transitionDelay: `${step.delay}ms`,
        }}
      >
        {/* Icon Circle */}
        <div
          className={`bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-md transition-all duration-300 ${
            isHovered ? 'scale-110 shadow-lg' : 'scale-100'
          }`}
        >
          <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
        </div>

        {/* Step Number */}
        <div className="text-xs font-bold text-purple-600 mb-2 tracking-wider">
          {step.number}
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-gray-900 mb-2">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed max-w-[160px]">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false);
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
          className="text-center mb-14 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
          }}
        >
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Your Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Journey</span>
          </h2>
          <p className="text-gray-600 text-base">
            From sign up to certification in 5 simple steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-6 relative max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} isVisible={isVisible} />
          ))}
        </div>
      </Container>
    </section>
  );
}
