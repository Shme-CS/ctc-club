import { LucideIcon, Check } from 'lucide-react';
import { IconWrapper } from './icon-wrapper';
import { Button } from './button';
import { Badge } from './badge';

/**
 * ServiceCard Component
 * 
 * A comprehensive card component for displaying services with features list and CTA.
 * Ideal for services sections, offerings pages, and product showcases.
 * 
 * @example
 * <ServiceCard
 *   icon={Zap}
 *   title="Premium Support"
 *   description="Get 24/7 priority support from our expert team."
 *   features={['Live chat support', 'Priority tickets', 'Dedicated manager']}
 *   ctaText="Get Started"
 *   ctaHref="/signup"
 *   badge="Popular"
 * />
 */

export interface ServiceCardProps {
  /** Lucide icon component */
  icon: LucideIcon;
  
  /** Service title (required) */
  title: string;
  
  /** Service description (required) */
  description: string;
  
  /** List of service features */
  features?: string[];
  
  /** CTA button text */
  ctaText?: string;
  
  /** CTA button link */
  ctaHref?: string;
  
  /** CTA button click handler */
  onCtaClick?: () => void;
  
  /** Optional badge text (e.g., "Popular", "New") */
  badge?: string;
  
  /** Badge variant */
  badgeVariant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  
  /** Icon variant */
  iconVariant?: 'primary' | 'secondary' | 'success' | 'danger';
  
  /** Whether the card is selected/active */
  isActive?: boolean;
  
  /** Additional CSS classes */
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features = [],
  ctaText,
  ctaHref,
  onCtaClick,
  badge,
  badgeVariant = 'primary',
  iconVariant = 'primary',
  isActive = false,
  className = '',
}: ServiceCardProps) {
  return (
    <div
      className={`
        relative flex flex-col p-8 rounded-2xl bg-white
        transition-all duration-300
        ${isActive 
          ? 'ring-2 ring-blue-600 shadow-xl scale-105' 
          : 'ring-1 ring-gray-200 hover:shadow-lg hover:ring-blue-600'
        }
        ${className}
      `.trim()}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant={badgeVariant}>
            {badge}
          </Badge>
        </div>
      )}

      {/* Icon */}
      <div className="mb-6">
        <IconWrapper variant={iconVariant} size="lg">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </IconWrapper>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-6">
        {description}
      </p>

      {/* Features List */}
      {features.length > 0 && (
        <ul className="space-y-3 mb-8 flex-1" role="list">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA Button */}
      {(ctaText || ctaHref || onCtaClick) && (
        <Button
          variant={isActive ? 'primary' : 'outline'}
          size="lg"
          fullWidth
          href={ctaHref}
          onClick={onCtaClick}
        >
          {ctaText || 'Learn More'}
        </Button>
      )}
    </div>
  );
}
