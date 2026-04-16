'use client';

import { BookOpen, TrendingUp, Award, FolderKanban, Headphones, Shield } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    id: 1,
    title: 'Structured Courses',
    description: 'Follow curated learning paths with video lessons, quizzes, and hands-on labs.',
    icon: BookOpen,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    id: 2,
    title: 'Track Progress',
    description: 'XP system, daily streaks, and detailed analytics to keep you motivated.',
    icon: TrendingUp,
    color: 'text-teal-600',
    bgColor: 'bg-teal-100',
  },
  {
    id: 3,
    title: 'Earn Certificates',
    description: 'Get verified certificates upon completion to showcase your skills.',
    icon: Award,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
  {
    id: 4,
    title: 'Submit Projects',
    description: 'Build real-world projects and get feedback from instructors and peers.',
    icon: FolderKanban,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    id: 5,
    title: 'Get Support',
    description: '24/7 community support, live Q&A sessions, and dedicated mentorship.',
    icon: Headphones,
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
  },
  {
    id: 6,
    title: 'Role-Based Access',
    description: 'Customized learning experience based on your role and skill level.',
    icon: Shield,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
  },
];

export function FeaturesSection() {
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
    <section ref={sectionRef} id="features" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <Container>
        {/* Section Header */}
        <div
          className="text-center mb-12 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
          }}
        >
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            Platform Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Succeed</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A complete learning ecosystem designed specifically for university students and tech enthusiasts.
          </p>
        </div>

        {/* Features Grid - More Compact */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="flex gap-4 p-6 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s ease-out',
                  transitionDelay: `${index * 120}ms`,
                }}
              >
                {/* Icon */}
                <div className={`${feature.bgColor} ${feature.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
