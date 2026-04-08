'use client';

import React, { useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { User } from 'lucide-react';
import Image from 'next/image';

// ============================================
// VARIANT DEFINITIONS
// ============================================

const avatarVariants = cva(
  'relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100',
  {
    variants: {
      size: {
        xs: 'h-6 w-6 text-xs',
        sm: 'h-8 w-8 text-sm',
        md: 'h-10 w-10 text-base',
        lg: 'h-12 w-12 text-lg',
        xl: 'h-16 w-16 text-xl',
        '2xl': 'h-20 w-20 text-2xl',
      },
      variant: {
        default: 'bg-gray-100 text-gray-600',
        primary: 'bg-blue-100 text-blue-600',
        success: 'bg-green-100 text-green-600',
        warning: 'bg-yellow-100 text-yellow-600',
        danger: 'bg-red-100 text-red-600',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

// ============================================
// COMPONENT API
// ============================================

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string;
  icon?: React.ReactNode;
  status?: 'online' | 'offline' | 'away' | 'busy';
  showStatus?: boolean;
  className?: string;
}

// ============================================
// IMPLEMENTATION
// ============================================

export function Avatar({
  src,
  alt = 'Avatar',
  fallback,
  icon,
  status,
  showStatus,
  size,
  variant,
  className,
  ...props
}: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  // Get initials from fallback text
  const getInitials = (text?: string) => {
    if (!text) return '';
    return text
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-gray-400',
    away: 'bg-yellow-500',
    busy: 'bg-red-500',
  };

  const statusSizes = {
    xs: 'h-1.5 w-1.5',
    sm: 'h-2 w-2',
    md: 'h-2.5 w-2.5',
    lg: 'h-3 w-3',
    xl: 'h-3.5 w-3.5',
    '2xl': 'h-4 w-4',
  };

  return (
    <div className="relative inline-flex">
      <div
        className={cn(avatarVariants({ size, variant }), className)}
        {...props}
      >
        {/* Image */}
        {src && !imageError ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : icon ? (
          /* Custom Icon */
          <span className="flex items-center justify-center">{icon}</span>
        ) : fallback ? (
          /* Initials */
          <span className="font-medium">{getInitials(fallback)}</span>
        ) : (
          /* Default Icon */
          <User className="h-1/2 w-1/2" />
        )}
      </div>

      {/* Status Indicator */}
      {showStatus && status && (
        <span
          className={cn(
            'absolute bottom-0 right-0 block rounded-full ring-2 ring-white',
            statusColors[status],
            statusSizes[size || 'md']
          )}
          aria-label={`Status: ${status}`}
        />
      )}
    </div>
  );
}

Avatar.displayName = 'Avatar';

export default Avatar;
