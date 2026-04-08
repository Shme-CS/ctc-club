import { Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import Image from 'next/image';

const courses = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    instructor: 'Dr. Sarah Chen',
    category: 'Web Dev',
    rating: 4.9,
    reviews: '2.4k',
    image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?w=600&h=340&fit=crop',
  },
  {
    id: 2,
    title: 'Graphic Design Fundamentals',
    instructor: 'Prof. Alex Rivera',
    category: 'Design',
    rating: 4.8,
    reviews: '1.8k',
    image: 'https://images.unsplash.com/photo-1512645592367-97ba8a9d4035?w=600&h=340&fit=crop',
  },
  {
    id: 3,
    title: 'Data Science & Machine Learning',
    instructor: 'Dr. James Park',
    category: 'Data Science',
    rating: 4.9,
    reviews: '3.1k',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop',
  },
  {
    id: 4,
    title: 'Mobile App Development with React Native',
    instructor: 'Eng. Maria Lopez',
    category: 'Mobile',
    rating: 4.7,
    reviews: '1.5k',
    image: 'https://images.unsplash.com/photo-1760531932521-8eb5a064dbca?w=600&h=340&fit=crop',
  },
];

export function Courses() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-16">
          <SectionTitle
            badge="Top Courses"
            title="Featured Courses"
            description="Handpicked courses to accelerate your learning journey."
            align="left"
          />
          <Button variant="outline" href="/courses" rightIcon={<ArrowRight className="h-4 w-4" />}>
            View All
          </Button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-xl hover:ring-blue-600"
            >
              {/* Course Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4">
                  <Badge variant="default" className="bg-white/90 text-gray-900 backdrop-blur">
                    {course.category}
                  </Badge>
                </div>
              </div>

              {/* Course Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{course.instructor}</p>

                {/* Rating */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium text-gray-900">{course.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({course.reviews})</span>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <Button variant="outline" size="sm" fullWidth>
                    Enroll
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
