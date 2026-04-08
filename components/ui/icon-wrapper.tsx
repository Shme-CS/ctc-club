'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// ============================================
// VARIANT DEFINITIONS
// ============================================

const iconWrapperVariants = cva(
  'inline-flex items-center justify-center shrink-0 transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-gray-100 text-gray-600',
        primary: 'bg-blue-100 text-blue-600',
        success: 'bg-green-100 text-green-600',
        warning: 'bg-yellow-100 text-yellow-600',
        danger: 'bg-red-100 text-red-600',
        purple: 'bg-purple-100 text-purple-600',
        solid: 'bg-blue-600 text-white',
        outline: 'border-2 border-gray-300 text-gray-600',
      },
      size: {
        xs: 'h-6 w-6 p-1',
        sm: 'h-8 w-8 p-1.5',
        md: 'h-10 w-10 p-2',
        lg: 'h-12 w-12 p-2.5',
        xl: 'h-16 w-16 p-3',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      rounded: 'lg',
    },
  }
);

// ============================================
// COMPONENT API
// ============================================

export interface IconWrapperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconWrapperVariants> {
  icon: React.ReactNode;
  className?: string;
}

// ============================================
// IMPLEMENTATION
// ============================================

export function IconWrapper({
  icon,
  variant,
  size,
  rounded,
  className,
  ...props
}: IconWrapperProps) {
  return (
    <div
      className={cn(iconWrapperVariants({ variant, size, rounded }), className)}
      {...props}
    >
      {icon}
    </div>
  );
}

IconWrapper.displayName = 'IconWrapper';

export default IconWrapper;
