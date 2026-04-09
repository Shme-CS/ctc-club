import { ReactNode } from 'react';
import { ChevronRight, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from './button';
import { Badge } from './badge';

/**
 * Header Component
 * 
 * Reusable page header with title, subtitle, breadcrumbs, and action buttons.
 * Provides consistent page context and navigation across the application.
 * 
 * @example
 * <Header
 *   title="Course Dashboard"
 *   subtitle="Manage your learning journey"
 *   breadcrumbs={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Courses', href: '/courses' },
 *     { label: 'Dashboard' }
 *   ]}
 *   actions={
 *     <Button>Create Course</Button>
 *   }
 * />
 */

export interface Breadcrumb {
  /** Breadcrumb label */
  label: string;
  
  /** Link destination (optional for last item) */
  href?: string;
  
  /** Optional icon */
  icon?: LucideIcon;
}

export interface HeaderProps {
  /** Page title (required) */
  title: string;
  
  /** Optional subtitle/description */
  subtitle?: string;
  
  /** Optional badge next to title */
  badge?: {
    label: string;
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  };
  
  /** Breadcrumb navigation */
  breadcrumbs?: Breadcrumb[];
  
  /** Action buttons (right side) */
  actions?: ReactNode;
  
  /** Background variant */
  variant?: 'default' | 'gradient' | 'dark';
  
  /** Whether to center align content */
  centered?: boolean;
  
  /** Additional CSS classes */
  className?: string;
}

export function Header({
  title,
  subtitle,
  badge,
  breadcrumbs = [],
  actions,
  variant = 'default',
  centered = false,
  className = '',
}: HeaderProps) {
  const variantClasses = {
    default: 'bg-white border-b border-gray-200',
    gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white',
    dark: 'bg-gray-900 text-white',
  };

  const textColorClasses = {
    default: 'text-gray-900',
    gradient: 'text-white',
    dark: 'text-white',
  };

  const subtitleColorClasses = {
    default: 'text-gray-600',
    gradient: 'text-blue-100',
    dark: 'text-gray-400',
  };

  return (
    <header
      className={`
        ${variantClasses[variant]}
        ${className}
      `.trim()}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
              {breadcrumbs.map((crumb, index) => {
                const Icon = crumb.icon;
                const isLast = index === breadcrumbs.length - 1;

                return (
                  <li key={index} className="flex items-center gap-2">
                    {crumb.href ? (
                      <Link
                        href={crumb.href}
                        className={`
                          flex items-center gap-1.5 hover:underline
                          ${variant === 'default' ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'}
                        `.trim()}
                      >
                        {Icon && <Icon className="h-4 w-4" />}
                        {crumb.label}
                      </Link>
                    ) : (
                      <span
                        className={`
                          flex items-center gap-1.5 font-medium
                          ${variant === 'default' ? 'text-gray-900' : 'text-white'}
                        `.trim()}
                        aria-current="page"
                      >
                        {Icon && <Icon className="h-4 w-4" />}
                        {crumb.label}
                      </span>
                    )}
                    {!isLast && (
                      <ChevronRight
                        className={`h-4 w-4 ${variant === 'default' ? 'text-gray-400' : 'text-white/60'}`}
                        aria-hidden="true"
                      />
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        {/* Header Content */}
        <div
          className={`
            flex flex-col gap-4
            ${centered ? 'items-center text-center' : 'sm:flex-row sm:items-center sm:justify-between'}
          `.trim()}
        >
          {/* Title Section */}
          <div className={centered ? 'max-w-3xl' : 'flex-1'}>
            <div className="flex items-center gap-3 mb-2">
              <h1
                className={`
                  text-3xl font-bold tracking-tight sm:text-4xl
                  ${textColorClasses[variant]}
                `.trim()}
              >
                {title}
              </h1>
              {badge && (
                <Badge variant={badge.variant || 'primary'}>
                  {badge.label}
                </Badge>
              )}
            </div>
            {subtitle && (
              <p
                className={`
                  text-lg leading-relaxed
                  ${subtitleColorClasses[variant]}
                `.trim()}
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* Actions */}
          {actions && (
            <div className="flex items-center gap-3">
              {actions}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
