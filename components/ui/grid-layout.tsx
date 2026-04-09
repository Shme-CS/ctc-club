import { ReactNode } from 'react';

/**
 * GridLayout Component
 * 
 * Flexible grid system for organizing content with responsive column configuration.
 * Provides consistent spacing and responsive behavior across breakpoints.
 * 
 * @example
 * <GridLayout cols={{ base: 1, md: 2, lg: 3 }} gap="lg">
 *   <Card />
 *   <Card />
 *   <Card />
 * </GridLayout>
 * 
 * @example
 * <GridLayout cols={4} gap="md" equalHeight>
 *   {items.map(item => <Item key={item.id} {...item} />)}
 * </GridLayout>
 */

export interface GridColumns {
  /** Base columns (mobile) */
  base?: 1 | 2 | 3 | 4 | 5 | 6;
  
  /** Small breakpoint (640px+) */
  sm?: 1 | 2 | 3 | 4 | 5 | 6;
  
  /** Medium breakpoint (768px+) */
  md?: 1 | 2 | 3 | 4 | 5 | 6;
  
  /** Large breakpoint (1024px+) */
  lg?: 1 | 2 | 3 | 4 | 5 | 6;
  
  /** Extra large breakpoint (1280px+) */
  xl?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface GridLayoutProps {
  /** Grid items (required) */
  children: ReactNode;
  
  /** Number of columns (simple) or responsive configuration */
  cols?: number | GridColumns;
  
  /** Gap size between items */
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  
  /** Whether items should have equal height */
  equalHeight?: boolean;
  
  /** Whether to center items when row is not full */
  centerItems?: boolean;
  
  /** Additional CSS classes */
  className?: string;
}

export function GridLayout({
  children,
  cols = 3,
  gap = 'lg',
  equalHeight = false,
  centerItems = false,
  className = '',
}: GridLayoutProps) {
  // Gap size mapping
  const gapClasses = {
    none: 'gap-0',
    xs: 'gap-2',
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-10',
    '2xl': 'gap-12',
  };

  // Column classes mapping
  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  };

  // Build responsive column classes
  let columnClasses = '';
  
  if (typeof cols === 'number') {
    // Simple number: apply to all breakpoints
    columnClasses = `grid-cols-1 lg:${colClasses[cols as keyof typeof colClasses]}`;
  } else {
    // Responsive configuration
    const { base = 1, sm, md, lg, xl } = cols;
    
    columnClasses = colClasses[base];
    if (sm) columnClasses += ` sm:${colClasses[sm]}`;
    if (md) columnClasses += ` md:${colClasses[md]}`;
    if (lg) columnClasses += ` lg:${colClasses[lg]}`;
    if (xl) columnClasses += ` xl:${colClasses[xl]}`;
  }

  return (
    <div
      className={`
        grid ${columnClasses} ${gapClasses[gap]}
        ${equalHeight ? 'auto-rows-fr' : ''}
        ${centerItems ? 'justify-items-center' : ''}
        ${className}
      `.trim()}
    >
      {children}
    </div>
  );
}

/**
 * GridItem Component
 * 
 * Optional wrapper for grid items with span configuration.
 * Allows items to span multiple columns.
 * 
 * @example
 * <GridLayout cols={3}>
 *   <GridItem span={2}>
 *     <FeaturedCard />
 *   </GridItem>
 *   <GridItem>
 *     <RegularCard />
 *   </GridItem>
 * </GridLayout>
 */

export interface GridItemProps {
  /** Item content */
  children: ReactNode;
  
  /** Number of columns to span */
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 'full';
  
  /** Responsive span configuration */
  spanConfig?: {
    base?: 1 | 2 | 3 | 4 | 5 | 6 | 'full';
    sm?: 1 | 2 | 3 | 4 | 5 | 6 | 'full';
    md?: 1 | 2 | 3 | 4 | 5 | 6 | 'full';
    lg?: 1 | 2 | 3 | 4 | 5 | 6 | 'full';
    xl?: 1 | 2 | 3 | 4 | 5 | 6 | 'full';
  };
  
  /** Additional CSS classes */
  className?: string;
}

export function GridItem({
  children,
  span,
  spanConfig,
  className = '',
}: GridItemProps) {
  const spanClasses = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    5: 'col-span-5',
    6: 'col-span-6',
    full: 'col-span-full',
  };

  let spanClassNames = '';

  if (span) {
    spanClassNames = spanClasses[span];
  } else if (spanConfig) {
    const { base = 1, sm, md, lg, xl } = spanConfig;
    
    spanClassNames = spanClasses[base];
    if (sm) spanClassNames += ` sm:${spanClasses[sm]}`;
    if (md) spanClassNames += ` md:${spanClasses[md]}`;
    if (lg) spanClassNames += ` lg:${spanClasses[lg]}`;
    if (xl) spanClassNames += ` xl:${spanClasses[xl]}`;
  }

  return (
    <div className={`${spanClassNames} ${className}`.trim()}>
      {children}
    </div>
  );
}
