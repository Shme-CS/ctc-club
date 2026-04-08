import { Star, Quote } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Computer Science Student',
    university: 'MIT',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    content: 'CTC Club transformed my learning journey. The structured courses and hands-on projects helped me land my dream internship at Google.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Alex Rivera',
    role: 'Full Stack Developer',
    university: 'Stanford',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    content: 'The project-based learning approach is incredible. I built a real portfolio while learning, which made job hunting so much easier.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Maria Lopez',
    role: 'Data Science Student',
    university: 'Berkeley',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    content: 'The community support is amazing. Whenever I got stuck, there was always someone ready to help. Best learning platform ever!',
    rating: 5,
  },
  {
    id: 4,
    name: 'James Park',
    role: 'Mobile Developer',
    university: 'Carnegie Mellon',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    content: 'The certificates are recognized by employers. I got multiple interview calls after adding them to my LinkedIn profile.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Emily Watson',
    role: 'UI/UX Designer',
    university: 'Harvard',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
    content: 'The design courses are top-notch. I learned industry-standard tools and techniques that I use in my freelance work now.',
    rating: 5,
  },
  {
    id: 6,
    name: 'David Kim',
    role: 'Backend Engineer',
    university: 'Georgia Tech',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    content: 'The XP system and daily streaks kept me motivated. I completed 5 courses in 3 months and got promoted at my internship!',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <SectionTitle
          badge="Student Success"
          title="Loved by 5,000+ Students"
          description="See what our students have to say about their learning experience."
          align="center"
        />

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative flex flex-col rounded-2xl bg-gray-50 p-8 transition-all hover:shadow-lg"
            >
              {/* Quote Icon */}
              <Quote className="absolute right-8 top-8 h-8 w-8 text-blue-200" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Avatar
                  src={testimonial.image}
                  alt={testimonial.name}
                  fallback={testimonial.name.split(' ').map(n => n[0]).join('')}
                  size="lg"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <Badge variant="secondary" size="sm" className="mt-1">
                    {testimonial.university}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
