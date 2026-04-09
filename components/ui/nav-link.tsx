'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

/**
 * NavLink Component
 * 
 * A navigation link with automatic active state detection based on current route.
 * Supports internal and external links with optional icons.
 * 
 * @example
 * <NavLink href="/courses" label="Courses" />
 * <NavLink href="/about" label="About" icon={Info} />
 * <NavLink href="https://blog.com" label="Blog" external />
 */

export interface NavLinkProps {
  /** Link destination (required) */
  href: string;
  
  /** Link label text (required) */
  label: string;
  
  /** Optional icon component */
  icon?: LucideIcon;
  
  /** Whether link is external */
  external?: boolean;
  
  /** Whether link is disabled */
  disabled?: boolean;
  
  /** Click handler */
  onClick?: () => void;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Show active indicator */
  showActiveIndicator?: boolean;
  
  /** Custom active check function */
  isActive?: (pathname: string) => boolean;
}

export function NavLink({
  href,
  label,
  icon: Icon,
  external = false,
  disabled = false,
  onClick,
  className = '',
  showActiveIndicator = true,
  isActive: customIsActive,
}: NavLinkProps) {
  const pathname = usePathname();
  
  // Determine if link is active
  const isActive = customIsActive 
    ? customIsActive(pathname)
    : pathname === href || pathname.startsWith(`${href}/`);

  // Base styles
  const baseClasses = `
    relative inline-flex items-center gap-2 px-3 py-2 rounded-lg
    text-sm font-medium transition-all duration-200
    ${disabled 
      ? 'text-gray-400 cursor-not-allowed' 
      : isActive
        ? 'text-blue-600 bg-blue-50'
        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
    }
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2
    ${className}
  `.trim();

  const content = (
    <>
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
      <span>{label}</span>
      {showActiveIndicator && isActive && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-blue-600 rounded-full" />
      )}
    </>
  );

  // External link
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        onClick={onClick}
        aria-disabled={disabled}
      >
        {content}
      </a>
    );
  }

  // Internal link
  return (
    <Link
      href={href}
      className={baseClasses}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
    >
      {content}
    </Link>
  );
}
