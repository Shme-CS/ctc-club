'use client';

import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const courses = [
  {
    id: 1,
    title: 'Complete Web Development...',
    instructor: 'Dr. Sarah Chen',
    category: 'Web Dev',
    rating: 4.9,
    reviews: '24k',
    image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?w=600&h=340&fit=crop',
  },
  {
    id: 2,
    title: 'Graphic Design Fundamentals',
    instructor: 'Prof. Alex Rivera',
    category: 'Design',
    rating: 4.8,
    reviews: '18k',
    image: 'https://images.unsplash.com/photo-1512645592367-97ba8a9d4035?w=600&h=340&fit=crop',
  },
  {
    id: 3,
    title: 'Data Science & Machine Learning',
    instructor: 'Dr. James Park',
    category: 'Data Science',
    rating: 4.9,
    reviews: '31k',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop',
  },
  {
    id: 4,
    title: 'Mobile App Development with...',
    instructor: 'Eng. Maria Lopez',
    category: 'Mobile',
    rating: 4.7,
    reviews: '15k',
    image: 'https://images.unsplash.com/photo-1760531932521-8eb5a064dbca?w=600&h=340&fit=crop',
  },
];

export function CoursesSection() {
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
    <section ref={sectionRef} id="courses" className="py-16 bg-white">
      <Container>
        {/* Section Header */}
        <div
          className="flex items-start justify-between mb-8 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
          }}
        >
          <div>
            <span className="text-sm text-blue-600 font-medium mb-2 block">
              Top Courses
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Featured Courses
            </h2>
            <p className="text-gray-600">
              Handpicked courses to accelerate your learning journey.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors">
            View All
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease-out',
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Course Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4">
                  <Badge variant="default" className="bg-white/95 text-gray-900 backdrop-blur text-xs font-medium">
                    {course.category}
                  </Badge>
                </div>
              </div>

              {/* Course Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-1">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{course.instructor}</p>

                {/* Rating & CTA */}
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-900">{course.rating}</span>
                    <span className="text-sm text-gray-500">({course.reviews})</span>
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                  >
                    Enroll
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <button className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors">
            View All
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
}
