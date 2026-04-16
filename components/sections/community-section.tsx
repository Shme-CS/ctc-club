'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageSquare, Users, Code, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const features = [
  {
    id: 1,
    icon: MessageSquare,
    text: 'Discussion Forums & Q&A',
    delay: 0,
  },
  {
    id: 2,
    icon: Users,
    text: 'Study Groups & Peer Support',
    delay: 100,
  },
  {
    id: 3,
    icon: Code,
    text: 'Mentorship & Code Reviews',
    delay: 200,
  },
];

export function CommunitySection() {
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
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:2rem_2rem]" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'all 0.9s ease-out',
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join a Thriving<br />Tech Community
            </h2>
            <p className="text-purple-100 text-base mb-8 leading-relaxed">
              Connect with fellow learners, join study groups, participate in discussions, and grow together.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.id}
                    className="flex items-center gap-3 text-white"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                      transition: 'all 0.8s ease-out',
                      transitionDelay: `${feature.delay + 200}ms`,
                    }}
                  >
                    <div className="w-6 h-6 flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-base font-medium">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.9s ease-out',
                transitionDelay: '500ms',
              }}
            >
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-gray-50 font-bold rounded-full px-8 py-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Join the Community
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
              transition: 'all 0.9s ease-out',
              transitionDelay: '200ms',
            }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Community collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
