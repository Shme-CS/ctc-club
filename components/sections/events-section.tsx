'use client';

import { useEffect, useRef, useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

const events = [
  {
    id: 1,
    type: 'Workshop',
    title: 'Web Development Workshop',
    description: 'Build a full-stack app from scratch',
    date: 'Apr 15, 2026',
    time: '2:00 PM',
    badgeColor: 'bg-purple-100 text-purple-700',
    delay: 0,
  },
  {
    id: 2,
    type: 'Study Group',
    title: 'AI/ML Study Group Kickoff',
    description: 'Weekly sessions on machine learning fundamentals',
    date: 'Apr 20, 2026',
    time: '10:00 AM',
    badgeColor: 'bg-blue-100 text-blue-700',
    delay: 150,
  },
  {
    id: 3,
    type: 'Hackathon',
    title: 'Spring Hackathon 2026',
    description: '48-hour hackathon with prizes and mentors',
    date: 'May 1-3, 2026',
    time: 'All Day',
    badgeColor: 'bg-pink-100 text-pink-700',
    delay: 300,
  },
];

export function EventsSection() {
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
          <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full mb-4">
            Events
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Upcoming Events & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Workshops</span>
          </h2>
        </div>

        {/* Events Grid - Centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl w-full">
            {events.map((event) => {
              const isHovered = hoveredId === event.id;
              
              return (
                <div
                  key={event.id}
                  className="flex flex-col p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-xl hover:border-purple-200 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                  onMouseEnter={() => setHoveredId(event.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.9s ease-out',
                    transitionDelay: `${event.delay}ms`,
                  }}
                >
                  {/* Badge */}
                  <span className={`inline-block px-3 py-1 ${event.badgeColor} text-xs font-semibold rounded-full mb-4 self-start`}>
                    {event.type}
                  </span>

                  {/* Title */}
                  <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                    isHovered ? 'text-purple-600' : 'text-gray-900'
                  }`}>
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-grow">
                    {event.description}
                  </p>

                  {/* Date & Time */}
                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  {/* Register Button */}
                  <Button
                    className={`w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-full transition-all duration-300 ${
                      isHovered ? 'scale-105 shadow-lg' : 'scale-100'
                    }`}
                  >
                    Register
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
