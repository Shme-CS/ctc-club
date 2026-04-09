import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { FAQSection } from '@/components/sections/faq-section';
import { 
  Code2, 
  Rocket, 
  Award, 
  Users, 
  BookOpen, 
  Video,
  MessageSquare,
  Briefcase,
  CheckCircle,
  Clock,
  Globe,
  Zap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services - CTC Club | Courses, Mentorship & Career Support',
  description: 'Explore CTC Club\'s comprehensive services including programming courses, mentorship, certifications, and career support.',
  openGraph: {
    title: 'CTC Club Services - Complete Learning Solutions',
    description: 'From beginner courses to career placement, we offer everything you need to succeed in tech.',
    images: ['/og-services.jpg'],
  },
};

export default function ServicesPage() {
  const heroData = {
    badge: 'Comprehensive Learning Solutions',
    title: 'Everything You Need to Succeed in Tech',
    subtitle: 'From courses to career support, we provide end-to-end solutions for your tech learning journey',
    primaryCTA: {
      text: 'Explore Services',
      href: '#services',
    },
    secondaryCTA: {
      text: 'Contact Us',
      href: '/contact',
    },
  };

  const mainServicesData = {
    title: 'Our Core Services',
    subtitle: 'What we offer',
    description: 'Comprehensive learning solutions designed to take you from beginner to professional.',
    services: [
      {
        icon: <Code2 className="w-8 h-8" />,
        title: 'Programming Courses',
        description: 'Master in-demand programming languages and frameworks with structured, hands-on courses.',
        features: [
          'Python, JavaScript, Java, C++',
          'Web Development (React, Next.js)',
          'Mobile Development (React Native)',
          'Backend Development (Node.js, Django)',
          'Database Design (SQL, MongoDB)',
          'Version Control (Git, GitHub)',
        ],
        link: '/courses',
      },
      {
        icon: <Users className="w-8 h-8" />,
        title: 'Expert Mentorship',
        description: 'Get personalized guidance from industry professionals with years of real-world experience.',
        features: [
          '1-on-1 Mentoring Sessions',
          'Code Review & Feedback',
          'Career Guidance',
          'Technical Interview Prep',
          'Project Consultation',
          'Industry Insights',
        ],
        link: '/mentorship',
      },
      {
        icon: <Award className="w-8 h-8" />,
        title: 'Certifications',
        description: 'Earn industry-recognized certificates that validate your skills and boost your career.',
        features: [
          'Verified Certificates',
          'LinkedIn Integration',
          'Portfolio Projects',
          'Skill Assessments',
          'Digital Badges',
          'Transcript of Records',
        ],
        link: '/certifications',
      },
      {
        icon: <Briefcase className="w-8 h-8" />,
        title: 'Career Services',
        description: 'Get comprehensive support to land your dream job in tech.',
        features: [
          'Resume Building',
          'Interview Preparation',
          'Job Placement Assistance',
          'Salary Negotiation Tips',
          'Portfolio Development',
          'Networking Opportunities',
        ],
        link: '/career',
      },
      {
        icon: <Video className="w-8 h-8" />,
        title: 'Live Workshops',
        description: 'Participate in interactive live sessions with experts and fellow learners.',
        features: [
          'Weekly Live Classes',
          'Q&A Sessions',
          'Coding Challenges',
          'Hackathons',
          'Guest Speaker Events',
          'Recorded Sessions',
        ],
        link: '/workshops',
      },
      {
        icon: <MessageSquare className="w-8 h-8" />,
        title: 'Community Support',
        description: 'Join a thriving community of learners and professionals.',
        features: [
          'Private Discord Server',
          'Study Groups',
          'Peer Code Reviews',
          'Discussion Forums',
          'Networking Events',
          '24/7 Community Support',
        ],
        link: '/community',
      },
    ],
  };

  const benefitsData = {
    title: 'Why Choose Our Services',
    subtitle: 'The CTC Club advantage',
    description: 'We go beyond just courses to provide a complete learning ecosystem.',
    features: [
      {
        icon: <CheckCircle className="w-6 h-6" />,
        title: 'Proven Track Record',
        description: '95% of our students successfully complete their courses and achieve their career goals.',
      },
      {
        icon: <Clock className="w-6 h-6" />,
        title: 'Learn at Your Pace',
        description: 'Flexible learning schedules that fit your lifestyle with lifetime access to materials.',
      },
      {
        icon: <Globe className="w-6 h-6" />,
        title: 'Global Community',
        description: 'Connect with students and professionals from over 50 countries worldwide.',
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'Up-to-Date Content',
        description: 'Curriculum updated regularly to reflect the latest industry trends and technologies.',
      },
      {
        icon: <BookOpen className="w-6 h-6" />,
        title: 'Comprehensive Resources',
        description: 'Access to extensive learning materials, code samples, and project templates.',
      },
      {
        icon: <Rocket className="w-6 h-6" />,
        title: 'Fast-Track Your Career',
        description: 'Accelerate your learning with our intensive bootcamp-style programs.',
      },
    ],
  };

  const testimonialsData = {
    title: 'Success Stories',
    subtitle: 'Real results from real students',
    description: 'See how our services have helped students achieve their goals.',
    testimonials: [
      {
        name: 'Jennifer Lee',
        role: 'Full-Stack Developer',
        company: 'Tech Startup',
        image: '/testimonials/jennifer.jpg',
        content: 'The mentorship program was game-changing. My mentor helped me navigate career decisions and land my first developer role.',
        rating: 5,
      },
      {
        name: 'Robert Martinez',
        role: 'Software Engineer',
        company: 'Fortune 500',
        image: '/testimonials/robert.jpg',
        content: 'The career services team helped me polish my resume and prepare for interviews. I got 3 job offers within a month!',
        rating: 5,
      },
      {
        name: 'Aisha Khan',
        role: 'Frontend Developer',
        company: 'Digital Agency',
        image: '/testimonials/aisha.jpg',
        content: 'The combination of courses, projects, and community support gave me everything I needed to succeed. Highly recommend!',
        rating: 5,
      },
    ],
  };

  const faqData = {
    title: 'Service FAQs',
    subtitle: 'Common questions',
    description: 'Get answers to frequently asked questions about our services.',
    faqs: [
      {
        question: 'What\'s included in the mentorship program?',
        answer: 'Our mentorship program includes 1-on-1 sessions with industry experts, code reviews, career guidance, and ongoing support throughout your learning journey.',
      },
      {
        question: 'Are the certificates recognized by employers?',
        answer: 'Yes! Our certificates are industry-recognized and can be verified online. Many employers specifically look for candidates with our certifications.',
      },
      {
        question: 'How does the career services work?',
        answer: 'Career services include resume reviews, interview preparation, job search strategies, and direct connections to hiring partners. Available to Pro and Enterprise members.',
      },
      {
        question: 'Can I access services from anywhere?',
        answer: 'Absolutely! All our services are available online, so you can access them from anywhere in the world with an internet connection.',
      },
      {
        question: 'Do you offer refunds?',
        answer: 'Yes, we offer a 30-day money-back guarantee on all paid services. If you\'re not satisfied, contact us for a full refund.',
      },
      {
        question: 'How often is the content updated?',
        answer: 'We update our courses and materials quarterly to ensure they reflect the latest industry trends, technologies, and best practices.',
      },
    ],
  };

  return (
    <main>
      <HeroSection
        variant="centered"
        badge={heroData.badge}
        title={heroData.title}
        subtitle={heroData.subtitle}
        primaryCTA={heroData.primaryCTA}
        secondaryCTA={heroData.secondaryCTA}
      />

      <ServicesSection
        variant="cards"
        title={mainServicesData.title}
        subtitle={mainServicesData.subtitle}
        description={mainServicesData.description}
        services={mainServicesData.services}
        id="services"
      />

      <FeaturesSection
        variant="grid"
        title={benefitsData.title}
        subtitle={benefitsData.subtitle}
        description={benefitsData.description}
        features={benefitsData.features}
      />

      <TestimonialsSection
        variant="grid"
        title={testimonialsData.title}
        subtitle={testimonialsData.subtitle}
        description={testimonialsData.description}
        testimonials={testimonialsData.testimonials}
      />

      <FAQSection
        variant="two-column"
        title={faqData.title}
        subtitle={faqData.subtitle}
        description={faqData.description}
        faqs={faqData.faqs}
      />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Choose a plan and start accessing all our services today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Pricing
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
