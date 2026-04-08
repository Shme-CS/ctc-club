'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// ============================================
// VARIANT DEFINITIONS
// ============================================

const dividerVariants = cva('', {
  variants: {
    orientation: {
      horizontal: 'w-full h-px',
      vertical: 'h-full w-px',
    },
    variant: {
      solid: 'bg-gray-200',
      dashed: 'border-dashed',
      dotted: 'border-dotted',
    },
    spacing: {
      none: '',
      sm: '',
      md: '',
      lg: '',
      xl: '',
    },
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      spacing: 'sm',
      className: 'my-2',
    },
    {
      orientation: 'horizontal',
      spacing: 'md',
      className: 'my-4',
    },
    {
      orientation: 'horizontal',
      spacing: 'lg',
      className: 'my-6',
    },
    {
      orientation: 'horizontal',
      spacing: 'xl',
      className: 'my-8',
    },
    {
      orientation: 'vertical',
      spacing: 'sm',
      className: 'mx-2',
    },
    {
      orientation: 'vertical',
      spacing: 'md',
      className: 'mx-4',
    },
    {
      orientation: 'vertical',
      spacing: 'lg',
      className: 'mx-6',
    },
    {
      orientation: 'vertical',
      spacing: 'xl',
      className: 'mx-8',
    },
    {
      variant: 'dashed',
      orientation: 'horizontal',
      className: 'border-t',
    },
    {
      variant: 'dotted',
      orientation: 'horizontal',
      className: 'border-t',
    },
    {
      variant: 'dashed',
      orientation: 'vertical',
      className: 'border-l',
    },
    {
      variant: 'dotted',
      orientation: 'vertical',
      className: 'border-l',
    },
  ],
  defaultVariants: {
    orientation: 'horizontal',
    variant: 'solid',
    spacing: 'md',
  },
});

// ============================================
// COMPONENT API
// ============================================

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  label?: string;
  labelPosition?: 'left' | 'center' | 'right';
  className?: string;
}

// ============================================
// IMPLEMENTATION
// ============================================

export function Divider({
  orientation,
  variant,
  spacing,
  label,
  labelPosition = 'center',
  className,
  ...props
}: DividerProps) {
  // Divider with label (only horizontal)
  if (label && orientation === 'horizontal') {
    const labelPositions = {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end',
    };

    return (
      <div
        className={cn('flex items-center', dividerVariants({ spacing }), className)}
        role="separator"
        {...props}
      >
        <div className={cn('flex w-full items-center', labelPositions[labelPosition])}>
          {labelPosition !== 'left' && (
            <div className={cn('flex-1', dividerVariants({ variant, orientation: 'horizontal' }))} />
          )}
          <span className="px-3 text-sm text-gray-500">{label}</span>
          {labelPosition !== 'right' && (
            <div className={cn('flex-1', dividerVariants({ variant, orientation: 'horizontal' }))} />
          )}
        </div>
      </div>
    );
  }

  // Simple divider
  return (
    <div
      className={cn(dividerVariants({ orientation, variant, spacing }), className)}
      role="separator"
      aria-orientation={orientation}
      {...props}
    />
  );
}

Divider.displayName = 'Divider';

export default Divider;
