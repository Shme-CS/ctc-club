'use client';

import React, { forwardRef } from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// ============================================
// VARIANT DEFINITIONS USING CVA
// ============================================

const buttonVariants = cva(
  // Base styles - applied to all variants
  [
    'inline-flex items-center justify-center gap-2',
    'font-medium transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'active:scale-95',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-blue-600 text-white',
          'hover:bg-blue-700',
          'focus-visible:ring-blue-500',
          'shadow-sm hover:shadow-md',
        ],
        secondary: [
          'bg-gray-100 text-gray-900',
          'hover:bg-gray-200',
          'focus-visible:ring-gray-500',
        ],
        outline: [
          'border-2 border-blue-600 text-blue-600 bg-transparent',
          'hover:bg-blue-50',
          'focus-visible:ring-blue-500',
        ],
        ghost: [
          'text-gray-700 bg-transparent',
          'hover:bg-gray-100',
          'focus-visible:ring-gray-500',
        ],
        danger: [
          'bg-red-600 text-white',
          'hover:bg-red-700',
          'focus-visible:ring-red-500',
          'shadow-sm hover:shadow-md',
        ],
        success: [
          'bg-green-600 text-white',
          'hover:bg-green-700',
          'focus-visible:ring-green-500',
          'shadow-sm hover:shadow-md',
        ],
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
        xl: 'h-14 px-8 text-xl',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
      iconOnly: {
        true: 'aspect-square p-0',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      rounded: 'md',
      fullWidth: false,
      iconOnly: false,
    },
  }
);

// ============================================
// LOADING SPINNER COMPONENT
// ============================================

const Spinner = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' | 'xl' }) => {
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
    xl: 'h-6 w-6',
  };

  return (
    <svg
      className={cn('animate-spin', sizeClasses[size])}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

// ============================================
// BUTTON COMPONENT
// ============================================

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  href?: string;
  external?: boolean;
  ariaLabel?: string;
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant,
      size,
      rounded,
      fullWidth,
      iconOnly,
      leftIcon,
      rightIcon,
      isLoading = false,
      loadingText,
      disabled,
      href,
      external = false,
      ariaLabel,
      className,
      type = 'button',
      onClick,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;
    const showLoadingText = isLoading && loadingText;
    const content = showLoadingText ? loadingText : children;
    
    const showLeftIcon = !isLoading && leftIcon;
    const showRightIcon = !isLoading && rightIcon;
    
    const buttonClasses = cn(
      buttonVariants({ variant, size, rounded, fullWidth, iconOnly }),
      className
    );
    
    const a11yProps = {
      'aria-label': ariaLabel || (iconOnly ? String(children) : undefined),
      'aria-busy': isLoading,
      'aria-disabled': isDisabled,
      disabled: isDisabled,
    };
    
    const buttonContent = (
      <>
        {isLoading && <Spinner size={size} />}
        {showLeftIcon && (
          <span className="inline-flex shrink-0" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        {!iconOnly && content && (
          <span className="inline-flex items-center">{content}</span>
        )}
        {iconOnly && !isLoading && children}
        {showRightIcon && (
          <span className="inline-flex shrink-0" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </>
    );
    
    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses}
            aria-label={ariaLabel}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {buttonContent}
          </a>
        );
      }
      
      return (
        <Link href={href} className={buttonClasses} {...a11yProps}>
          {buttonContent}
        </Link>
      );
    }
    
    return (
      <button
        ref={ref}
        type={type}
        className={buttonClasses}
        onClick={onClick}
        {...a11yProps}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
