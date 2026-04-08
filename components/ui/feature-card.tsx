import { LucideIcon } from 'lucide-react';
import { IconWrapper } from './icon-wrapper';
import Link from 'next/link';

/**
 * FeatureCard Component
 * 
 * A reusable card component for displaying platform features with icon, title, and description.
 * Designed for features sections, landing pages, and product showcases.
 * 
 * @example
 * <FeatureCard
 *   icon={BookOpen}
 *   title="Structured Courses"
 *   description="Follow curated learning paths with video lessons and quizzes."
 *   href="/features/courses"
 * />
 */

export interface FeatureCardProps {
  /** Lucide icon component to display */
  icon: LucideIcon;
  
  /** Feature title (required) */
  title: string;
  
  /** Feature description (required) */
  description: string;
  
  /** Optional link destination */
  href?: string;
  
  /** Icon variant style */
  iconVariant?: 'primary' | 'secondary' | 'success' | 'danger';
  
  /** Icon size */
  iconSize?: 'sm' | 'md' | 'lg';
  
  /** Additional CSS classes */
  className?: string;
  
  /** Click handler (if not using href) */
  onClick?: () => void;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
  iconVariant = 'primary',
  iconSize = 'md',
  className = '',
  onClick,
}: FeatureCardProps) {
  const content = (
    <>
      {/* Icon */}
      <div className="mb-4">
        <IconWrapper variant={iconVariant} size={iconSize}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </IconWrapper>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </>
  );

  const baseClasses = `
    group relative flex flex-col p-6 rounded-2xl bg-white
    transition-all duration-300
    hover:shadow-lg hover:-translate-y-1
    ${href || onClick ? 'cursor-pointer' : ''}
    ${className}
  `.trim();

  // Render as link if href provided
  if (href) {
    return (
      <Link
        href={href}
        className={baseClasses}
        aria-label={`Learn more about ${title}`}
      >
        {content}
        {/* Hover indicator */}
        <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-blue-600 transition-all" />
      </Link>
    );
  }

  // Render as button if onClick provided
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={baseClasses}
        aria-label={title}
      >
        {content}
      </button>
    );
  }

  // Render as static div
  return (
    <div className={baseClasses}>
      {content}
    </div>
  );
}
