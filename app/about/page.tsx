import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { Target, Heart, Lightbulb, Users, Award, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - CTC Club | Our Mission & Story',
  description: 'Learn about CTC Club\'s mission to make tech education accessible to everyone. Meet our team and discover our values.',
  openGraph: {
    title: 'About CTC Club - Our Mission & Story',
    description: 'Empowering students worldwide with quality tech education and career opportunities.',
    images: ['/og-about.jpg'],
  },
};

export default function AboutPage() {
  const heroData = {
    title: 'Empowering the Next Generation of Tech Professionals',
    subtitle: 'We believe quality tech education should be accessible to everyone, everywhere',
    primaryCTA: {
      text: 'Join Our Community',
      href: '/signup',
    },
    secondaryCTA: {
      text: 'View Courses',
      href: '/courses',
    },
  };

  const valuesData = {
    title: 'Our Core Values',
    subtitle: 'What drives us',
    description: 'These principles guide everything we do at CTC Club.',
    features: [
      {
        icon: <Target className="w-6 h-6" />,
        title: 'Excellence',
        description: 'We strive for excellence in every course, every interaction, and every outcome.',
      },
      {
        icon: <Heart className="w-6 h-6" />,
        title: 'Student-First',
        description: 'Our students\' success is our success. We put their needs at the center of everything.',
      },
      {
        icon: <Lightbulb className="w-6 h-6" />,
        title: 'Innovation',
        description: 'We continuously update our curriculum to reflect the latest industry trends.',
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: 'Community',
        description: 'We foster a supportive community where everyone can learn and grow together.',
      },
      {
        icon: <Award className="w-6 h-6" />,
        title: 'Quality',
        description: 'We maintain the highest standards in course content and instruction.',
      },
      {
        icon: <TrendingUp className="w-6 h-6" />,
        title: 'Growth',
        description: 'We believe in continuous learning and personal development for all.',
      },
    ],
  };

  const testimonialsData = {
    title: 'What Our Students Say',
    subtitle: 'Real stories from real people',
    description: 'Hear from students who have transformed their careers with CTC Club.',
    testimonials: [
      {
        name: 'Alex Thompson',
        role: 'Career Changer',
        company: 'Now at Google',
        image: '/testimonials/alex.jpg',
        content: 'CTC Club gave me the confidence and skills to switch from teaching to software engineering. Best decision ever!',
        rating: 5,
      },
      {
        name: 'Priya Patel',
        role: 'Student',
        company: 'University Graduate',
        image: '/testimonials/priya.jpg',
        content: 'The practical approach and real-world projects helped me land internships at top tech companies.',
        rating: 5,
      },
      {
        name: 'Marcus Johnson',
        role: 'Entrepreneur',
        company: 'Startup Founder',
        image: '/testimonials/marcus.jpg',
        content: 'I learned to code and built my startup\'s MVP entirely through CTC Club courses. Incredible value!',
        rating: 5,
      },
    ],
  };

  return (
    <main>
      <HeroSection
        variant="centered"
        title={heroData.title}
        subtitle={heroData.subtitle}
        primaryCTA={heroData.primaryCTA}
        secondaryCTA={heroData.secondaryCTA}
      />

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              title="Our Story"
              subtitle="How it all began"
              align="center"
              className="mb-12"
            />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                CTC Club was founded in 2020 with a simple mission: make quality tech education 
                accessible to everyone, regardless of their background or location.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                What started as a small community of passionate developers sharing knowledge has 
                grown into a thriving platform with over 10,000 students from 50+ countries. 
                We've helped thousands of people launch successful careers in tech, from complete 
                beginners to experienced professionals looking to upskill.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to innovate and expand our offerings, always staying true to 
                our core mission: empowering people through education and creating opportunities 
                for everyone to succeed in the tech industry.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To democratize tech education by providing high-quality, affordable, and 
                accessible learning resources that empower individuals to build successful 
                careers in technology.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A world where anyone, anywhere can access world-class tech education and 
                transform their life through learning. We envision a future where talent 
                and opportunity are not limited by geography or circumstance.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <FeaturesSection
        variant="grid"
        title={valuesData.title}
        subtitle={valuesData.subtitle}
        description={valuesData.description}
        features={valuesData.features}
      />

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-blue-600">
        <Container>
          <SectionTitle
            title="Our Impact"
            subtitle="By the numbers"
            align="center"
            className="mb-12 [&_*]:text-white"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10,000+', label: 'Students Enrolled' },
              { value: '50+', label: 'Expert Instructors' },
              { value: '100+', label: 'Courses Available' },
              { value: '95%', label: 'Success Rate' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <TestimonialsSection
        variant="grid"
        title={testimonialsData.title}
        subtitle={testimonialsData.subtitle}
        description={testimonialsData.description}
        testimonials={testimonialsData.testimonials}
      />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of students who are already learning and growing with CTC Club.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Get Started Free
              </a>
              <a
                href="/courses"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors"
              >
                Browse Courses
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
