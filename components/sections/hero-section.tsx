import { ReactNode } from 'react';
import Image from 'next/image';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';

/**
 * HeroSection Component
 * 
 * A professional, reusable hero section for landing pages with multiple variants,
 * CTAs, badges, and flexible content configuration.
 * 
 * @example
 * <HeroSection
 *   badge={{ label: 'New Feature', variant: 'primary' }}
 *   headline="Learn Tech Skills. Build Real Projects."
 *   subheadline="The ultimate learning platform for university students."
 *   primaryCta={{ label: 'Get Started', href: '/signup' }}
 *   secondaryCta={{ label: 'Learn More', href: '/about' }}
 *   image="/hero-image.jpg"
 * />
 */

export interface HeroCTA {
  /** CTA button label */
  label: string;
  
  /** CTA destination */
  href: string;
  
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  
  /** Button size */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  
  /** Optional icon */
  icon?: LucideIcon;
  
  /** Icon position */
  iconPosition?: 'left' | 'right';
  
  /** Click handler */
  onClick?: () => void;
}

export interface HeroBadge {
  /** Badge label */
  label: string;
  
  /** Badge variant */
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  
  /** Optional icon */
  icon?: ReactNode;
  
  /** Optional link */
  href?: string;
}

export interface HeroSocialProof {
  /** Avatars (image URLs or components) */
  avatars?: (string | ReactNode)[];
  
  /** Social proof text */
  text: string;
  
  /** Optional subtext */
  subtext?: string;
}

export interface HeroSectionProps {
  /** Main headline (required) */
  headline: string | ReactNode;
  
  /** Subheadline/description */
  subheadline?: string | ReactNode;
  
  /** Optional badge/announcement */
  badge?: HeroBadge;
  
  /** Primary CTA button */
  primaryCta?: HeroCTA;
  
  /** Secondary CTA button */
  secondaryCta?: HeroCTA;
  
  /** Hero image URL */
  image?: string;
  
  /** Image alt text */
  imageAlt?: string;
  
  /** Background video URL */
  videoUrl?: string;
  
  /** Social proof element */
  socialProof?: HeroSocialProof;
  
  /** Layout variant */
  variant?: 'centered' | 'split' | 'minimal' | 'full-width';
  
  /** Background style */
  background?: 'white' | 'gray' | 'gradient' | 'dark' | 'image';
  
  /** Background image URL (for background='image') */
  backgroundImage?: string;
  
  /** Text alignment */
  textAlign?: 'left' | 'center';
  
  /** Whether to show pattern overlay */
  showPattern?: boolean;
  
  /** Additional content (custom elements) */
  children?: ReactNode;
  
  /** Additional CSS classes */
  className?: string;
}

export function HeroSection({
  headline,
  subheadline,
  badge,
  primaryCta,
  secondaryCta,
  image,
  imageAlt = 'Hero image',
  videoUrl,
  socialProof,
  variant = 'split',
  background = 'gradient',
  backgroundImage,
  textAlign = 'left',
  showPattern = false,
  children,
  className = '',
}: HeroSectionProps) {
  // Background classes
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-blue-50 via-white to-purple-50',
    dark: 'bg-gray-900 text-white',
    image: 'bg-cover bg-center bg-no-repeat',
  };

  // Variant-specific layout
  const isCentered = variant === 'centered' || variant === 'minimal';
  const isSplit = variant === 'split';
  const isFullWidth = variant === 'full-width';

  return (
    <section
      className={`
        relative overflow-hidden
        ${backgroundClasses[background]}
        ${className}
      `.trim()}
      style={
        background === 'image' && backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      {/* Background Pattern Overlay */}
      {showPattern && (
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Video Background */}
      {videoUrl && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gray-900/50" />
        </div>
      )}

      <Container className="relative z-10">
        <div
          className={`
            py-20 sm:py-32 lg:py-40
            ${isCentered ? 'text-center' : ''}
            ${isSplit ? 'lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center' : ''}
          `.trim()}
        >
          {/* Content Section */}
          <div
            className={`
              ${isCentered ? 'mx-auto max-w-3xl' : ''}
              ${isSplit ? 'lg:col-span-7' : ''}
              ${isFullWidth ? 'max-w-4xl' : ''}
            `.trim()}
          >
            {/* Badge */}
            {badge && (
              <div className={`mb-8 ${isCentered ? 'flex justify-center' : ''}`}>
                {badge.href ? (
                  <a
                    href={badge.href}
                    className="inline-flex items-center gap-2 transition-transform hover:scale-105"
                  >
                    <Badge variant={badge.variant || 'primary'}>
                      {badge.icon && <span className="mr-1">{badge.icon}</span>}
                      {badge.label}
                    </Badge>
                  </a>
                ) : (
                  <Badge variant={badge.variant || 'primary'}>
                    {badge.icon && <span className="mr-1">{badge.icon}</span>}
                    {badge.label}
                  </Badge>
                )}
              </div>
            )}

            {/* Headline */}
            <h1
              className={`
                text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl
                ${background === 'dark' ? 'text-white' : 'text-gray-900'}
                ${textAlign === 'center' ? 'text-center' : ''}
              `.trim()}
            >
              {headline}
            </h1>

            {/* Subheadline */}
            {subheadline && (
              <p
                className={`
                  mt-6 text-lg leading-8 sm:text-xl
                  ${background === 'dark' ? 'text-gray-300' : 'text-gray-600'}
                  ${textAlign === 'center' ? 'text-center' : ''}
                `.trim()}
              >
                {subheadline}
              </p>
            )}

            {/* CTAs */}
            {(primaryCta || secondaryCta) && (
              <div
                className={`
                  mt-10 flex flex-col gap-4 sm:flex-row
                  ${isCentered ? 'justify-center' : ''}
                `.trim()}
              >
                {primaryCta && (
                  <Button
                    variant={primaryCta.variant || 'primary'}
                    size={primaryCta.size || 'lg'}
                    href={primaryCta.href}
                    onClick={primaryCta.onClick}
                    leftIcon={
                      primaryCta.icon && primaryCta.iconPosition === 'left'
                        ? primaryCta.icon
                        : undefined
                    }
                    rightIcon={
                      primaryCta.icon && primaryCta.iconPosition === 'right'
                        ? primaryCta.icon
                        : undefined
                    }
                  >
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button
                    variant={secondaryCta.variant || 'outline'}
                    size={secondaryCta.size || 'lg'}
                    href={secondaryCta.href}
                    onClick={secondaryCta.onClick}
                    leftIcon={
                      secondaryCta.icon && secondaryCta.iconPosition === 'left'
                        ? secondaryCta.icon
                        : undefined
                    }
                    rightIcon={
                      secondaryCta.icon && secondaryCta.iconPosition === 'right'
                        ? secondaryCta.icon
                        : undefined
                    }
                  >
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}

            {/* Social Proof */}
            {socialProof && (
              <div
                className={`
                  mt-10 flex items-center gap-x-6
                  ${isCentered ? 'justify-center' : ''}
                `.trim()}
              >
                {socialProof.avatars && socialProof.avatars.length > 0 && (
                  <div className="flex -space-x-2">
                    {socialProof.avatars.map((avatar, index) => (
                      <div
                        key={index}
                        className="h-10 w-10 rounded-full bg-gray-200 ring-2 ring-white overflow-hidden"
                      >
                        {typeof avatar === 'string' ? (
                          <Image
                            src={avatar}
                            alt={`User ${index + 1}`}
                            width={40}
                            height={40}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          avatar
                        )}
                      </div>
                    ))}
                  </div>
                )}
                <div className="text-sm">
                  <p
                    className={`font-semibold ${
                      background === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {socialProof.text}
                  </p>
                  {socialProof.subtext && (
                    <p
                      className={
                        background === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }
                    >
                      {socialProof.subtext}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Custom Children */}
            {children && <div className="mt-10">{children}</div>}
          </div>

          {/* Image Section (for split variant) */}
          {isSplit && image && (
            <div className="mt-16 lg:col-span-5 lg:mt-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-2xl lg:aspect-auto lg:h-[600px]">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}

          {/* Image Section (for centered variant) */}
          {isCentered && image && (
            <div className="mt-16">
              <div className="relative mx-auto aspect-video max-w-5xl overflow-hidden rounded-2xl bg-gray-100 shadow-2xl">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
