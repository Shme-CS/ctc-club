'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, LucideIcon } from 'lucide-react';
import Link from 'next/link';

/**
 * DropdownMenu Component
 * 
 * A dropdown menu for nested navigation with keyboard support and animations.
 * Supports hover and click interactions with automatic positioning.
 * 
 * @example
 * <DropdownMenu
 *   trigger="Courses"
 *   items={[
 *     { label: 'Web Development', href: '/courses/web-dev', icon: Code },
 *     { label: 'Data Science', href: '/courses/data-science', icon: Database }
 *   ]}
 * />
 */

export interface DropdownMenuItem {
  /** Menu item label */
  label: string;
  
  /** Link destination */
  href: string;
  
  /** Optional icon */
  icon?: LucideIcon;
  
  /** Optional description */
  description?: string;
  
  /** Whether item is disabled */
  disabled?: boolean;
}

export interface DropdownMenuProps {
  /** Trigger button text */
  trigger: string;
  
  /** Menu items array */
  items: DropdownMenuItem[];
  
  /** Optional trigger icon */
  icon?: LucideIcon;
  
  /** Alignment of dropdown */
  align?: 'left' | 'right' | 'center';
  
  /** Additional CSS classes */
  className?: string;
}

export function DropdownMenu({
  trigger,
  items,
  icon: TriggerIcon,
  align = 'left',
  className = '',
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const alignmentClasses = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 -translate-x-1/2',
  };

  return (
    <div
      ref={dropdownRef}
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          inline-flex items-center gap-2 px-3 py-2 rounded-lg
          text-sm font-medium text-gray-700 transition-all duration-200
          hover:text-blue-600 hover:bg-gray-50
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2
          ${isOpen ? 'text-blue-600 bg-blue-50' : ''}
        `.trim()}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {TriggerIcon && <TriggerIcon className="h-4 w-4" aria-hidden="true" />}
        <span>{trigger}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`
            absolute top-full mt-2 w-64 z-50
            ${alignmentClasses[align]}
            animate-in fade-in slide-in-from-top-2 duration-200
          `}
        >
          <div className="rounded-xl bg-white shadow-xl ring-1 ring-gray-200 p-2">
            {items.map((item, index) => {
              const Icon = item.icon;
              
              return (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-start gap-3 px-4 py-3 rounded-lg
                    transition-colors duration-150
                    ${item.disabled
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-gray-50'
                    }
                  `.trim()}
                  aria-disabled={item.disabled}
                  tabIndex={item.disabled ? -1 : undefined}
                >
                  {Icon && (
                    <div className="mt-0.5">
                      <Icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {item.label}
                    </p>
                    {item.description && (
                      <p className="text-xs text-gray-600 mt-0.5">
                        {item.description}
                      </p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
