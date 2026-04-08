'use client';

import { useState } from 'react';
import { Star, Clock, Users, BookOpen } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const categories = ['All', 'Web Dev', 'Mobile', 'Data Science', 'Design', 'DevOps', 'AI/ML'];

const courses = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    instructor: 'Dr. Sarah Chen',
    category: 'Web Dev',
    level: 'Beginner',
    rating: 4.9,
    reviews: 2400,
    students: 15000,
    duration: '40 hours',
    lessons: 120,
    price: 'Free',
    image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?w=600&h=340&fit=crop',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js, and more in this comprehensive bootcamp.',
  },
  {
    id: 2,
    title: 'Graphic Design Fundamentals',
    instructor: 'Prof. Alex Rivera',
    category: 'Design',
    level: 'Beginner',
    rating: 4.8,
    reviews: 1800,
    students: 12000,
    duration: '30 hours',
    lessons: 90,
    price: '$49',
    image: 'https://images.unsplash.com/photo-1512645592367-97ba8a9d4035?w=600&h=340&fit=crop',
    description: 'Master design principles, typography, color theory, and industry-standard tools.',
  },
  {
    id: 3,
    title: 'Data Science & Machine Learning',
    instructor: 'Dr. James Park',
    category: 'Data Science',
    level: 'Intermediate',
    rating: 4.9,
    reviews: 3100,
    students: 18000,
    duration: '50 hours',
    lessons: 150,
    price: '$79',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop',
    description: 'Learn Python, pandas, scikit-learn, and build real ML models from scratch.',
  },
  {
    id: 4,
    title: 'Mobile App Development with React Native',
    instructor: 'Eng. Maria Lopez',
    category: 'Mobile',
    level: 'Intermediate',
    rating: 4.7,
    reviews: 1500,
    students: 9000,
    duration: '35 hours',
    lessons: 100,
    price: '$59',
    image: 'https://images.unsplash.com/photo-1760531932521-8eb5a064dbca?w=600&h=340&fit=crop',
    description: 'Build cross-platform mobile apps for iOS and Android using React Native.',
  },
  {
    id: 5,
    title: 'Advanced JavaScript & TypeScript',
    instructor: 'Dr. Sarah Chen',
    category: 'Web Dev',
    level: 'Advanced',
    rating: 4.9,
    reviews: 2200,
    students: 11000,
    duration: '45 hours',
    lessons: 130,
    price: 'Free',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600&h=340&fit=crop',
    description: 'Deep dive into modern JavaScript and TypeScript for professional development.',
  },
  {
    id: 6,
    title: 'UI/UX Design Masterclass',
    instructor: 'Prof. Alex Rivera',
    category: 'Design',
    level: 'Intermediate',
    rating: 4.8,
    reviews: 1900,
    students: 10000,
    duration: '38 hours',
    lessons: 110,
    price: '$69',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=340&fit=crop',
    description: 'Learn user research, wireframing, prototyping, and usability testing.',
  },
];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCourses = selectedCategory === 'All'
    ? courses
    : courses.filter(course => course.category === selectedCategory);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <Container>
          <SectionTitle
            badge="Courses"
            title="Explore Our Course Catalog"
            description="Choose from 100+ courses across multiple disciplines. Learn at your own pace with expert instructors."
            align="center"
          />
        </Container>
      </section>

      {/* Courses Section */}
      <section className="py-24">
        <Container>
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 ring-1 ring-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-xl hover:ring-blue-600"
              >
                {/* Course Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 flex gap-2">
                    <Badge variant="default" className="bg-white/90 text-gray-900 backdrop-blur">
                      {course.category}
                    </Badge>
                    <Badge variant={course.level === 'Beginner' ? 'success' : course.level === 'Intermediate' ? 'warning' : 'error'}>
                      {course.level}
                    </Badge>
                  </div>
                </div>

                {/* Course Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-gray-900 line-clamp-2 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{course.instructor}</p>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {course.description}
                  </p>

                  {/* Course Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium text-gray-900">{course.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({course.reviews.toLocaleString()} reviews)</span>
                  </div>

                  {/* Price & CTA */}
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                    <Button variant="outline" size="sm">
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
