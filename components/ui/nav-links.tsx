'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Navigation link structure
 */
interface NavLink {
  label: string;
  href: string;
}

/**
 * Main navigation links configuration
 */
const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/#courses' },
  { label: 'Resources', href: '/services' },
  { label: 'Community', href: '/about' },
  { label: 'About', href: '/about' },
];

export function NavLinks() {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Handle smooth scroll for anchor links on the same page
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      const id = href.substring(2); // Remove '/#'
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={(e) => handleClick(e, link.href)}
          className="text-[0.9375rem] text-gray-700 hover:text-gray-900 font-medium transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
