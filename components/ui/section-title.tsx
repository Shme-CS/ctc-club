'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// ============================================
// VARIANT DEFINITIONS
// ============================================

const sectionTitleVariants = cva('', {
  variants: {
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    spacing: {
      sm: 'mb-8',
      md: 'mb-12',
      lg: 'mb-16',
    },
  },
  defaultVariants: {
    align: 'center',
    spacing: 'md',
  },
});

const titleVariants = cva('font-bold tracking-tight text-gray-900', {
  variants: {
    size: {
      sm: 'text-2xl sm:text-3xl',
      md: 'text-3xl sm:text-4xl',
      lg: 'text-4xl sm:text-5xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

// ============================================
// COMPONENT API
// ============================================

export interface SectionTitleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionTitleVariants>,
    VariantProps<typeof titleVariants> {
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  className?: string;
}

// ============================================
// IMPLEMENTATION
// ============================================

export function SectionTitle({
  title,
  subtitle,
  description,
  badge,
  align,
  spacing,
  size,
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(sectionTitleVariants({ align, spacing }), className)}
      {...props}
    >
      {/* Badge */}
      {badge && (
        <p className="text-base font-semibold leading-7 text-blue-600 mb-2">
          {badge}
        </p>
      )}

      {/* Title */}
      <h2 className={cn(titleVariants({ size }))}>
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-2 text-lg font-medium text-gray-600">
          {subtitle}
        </p>
      )}

      {/* Description */}
      {description && (
        <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}

SectionTitle.displayName = 'SectionTitle';

export default SectionTitle;
