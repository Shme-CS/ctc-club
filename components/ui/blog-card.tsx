import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Avatar } from './avatar';
import { Badge } from './badge';
import { Button } from './button';
import Image from 'next/image';
import Link from 'next/link';

/**
 * BlogCard Component
 * 
 * A comprehensive card component for displaying blog post previews with image and metadata.
 * Ideal for blog listings, related posts, and content showcases.
 * 
 * @example
 * <BlogCard
 *   title="10 Tips for Learning Web Development"
 *   excerpt="Discover the best practices for mastering web development..."
 *   image="https://example.com/blog-image.jpg"
 *   category="Web Dev"
 *   author="Sarah Chen"
 *   authorAvatar="https://example.com/avatar.jpg"
 *   date="2026-04-08"
 *   readTime={5}
 *   href="/blog/web-dev-tips"
 * />
 */

export interface BlogCardProps {
  /** Blog post title (required) */
  title: string;
  
  /** Blog post excerpt/summary */
  excerpt?: string;
  
  /** Featured image URL */
  image: string;
  
  /** Blog post category */
  category?: string;
  
  /** Author name */
  author?: string;
  
  /** Author avatar URL */
  authorAvatar?: string;
  
  /** Publication date (ISO string or formatted) */
  date?: string;
  
  /** Estimated read time in minutes */
  readTime?: number;
  
  /** Link to full blog post */
  href: string;
  
  /** Card variant style */
  variant?: 'default' | 'horizontal' | 'minimal';
  
  /** Additional CSS classes */
  className?: string;
}

export function BlogCard({
  title,
  excerpt,
  image,
  category,
  author,
  authorAvatar,
  date,
  readTime,
  href,
  variant = 'default',
  className = '',
}: BlogCardProps) {
  // Format date if it's an ISO string
  const formattedDate = date ? new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }) : undefined;

  if (variant === 'horizontal') {
    return (
      <Link
        href={href}
        className={`
          group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-white
          ring-1 ring-gray-200 hover:ring-blue-600
          transition-all duration-300 hover:shadow-lg
          ${className}
        `.trim()}
      >
        {/* Image */}
        <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {category && (
            <div className="absolute left-4 top-4">
              <Badge variant="default" className="bg-white/90 text-gray-900 backdrop-blur">
                {category}
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          {excerpt && (
            <p className="text-gray-600 mb-4 line-clamp-2">
              {excerpt}
            </p>
          )}
          <div className="mt-auto flex items-center justify-between">
            <BlogMeta
              author={author}
              authorAvatar={authorAvatar}
              date={formattedDate}
              readTime={readTime}
            />
            <ArrowRight className="h-5 w-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'minimal') {
    return (
      <Link
        href={href}
        className={`
          group flex flex-col gap-4
          transition-all duration-300
          ${className}
        `.trim()}
      >
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
          {title}
        </h3>
        {excerpt && (
          <p className="text-gray-600 text-sm line-clamp-2">
            {excerpt}
          </p>
        )}
        <BlogMeta
          author={author}
          date={formattedDate}
          readTime={readTime}
          compact
        />
      </Link>
    );
  }

  // Default variant
  return (
    <Link
      href={href}
      className={`
        group flex flex-col overflow-hidden rounded-2xl bg-white
        ring-1 ring-gray-200 hover:ring-blue-600
        transition-all duration-300 hover:shadow-xl
        ${className}
      `.trim()}
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {category && (
          <div className="absolute left-4 top-4">
            <Badge variant="default" className="bg-white/90 text-gray-900 backdrop-blur">
              {category}
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        {excerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {excerpt}
          </p>
        )}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <BlogMeta
            author={author}
            authorAvatar={authorAvatar}
            date={formattedDate}
            readTime={readTime}
          />
        </div>
      </div>
    </Link>
  );
}

// Helper component for blog metadata
interface BlogMetaProps {
  author?: string;
  authorAvatar?: string;
  date?: string;
  readTime?: number;
  compact?: boolean;
}

function BlogMeta({ author, authorAvatar, date, readTime, compact = false }: BlogMetaProps) {
  if (compact) {
    return (
      <div className="flex items-center gap-3 text-sm text-gray-600">
        {date && (
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            {date}
          </span>
        )}
        {readTime && (
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {readTime} min read
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between gap-4">
      {author && (
        <div className="flex items-center gap-3">
          {authorAvatar ? (
            <Avatar
              src={authorAvatar}
              alt={author}
              fallback={author.split(' ').map(n => n[0]).join('')}
              size="sm"
            />
          ) : (
            <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
          )}
          <span className="text-sm font-medium text-gray-900">{author}</span>
        </div>
      )}
      <div className="flex items-center gap-3 text-sm text-gray-600">
        {date && (
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            {date}
          </span>
        )}
        {readTime && (
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {readTime} min
          </span>
        )}
      </div>
    </div>
  );
}
