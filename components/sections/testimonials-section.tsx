import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { GridLayout } from '@/components/ui/grid-layout';

/**
 * TestimonialsSection Component
 * 
 * A professional, reusable testimonials section for displaying customer reviews,
 * success stories, and social proof with ratings and author information.
 * 
 * @example
 * <TestimonialsSection
 *   badge="Student Success"
 *   title="Loved by 5,000+ Students"
 *   description="See what our students have to say"
 *   testimonials={[
 *     {
 *       quote: "CTC Club transformed my learning journey!",
 *       author: "Sarah Chen",
 *       role: "Computer Science Student",
 *       company: "MIT",
 *       avatar: "/avatars/sarah.jpg",
 *       rating: 5
 *     }
 *   ]}
 * />
 */

export interface Testimonial {
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
}

export interface TestimonialsSectionProps {
  /** Section badge/label */
  badge?: string;
  
  /** Section title (required) */
  title: string;
  
  /** Section subtitle */
  subtitle?: string;
  
  /** Section description */
  description?: string;
  
  /** Array of testimonials (required) */
  testimonials: Testimonial[];
  
  /** Layout variant */
  variant?: 'grid' | 'masonry' | 'carousel';
  
  /** Card variant */
  cardVariant?: 'default' | 'bordered' | 'elevated';
  
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
  
  /** Whether to show all ratings */
  showRatings?: boolean;
  
  /** Custom content before testimonials */
  headerContent?: React.ReactNode;
  
  /** Custom content after testimonials */
  footerContent?: React.ReactNode;
  
  /** Additional CSS classes */
  className?: string;
}

export function TestimonialsSection({
  badge,
  title,
  subtitle,
  description,
  testimonials,
  variant = 'grid',
  cardVariant = 'default',
  columns = { base: 1, md: 2, lg: 3 },
  background = 'white',
  textAlign = 'center',
  showRatings = true,
  headerContent,
  footerContent,
  className = '',
}: TestimonialsSectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-b from-gray-50 to-white',
  };

  // Grid variant (default)
  if (variant === 'grid') {
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

          {/* Testimonials Grid */}
          <div className="mt-16 sm:mt-20">
            <GridLayout cols={columns} gap="lg">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  company={testimonial.company}
                  avatar={testimonial.avatar}
                  rating={showRatings ? testimonial.rating : undefined}
                  showQuoteIcon={testimonial.showQuoteIcon}
                  variant={cardVariant}
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
        </Container>
      </section>
    );
  }

  // Masonry variant (staggered heights)
  if (variant === 'masonry') {
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

          {/* Masonry Layout */}
          <div className="mt-16 sm:mt-20">
            <div className="columns-1 gap-8 md:columns-2 lg:columns-3 space-y-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="break-inside-avoid">
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                    company={testimonial.company}
                    avatar={testimonial.avatar}
                    rating={showRatings ? testimonial.rating : undefined}
                    showQuoteIcon={testimonial.showQuoteIcon}
                    variant={cardVariant}
                  />
                </div>
              ))}
            </div>
          </div>

          {footerContent && <div className="mt-16 text-center">{footerContent}</div>}
        </Container>
      </section>
    );
  }

  // Carousel variant (horizontal scroll on mobile, grid on desktop)
  if (variant === 'carousel') {
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

          {/* Carousel Layout */}
          <div className="mt-16 sm:mt-20">
            {/* Mobile: Horizontal scroll */}
            <div className="lg:hidden">
              <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[85vw] max-w-md snap-center"
                  >
                    <TestimonialCard
                      quote={testimonial.quote}
                      author={testimonial.author}
                      role={testimonial.role}
                      company={testimonial.company}
                      avatar={testimonial.avatar}
                      rating={showRatings ? testimonial.rating : undefined}
                      showQuoteIcon={testimonial.showQuoteIcon}
                      variant={cardVariant}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: Grid */}
            <div className="hidden lg:block">
              <GridLayout cols={columns} gap="lg">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                    company={testimonial.company}
                    avatar={testimonial.avatar}
                    rating={showRatings ? testimonial.rating : undefined}
                    showQuoteIcon={testimonial.showQuoteIcon}
                    variant={cardVariant}
                  />
                ))}
              </GridLayout>
            </div>
          </div>

          {footerContent && <div className="mt-16 text-center">{footerContent}</div>}
        </Container>
      </section>
    );
  }

  return null;
}
