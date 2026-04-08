'use client';

import { Check, X } from 'lucide-react';
import { Button } from './button';
import { Badge } from './badge';
import { useState } from 'react';

/**
 * PricingCard Component
 * 
 * An interactive card component for displaying pricing tiers with features and CTA.
 * Designed for pricing sections and subscription pages with selection states.
 * 
 * @example
 * <PricingCard
 *   planName="Pro"
 *   price={49}
 *   period="month"
 *   description="Perfect for growing teams"
 *   features={[
 *     { name: 'Unlimited courses', included: true },
 *     { name: 'Priority support', included: true },
 *     { name: 'Custom branding', included: false }
 *   ]}
 *   ctaText="Start Free Trial"
 *   onCtaClick={() => console.log('Subscribe')}
 *   isPopular
 * />
 */

export interface PricingFeature {
  /** Feature name */
  name: string;
  
  /** Whether feature is included in plan */
  included: boolean;
  
  /** Optional tooltip/description */
  description?: string;
}

export interface PricingCardProps {
  /** Plan name (e.g., "Free", "Pro", "Enterprise") */
  planName: string;
  
  /** Price amount (number) */
  price: number | string;
  
  /** Billing period (e.g., "month", "year") */
  period?: string;
  
  /** Plan description */
  description?: string;
  
  /** List of features with inclusion status */
  features: PricingFeature[];
  
  /** CTA button text */
  ctaText?: string;
  
  /** CTA button click handler */
  onCtaClick?: () => void;
  
  /** Whether this is the popular/recommended plan */
  isPopular?: boolean;
  
  /** Whether the plan is currently selected */
  isSelected?: boolean;
  
  /** Loading state (e.g., during checkout) */
  isLoading?: boolean;
  
  /** Currency symbol */
  currency?: string;
  
  /** Additional CSS classes */
  className?: string;
}

export function PricingCard({
  planName,
  price,
  period = 'month',
  description,
  features,
  ctaText = 'Get Started',
  onCtaClick,
  isPopular = false,
  isSelected = false,
  isLoading = false,
  currency = '$',
  className = '',
}: PricingCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        relative flex flex-col p-8 rounded-2xl bg-white
        transition-all duration-300
        ${isPopular || isSelected
          ? 'ring-2 ring-blue-600 shadow-2xl scale-105 lg:scale-110'
          : 'ring-1 ring-gray-200 hover:shadow-xl hover:ring-blue-600'
        }
        ${className}
      `.trim()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge variant="primary" size="lg">
            Most Popular
          </Badge>
        </div>
      )}

      {/* Plan Name */}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        {planName}
      </h3>

      {/* Description */}
      {description && (
        <p className="text-gray-600 mb-6">
          {description}
        </p>
      )}

      {/* Price */}
      <div className="mb-8">
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-bold text-gray-900">
            {typeof price === 'number' ? `${currency}${price}` : price}
          </span>
          {period && typeof price === 'number' && (
            <span className="text-gray-600">
              /{period}
            </span>
          )}
        </div>
      </div>

      {/* Features List */}
      <ul className="space-y-4 mb-8 flex-1" role="list">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-3"
            title={feature.description}
          >
            {feature.included ? (
              <Check
                className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5"
                aria-label="Included"
              />
            ) : (
              <X
                className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5"
                aria-label="Not included"
              />
            )}
            <span
              className={`${
                feature.included ? 'text-gray-900' : 'text-gray-500 line-through'
              }`}
            >
              {feature.name}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Button
        variant={isPopular || isSelected ? 'primary' : 'outline'}
        size="lg"
        fullWidth
        onClick={onCtaClick}
        loading={isLoading}
        disabled={isLoading}
      >
        {isSelected ? 'Current Plan' : ctaText}
      </Button>

      {/* Hover Effect Overlay */}
      {isHovered && !isPopular && !isSelected && (
        <div className="absolute inset-0 rounded-2xl bg-blue-50/50 pointer-events-none transition-opacity" />
      )}
    </div>
  );
}
