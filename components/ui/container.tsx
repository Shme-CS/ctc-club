'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// ============================================
// VARIANT DEFINITIONS
// ============================================

const containerVariants = cva('mx-auto w-full', {
  variants: {
    maxWidth: {
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
      '2xl': 'max-w-screen-2xl',
      full: 'max-w-full',
      custom: 'max-w-7xl',
    },
    padding: {
      none: '',
      sm: 'px-4 sm:px-6',
      md: 'px-4 sm:px-6 lg:px-8',
      lg: 'px-6 sm:px-8 lg:px-12',
    },
  },
  defaultVariants: {
    maxWidth: 'custom',
    padding: 'md',
  },
});

// ============================================
// COMPONENT API
// ============================================

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  as?: React.ElementType;
  className?: string;
}

// ============================================
// IMPLEMENTATION
// ============================================

export function Container({
  as: Component = 'div',
  maxWidth,
  padding,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(containerVariants({ maxWidth, padding }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}

Container.displayName = 'Container';

export default Container;
