# Layout Components Documentation

Professional layout components for consistent page structure and content organization with full TypeScript support and responsive design.

## Table of Contents

1. [PageLayout](#pagelayout)
2. [Header](#header)
3. [SiteFooter](#sitefooter)
4. [GridLayout](#gridlayout)
5. [Usage Examples](#usage-examples)
6. [Best Practices](#best-practices)

---

## PageLayout

Main page wrapper that provides consistent structure across all pages with flexible header/footer configuration.

### Component Analysis

**Purpose**: Provide consistent page structure with header, main content, and footer

**Component Type**: Server Component (static layout structure)

**Key Features**:
- Flexible header/footer visibility
- Custom header/footer override
- Full-width or constrained content
- Background variants (white, gray, gradient)
- Padding control
- Flexbox layout (sticky footer)

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `ReactNode` | ✅ | - | Page content |
| `showHeader` | `boolean` | ❌ | `true` | Show site header/navbar |
| `showFooter` | `boolean` | ❌ | `true` | Show site footer |
| `header` | `ReactNode` | ❌ | - | Custom header component |
| `footer` | `ReactNode` | ❌ | - | Custom footer component |
| `fullWidth` | `boolean` | ❌ | `false` | Full-width content (no max-width) |
| `noPadding` | `boolean` | ❌ | `false` | Remove padding from main |
| `background` | `'white' \| 'gray' \| 'gradient'` | ❌ | `'white'` | Background variant |
| `className` | `string` | ❌ | `''` | Additional CSS for main |
| `containerClassName` | `string` | ❌ | `''` | Additional CSS for container |

### Usage Examples

```tsx
// Basic usage
<PageLayout>
  <YourPageContent />
</PageLayout>

// Auth page (no header/footer)
<PageLayout showHeader={false} showFooter={false}>
  <LoginForm />
</PageLayout>

// Full-width landing page
<PageLayout fullWidth background="gradient">
  <HeroSection />
  <FeaturesSection />
</PageLayout>

// Custom header
<PageLayout
  header={<CustomNavbar />}
  footer={<MinimalFooter />}
>
  <Content />
</PageLayout>
```

### Background Variants

- **white**: Clean white background (default)
- **gray**: Light gray background (`bg-gray-50`)
- **gradient**: Blue gradient (`from-blue-50 to-white`)

---

## Header

Reusable page header with title, subtitle, breadcrumbs, and action buttons for consistent page context.

### Component Analysis

**Purpose**: Provide page context with title, navigation, and actions

**Component Type**: Server Component (static content)

**Key Features**:
- Title with optional badge
- Subtitle/description
- Breadcrumb navigation
- Action buttons (right-aligned)
- Multiple variants (default, gradient, dark)
- Centered or left-aligned layout
- Responsive design

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | ✅ | - | Page title |
| `subtitle` | `string` | ❌ | - | Page subtitle/description |
| `badge` | `{ label, variant }` | ❌ | - | Badge next to title |
| `breadcrumbs` | `Breadcrumb[]` | ❌ | `[]` | Breadcrumb navigation |
| `actions` | `ReactNode` | ❌ | - | Action buttons |
| `variant` | `'default' \| 'gradient' \| 'dark'` | ❌ | `'default'` | Background variant |
| `centered` | `boolean` | ❌ | `false` | Center align content |
| `className` | `string` | ❌ | `''` | Additional CSS classes |

### Breadcrumb Interface

```typescript
interface Breadcrumb {
  label: string;       // Breadcrumb label
  href?: string;       // Link (optional for last item)
  icon?: LucideIcon;   // Optional icon
}
```

### Usage Examples

```tsx
// Basic header
<Header
  title="Course Dashboard"
  subtitle="Manage your learning journey"
/>

// With breadcrumbs
<Header
  title="Web Development"
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: 'Web Development' }
  ]}
/>

// With actions
<Header
  title="My Courses"
  subtitle="Track your progress and continue learning"
  actions={
    <>
      <Button variant="outline">Filter</Button>
      <Button variant="primary">Create Course</Button>
    </>
  }
/>

// Gradient variant with badge
<Header
  title="Premium Features"
  badge={{ label: 'Pro', variant: 'warning' }}
  subtitle="Unlock advanced capabilities"
  variant="gradient"
  centered
/>
```

### Variants

- **default**: White background with border
- **gradient**: Blue-purple gradient with white text
- **dark**: Dark background with white text

---

## SiteFooter

Site-wide footer with navigation links, social media, and newsletter signup for consistent footer across all pages.

### Component Analysis

**Purpose**: Provide site-wide footer with links and information

**Component Type**: Server Component (static content)

**Key Features**:
- Logo and description
- Multiple link sections
- Social media links
- Newsletter signup area
- Copyright text
- Minimal variant for auth pages
- Responsive grid layout

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `logo` | `ReactNode` | ❌ | - | Logo component |
| `description` | `string` | ❌ | - | Company/site description |
| `sections` | `FooterSection[]` | ❌ | `[]` | Footer link sections |
| `socialLinks` | `SocialLink[]` | ❌ | `[]` | Social media links |
| `copyright` | `string` | ❌ | Auto-generated | Copyright text |
| `newsletter` | `ReactNode` | ❌ | - | Newsletter signup component |
| `minimal` | `boolean` | ❌ | `false` | Minimal variant |
| `className` | `string` | ❌ | `''` | Additional CSS classes |

### Interfaces

```typescript
interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;  // For accessibility
}
```

### Usage Examples

```tsx
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

// Full footer
<SiteFooter
  logo={<Logo />}
  description="The ultimate learning platform for university students."
  sections={[
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Courses', href: '/courses' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Careers', href: '/careers' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'Help Center', href: '/help' },
        { label: 'Community', href: '/community' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
        { label: 'Cookies', href: '/cookies' }
      ]
    }
  ]}
  socialLinks={[
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
  ]}
  newsletter={<NewsletterSignup />}
/>

// Minimal footer (for auth pages)
<SiteFooter
  minimal
  logo={<Logo />}
  socialLinks={socialLinks}
/>
```

---

## GridLayout

Flexible grid system for organizing content with responsive column configuration and consistent spacing.

### Component Analysis

**Purpose**: Provide flexible grid layout for content organization

**Component Type**: Server Component (layout only)

**Key Features**:
- Responsive column configuration
- Multiple gap sizes
- Equal height items option
- Center items option
- GridItem component for spanning
- Simple or advanced configuration

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `ReactNode` | ✅ | - | Grid items |
| `cols` | `number \| GridColumns` | ❌ | `3` | Columns (simple or responsive) |
| `gap` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | ❌ | `'lg'` | Gap size |
| `equalHeight` | `boolean` | ❌ | `false` | Equal height items |
| `centerItems` | `boolean` | ❌ | `false` | Center items in grid |
| `className` | `string` | ❌ | `''` | Additional CSS classes |

### GridColumns Interface

```typescript
interface GridColumns {
  base?: 1 | 2 | 3 | 4 | 5 | 6;  // Mobile (default)
  sm?: 1 | 2 | 3 | 4 | 5 | 6;    // 640px+
  md?: 1 | 2 | 3 | 4 | 5 | 6;    // 768px+
  lg?: 1 | 2 | 3 | 4 | 5 | 6;    // 1024px+
  xl?: 1 | 2 | 3 | 4 | 5 | 6;    // 1280px+
}
```

### Usage Examples

```tsx
// Simple 3-column grid
<GridLayout cols={3} gap="lg">
  <Card />
  <Card />
  <Card />
</GridLayout>

// Responsive grid
<GridLayout
  cols={{ base: 1, md: 2, lg: 3, xl: 4 }}
  gap="md"
>
  {items.map(item => <Item key={item.id} {...item} />)}
</GridLayout>

// Equal height cards
<GridLayout cols={3} gap="lg" equalHeight>
  <FeatureCard />
  <FeatureCard />
  <FeatureCard />
</GridLayout>

// With GridItem spanning
<GridLayout cols={4} gap="md">
  <GridItem span={2}>
    <FeaturedCard />
  </GridItem>
  <GridItem>
    <RegularCard />
  </GridItem>
  <GridItem>
    <RegularCard />
  </GridItem>
</GridLayout>

// Responsive spanning
<GridLayout cols={{ base: 1, lg: 3 }}>
  <GridItem spanConfig={{ base: 1, lg: 2 }}>
    <HeroCard />
  </GridItem>
  <GridItem>
    <SidebarCard />
  </GridItem>
</GridLayout>
```

### Gap Sizes

- **none**: 0px
- **xs**: 8px (0.5rem)
- **sm**: 16px (1rem)
- **md**: 24px (1.5rem)
- **lg**: 32px (2rem) - Default
- **xl**: 40px (2.5rem)
- **2xl**: 48px (3rem)

---

## Usage Examples

### Complete Page Structure

```tsx
// app/courses/page.tsx
import { PageLayout, Header, GridLayout, SiteFooter } from '@/components/ui';
import { Navbar } from '@/components/ui';

export default function CoursesPage() {
  return (
    <PageLayout
      header={<Navbar />}
      footer={<SiteFooter {...footerProps} />}
    >
      <Header
        title="All Courses"
        subtitle="Explore our comprehensive course catalog"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Courses' }
        ]}
        actions={
          <Button>Filter Courses</Button>
        }
      />

      <div className="py-12">
        <GridLayout cols={{ base: 1, md: 2, lg: 3 }} gap="lg">
          {courses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </GridLayout>
      </div>
    </PageLayout>
  );
}
```

### Dashboard Layout

```tsx
<PageLayout background="gray">
  <Header
    title="Dashboard"
    subtitle="Welcome back, John!"
    badge={{ label: 'Pro', variant: 'primary' }}
    actions={
      <>
        <Button variant="outline">Settings</Button>
        <Button>New Course</Button>
      </>
    }
  />

  <div className="py-8">
    <GridLayout cols={{ base: 1, lg: 3 }} gap="lg">
      <GridItem spanConfig={{ base: 1, lg: 2 }}>
        <MainContent />
      </GridItem>
      <GridItem>
        <Sidebar />
      </GridItem>
    </GridLayout>
  </div>
</PageLayout>
```

### Landing Page

```tsx
<PageLayout fullWidth noPadding background="gradient">
  <HeroSection />
  
  <section className="py-24">
    <Container>
      <Header
        title="Features"
        subtitle="Everything you need to succeed"
        centered
      />
      <GridLayout cols={{ base: 1, md: 2, lg: 3 }} gap="xl">
        {features.map(feature => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </GridLayout>
    </Container>
  </section>
</PageLayout>
```

---

## Responsive Strategy

### Breakpoints

All layout components use Tailwind's standard breakpoints:

- **Base**: 0-640px (mobile)
- **sm**: 640px+ (large mobile)
- **md**: 768px+ (tablet)
- **lg**: 1024px+ (desktop)
- **xl**: 1280px+ (large desktop)

### Mobile-First Approach

All components are designed mobile-first:

1. **PageLayout**: Full-width on mobile, constrained on desktop
2. **Header**: Stacked on mobile, side-by-side on desktop
3. **SiteFooter**: Single column on mobile, multi-column on desktop
4. **GridLayout**: 1 column on mobile, multiple on desktop

---

## Accessibility Features

### Semantic HTML

✅ **PageLayout**: `<header>`, `<main>`, `<footer>` elements
✅ **Header**: `<header>`, `<nav>` for breadcrumbs, `<h1>` for title
✅ **SiteFooter**: `<footer>`, `<nav>` for links, `<ul>` for lists
✅ **GridLayout**: Proper heading hierarchy in grid items

### ARIA Attributes

✅ **Breadcrumbs**: `aria-label="Breadcrumb"`, `aria-current="page"`
✅ **Social Links**: `aria-label` for icon-only links
✅ **Navigation**: `role="list"` for link lists

### Keyboard Navigation

✅ All interactive elements focusable
✅ Logical tab order
✅ Focus indicators on all links/buttons

---

## Performance Considerations

### Optimization Strategies

✅ **Server Components**: All layout components are Server Components
✅ **Zero JavaScript**: No client-side JavaScript for layouts
✅ **CSS Grid**: Native CSS Grid (hardware-accelerated)
✅ **Minimal DOM**: Clean, semantic HTML structure
✅ **No Re-renders**: Static components don't re-render

### Bundle Impact

- PageLayout: ~0.3KB (Server Component)
- Header: ~0.5KB (Server Component)
- SiteFooter: ~0.6KB (Server Component)
- GridLayout: ~0.4KB (Server Component)

**Total**: ~1.8KB for complete layout system (Server-rendered, zero client JS)

---

## Best Practices

### 1. Use PageLayout for All Pages

```tsx
// ✅ Good: Consistent structure
export default function Page() {
  return (
    <PageLayout>
      <Content />
    </PageLayout>
  );
}

// ❌ Bad: Inconsistent structure
export default function Page() {
  return (
    <div>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}
```

### 2. Use Header for Page Context

```tsx
// ✅ Good: Clear page context
<Header
  title="Course Details"
  breadcrumbs={breadcrumbs}
  actions={<Button>Enroll</Button>}
/>

// ❌ Bad: No context
<h1>Course Details</h1>
```

### 3. Use GridLayout for Consistent Spacing

```tsx
// ✅ Good: Consistent grid
<GridLayout cols={3} gap="lg">
  {items.map(item => <Card key={item.id} {...item} />)}
</GridLayout>

// ❌ Bad: Manual grid
<div className="grid grid-cols-3 gap-8">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

### 4. Provide Breadcrumbs for Deep Pages

```tsx
// ✅ Good: Clear navigation path
<Header
  title="React Hooks"
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: 'Web Dev', href: '/courses/web-dev' },
    { label: 'React Hooks' }
  ]}
/>
```

### 5. Use Responsive Grid Configuration

```tsx
// ✅ Good: Responsive grid
<GridLayout
  cols={{ base: 1, md: 2, lg: 3, xl: 4 }}
  gap="lg"
>
  {items}
</GridLayout>

// ❌ Bad: Fixed columns
<GridLayout cols={4}>
  {items}
</GridLayout>
```

---

## Browser Support

All layout components support:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## TypeScript Support

All components are fully typed:

```typescript
import type {
  PageLayoutProps,
  HeaderProps,
  Breadcrumb,
  SiteFooterProps,
  FooterSection,
  FooterLink,
  SocialLink,
  GridLayoutProps,
  GridItemProps,
  GridColumns
} from '@/components/ui';
```

---

**Last Updated**: April 8, 2026  
**Version**: 2.0.0  
**Status**: ✅ Production Ready
