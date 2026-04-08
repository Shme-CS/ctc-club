'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

// ============================================
// VARIANT DEFINITIONS
// ============================================

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
        primary: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
        success: 'bg-green-100 text-green-800 hover:bg-green-200',
        warning: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
        danger: 'bg-red-100 text-red-800 hover:bg-red-200',
        purple: 'bg-purple-100 text-purple-800 hover:bg-purple-200',
        outline: 'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-2.5 py-0.5 text-sm',
        lg: 'px-3 py-1 text-base',
      },
      rounded: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      rounded: 'full',
    },
  }
);

// ============================================
// COMPONENT API
// ============================================

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  removable?: boolean;
  onRemove?: () => void;
  className?: string;
}

// ============================================
// IMPLEMENTATION
// ============================================

export function Badge({
  variant,
  size,
  rounded,
  leftIcon,
  rightIcon,
  removable,
  onRemove,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size, rounded }), className)}
      {...props}
    >
      {leftIcon && (
        <span className="inline-flex shrink-0" aria-hidden="true">
          {leftIcon}
        </span>
      )}
      
      <span>{children}</span>
      
      {rightIcon && !removable && (
        <span className="inline-flex shrink-0" aria-hidden="true">
          {rightIcon}
        </span>
      )}
      
      {removable && (
        <button
          type="button"
          onClick={onRemove}
          className="inline-flex shrink-0 rounded-full hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-offset-1"
          aria-label="Remove"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </span>
  );
}

Badge.displayName = 'Badge';

export default Badge;
