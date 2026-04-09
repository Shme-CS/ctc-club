import { Star, Quote } from 'lucide-react';
import { Avatar } from './avatar';
import { Badge } from './badge';

/**
 * TestimonialCard Component
 * 
 * A card component for displaying customer testimonials with ratings and author info.
 * Perfect for social proof sections, reviews pages, and case studies.
 * 
 * @example
 * <TestimonialCard
 *   quote="CTC Club transformed my learning journey. Highly recommended!"
 *   author="Sarah Chen"
 *   role="Computer Science Student"
 *   company="MIT"
 *   avatar="https://example.com/avatar.jpg"
 *   rating={5}
 * />
 */

export interface TestimonialCardProps {
  /** Testimonial quote/content (required) */
  quote: string;
  
  /** Author name (required) */
  author: string;
  
  /** Author role/title */
  role?: string;
  
  /** Company/organization name */
  company?: string;
  
  /** Author avatar image URL */
  avatar?: string;
  
  /** Rating (1-5 stars) */
  rating?: number;
  
  /** Whether to show quote icon */
  showQuoteIcon?: boolean;
  
  /** Card variant style */
  variant?: 'default' | 'bordered' | 'elevated';
  
  /** Additional CSS classes */
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  rating = 5,
  showQuoteIcon = true,
  variant = 'default',
  className = '',
}: TestimonialCardProps) {
  // Ensure rating is between 0 and 5
  const validRating = Math.max(0, Math.min(5, rating));

  const variantClasses = {
    default: 'bg-gray-50',
    bordered: 'bg-white ring-1 ring-gray-200',
    elevated: 'bg-white shadow-md hover:shadow-xl',
  };

  return (
    <div
      className={`
        relative flex flex-col p-8 rounded-2xl
        transition-all duration-300
        ${variantClasses[variant]}
        ${className}
      `.trim()}
    >
      {/* Quote Icon */}
      {showQuoteIcon && (
        <Quote
          className="absolute right-8 top-8 h-10 w-10 text-blue-200"
          aria-hidden="true"
        />
      )}

      {/* Rating */}
      {validRating > 0 && (
        <div className="flex gap-1 mb-4" role="img" aria-label={`${validRating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`h-5 w-5 ${
                index < validRating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'fill-gray-200 text-gray-200'
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
      )}

      {/* Quote */}
      <blockquote className="text-gray-700 leading-relaxed mb-6 flex-1">
        <p className="text-lg">"{quote}"</p>
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        <Avatar
          src={avatar}
          alt={author}
          fallback={author?.split(' ').map(n => n[0]).join('') || 'U'}
          size="lg"
        />
        <div className="flex-1">
          <p className="font-semibold text-gray-900">{author}</p>
          {role && (
            <p className="text-sm text-gray-600">{role}</p>
          )}
          {company && (
            <Badge variant="secondary" size="sm" className="mt-1">
              {company}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}
