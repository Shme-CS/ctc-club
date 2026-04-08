# Card Components Documentation

This document provides comprehensive documentation for all card components in the CTC Club UI library.

## Table of Contents

1. [FeatureCard](#featurecard)
2. [ServiceCard](#servicecard)
3. [PricingCard](#pricingcard)
4. [TestimonialCard](#testimonialcard)
5. [BlogCard](#blogcard)

---

## FeatureCard

A reusable card component for displaying platform features with icon, title, and description.

### Purpose
- Display platform features in a visually appealing way
- Highlight key capabilities and benefits
- Provide optional navigation to feature details

### Component Type
**Server Component** (static content, no client-side interactivity by default)

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `icon` | `LucideIcon` | ✅ | - | Lucide icon component to display |
| `title` | `string` | ✅ | - | Feature title |
| `description` | `string` | ✅ | - | Feature description |
| `href` | `string` | ❌ | - | Optional link destination |
| `iconVariant` | `'primary' \| 'secondary' \| 'success' \| 'danger'` | ❌ | `'primary'` | Icon style variant |
| `iconSize` | `'sm' \| 'md' \| 'lg'` | ❌ | `'md'` | Icon size |
| `className` | `string` | ❌ | `''` | Additional CSS classes |
| `onClick` | `() => void` | ❌ | - | Click handler (if not using href) |

### Usage Examples

```tsx
// Basic usage
<FeatureCard
  icon={BookOpen}
  title="Structured Courses"
  description="Follow curated learning paths with video lessons and quizzes."
/>

// With link
<FeatureCard
  icon={Award}
  title="Earn Certificates"
  description="Get verified certificates upon completion."
  href="/features/certificates"
  iconVariant="success"
/>

// With click handler
<FeatureCard
  icon={Users}
  title="Join Community"
  description="Connect with 5,000+ students worldwide."
  onClick={() => console.log('Community clicked')}
  iconVariant="secondary"
/>
```

### Accessibility
- Semantic HTML with proper heading hierarchy
- ARIA labels for links
- Keyboard navigation support
- Focus indicators on interactive elements

### Responsive Design
- Mobile: Single column, full width
- Tablet: 2 columns
- Desktop: 3 columns (recommended grid layout)

---

## ServiceCard

A comprehensive card component for displaying services with features list and CTA.

### Purpose
- Showcase services or offerings with detailed information
- Display feature lists with checkmarks
- Provide clear call-to-action buttons
- Support selection/active states

### Component Type
**Server Component** (can be client component if interactive selection needed)

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `icon` | `LucideIcon` | ✅ | - | Lucide icon component |
| `title` | `string` | ✅ | - | Service title |
| `description` | `string` | ✅ | - | Service description |
| `features` | `string[]` | ❌ | `[]` | List of service features |
| `ctaText` | `string` | ❌ | - | CTA button text |
| `ctaHref` | `string` | ❌ | - | CTA button link |
| `onCtaClick` | `() => void` | ❌ | - | CTA button click handler |
| `badge` | `string` | ❌ | - | Optional badge text (e.g., "Popular") |
| `badgeVariant` | `BadgeVariant` | ❌ | `'primary'` | Badge style variant |
| `iconVariant` | `IconVariant` | ❌ | `'primary'` | Icon style variant |
| `isActive` | `boolean` | ❌ | `false` | Whether card is selected/active |
| `className` | `string` | ❌ | `''` | Additional CSS classes |

### Usage Examples

```tsx
// Basic service card
<ServiceCard
  icon={Zap}
  title="Premium Support"
  description="Get 24/7 priority support from our expert team."
  features={[
    'Live chat support',
    'Priority tickets',
    'Dedicated account manager',
    'Custom onboarding'
  ]}
  ctaText="Get Started"
  ctaHref="/signup"
/>

// With badge and active state
<ServiceCard
  icon={Crown}
  title="Enterprise Plan"
  description="Complete solution for large organizations."
  features={[
    'Unlimited users',
    'Advanced analytics',
    'Custom integrations',
    'SLA guarantee'
  ]}
  badge="Popular"
  badgeVariant="primary"
  isActive={true}
  ctaText="Contact Sales"
  onCtaClick={() => console.log('Contact sales')}
/>
```

### Accessibility
- Semantic list markup for features
- ARIA labels for icons
- Keyboard accessible CTA buttons
- Focus management

### Responsive Design
- Mobile: Single column, full width
- Tablet: 2 columns
- Desktop: 3 columns with center card scaled up if active

---

## PricingCard

An interactive card component for displaying pricing tiers with features and CTA.

### Purpose
- Display pricing plans with clear pricing information
- Show feature inclusion/exclusion with visual indicators
- Support popular/recommended plan highlighting
- Handle selection and loading states

### Component Type
**Client Component** (requires interactivity for hover states and CTA clicks)

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `planName` | `string` | ✅ | - | Plan name (e.g., "Pro") |
| `price` | `number \| string` | ✅ | - | Price amount |
| `period` | `string` | ❌ | `'month'` | Billing period |
| `description` | `string` | ❌ | - | Plan description |
| `features` | `PricingFeature[]` | ✅ | - | List of features with inclusion status |
| `ctaText` | `string` | ❌ | `'Get Started'` | CTA button text |
| `onCtaClick` | `() => void` | ❌ | - | CTA button click handler |
| `isPopular` | `boolean` | ❌ | `false` | Whether this is the popular plan |
| `isSelected` | `boolean` | ❌ | `false` | Whether plan is currently selected |
| `isLoading` | `boolean` | ❌ | `false` | Loading state (during checkout) |
| `currency` | `string` | ❌ | `'$'` | Currency symbol |
| `className` | `string` | ❌ | `''` | Additional CSS classes |

### PricingFeature Interface

```typescript
interface PricingFeature {
  name: string;           // Feature name
  included: boolean;      // Whether feature is included
  description?: string;   // Optional tooltip/description
}
```

### Usage Examples

```tsx
// Basic pricing card
<PricingCard
  planName="Pro"
  price={49}
  period="month"
  description="Perfect for growing teams"
  features={[
    { name: 'Unlimited courses', included: true },
    { name: 'Priority support', included: true },
    { name: 'Advanced analytics', included: true },
    { name: 'Custom branding', included: false },
    { name: 'API access', included: false }
  ]}
  ctaText="Start Free Trial"
  onCtaClick={() => console.log('Subscribe to Pro')}
/>

// Popular plan with badge
<PricingCard
  planName="Enterprise"
  price="Custom"
  description="For large organizations"
  features={[
    { name: 'Everything in Pro', included: true },
    { name: 'Unlimited users', included: true },
    { name: 'Custom integrations', included: true },
    { name: 'Dedicated support', included: true },
    { name: 'SLA guarantee', included: true }
  ]}
  isPopular={true}
  ctaText="Contact Sales"
  onCtaClick={() => console.log('Contact sales')}
/>

// Selected plan (current subscription)
<PricingCard
  planName="Starter"
  price={0}
  period="month"
  description="Free forever"
  features={[
    { name: '10 courses', included: true },
    { name: 'Community support', included: true },
    { name: 'Basic analytics', included: true },
    { name: 'Priority support', included: false }
  ]}
  isSelected={true}
/>
```

### Accessibility
- Semantic pricing markup
- ARIA labels for feature status
- Keyboard navigation
- Focus indicators
- Screen reader friendly feature lists

### Responsive Design
- Mobile: Single column, full width
- Tablet: 2 columns
- Desktop: 3 columns with popular plan scaled up

---

## TestimonialCard

A card component for displaying customer testimonials with ratings and author info.

### Purpose
- Display customer testimonials and reviews
- Show social proof with ratings
- Include author information and credentials
- Build trust and credibility

### Component Type
**Server Component** (static content)

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `quote` | `string` | ✅ | - | Testimonial quote/content |
| `author` | `string` | ✅ | - | Author name |
| `role` | `string` | ❌ | - | Author role/title |
| `company` | `string` | ❌ | - | Company/organization name |
| `avatar` | `string` | ❌ | - | Author avatar image URL |
| `rating` | `number` | ❌ | `5` | Rating (1-5 stars) |
| `showQuoteIcon` | `boolean` | ❌ | `true` | Whether to show quote icon |
| `variant` | `'default' \| 'bordered' \| 'elevated'` | ❌ | `'default'` | Card style variant |
| `className` | `string` | ❌ | `''` | Additional CSS classes |

### Usage Examples

```tsx
// Basic testimonial
<TestimonialCard
  quote="CTC Club transformed my learning journey. The courses are well-structured and the community is amazing!"
  author="Sarah Chen"
  role="Computer Science Student"
  company="MIT"
  rating={5}
/>

// With avatar
<TestimonialCard
  quote="I landed my dream job after completing the web development bootcamp. Highly recommended!"
  author="Alex Rivera"
  role="Full Stack Developer"
  company="Google"
  avatar="https://example.com/avatar.jpg"
  rating={5}
  variant="elevated"
/>

// Without quote icon
<TestimonialCard
  quote="The project-based learning approach is incredible. I built a real portfolio while learning."
  author="Maria Lopez"
  role="Frontend Developer"
  rating={4}
  showQuoteIcon={false}
  variant="bordered"
/>
```

### Accessibility
- Semantic blockquote markup
- ARIA labels for ratings
- Alt text for avatars
- Proper heading hierarchy

### Responsive Design
- Mobile: Single column, full width
- Tablet: 2 columns
- Desktop: 3 columns in grid layout

---

## BlogCard

A comprehensive card component for displaying blog post previews with image and metadata.

### Purpose
- Display blog post previews in listings
- Show post metadata (author, date, read time)
- Provide visual hierarchy with featured images
- Support multiple layout variants

### Component Type
**Server Component** (static content with Next.js Image optimization)

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | ✅ | - | Blog post title |
| `excerpt` | `string` | ❌ | - | Blog post excerpt/summary |
| `image` | `string` | ✅ | - | Featured image URL |
| `category` | `string` | ❌ | - | Blog post category |
| `author` | `string` | ❌ | - | Author name |
| `authorAvatar` | `string` | ❌ | - | Author avatar URL |
| `date` | `string` | ❌ | - | Publication date (ISO string) |
| `readTime` | `number` | ❌ | - | Estimated read time in minutes |
| `href` | `string` | ✅ | - | Link to full blog post |
| `variant` | `'default' \| 'horizontal' \| 'minimal'` | ❌ | `'default'` | Card layout variant |
| `className` | `string` | ❌ | `''` | Additional CSS classes |

### Usage Examples

```tsx
// Default vertical layout
<BlogCard
  title="10 Tips for Learning Web Development"
  excerpt="Discover the best practices for mastering web development in 2026..."
  image="https://example.com/blog-image.jpg"
  category="Web Dev"
  author="Sarah Chen"
  authorAvatar="https://example.com/avatar.jpg"
  date="2026-04-08"
  readTime={5}
  href="/blog/web-dev-tips"
/>

// Horizontal layout (for featured posts)
<BlogCard
  title="The Future of AI in Education"
  excerpt="Exploring how artificial intelligence is transforming the learning experience..."
  image="https://example.com/ai-education.jpg"
  category="AI/ML"
  author="Dr. James Park"
  date="2026-04-07"
  readTime={8}
  href="/blog/ai-education"
  variant="horizontal"
/>

// Minimal layout (for sidebars)
<BlogCard
  title="Getting Started with TypeScript"
  excerpt="A beginner's guide to TypeScript fundamentals."
  image="https://example.com/typescript.jpg"
  author="Alex Rivera"
  date="2026-04-06"
  readTime={3}
  href="/blog/typescript-guide"
  variant="minimal"
/>
```

### Accessibility
- Semantic article markup
- Alt text for images
- ARIA labels for metadata icons
- Keyboard navigation
- Focus indicators

### Responsive Design
- **Default variant**: Vertical layout on all screens
- **Horizontal variant**: Vertical on mobile, horizontal on tablet+
- **Minimal variant**: Compact on all screens

---

## Common Patterns

### Grid Layouts

```tsx
// Features grid
<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
  <FeatureCard {...feature1} />
  <FeatureCard {...feature2} />
  <FeatureCard {...feature3} />
</div>

// Pricing grid (3 columns)
<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
  <PricingCard {...starter} />
  <PricingCard {...pro} isPopular />
  <PricingCard {...enterprise} />
</div>

// Blog grid
<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
  <BlogCard {...post1} />
  <BlogCard {...post2} />
  <BlogCard {...post3} />
</div>
```

### Performance Optimization

All card components are optimized for performance:

1. **Server Components by default** - Reduced JavaScript bundle size
2. **Next.js Image optimization** - Automatic image optimization and lazy loading
3. **Minimal re-renders** - Pure functional components with no unnecessary state
4. **CSS-only animations** - Hardware-accelerated transitions
5. **Semantic HTML** - Better SEO and accessibility

### Best Practices

1. **Use semantic HTML** - All cards use proper semantic elements
2. **Provide alt text** - Always include alt text for images
3. **Keep content concise** - Use line-clamp for long text
4. **Test keyboard navigation** - Ensure all interactive elements are keyboard accessible
5. **Use consistent spacing** - Follow the design system spacing scale
6. **Optimize images** - Use Next.js Image component for automatic optimization
7. **Handle loading states** - Show loading indicators for async operations
8. **Provide fallbacks** - Handle missing data gracefully

---

## Component Composition

Cards can be composed with other UI components:

```tsx
// ServiceCard with custom features
<ServiceCard
  icon={Zap}
  title="Premium"
  description="Advanced features for power users"
  features={[
    'All Pro features',
    'Custom integrations',
    'Priority support'
  ]}
  badge="Popular"
  ctaText="Upgrade Now"
/>

// BlogCard in a section
<section className="py-24">
  <Container>
    <SectionTitle
      badge="Blog"
      title="Latest Articles"
      description="Stay updated with our latest insights"
    />
    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
      {posts.map(post => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  </Container>
</section>
```

---

## TypeScript Support

All components are fully typed with TypeScript:

```typescript
import type {
  FeatureCardProps,
  ServiceCardProps,
  PricingCardProps,
  PricingFeature,
  TestimonialCardProps,
  BlogCardProps
} from '@/components/ui';
```

---

## Browser Support

All card components support:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**Last Updated**: April 8, 2026  
**Version**: 2.0.0
