'use client';

import { useEffect } from 'react';
import { X, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './button';

/**
 * MobileMenu Component
 * 
 * A full-screen mobile navigation menu with smooth animations and backdrop.
 * Includes body scroll lock and keyboard navigation support.
 * 
 * @example
 * <MobileMenu
 *   isOpen={isMobileMenuOpen}
 *   onClose={() => setIsMobileMenuOpen(false)}
 *   items={navigationItems}
 * />
 */

export interface MobileMenuItem {
  /** Menu item label */
  label: string;
  
  /** Link destination */
  href: string;
  
  /** Optional icon */
  icon?: LucideIcon;
  
  /** Optional badge text */
  badge?: string;
  
  /** Whether item is disabled */
  disabled?: boolean;
}

export interface MobileMenuProps {
  /** Whether menu is open */
  isOpen: boolean;
  
  /** Close handler */
  onClose: () => void;
  
  /** Navigation items */
  items: MobileMenuItem[];
  
  /** Optional CTA buttons */
  ctaButtons?: {
    label: string;
    href: string;
    variant?: 'primary' | 'outline';
  }[];
  
  /** Optional logo component */
  logo?: React.ReactNode;
}

export function MobileMenu({
  isOpen,
  onClose,
  items,
  ctaButtons = [],
  logo,
}: MobileMenuProps) {
  const pathname = usePathname();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Close menu when route changes
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-white z-50 shadow-2xl animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            {logo || (
              <span className="text-xl font-bold text-gray-900">
                CTC Club
              </span>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-2" role="list">
              {items.map((item, index) => {
                const Icon = item.icon;
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={`
                        flex items-center gap-3 px-4 py-3 rounded-lg
                        text-base font-medium transition-all duration-200
                        ${item.disabled
                          ? 'text-gray-400 cursor-not-allowed'
                          : isActive
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }
                      `.trim()}
                      aria-current={isActive ? 'page' : undefined}
                      aria-disabled={item.disabled}
                      tabIndex={item.disabled ? -1 : undefined}
                    >
                      {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
                      <span className="flex-1">{item.label}</span>
                      {item.badge && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTA Buttons */}
          {ctaButtons.length > 0 && (
            <div className="p-6 border-t border-gray-200 space-y-3">
              {ctaButtons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || 'primary'}
                  size="lg"
                  fullWidth
                  href={button.href}
                >
                  {button.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
