'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { PricingCard, PricingFeature } from '@/components/ui/pricing-card';
import { GridLayout } from '@/components/ui/grid-layout';
import { Button } from '@/components/ui/button';

/**
 * PricingSection Component
 * 
 * A professional, interactive pricing section for displaying subscription tiers,
 * product packages, or service plans with feature comparison and CTAs.
 * 
 * @example
 * <PricingSection
 *   badge="Pricing"
 *   title="Choose Your Plan"
 *   description="Select the perfect plan for your learning journey"
 *   billingToggle
 *   plans={[
 *     {
 *       name: 'Free',
 *       price: { monthly: 0, yearly: 0 },
 *       description: 'Perfect for getting started',
 *       features: [
 *         { name: '10 courses', included: true },
 *         { name: 'Community support', included: true }
 *       ],
 *       ctaText: 'Get Started',
 *       ctaHref: '/signup'
 *     }
 *   ]}
 * />
 */

export interface PricingPlan {
  /** Plan name */
  name: string;
  
  /** Plan description */
  description?: string;
  
  /** Pricing (can be number, string, or object with monthly/yearly) */
  price: number | string | {
    monthly: number | string;
    yearly: number | string;
  };
  
  /** Currency symbol */
  currency?: string;
  
  /** List of features with inclusion status */
  features: PricingFeature[];
  
  /** CTA button text */
  ctaText?: string;
  
  /** CTA button link */
  ctaHref?: string;
  
  /** CTA button click handler */
  onCtaClick?: () => void;
  
  /** Whether this is the popular/recommended plan */
  isPopular?: boolean;
  
  /** Whether this plan is currently selected */
  isSelected?: boolean;
  
  /** Optional badge text */
  badge?: string;
}

export interface PricingSectionProps {
  /** Section badge/label */
  badge?: string;
  
  /** Section title (required) */
  title: string;
  
  /** Section subtitle */
  subtitle?: string;
  
  /** Section description */
  description?: string;
  
  /** Array of pricing plans (required) */
  plans: PricingPlan[];
  
  /** Whether to show billing toggle (monthly/yearly) */
  billingToggle?: boolean;
  
  /** Default billing period */
  defaultBilling?: 'monthly' | 'yearly';
  
  /** Yearly discount percentage (for display) */
  yearlyDiscount?: number;
  
  /** Number of columns for grid layout */
  columns?: {
    base?: 1 | 2 | 3 | 4;
    md?: 1 | 2 | 3 | 4;
    lg?: 1 | 2 | 3 | 4;
  };
  
  /** Background style */
  background?: 'white' | 'gray' | 'gradient';
  
  /** Text alignment */
  textAlign?: 'left' | 'center';
  
  /** Custom content before pricing cards */
  headerContent?: React.ReactNode;
  
  /** Custom content after pricing cards */
  footerContent?: React.ReactNode;
  
  /** Additional CSS classes */
  className?: string;
}

export function PricingSection({
  badge,
  title,
  subtitle,
  description,
  plans,
  billingToggle = false,
  defaultBilling = 'monthly',
  yearlyDiscount,
  columns = { base: 1, md: 2, lg: 3 },
  background = 'gray',
  textAlign = 'center',
  headerContent,
  footerContent,
  className = '',
}: PricingSectionProps) {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>(defaultBilling);

  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-b from-white to-gray-50',
  };

  // Get price based on billing period
  const getPrice = (plan: PricingPlan) => {
    if (typeof plan.price === 'object' && 'monthly' in plan.price) {
      return billingPeriod === 'monthly' ? plan.price.monthly : plan.price.yearly;
    }
    return plan.price;
  };

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

        {/* Billing Toggle */}
        {billingToggle && (
          <div className="mt-12 flex items-center justify-center gap-4">
            <span
              className={`text-sm font-medium transition-colors ${
                billingPeriod === 'monthly' ? 'text-gray-900' : 'text-gray-500'
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className={`
                relative inline-flex h-8 w-14 items-center rounded-full transition-colors
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2
                ${billingPeriod === 'yearly' ? 'bg-blue-600' : 'bg-gray-300'}
              `.trim()}
              role="switch"
              aria-checked={billingPeriod === 'yearly'}
              aria-label="Toggle billing period"
            >
              <span
                className={`
                  inline-block h-6 w-6 transform rounded-full bg-white transition-transform
                  ${billingPeriod === 'yearly' ? 'translate-x-7' : 'translate-x-1'}
                `.trim()}
              />
            </button>
            <span
              className={`text-sm font-medium transition-colors ${
                billingPeriod === 'yearly' ? 'text-gray-900' : 'text-gray-500'
              }`}
            >
              Yearly
            </span>
            {yearlyDiscount && billingPeriod === 'yearly' && (
              <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                Save {yearlyDiscount}%
              </span>
            )}
          </div>
        )}

        {/* Pricing Cards */}
        <div className="mt-16 sm:mt-20">
          <GridLayout cols={columns} gap="lg">
            {plans.map((plan, index) => (
              <PricingCard
                key={index}
                planName={plan.name}
                price={getPrice(plan)}
                period={billingToggle ? billingPeriod : undefined}
                description={plan.description}
                features={plan.features}
                ctaText={plan.ctaText}
                onCtaClick={plan.onCtaClick}
                isPopular={plan.isPopular}
                isSelected={plan.isSelected}
                currency={plan.currency}
              />
            ))}
          </GridLayout>
        </div>

        {/* Custom Footer Content */}
        {footerContent && (
          <div className="mt-16 text-center">
            {footerContent}
          </div>
        )}

        {/* FAQ Link */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Have questions?{' '}
            <a href="/faq" className="font-semibold text-blue-600 hover:text-blue-700">
              Check our FAQ
            </a>
            {' '}or{' '}
            <a href="/contact" className="font-semibold text-blue-600 hover:text-blue-700">
              contact us
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
