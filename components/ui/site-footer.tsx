import { ReactNode } from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

/**
 * SiteFooter Component
 * 
 * Site-wide footer with navigation links, social media, and newsletter signup.
 * Provides consistent footer across all pages with flexible configuration.
 * 
 * @example
 * <SiteFooter
 *   logo={<Logo />}
 *   description="The ultimate learning platform for university students."
 *   sections={[
 *     {
 *       title: 'Product',
 *       links: [
 *         { label: 'Features', href: '/features' },
 *         { label: 'Pricing', href: '/pricing' }
 *       ]
 *     }
 *   ]}
 *   socialLinks={[
 *     { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
 *   ]}
 * />
 */

export interface FooterLink {
  /** Link label */
  label: string;
  
  /** Link destination */
  href: string;
  
  /** Whether link is external */
  external?: boolean;
}

export interface FooterSection {
  /** Section title */
  title: string;
  
  /** Section links */
  links: FooterLink[];
}

export interface SocialLink {
  /** Social media icon */
  icon: LucideIcon;
  
  /** Link destination */
  href: string;
  
  /** Accessible label */
  label: string;
}

export interface SiteFooterProps {
  /** Logo component */
  logo?: ReactNode;
  
  /** Company/site description */
  description?: string;
  
  /** Footer sections with links */
  sections?: FooterSection[];
  
  /** Social media links */
  socialLinks?: SocialLink[];
  
  /** Copyright text (defaults to current year) */
  copyright?: string;
  
  /** Newsletter signup component */
  newsletter?: ReactNode;
  
  /** Minimal variant (fewer sections) */
  minimal?: boolean;
  
  /** Additional CSS classes */
  className?: string;
}

export function SiteFooter({
  logo,
  description,
  sections = [],
  socialLinks = [],
  copyright,
  newsletter,
  minimal = false,
  className = '',
}: SiteFooterProps) {
  const currentYear = new Date().getFullYear();
  const copyrightText = copyright || `© ${currentYear} CTC Club. All rights reserved.`;

  if (minimal) {
    return (
      <footer className={`bg-white border-t border-gray-200 ${className}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            {/* Logo */}
            {logo && <div>{logo}</div>}
            
            {/* Copyright */}
            <p className="text-sm text-gray-600">{copyrightText}</p>
            
            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={`bg-gray-50 border-t border-gray-200 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              {logo && <div className="mb-4">{logo}</div>}
              {description && (
                <p className="text-gray-600 leading-relaxed mb-6">
                  {description}
                </p>
              )}
              
              {/* Social Links */}
              {socialLinks.length > 0 && (
                <div className="flex items-center gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                        aria-label={social.label}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Link Sections */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
                {sections.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-sm font-semibold text-gray-900 mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-3" role="list">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          {link.external ? (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                            >
                              {link.label}
                            </a>
                          ) : (
                            <Link
                              href={link.href}
                              className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                            >
                              {link.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          {newsletter && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              {newsletter}
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <p className="text-sm text-gray-600 text-center">
            {copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
}
