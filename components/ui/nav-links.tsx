import Link from 'next/link';

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
  { label: 'Courses', href: '/courses' },
  { label: 'Resources', href: '/services' },
  { label: 'Community', href: '/about' },
  { label: 'About', href: '/about' },
];

export function NavLinks() {
  return (
    <div className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-[0.9375rem] text-gray-700 hover:text-gray-900 font-medium transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
