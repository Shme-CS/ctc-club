import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero-section';
import { ContactSection } from '@/components/sections/contact-section';
import { FAQSection } from '@/components/sections/faq-section';
import { Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - CTC Club | Get in Touch',
  description: 'Have questions? Get in touch with CTC Club. We\'re here to help you with courses, support, and any inquiries.',
  openGraph: {
    title: 'Contact CTC Club - We\'re Here to Help',
    description: 'Reach out to our team for support, questions, or partnership opportunities.',
    images: ['/og-contact.jpg'],
  },
};

export default function ContactPage() {
  const heroData = {
    badge: 'We\'re Here to Help',
    title: 'Get in Touch',
    subtitle: 'Have questions about our courses or services? Our team is ready to help you succeed.',
    primaryCTA: {
      text: 'Send Message',
      href: '#contact-form',
    },
    secondaryCTA: {
      text: 'View FAQ',
      href: '#faq',
    },
  };

  const contactData = {
    title: 'Send Us a Message',
    subtitle: 'We\'ll get back to you soon',
    description: 'Fill out the form below and our team will respond within 24 hours.',
    contactInfo: {
      email: 'support@ctcclub.com',
      phone: '+1 (555) 123-4567',
      address: '123 Tech Street, San Francisco, CA 94105',
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM PST',
    },
    socialLinks: [
      {
        platform: 'Facebook',
        url: 'https://facebook.com/ctcclub',
        icon: <Facebook className="w-5 h-5" />,
      },
      {
        platform: 'Twitter',
        url: 'https://twitter.com/ctcclub',
        icon: <Twitter className="w-5 h-5" />,
      },
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/company/ctcclub',
        icon: <Linkedin className="w-5 h-5" />,
      },
      {
        platform: 'Instagram',
        url: 'https://instagram.com/ctcclub',
        icon: <Instagram className="w-5 h-5" />,
      },
      {
        platform: 'GitHub',
        url: 'https://github.com/ctcclub',
        icon: <Github className="w-5 h-5" />,
      },
    ],
  };

  const faqData = {
    title: 'Common Questions',
    subtitle: 'Quick answers',
    description: 'Find answers to frequently asked questions before reaching out.',
    faqs: [
      {
        question: 'How quickly will I receive a response?',
        answer: 'We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.',
      },
      {
        question: 'What information should I include in my message?',
        answer: 'Please include your name, email, and a detailed description of your question or issue. The more information you provide, the better we can assist you.',
      },
      {
        question: 'Do you offer phone support?',
        answer: 'Yes! Pro and Enterprise members have access to phone support. Free plan users can reach us via email or the contact form.',
      },
      {
        question: 'Can I schedule a demo or consultation?',
        answer: 'Absolutely! Enterprise customers can schedule a personalized demo. Use the contact form and select "Schedule Demo" as your subject.',
      },
      {
        question: 'How do I report a technical issue?',
        answer: 'For technical issues, please use the contact form and select "Technical Support" as your subject. Include details about the problem and any error messages.',
      },
      {
        question: 'Are you hiring?',
        answer: 'We\'re always looking for talented instructors and team members! Check our careers page or send your resume to careers@ctcclub.com.',
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

      <ContactSection
        variant="split"
        title={contactData.title}
        subtitle={contactData.subtitle}
        description={contactData.description}
        contactInfo={contactData.contactInfo}
        socialLinks={contactData.socialLinks}
        id="contact-form"
      />

      <FAQSection
        variant="two-column"
        title={faqData.title}
        subtitle={faqData.subtitle}
        description={faqData.description}
        faqs={faqData.faqs}
        id="faq"
      />

      {/* Additional Support Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Immediate Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Check out our help center for instant answers to common questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/help"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Visit Help Center
              </a>
              <a
                href="/community"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors"
              >
                Join Community
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
