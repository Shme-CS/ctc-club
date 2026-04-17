'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: '/#courses' },
  { name: 'About', href: '/about' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100'
          : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo with animation */}
        <div className="flex lg:flex-1">
          <Link href="/" className="group flex items-center gap-3 -m-1.5 p-1.5">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
              CTC Club
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="relative -m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-gray-700 hover:bg-gray-100 transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="relative w-6 h-6">
              <Menu
                className={cn(
                  'absolute inset-0 h-6 w-6 transition-all duration-300',
                  mobileMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                )}
              />
              <X
                className={cn(
                  'absolute inset-0 h-6 w-6 transition-all duration-300',
                  mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                )}
              />
            </div>
          </button>
        </div>

        {/* Desktop navigation with advanced hover effects */}
        <div className="hidden lg:flex lg:gap-x-2">
          {navigation.map((item, index) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={cn(
                  'group relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300',
                  isActive
                    ? 'text-indigo-600'
                    : 'text-gray-700 hover:text-indigo-600'
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover background effect */}
                <span className={cn(
                  'absolute inset-0 rounded-xl transition-all duration-300',
                  isActive
                    ? 'bg-indigo-50 scale-100'
                    : 'bg-gray-50 scale-0 group-hover:scale-100'
                )} />
                
                {/* Text with bounce animation */}
                <span className="relative inline-block group-hover:animate-bounce-subtle">
                  {item.name}
                </span>
                
                {/* Active indicator */}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-600 rounded-full animate-pulse" />
                )}
                
                {/* Hover underline effect */}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-300 group-hover:w-3/4" />
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA buttons with animations */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3">
          <Link
            href="/login"
            className="group relative px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-indigo-600 rounded-xl transition-all duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 rounded-xl bg-gray-50 scale-0 group-hover:scale-100 transition-transform duration-300" />
            <span className="relative">Log in</span>
          </Link>
          
          <Link
            href="/signup"
            className="group relative px-6 py-2.5 text-sm font-bold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Animated gradient background */}
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300" />
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Shine effect */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            {/* Button content */}
            <span className="relative flex items-center gap-2">
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              Get Started Free
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile menu with slide animation */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-500 ease-in-out',
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="space-y-1 px-4 pb-4 pt-2 bg-white/95 backdrop-blur-sm border-t border-gray-100">
          {navigation.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  handleSmoothScroll(e, item.href);
                  setMobileMenuOpen(false);
                }}
                className={cn(
                  'block rounded-xl px-4 py-3 text-base font-semibold transition-all duration-300',
                  isActive
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-900 hover:bg-gray-50 active:scale-95'
                )}
                style={{
                  animation: mobileMenuOpen ? `slideIn 0.3s ease-out ${index * 50}ms both` : 'none'
                }}
              >
                {item.name}
              </Link>
            );
          })}
          
          <div className="mt-4 space-y-2 pt-4 border-t border-gray-100">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-center text-base font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 transition-all duration-300 active:scale-95"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-center text-base font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg transition-all duration-300 active:scale-95"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 0.6s ease-in-out;
        }
      `}</style>
    </header>
  );
}
