'use client';

import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// ============================================
// VARIANT DEFINITIONS
// ============================================

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  {
    variants: {
      variant: {
        default: 'text-gray-700',
        error: 'text-red-600',
        success: 'text-green-600',
        muted: 'text-gray-500',
      },
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

// ============================================
// COMPONENT API
// ============================================

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  required?: boolean;
  optional?: boolean;
  className?: string;
}

// ============================================
// IMPLEMENTATION
// ============================================

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      variant,
      size,
      required,
      optional,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <label
        ref={ref}
        className={cn(labelVariants({ variant, size }), className)}
        {...props}
      >
        {children}
        {required && <span className="ml-1 text-red-500" aria-label="required">*</span>}
        {optional && <span className="ml-1 text-gray-400 font-normal">(optional)</span>}
      </label>
    );
  }
);

Label.displayName = 'Label';

export default Label;
