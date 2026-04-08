'use client';

import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// ============================================
// COMPONENT ANALYSIS
// ============================================
// Purpose: Text input field for forms and data entry
// Usage: Forms, search bars, filters, user input
// Type: Client Component (requires focus, onChange handlers)
// States: default, focus, error, disabled, readonly

// ============================================
// VARIANT DEFINITIONS
// ============================================

const inputVariants = cva(
  [
    'flex w-full rounded-md border bg-white px-3 py-2',
    'text-sm transition-colors duration-200',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
    'placeholder:text-gray-400',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50',
    'read-only:bg-gray-50 read-only:cursor-default',
  ],
  {
    variants: {
      variant: {
        default: 'border-gray-300 hover:border-gray-400',
        error: 'border-red-500 focus-visible:ring-red-500',
        success: 'border-green-500 focus-visible:ring-green-500',
      },
      inputSize: {
        sm: 'h-8 text-xs px-2',
        md: 'h-10 text-sm px-3',
        lg: 'h-12 text-base px-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'md',
    },
  }
);

// ============================================
// COMPONENT API
// ============================================

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  // Styling
  variant?: 'default' | 'error' | 'success';
  inputSize?: 'sm' | 'md' | 'lg';
  
  // Icons
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  
  // States
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  
  // Label
  label?: string;
  required?: boolean;
  
  // Custom
  className?: string;
}

// ============================================
// IMPLEMENTATION
// ============================================

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant,
      inputSize,
      leftIcon,
      rightIcon,
      error,
      errorMessage,
      helperText,
      label,
      required,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const computedVariant = error ? 'error' : variant;

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {leftIcon && (
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}

          {/* Input */}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              inputVariants({ variant: computedVariant, inputSize }),
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              className
            )}
            aria-invalid={error}
            aria-describedby={
              errorMessage
                ? `${inputId}-error`
                : helperText
                ? `${inputId}-helper`
                : undefined
            }
            {...props}
          />

          {/* Right Icon */}
          {rightIcon && (
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>

        {/* Error Message */}
        {errorMessage && (
          <p
            id={`${inputId}-error`}
            className="mt-1 text-sm text-red-600"
            role="alert"
          >
            {errorMessage}
          </p>
        )}

        {/* Helper Text */}
        {helperText && !errorMessage && (
          <p id={`${inputId}-helper`} className="mt-1 text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
