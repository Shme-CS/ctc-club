import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { ServicesSection } from '@/components/sections/services-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { FAQSection } from '@/components/sections/faq-section';
import { 
  Code2, 
  Rocket, 
  Users, 
  Award, 
  BookOpen, 
  Zap,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'CTC Club - Learn Tech Skills & Build Your Career',
  description: 'Join CTC Club to master programming, web development, and tech skills. Get certified, build projects, and launch your tech career with expert guidance.',
  keywords: ['tech learning', 'programming courses', 'web development', 'coding bootcamp', 'tech education'],
  openGraph: {
    title: 'CTC Club - Learn Tech Skills & Build Your Career',
    description: 'Master programming and tech skills with expert-led courses, hands-on projects, and career support.',
    images: ['/og-image.jpg'],
  },
};

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  Learn Tech Skills.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Build Real Projects.
                  </span>{' '}
                  Grow Your Career.
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 max-w-2xl">
                  The ultimate learning platform for university students. Access structured courses, earn certificates, build portfolio projects, and join a thriving tech community.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/signup"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Start Learning Free
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/courses"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all"
                >
                  Browse Courses
                </a>
              </div>

              {/* Search Bar */}
              <div className="relative max-w-md">
                <input
                  type="text"
                  placeholder="Search courses, topics..."
                  className="w-full px-6 py-4 pr-12 text-gray-900 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                />
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Student Count */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white flex items-center justify-center text-white font-semibold text-sm"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-gray-600">
                  <span className="font-bold text-gray-900">5,000+</span> students already learning
                </p>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative lg:h-[600px]">
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                  {/* Placeholder for laptop/code image */}
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <svg className="w-32 h-32 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Certificate Earned */}
              <div className="absolute top-8 -right-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">Certificate Earned</p>
                  <p className="text-xs text-gray-500">Web Development</p>
                </div>
              </div>

              {/* Floating Badge - Course Completed */}
              <div className="absolute bottom-8 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">Course Completed!</p>
                  <p className="text-xs text-gray-500">+250 XP earned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  // Features Section Data
  const featuresData = {
    title: 'Why Choose CTC Club',
    subtitle: 'Everything you need to succeed',
    description: 'We provide comprehensive learning resources, expert mentorship, and real-world projects to help you master tech skills.',
    features: [
      {
        icon: <Code2 className="w-6 h-6" />,
        title: 'Hands-on Projects',
        description: 'Build real-world projects that showcase your skills to potential employers.',
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: 'Expert Mentorship',
        description: 'Learn from industry professionals with years of experience in tech.',
      },
      {
        icon: <Award className="w-6 h-6" />,
        title: 'Industry Certificates',
        description: 'Earn recognized certificates that boost your career prospects.',
      },
      {
        icon: <BookOpen className="w-6 h-6" />,
        title: 'Comprehensive Curriculum',
        description: 'Structured learning paths from beginner to advanced levels.',
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'Lifetime Access',
        description: 'Access course materials anytime, anywhere, forever.',
      },
      {
        icon: <Rocket className="w-6 h-6" />,
        title: 'Career Support',
        description: 'Get job placement assistance and career guidance.',
      },
    ],
  };

  // Services Section Data
  const servicesData = {
    title: 'Our Services',
    subtitle: 'Comprehensive Learning Solutions',
    description: 'From beginner courses to advanced certifications, we offer everything you need to succeed in tech.',
    services: [
      {
        icon: <Code2 className="w-8 h-8" />,
        title: 'Programming Courses',
        description: 'Master Python, JavaScript, Java, and more with structured courses.',
        features: ['Beginner to Advanced', 'Hands-on Projects', 'Code Reviews'],
        link: '/courses',
      },
      {
        icon: <Rocket className="w-8 h-8" />,
        title: 'Web Development',
        description: 'Build modern websites and web applications with latest technologies.',
        features: ['React & Next.js', 'Full-Stack Development', 'Responsive Design'],
        link: '/courses',
      },
      {
        icon: <Award className="w-8 h-8" />,
        title: 'Certifications',
        description: 'Earn industry-recognized certificates to boost your career.',
        features: ['Verified Certificates', 'LinkedIn Integration', 'Portfolio Projects'],
        link: '/courses',
      },
    ],
  };

  // Testimonials Section Data
  const testimonialsData = {
    title: 'Student Success Stories',
    subtitle: 'Hear from our community',
    description: 'Join thousands of students who have transformed their careers with CTC Club.',
    testimonials: [
      {
        author: 'Sarah Johnson',
        role: 'Software Engineer',
        company: 'Tech Corp',
        avatar: '/testimonials/sarah.jpg',
        quote: 'CTC Club helped me transition from marketing to software development. The courses are practical and the mentors are amazing!',
        rating: 5,
      },
      {
        author: 'Michael Chen',
        role: 'Full-Stack Developer',
        company: 'StartupXYZ',
        avatar: '/testimonials/michael.jpg',
        quote: 'The hands-on projects and real-world scenarios prepared me perfectly for my first developer job. Highly recommended!',
        rating: 5,
      },
      {
        author: 'Emily Rodriguez',
        role: 'Frontend Developer',
        company: 'Design Studio',
        avatar: '/testimonials/emily.jpg',
        quote: 'Best investment in my career. The curriculum is up-to-date and the community support is incredible.',
        rating: 5,
      },
      {
        author: 'David Kim',
        role: 'Backend Developer',
        company: 'Enterprise Inc',
        avatar: '/testimonials/david.jpg',
        quote: 'From zero coding knowledge to landing my dream job in 6 months. CTC Club made it possible!',
        rating: 5,
      },
      {
        author: 'Lisa Anderson',
        role: 'UI/UX Developer',
        company: 'Creative Agency',
        avatar: '/testimonials/lisa.jpg',
        quote: 'The quality of instruction and the depth of content exceeded my expectations. Worth every penny!',
        rating: 5,
      },
      {
        author: 'James Wilson',
        role: 'DevOps Engineer',
        company: 'Cloud Solutions',
        avatar: '/testimonials/james.jpg',
        quote: 'CTC Club gave me the skills and confidence to switch careers. The support system is unmatched.',
        rating: 5,
      },
    ],
  };

  // Pricing Section Data
  const pricingData = {
    title: 'Choose Your Plan',
    subtitle: 'Flexible pricing for everyone',
    description: 'Start free and upgrade as you grow. All plans include lifetime access to course materials.',
    plans: [
      {
        name: 'Free',
        price: 0,
        period: 'forever',
        description: 'Perfect for getting started',
        features: [
          'Access to 10 free courses',
          'Community forum access',
          'Basic project templates',
          'Email support',
        ],
        cta: 'Get Started',
        href: '/signup',
      },
      {
        name: 'Pro',
        price: 29,
        period: 'month',
        description: 'For serious learners',
        features: [
          'Access to all 100+ courses',
          'Priority support',
          'Advanced projects',
          'Certificates of completion',
          'Career guidance',
          'Code reviews',
        ],
        cta: 'Start Pro Trial',
        href: '/signup?plan=pro',
        popular: true,
      },
      {
        name: 'Enterprise',
        price: 99,
        period: 'month',
        description: 'For teams and organizations',
        features: [
          'Everything in Pro',
          'Team management dashboard',
          'Custom learning paths',
          'Dedicated account manager',
          'API access',
          'Advanced analytics',
          'White-label options',
        ],
        cta: 'Contact Sales',
        href: '/contact',
      },
    ],
  };

  // FAQ Section Data
  const faqData = {
    title: 'Frequently Asked Questions',
    subtitle: 'Got questions? We have answers',
    description: 'Find answers to common questions about our courses, pricing, and platform.',
    faqs: [
      {
        question: 'Do I need prior programming experience?',
        answer: 'No! Our courses are designed for all skill levels. We have beginner-friendly courses that start from the basics and gradually progress to advanced topics.',
      },
      {
        question: 'How long does it take to complete a course?',
        answer: 'Course duration varies from 4 to 12 weeks depending on the complexity. However, you can learn at your own pace with lifetime access to all materials.',
      },
      {
        question: 'Are the certificates recognized by employers?',
        answer: 'Yes! Our certificates are industry-recognized and can be added to your LinkedIn profile and resume. Many of our students have successfully used them in job applications.',
      },
      {
        question: 'Can I get a refund if I\'m not satisfied?',
        answer: 'Absolutely! We offer a 30-day money-back guarantee. If you\'re not satisfied with your purchase, contact us within 30 days for a full refund.',
      },
      {
        question: 'Do you offer job placement assistance?',
        answer: 'Yes! Pro and Enterprise members get access to our career services including resume reviews, interview preparation, and job placement assistance.',
      },
      {
        question: 'Can I switch plans later?',
        answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we\'ll prorate any differences.',
      },
    ],
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  Learn Tech Skills.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Build Real Projects.
                  </span>{' '}
                  Grow Your Career.
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 max-w-2xl">
                  The ultimate learning platform for university students. Access structured courses, earn certificates, build portfolio projects, and join a thriving tech community.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/signup"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Start Learning Free
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/courses"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all"
                >
                  Browse Courses
                </a>
              </div>

              {/* Search Bar */}
              <div className="relative max-w-md">
                <input
                  type="text"
                  placeholder="Search courses, topics..."
                  className="w-full px-6 py-4 pr-12 text-gray-900 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                />
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Student Count */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white flex items-center justify-center text-white font-semibold text-sm"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-gray-600">
                  <span className="font-bold text-gray-900">5,000+</span> students already learning
                </p>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative lg:h-[600px]">
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                  {/* Placeholder for laptop/code image */}
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <svg className="w-32 h-32 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Certificate Earned */}
              <div className="absolute top-8 -right-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">Certificate Earned</p>
                  <p className="text-xs text-gray-500">Web Development</p>
                </div>
              </div>

              {/* Floating Badge - Course Completed */}
              <div className="absolute bottom-8 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">Course Completed!</p>
                  <p className="text-xs text-gray-500">+250 XP earned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose CTC Club Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose CTC Club
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to succeed
            </p>
            <p className="text-base text-gray-500 mt-2">
              We provide comprehensive learning resources, expert mentorship, and real-world projects to help you master tech skills.
            </p>
          </div>

      <FeaturesSection
        variant="grid"
        title={featuresData.title}
        subtitle={featuresData.subtitle}
        description={featuresData.description}
        features={featuresData.features}
      />

      <ServicesSection
        variant="cards"
        title={servicesData.title}
        subtitle={servicesData.subtitle}
        description={servicesData.description}
        services={servicesData.services}
      />

      <TestimonialsSection
        variant="grid"
        title={testimonialsData.title}
        subtitle={testimonialsData.subtitle}
        description={testimonialsData.description}
        testimonials={testimonialsData.testimonials}
      />

      <PricingSection
        variant="cards"
        title={pricingData.title}
        subtitle={pricingData.subtitle}
        description={pricingData.description}
        plans={pricingData.plans}
        showBillingToggle={true}
      />

      <FAQSection
        variant="accordion"
        title={faqData.title}
        subtitle={faqData.subtitle}
        description={faqData.description}
        faqs={faqData.faqs}
      />
    </main>
  );
}
