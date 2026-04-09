import { ReactNode } from 'react';

/**
 * PageLayout Component
 * 
 * Main page wrapper that provides consistent structure across all pages.
 * Handles header, main content, and footer with flexible configuration.
 * 
 * @example
 * <PageLayout>
 *   <YourPageContent />
 * </PageLayout>
 * 
 * @example
 * <PageLayout showHeader={false} fullWidth>
 *   <AuthPage />
 * </PageLayout>
 */

export interface PageLayoutProps {
  /** Page content (required) */
  children: ReactNode;
  
  /** Whether to show site header/navbar */
  showHeader?: boolean;
  
  /** Whether to show site footer */
  showFooter?: boolean;
  
  /** Custom header component (overrides default) */
  header?: ReactNode;
  
  /** Custom footer component (overrides default) */
  footer?: ReactNode;
  
  /** Whether content should be full-width (no max-width constraint) */
  fullWidth?: boolean;
  
  /** Whether to add padding to main content */
  noPadding?: boolean;
  
  /** Background color variant */
  background?: 'white' | 'gray' | 'gradient';
  
  /** Additional CSS classes for main element */
  className?: string;
  
  /** Additional CSS classes for container */
  containerClassName?: string;
}

export function PageLayout({
  children,
  showHeader = true,
  showFooter = true,
  header,
  footer,
  fullWidth = false,
  noPadding = false,
  background = 'white',
  className = '',
  containerClassName = '',
}: PageLayoutProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-b from-blue-50 to-white',
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      {showHeader && (
        <div className="flex-shrink-0">
          {header || (
            <header className="border-b border-gray-200">
              {/* Default header placeholder - replace with actual Navbar */}
              <div className="h-16" />
            </header>
          )}
        </div>
      )}

      {/* Main Content */}
      <main
        className={`
          flex-1 ${backgroundClasses[background]}
          ${className}
        `.trim()}
      >
        {fullWidth ? (
          <div className={noPadding ? '' : 'py-8 sm:py-12'}>
            {children}
          </div>
        ) : (
          <div
            className={`
              mx-auto max-w-7xl px-4 sm:px-6 lg:px-8
              ${noPadding ? '' : 'py-8 sm:py-12'}
              ${containerClassName}
            `.trim()}
          >
            {children}
          </div>
        )}
      </main>

      {/* Footer */}
      {showFooter && (
        <div className="flex-shrink-0">
          {footer || (
            <footer className="border-t border-gray-200 bg-gray-50">
              {/* Default footer placeholder - replace with actual Footer */}
              <div className="py-12" />
            </footer>
          )}
        </div>
      )}
    </div>
  );
}
