'use client';

import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { Container } from '@/components/ui/container';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Amira Hassan',
    role: 'CS Senior',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 5,
    text: '"CTC Club transformed my coding skills. The structured courses and real projects helped me land my dream internship!"',
    delay: 0,
  },
  {
    id: 2,
    name: 'Daniel Kim',
    role: 'IT Junior',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 5,
    text: '"The community support is incredible. Whenever I\'m stuck, there\'s always someone ready to help. Best learning platform!"',
    delay: 100,
  },
  {
    id: 3,
    name: 'Sofia Rodriguez',
    role: 'IS Graduate',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    rating: 5,
    text: '"Earned 3 certificates and built a portfolio that impressed every interviewer. CTC Club is a game changer!"',
    delay: 200,
  },
];

function TestimonialCard({ testimonial, isVisible }: { testimonial: typeof testimonials[0]; isVisible: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-xl hover:border-purple-200 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s ease-out',
        transitionDelay: `${testimonial.delay}ms`,
      }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 fill-yellow-400 text-yellow-400 transition-transform duration-300 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            style={{ transitionDelay: `${i * 50}ms` }}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 text-base leading-relaxed mb-6 flex-grow">
        {testimonial.text}
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-3">
        <div 
          className={`relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-transparent transition-all duration-300 ${
            isHovered ? 'ring-purple-400 scale-110' : 'ring-transparent scale-100'
          }`}
        >
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-sm">
            {testimonial.name}
          </div>
          <div className="text-gray-600 text-sm">
            {testimonial.role}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
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
    <section ref={sectionRef} className="py-16 bg-white">
      <Container>
        {/* Section Header */}
        <div
          className="text-center mb-12 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
          }}
        >
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full mb-4">
            Student Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What Our Students <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} isVisible={isVisible} />
          ))}
        </div>
      </Container>
    </section>
  );
}
