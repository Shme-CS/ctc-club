import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { FAQSection } from '@/components/sections/faq-section';
import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { CheckCircle, Shield, Zap, Users, Award, Headphones } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing Plans - CTC Club | Flexible & Affordable',
  description: 'Choose the perfect plan for your learning journey. Start free or upgrade to Pro for full access to all courses and features.',
  openGraph: {
    title: 'CTC Club Pricing - Plans for Everyone',
    description: 'Flexible pricing plans with lifetime access. Start free and upgrade anytime.',
    images: ['/og-pricing.jpg'],
  },
};

export default function PricingPage() {
  const heroData = {
    badge: 'Transparent Pricing',
    title: 'Invest in Your Future',
    subtitle: 'Choose a plan that fits your goals and budget. All plans include lifetime access to course materials.',
    primaryCTA: {
      text: 'Start Free Trial',
      href: '/signup',
    },
    secondaryCTA: {
      text: 'Compare Plans',
      href: '#pricing',
    },
  };

  const pricingData = {
    title: 'Choose Your Plan',
    subtitle: 'Flexible pricing for everyone',
    description: 'Start free and upgrade as you grow. Cancel anytime with no questions asked.',
    plans: [
      {
        name: 'Free',
        price: 0,
        period: 'forever',
        description: 'Perfect for exploring and getting started',
        features: [
          'Access to 10 free courses',
          'Community forum access',
          'Basic project templates',
          'Email support (48h response)',
          'Course completion tracking',
          'Mobile app access',
        ],
        cta: 'Get Started Free',
        href: '/signup',
      },
      {
        name: 'Pro',
        price: 29,
        period: 'month',
        description: 'For serious learners and career changers',
        features: [
          'Access to all 100+ courses',
          'All future courses included',
          'Priority email support (24h)',
          'Advanced projects & challenges',
          'Certificates of completion',
          'Career guidance & resources',
          'Code review (2 per month)',
          'Live workshop access',
          'Downloadable resources',
          'Progress analytics',
        ],
        cta: 'Start Pro Trial',
        href: '/signup?plan=pro',
        popular: true,
        badge: 'Most Popular',
      },
      {
        name: 'Enterprise',
        price: 99,
        period: 'month',
        description: 'For teams and organizations',
        features: [
          'Everything in Pro',
          'Up to 10 team members',
          'Team management dashboard',
          'Custom learning paths',
          'Dedicated account manager',
          'Priority chat support',
          'Unlimited code reviews',
          'API access',
          'Advanced analytics & reporting',
          'White-label options',
          'Custom integrations',
          'SLA guarantee',
        ],
        cta: 'Contact Sales',
        href: '/contact',
      },
    ],
    showBillingToggle: true,
  };

  const featuresData = {
    title: 'All Plans Include',
    subtitle: 'Core features',
    description: 'Every plan comes with these essential features to support your learning.',
    features: [
      {
        icon: <CheckCircle className="w-6 h-6" />,
        title: 'Lifetime Access',
        description: 'Once enrolled, access your courses forever. Learn at your own pace.',
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: '30-Day Guarantee',
        description: 'Not satisfied? Get a full refund within 30 days, no questions asked.',
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'Regular Updates',
        description: 'Course content updated quarterly to reflect latest industry trends.',
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: 'Community Access',
        description: 'Join our Discord community with 10,000+ active learners.',
      },
      {
        icon: <Award className="w-6 h-6" />,
        title: 'Certificates',
        description: 'Earn shareable certificates for completed courses (Pro & Enterprise).',
      },
      {
        icon: <Headphones className="w-6 h-6" />,
        title: 'Support',
        description: 'Get help when you need it with our responsive support team.',
      },
    ],
  };

  const faqData = {
    title: 'Pricing FAQs',
    subtitle: 'Common questions',
    description: 'Everything you need to know about our pricing and plans.',
    faqs: [
      {
        question: 'Can I switch plans later?',
        answer: 'Yes! You can upgrade or downgrade your plan at any time. When upgrading, you\'ll be charged the prorated difference. When downgrading, the change takes effect at the end of your current billing cycle.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for Enterprise plans. All payments are processed securely through Stripe.',
      },
      {
        question: 'Is there a discount for annual billing?',
        answer: 'Yes! Save 20% when you choose annual billing. For example, Pro annual is $279/year instead of $348/year (monthly rate × 12).',
      },
      {
        question: 'Do you offer student discounts?',
        answer: 'Yes! Students with a valid .edu email address get 50% off Pro plans. Contact support with your student ID for verification.',
      },
      {
        question: 'What happens if I cancel?',
        answer: 'You can cancel anytime. You\'ll retain access until the end of your current billing period. Free plan users can continue using free features indefinitely.',
      },
      {
        question: 'Can I get a refund?',
        answer: 'Yes! We offer a 30-day money-back guarantee on all paid plans. If you\'re not satisfied, contact us within 30 days of purchase for a full refund.',
      },
      {
        question: 'How does the Enterprise plan work?',
        answer: 'Enterprise plans are customized based on your team size and needs. Contact our sales team for a personalized quote and demo.',
      },
      {
        question: 'Are there any hidden fees?',
        answer: 'No hidden fees! The price you see is what you pay. No setup fees, no cancellation fees, no surprises.',
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

      <PricingSection
        variant="cards"
        title={pricingData.title}
        subtitle={pricingData.subtitle}
        description={pricingData.description}
        plans={pricingData.plans}
        showBillingToggle={pricingData.showBillingToggle}
        id="pricing"
      />

      <FeaturesSection
        variant="grid"
        title={featuresData.title}
        subtitle={featuresData.subtitle}
        description={featuresData.description}
        features={featuresData.features}
      />

      {/* Comparison Table Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionTitle
            title="Detailed Comparison"
            subtitle="Compare all features"
            description="See exactly what's included in each plan."
            align="center"
            className="mb-12"
          />

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Free</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Pro</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { feature: 'Course Access', free: '10 courses', pro: '100+ courses', enterprise: '100+ courses' },
                  { feature: 'Certificates', free: '—', pro: '✓', enterprise: '✓' },
                  { feature: 'Code Reviews', free: '—', pro: '2/month', enterprise: 'Unlimited' },
                  { feature: 'Live Workshops', free: '—', pro: '✓', enterprise: '✓' },
                  { feature: 'Career Support', free: '—', pro: '✓', enterprise: '✓' },
                  { feature: 'Team Dashboard', free: '—', pro: '—', enterprise: '✓' },
                  { feature: 'API Access', free: '—', pro: '—', enterprise: '✓' },
                  { feature: 'Support', free: 'Email (48h)', pro: 'Email (24h)', enterprise: 'Priority Chat' },
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-4 px-4 text-gray-900">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.free}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.pro}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <FAQSection
        variant="accordion"
        title={faqData.title}
        subtitle={faqData.subtitle}
        description={faqData.description}
        faqs={faqData.faqs}
      />

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our team is here to help you choose the right plan for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Sales
              </a>
              <a
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
