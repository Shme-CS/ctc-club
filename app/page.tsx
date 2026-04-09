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
  // Hero Section Data
  const heroData = {
    badge: 'New Batch Starting Soon',
    title: 'Master Tech Skills & Launch Your Dream Career',
    subtitle: 'Join 10,000+ students learning programming, web development, and tech skills with industry experts',
    primaryCTA: {
      text: 'Start Learning Free',
      href: '/courses',
    },
    secondaryCTA: {
      text: 'View Courses',
      href: '/courses',
    },
    stats: [
      { value: '10,000+', label: 'Active Students' },
      { value: '50+', label: 'Expert Instructors' },
      { value: '100+', label: 'Courses' },
      { value: '95%', label: 'Success Rate' },
    ],
  };

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
      <HeroSection
        variant="default"
        badge={heroData.badge}
        title={heroData.title}
        subtitle={heroData.subtitle}
        primaryCTA={heroData.primaryCTA}
        secondaryCTA={heroData.secondaryCTA}
        stats={heroData.stats}
      />

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
