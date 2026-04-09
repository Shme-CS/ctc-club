'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';

/**
 * FAQSection Component
 * 
 * A professional, interactive FAQ section with accordion functionality for
 * displaying frequently asked questions with expandable answers.
 * 
 * @example
 * <FAQSection
 *   badge="FAQ"
 *   title="Frequently Asked Questions"
 *   description="Everything you need to know about CTC Club"
 *   faqs={[
 *     {
 *       question: "Is CTC Club really free?",
 *       answer: "Yes! We offer a free tier with access to selected courses."
 *     }
 *   ]}
 * />
 */

export interface FAQ {
  /** Question text (required) */
  question: string;
  
  /** Answer text (required) */
  answer: string;
  
  /** Optional category for grouping */
  category?: string;
  
  /** Whether this FAQ is initially open */
  defaultOpen?: boolean;
}

export interface FAQSectionProps {
  /** Section badge/label */
  badge?: string;
  
  /** Section title (required) */
  title: string;
  
  /** Section subtitle */
  subtitle?: string;
  
  /** Section description */
  description?: string;
  
  /** Array of FAQs (required) */
  faqs: FAQ[];
  
  /** Layout variant */
  variant?: 'accordion' | 'two-column' | 'categorized';
  
  /** Whether to allow multiple items open at once */
  allowMultiple?: boolean;
  
  /** Background style */
  background?: 'white' | 'gray' | 'gradient';
  
  /** Text alignment */
  textAlign?: 'left' | 'center';
  
  /** Maximum width for FAQ items */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  
  /** Custom content before FAQs */
  headerContent?: React.ReactNode;
  
  /** Custom content after FAQs (e.g., contact CTA) */
  footerContent?: React.ReactNode;
  
  /** Additional CSS classes */
  className?: string;
}

export function FAQSection({
  badge,
  title,
  subtitle,
  description,
  faqs,
  variant = 'accordion',
  allowMultiple = false,
  background = 'gray',
  textAlign = 'center',
  maxWidth = 'lg',
  headerContent,
  footerContent,
  className = '',
}: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<number[]>(
    faqs.map((faq, index) => (faq.defaultOpen ? index : -1)).filter(i => i !== -1)
  );

  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-b from-white to-gray-50',
  };

  const maxWidthClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-3xl',
    lg: 'max-w-4xl',
    xl: 'max-w-5xl',
    full: 'max-w-full',
  };

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenItems(prev =>
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenItems(prev =>
        prev.includes(index) ? [] : [index]
      );
    }
  };

  const isOpen = (index: number) => openItems.includes(index);

  // Accordion variant (default - single column)
  if (variant === 'accordion') {
    return (
      <section className={`${backgroundClasses[background]} py-24 sm:py-32 ${className}`}>
        <Container>
          {/* Section Header */}
          <SectionTitle
            badge={badge}
            title={title}
            subtitle={subtitle}
            description={description}
            align={textAlign}
          />

          {/* Custom Header Content */}
          {headerContent && (
            <div className="mt-8">
              {headerContent}
            </div>
          )}

          {/* FAQ Accordion */}
          <div className={`mt-16 mx-auto ${maxWidthClasses[maxWidth]}`}>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
                    aria-expanded={isOpen(index)}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-8">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-200 ${
                        isOpen(index) ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen(index) && (
                    <div
                      id={`faq-answer-${index}`}
                      className="px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-200"
                    >
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Custom Footer Content */}
          {footerContent && (
            <div className="mt-12 text-center">
              {footerContent}
            </div>
          )}

          {/* Default Contact CTA */}
          {!footerContent && (
            <div className="mt-12 text-center">
              <p className="text-gray-600">
                Still have questions?{' '}
                <a href="/contact" className="font-semibold text-blue-600 hover:text-blue-700">
                  Contact our support team
                </a>
              </p>
            </div>
          )}
        </Container>
      </section>
    );
  }

  // Two-column variant
  if (variant === 'two-column') {
    const halfLength = Math.ceil(faqs.length / 2);
    const leftColumn = faqs.slice(0, halfLength);
    const rightColumn = faqs.slice(halfLength);

    return (
      <section className={`${backgroundClasses[background]} py-24 sm:py-32 ${className}`}>
        <Container>
          <SectionTitle
            badge={badge}
            title={title}
            subtitle={subtitle}
            description={description}
            align={textAlign}
          />

          {headerContent && <div className="mt-8">{headerContent}</div>}

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-4">
              {leftColumn.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
                    aria-expanded={isOpen(index)}
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-8">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform ${
                        isOpen(index) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen(index) && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {rightColumn.map((faq, index) => {
                const actualIndex = index + halfLength;
                return (
                  <div
                    key={actualIndex}
                    className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(actualIndex)}
                      className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
                      aria-expanded={isOpen(actualIndex)}
                    >
                      <span className="text-lg font-semibold text-gray-900 pr-8">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform ${
                          isOpen(actualIndex) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen(actualIndex) && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {footerContent && <div className="mt-12 text-center">{footerContent}</div>}
        </Container>
      </section>
    );
  }

  // Categorized variant
  if (variant === 'categorized') {
    // Group FAQs by category
    const categories = Array.from(new Set(faqs.map(faq => faq.category || 'General')));
    const groupedFaqs = categories.map(category => ({
      category,
      items: faqs.filter(faq => (faq.category || 'General') === category),
    }));

    return (
      <section className={`${backgroundClasses[background]} py-24 sm:py-32 ${className}`}>
        <Container>
          <SectionTitle
            badge={badge}
            title={title}
            subtitle={subtitle}
            description={description}
            align={textAlign}
          />

          {headerContent && <div className="mt-8">{headerContent}</div>}

          <div className={`mt-16 mx-auto ${maxWidthClasses[maxWidth]}`}>
            <div className="space-y-12">
              {groupedFaqs.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {group.category}
                  </h3>
                  <div className="space-y-4">
                    {group.items.map((faq, index) => {
                      const actualIndex = faqs.indexOf(faq);
                      return (
                        <div
                          key={actualIndex}
                          className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden"
                        >
                          <button
                            onClick={() => toggleItem(actualIndex)}
                            className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
                            aria-expanded={isOpen(actualIndex)}
                          >
                            <span className="text-lg font-semibold text-gray-900 pr-8">
                              {faq.question}
                            </span>
                            <ChevronDown
                              className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform ${
                                isOpen(actualIndex) ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {isOpen(actualIndex) && (
                            <div className="px-6 pb-6">
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {footerContent && <div className="mt-12 text-center">{footerContent}</div>}
        </Container>
      </section>
    );
  }

  return null;
}
