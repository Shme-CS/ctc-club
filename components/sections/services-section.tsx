import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { ServiceCard } from '@/components/ui/service-card';
import { GridLayout } from '@/components/ui/grid-layout';
import { Button } from '@/components/ui/button';

/**
 * ServicesSection Component
 * 
 * A professional, reusable services section for showcasing service offerings,
 * packages, or product tiers with detailed features and CTAs.
 * 
 * @example
 * <ServicesSection
 *   badge="Our Services"
 *   title="Choose Your Learning Path"
 *   description="Select the perfect plan for your goals"
 *   services={[
 *     {
 *       icon: Zap,
 *       title: 'Basic Plan',
 *       description: 'Perfect for beginners',
 *       features: ['10 courses', 'Community support'],
 *       ctaText: 'Get Started',
 *       ctaHref: '/signup'
 *     }
 *   ]}
 * />
 */

export interface Service {
  /** Service icon */
  icon: LucideIcon;
  
  /** Service title */
  title: string;
  
  /** Service description */
  description: string;
  
  /** List of service features */
  features?: string[];
  
  /** CTA button text */
  ctaText?: string;
  
  /** CTA button link */
  ctaHref?: string;
  
  /** CTA button click handler */
  onCtaClick?: () => void;
  
  /** Optional badge (e.g., "Popular", "New") */
  badge?: string;
  
  /** Badge variant */
  badgeVariant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  
  /** Icon variant */
  iconVariant?: 'primary' | 'secondary' | 'success' | 'danger';
  
  /** Whether the service is highlighted/active */
  isHighlighted?: boolean;
  
  /** Optional price */
  price?: string | number;
  
  /** Optional price period */
  pricePeriod?: string;
}

export interface ServicesSectionProps {
  /** Section badge/label */
  badge?: string;
  
  /** Section title (required) */
  title: string;
  
  /** Section subtitle */
  subtitle?: string;
  
  /** Section description */
  description?: string;
  
  /** Array of services (required) */
  services: Service[];
  
  /** Layout variant */
  variant?: 'cards' | 'compact' | 'detailed';
  
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
  
  /** Whether to show pricing */
  showPricing?: boolean;
  
  /** Custom content before services */
  headerContent?: ReactNode;
  
  /** Custom content after services */
  footerContent?: ReactNode;
  
  /** Additional CSS classes */
  className?: string;
}

export function ServicesSection({
  badge,
  title,
  subtitle,
  description,
  services,
  variant = 'cards',
  columns = { base: 1, md: 2, lg: 3 },
  background = 'white',
  textAlign = 'center',
  showPricing = false,
  headerContent,
  footerContent,
  className = '',
}: ServicesSectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-b from-gray-50 to-white',
  };

  // Cards variant (default - using ServiceCard component)
  if (variant === 'cards') {
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

          {/* Services Grid */}
          <div className="mt-16 sm:mt-20">
            <GridLayout cols={columns} gap="lg">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  ctaText={service.ctaText}
                  ctaHref={service.ctaHref}
                  onCtaClick={service.onCtaClick}
                  badge={service.badge}
                  badgeVariant={service.badgeVariant}
                  iconVariant={service.iconVariant}
                  isActive={service.isHighlighted}
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

  // Compact variant (minimal cards with pricing)
  if (variant === 'compact') {
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

          <div className="mt-16 sm:mt-20">
            <GridLayout cols={columns} gap="md">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`
                    relative p-8 rounded-2xl transition-all duration-300
                    ${service.isHighlighted
                      ? 'ring-2 ring-blue-600 shadow-xl scale-105'
                      : 'ring-1 ring-gray-200 hover:shadow-lg hover:ring-blue-600'
                    }
                  `.trim()}
                >
                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
                        {service.badge}
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className={`
                      inline-flex items-center justify-center rounded-full p-4
                      ${service.iconVariant === 'secondary' ? 'bg-purple-100' :
                        service.iconVariant === 'success' ? 'bg-green-100' :
                        service.iconVariant === 'danger' ? 'bg-red-100' :
                        'bg-blue-100'}
                    `}>
                      <service.icon className={`
                        h-8 w-8
                        ${service.iconVariant === 'secondary' ? 'text-purple-600' :
                          service.iconVariant === 'success' ? 'text-green-600' :
                          service.iconVariant === 'danger' ? 'text-red-600' :
                          'text-blue-600'}
                      `} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                    {service.title}
                  </h3>

                  {/* Price */}
                  {showPricing && service.price && (
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold text-gray-900">
                        {typeof service.price === 'number' ? `$${service.price}` : service.price}
                      </span>
                      {service.pricePeriod && (
                        <span className="text-gray-600 ml-1">/{service.pricePeriod}</span>
                      )}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-gray-600 text-center mb-6">
                    {service.description}
                  </p>

                  {/* CTA */}
                  {(service.ctaText || service.ctaHref) && (
                    <Button
                      variant={service.isHighlighted ? 'primary' : 'outline'}
                      size="md"
                      fullWidth
                      href={service.ctaHref}
                      onClick={service.onCtaClick}
                    >
                      {service.ctaText || 'Learn More'}
                    </Button>
                  )}
                </div>
              ))}
            </GridLayout>
          </div>

          {footerContent && <div className="mt-16 text-center">{footerContent}</div>}
        </Container>
      </section>
    );
  }

  // Detailed variant (large cards with extensive features)
  if (variant === 'detailed') {
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

          <div className="mt-16 space-y-12 sm:mt-20">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`
                    flex flex-col gap-8 items-center p-8 rounded-2xl
                    ring-1 ring-gray-200 transition-all duration-300
                    hover:shadow-xl hover:ring-blue-600
                    lg:flex-row lg:gap-12
                    ${isEven ? '' : 'lg:flex-row-reverse'}
                    ${service.isHighlighted ? 'ring-2 ring-blue-600 shadow-lg' : ''}
                  `.trim()}
                >
                  {/* Icon Section */}
                  <div className="flex-shrink-0">
                    <div className={`
                      inline-flex items-center justify-center rounded-2xl p-8
                      ${service.iconVariant === 'secondary' ? 'bg-purple-100' :
                        service.iconVariant === 'success' ? 'bg-green-100' :
                        service.iconVariant === 'danger' ? 'bg-red-100' :
                        'bg-blue-100'}
                    `}>
                      <service.icon className={`
                        h-16 w-16
                        ${service.iconVariant === 'secondary' ? 'text-purple-600' :
                          service.iconVariant === 'success' ? 'text-green-600' :
                          service.iconVariant === 'danger' ? 'text-red-600' :
                          'text-blue-600'}
                      `} />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 text-center lg:text-left">
                    {/* Badge */}
                    {service.badge && (
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">
                        {service.badge}
                      </span>
                    )}

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    {/* Price */}
                    {showPricing && service.price && (
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-gray-900">
                          {typeof service.price === 'number' ? `$${service.price}` : service.price}
                        </span>
                        {service.pricePeriod && (
                          <span className="text-gray-600 ml-2">/{service.pricePeriod}</span>
                        )}
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    {service.features && service.features.length > 0 && (
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <svg
                              className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* CTA */}
                    {(service.ctaText || service.ctaHref) && (
                      <Button
                        variant={service.isHighlighted ? 'primary' : 'outline'}
                        size="lg"
                        href={service.ctaHref}
                        onClick={service.onCtaClick}
                      >
                        {service.ctaText || 'Learn More'}
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {footerContent && <div className="mt-16 text-center">{footerContent}</div>}
        </Container>
      </section>
    );
  }

  return null;
}
