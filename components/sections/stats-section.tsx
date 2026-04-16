'use client';

import { useEffect, useRef, useState } from 'react';
import { Users, BookOpen, Award, CheckCircle } from 'lucide-react';
import { Container } from '@/components/ui/container';

const stats = [
  {
    id: 1,
    value: 5000,
    suffix: '+',
    label: 'Active Students',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    id: 2,
    value: 120,
    suffix: '+',
    label: 'Video Courses',
    icon: BookOpen,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    id: 3,
    value: 35,
    suffix: '',
    label: 'Expert Instructors',
    icon: Award,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
  },
  {
    id: 4,
    value: 2500,
    suffix: '+',
    label: 'Certificates Issued',
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
];

function CountUp({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div ref={countRef} className="text-4xl font-bold text-gray-900">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className={`${stat.bgColor} ${stat.color} w-14 h-14 rounded-xl flex items-center justify-center mb-3`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Value with CountUp Animation */}
                <CountUp end={stat.value} suffix={stat.suffix} />

                {/* Label */}
                <div className="text-sm text-gray-600 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

