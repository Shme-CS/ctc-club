import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { FeatureCard } from '@/components/ui/feature-card';
import { GridLayout } from '@/components/ui/grid-layout';

/**
 * FeaturesSection Component
 * 
 * A professional, reusable features section for showcasing product capabilities,
 * benefits, and key features with icons, titles, and descriptions.
 * 
 * @example
 * <FeaturesSection
 *   badge="Platform Features"
 *   title="Everything You Need to Succeed"
 *   description="A complete learning ecosystem designed for students."
 *   features={[
 *     {
 *       icon: BookOpen,
 *       title: 'Structured Courses',
 *       description: 'Follow curated learning paths with video lessons.'
 *     }
 *   ]}
 * />
 */

export interface Feature {
  /** Feature icon */
  icon: LucideIcon;
  
  /** Feature title */
  title: string;
  
  /** Feature description */
  description: string;
  
  /** Optional link destination */
  href?: string;
  
  /** Icon variant */
  iconVariant?: 'primary' | 'secondary' | 'success' | 'danger';
  
  /** Icon size */
  iconSize?: 'sm' | 'md' | 'lg';
}

export interface FeaturesSectionProps {
  /** Section badge/label */
  badge?: string;
  
  /** Section title (required) */
  title: string;
  
  /** Section subtitle */
  subtitle?: string;
  
  /** Section description */
  description?: string;
  
  /** Array of features (required) */
  features: Feature[];
  
  /** Layout variant */
  variant?: 'grid' | 'list' | 'alternating';
  
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
  
  /** Whether to show feature cards with borders */
  bordered?: boolean;
  
  /** Whether to show hover effects on cards */
  hoverable?: boolean;
  
  /** Custom content before features */
  headerContent?: ReactNode;
  
  /** Custom content after features */
  footerContent?: ReactNode;
  
  /** Additional CSS classes */
  className?: string;
}

export function FeaturesSection({
  badge,
  title,
  subtitle,
  description,
  features,
  variant = 'grid',
  columns = { base: 1, md: 2, lg: 3 },
  background = 'gray',
  textAlign = 'center',
  bordered = false,
  hoverable = true,
  headerContent,
  footerContent,
  className = '',
}: FeaturesSectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-b from-white to-gray-50',
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

          {/* Features Grid */}
          <div className="mt-16 sm:mt-20">
            <GridLayout
              cols={columns}
              gap="lg"
              className={hoverable ? '' : 'pointer-events-none'}
            >
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  href={feature.href}
                  iconVariant={feature.iconVariant || 'primary'}
                  iconSize={feature.iconSize || 'md'}
                  className={bordered ? 'ring-1 ring-gray-200' : ''}
                />
              ))}
            </GridLayout>
          </div>

          {/* Custom Footer Content */}
          {footerContent && (
            <div className="mt-16">
              {footerContent}
            </div>
          )}
        </Container>
      </section>
    );
  }

  // List variant (single column, larger cards)
  if (variant === 'list') {
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

          <div className="mt-16 space-y-8 sm:mt-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`
                  flex flex-col gap-6 p-8 rounded-2xl transition-all duration-300
                  ${bordered ? 'ring-1 ring-gray-200' : ''}
                  ${hoverable ? 'hover:shadow-lg hover:ring-blue-600' : ''}
                  sm:flex-row sm:items-start
                `.trim()}
              >
                <div className="flex-shrink-0">
                  <div className={`
                    inline-flex items-center justify-center rounded-lg p-3
                    ${feature.iconVariant === 'secondary' ? 'bg-purple-100' :
                      feature.iconVariant === 'success' ? 'bg-green-100' :
                      feature.iconVariant === 'danger' ? 'bg-red-100' :
                      'bg-blue-100'}
                  `}>
                    <feature.icon className={`
                      ${feature.iconVariant === 'secondary' ? 'text-purple-600' :
                        feature.iconVariant === 'success' ? 'text-green-600' :
                        feature.iconVariant === 'danger' ? 'text-red-600' :
                        'text-blue-600'}
                      ${feature.iconSize === 'sm' ? 'h-5 w-5' :
                        feature.iconSize === 'lg' ? 'h-8 w-8' :
                        'h-6 w-6'}
                    `} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  {feature.href && (
                    <a
                      href={feature.href}
                      className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn more →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {footerContent && <div className="mt-16">{footerContent}</div>}
        </Container>
      </section>
    );
  }

  // Alternating variant (zigzag layout)
  if (variant === 'alternating') {
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

          <div className="mt-16 space-y-24 sm:mt-20">
            {features.map((feature, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`
                    flex flex-col gap-8 items-center
                    lg:flex-row lg:gap-16
                    ${isEven ? '' : 'lg:flex-row-reverse'}
                  `.trim()}
                >
                  {/* Icon/Visual */}
                  <div className="flex-shrink-0">
                    <div className={`
                      inline-flex items-center justify-center rounded-2xl p-8
                      ${feature.iconVariant === 'secondary' ? 'bg-purple-100' :
                        feature.iconVariant === 'success' ? 'bg-green-100' :
                        feature.iconVariant === 'danger' ? 'bg-red-100' :
                        'bg-blue-100'}
                    `}>
                      <feature.icon className={`
                        ${feature.iconVariant === 'secondary' ? 'text-purple-600' :
                          feature.iconVariant === 'success' ? 'text-green-600' :
                          feature.iconVariant === 'danger' ? 'text-red-600' :
                          'text-blue-600'}
                        h-16 w-16
                      `} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                    {feature.href && (
                      <a
                        href={feature.href}
                        className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        Learn more →
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {footerContent && <div className="mt-16">{footerContent}</div>}
        </Container>
      </section>
    );
  }

  return null;
}
