import { Logo } from '@/components/ui/logo';
import { NavLinks } from '@/components/ui/nav-links';
import { CTAButtons } from '@/components/ui/cta-buttons';

/**
 * Main navigation bar component
 * Sticky header with logo, navigation links, and CTA buttons
 */
export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <NavLinks />
          <CTAButtons />
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
