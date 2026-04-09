'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from './button';
import { NavLink } from './nav-link';
import { DropdownMenu, DropdownMenuItem } from './dropdown-menu';
import { MobileMenu, MobileMenuItem } from './mobile-menu';

/**
 * Navbar Component
 * 
 * A professional, responsive navigation bar with sticky behavior, mobile menu,
 * and dropdown support. Includes scroll detection for styling changes.
 * 
 * @example
 * <Navbar
 *   logo={<Logo />}
 *   items={navigationItems}
 *   ctaButtons={[
 *     { label: 'Sign In', href: '/signin', variant: 'outline' },
 *     { label: 'Get Started', href: '/signup', variant: 'primary' }
 *   ]}
 * />
 */

export interface NavbarItem {
  /** Item label */
  label: string;
  
  /** Link destination (for simple links) */
  href?: string;
  
  /** Dropdown items (for dropdown menus) */
  dropdown?: DropdownMenuItem[];
  
  /** Optional icon */
  icon?: any;
  
  /** Whether item is disabled */
  disabled?: boolean;
}

export interface NavbarProps {
  /** Logo component or text */
  logo?: React.ReactNode;
  
  /** Navigation items */
  items?: NavbarItem[];
  
  /** CTA buttons */
  ctaButtons?: {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  }[];
  
  /** Whether navbar is sticky */
  sticky?: boolean;
  
  /** Whether to show scroll shadow */
  showScrollShadow?: boolean;
  
  /** Additional CSS classes */
  className?: string;
}

export function Navbar({
  logo,
  items = [],
  ctaButtons = [],
  sticky = true,
  showScrollShadow = true,
  className = '',
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll for styling changes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Convert items to mobile menu format
  const mobileMenuItems: MobileMenuItem[] = items.flatMap(item => {
    if (item.dropdown) {
      return item.dropdown.map(dropdownItem => ({
        label: `${item.label} - ${dropdownItem.label}`,
        href: dropdownItem.href,
        icon: dropdownItem.icon,
        disabled: dropdownItem.disabled,
      }));
    }
    return item.href ? [{
      label: item.label,
      href: item.href,
      icon: item.icon,
      disabled: item.disabled,
    }] : [];
  });

  return (
    <>
      <header
        className={`
          w-full z-30 transition-all duration-300
          ${sticky ? 'sticky top-0' : ''}
          ${isScrolled && showScrollShadow ? 'shadow-md' : ''}
          ${isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-white'}
          ${className}
        `.trim()}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              {logo || (
                <Link
                  href="/"
                  className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                >
                  CTC Club
                </Link>
              )}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-2">
              {items.map((item, index) => {
                if (item.dropdown) {
                  return (
                    <DropdownMenu
                      key={index}
                      trigger={item.label}
                      items={item.dropdown}
                      icon={item.icon}
                    />
                  );
                }

                if (item.href) {
                  return (
                    <NavLink
                      key={index}
                      href={item.href}
                      label={item.label}
                      icon={item.icon}
                      disabled={item.disabled}
                    />
                  );
                }

                return null;
              })}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex lg:items-center lg:gap-3">
              {ctaButtons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || 'primary'}
                  size="md"
                  href={button.href}
                >
                  {button.label}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              aria-label="Open mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={mobileMenuItems}
        ctaButtons={ctaButtons}
        logo={logo}
      />
    </>
  );
}
