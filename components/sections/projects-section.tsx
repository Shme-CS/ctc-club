'use client';

import { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'React, Node.js, MongoDB',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    delay: 0,
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description: 'Python, TensorFlow, Flask',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    delay: 150,
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'HTML, CSS, JavaScript',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop',
    delay: 300,
  },
];

function ProjectCard({ project, isVisible }: { project: typeof projects[0]; isVisible: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
        transition: 'all 0.9s ease-out',
        transitionDelay: `${project.delay}ms`,
      }}
    >
      {/* Project Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-500 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />
      </div>

      {/* Project Info */}
      <div className="p-4 bg-white">
        <h3 className="text-base font-bold text-gray-900 mb-1">
          {project.title}
        </h3>
        <p className="text-xs text-gray-600 mb-3">
          {project.description}
        </p>

        {/* Buttons - Curved with Better UX */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-50 hover:border-gray-400 hover:scale-105 transition-all duration-300 font-semibold rounded-full py-4 text-xs"
          >
            <Github className="w-3.5 h-3.5 mr-1.5" />
            GitHub
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white hover:scale-105 transition-all duration-300 font-semibold shadow-md hover:shadow-lg rounded-full py-4 text-xs"
          >
            <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
            Demo
          </Button>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
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
    <section ref={sectionRef} className="py-10 bg-white">
      <Container>
        {/* Section Header */}
        <div
          className="text-center mb-8 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Build Real Projects, <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              Not Just Theory
            </span>
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Our students build production-ready projects that impress employers.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} isVisible={isVisible} />
          ))}
        </div>
      </Container>
    </section>
  );
}

