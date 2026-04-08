'use client';

import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// ============================================
// VARIANT DEFINITIONS
// ============================================

const textareaVariants = cva(
  [
    'flex min-h-[80px] w-full rounded-md border bg-white px-3 py-2',
    'text-sm transition-colors duration-200',
    'placeholder:text-gray-400',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50',
    'read-only:bg-gray-50 read-only:cursor-default',
    'resize-none',
  ],
  {
    variants: {
      variant: {
        default: 'border-gray-300 hover:border-gray-400',
        error: 'border-red-500 focus-visible:ring-red-500',
        success: 'border-green-500 focus-visible:ring-green-500',
      },
      textareaSize: {
        sm: 'min-h-[60px] text-xs px-2 py-1',
        md: 'min-h-[80px] text-sm px-3 py-2',
        lg: 'min-h-[120px] text-base px-4 py-3',
      },
      resize: {
        none: 'resize-none',
        vertical: 'resize-y',
        horizontal: 'resize-x',
        both: 'resize',
      },
    },
    defaultVariants: {
      variant: 'default',
      textareaSize: 'md',
      resize: 'vertical',
    },
  }
);

// ============================================
// COMPONENT API
// ============================================

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  variant?: 'default' | 'error' | 'success';
  textareaSize?: 'sm' | 'md' | 'lg';
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  label?: string;
  required?: boolean;
  maxLength?: number;
  showCount?: boolean;
  className?: string;
}

// ============================================
// IMPLEMENTATION
// ============================================

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      variant,
      textareaSize,
      resize,
      error,
      errorMessage,
      helperText,
      label,
      required,
      maxLength,
      showCount,
      className,
      id,
      value,
      ...props
    },
    ref
  ) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    const computedVariant = error ? 'error' : variant;
    const currentLength = typeof value === 'string' ? value.length : 0;

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            htmlFor={textareaId}
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}

        {/* Textarea */}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            textareaVariants({ variant: computedVariant, textareaSize, resize }),
            className
          )}
          aria-invalid={error}
          aria-describedby={
            errorMessage
              ? `${textareaId}-error`
              : helperText
              ? `${textareaId}-helper`
              : undefined
          }
          maxLength={maxLength}
          value={value}
          {...props}
        />

        {/* Footer: Helper/Error + Character Count */}
        <div className="mt-1 flex items-center justify-between gap-2">
          <div className="flex-1">
            {/* Error Message */}
            {errorMessage && (
              <p
                id={`${textareaId}-error`}
                className="text-sm text-red-600"
                role="alert"
              >
                {errorMessage}
              </p>
            )}

            {/* Helper Text */}
            {helperText && !errorMessage && (
              <p id={`${textareaId}-helper`} className="text-sm text-gray-500">
                {helperText}
              </p>
            )}
          </div>

          {/* Character Count */}
          {showCount && maxLength && (
            <p className="text-xs text-gray-500">
              {currentLength}/{maxLength}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
