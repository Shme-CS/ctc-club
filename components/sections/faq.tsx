'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';

const faqs = [
  {
    id: 1,
    question: 'Is CTC Club really free?',
    answer: 'Yes! We offer a free tier with access to selected courses and community features. Premium courses and advanced features are available with our paid plans.',
  },
  {
    id: 2,
    question: 'Do I get a certificate after completing a course?',
    answer: 'Absolutely! Upon completing a course and passing the final assessment, you receive a verified certificate that you can share on LinkedIn and add to your resume.',
  },
  {
    id: 3,
    question: 'Can I learn at my own pace?',
    answer: 'Yes, all courses are self-paced. You can learn whenever and wherever you want. We also have daily streaks and XP systems to keep you motivated.',
  },
  {
    id: 4,
    question: 'What if I need help while learning?',
    answer: 'We have a vibrant community forum, 24/7 support tickets, and peer-to-peer help channels. You can also reach out to instructors directly for course-specific questions.',
  },
  {
    id: 5,
    question: 'Are the courses suitable for beginners?',
    answer: 'Yes! We have courses for all skill levels, from complete beginners to advanced developers. Each course clearly indicates its difficulty level and prerequisites.',
  },
  {
    id: 6,
    question: 'How do I submit projects for review?',
    answer: 'Projects are submitted via GitHub. Simply push your code to a repository and submit the link through our platform. Instructors will review and provide feedback within 48 hours.',
  },
  {
    id: 7,
    question: 'Can I access courses on mobile devices?',
    answer: 'Yes, our platform is fully responsive and works seamlessly on all devices. We also have mobile apps for iOS and Android coming soon.',
  },
  {
    id: 8,
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers. For students, we also offer flexible payment plans and scholarships.',
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <Container>
        <SectionTitle
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about CTC Club. Can't find the answer you're looking for? Reach out to our support team."
          align="center"
        />

        <div className="mt-16 mx-auto max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openId === faq.id && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a href="/contact" className="font-semibold text-blue-600 hover:text-blue-700">
              Contact our support team
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
