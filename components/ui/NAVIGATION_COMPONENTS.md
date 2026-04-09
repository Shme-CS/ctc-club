# Navigation Components Documentation

Professional navigation components for modern web applications with full accessibility, responsive design, and TypeScript support.

## Table of Contents

1. [Navbar](#navbar)
2. [NavLink](#navlink)
3. [MobileMenu](#mobilemenu)
4. [DropdownMenu](#dropdownmenu)
5. [Usage Examples](#usage-examples)
6. [Best Practices](#best-practices)

---

## Navbar

The main navigation container with sticky behavior, scroll detection, and mobile menu integration.

### Component Analysis

**Purpose**: Provide site-wide navigation with logo, links, dropdowns, and CTAs

**Component Type**: Client Component (requires scroll detection and mobile menu state)

**Key Features**:
- Sticky positioning with scroll detection
- Responsive mobile menu integration
- Dropdown menu support
- Scroll shadow effect
- Backdrop blur on scroll
- Automatic mobile menu conversion

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `logo` | `ReactNode` | ❌ | "CTC Club" | Logo component or text |
| `items` | `NavbarItem[]` | ❌ | `[]` | Navigation items |
| `ctaButtons` | `CTAButton[]` | ❌ | `[]` | Call-to-action buttons |
| `sticky` | `boolean` | ❌ | `true` | Whether navbar is sticky |
| `showScrollShadow` | `boolean` | ❌ | `true` | Show shadow when scrolled |
| `className` | `string` | ❌ | `''` | Additional CSS classes |

### NavbarItem Interface

```typescript
interface NavbarItem {
  label: string;              // Item label
  href?: string;              // Link destination (for simple links)
  dropdown?: DropdownMenuItem[]; // Dropdown items (for menus)
  icon?: LucideIcon;          // Optional icon
  disabled?: boolean;         // Whether item is disabled
}
```

### Usage Example

```tsx
import { Navbar } from '@/components/ui';
import { Home, BookOpen, Users, Mail } from 'lucide-react';

export function SiteHeader() {
  return (
    <Navbar
      logo={<Logo />}
      items={[
        { label: 'Home', href: '/', icon: Home },
        { label: 'Courses', href: '/courses', icon: BookOpen },
        {
          label: 'Resources',
          dropdown: [
            { label: 'Blog', href: '/blog', description: 'Latest articles' },
            { label: 'Docs', href: '/docs', description: 'Documentation' },
          ]
        },
        { label: 'About', href: '/about', icon: Users },
        { label: 'Contact', href: '/contact', icon: Mail },
      ]}
      ctaButtons={[
        { label: 'Sign In', href: '/signin', variant: 'outline' },
        { label: 'Get Started', href: '/signup', variant: 'primary' }
      ]}
    />
  );
}
```

### States

- **Default**: White background, no shadow
- **Scrolled**: Backdrop blur, shadow, slightly transparent
- **Mobile Menu Open**: Body scroll locked, overlay visible

---

## NavLink

Individual navigation link with automatic active state detection.

### Component Analysis

**Purpose**: Display navigation links with active route highlighting

**Component Type**: Client Component (uses usePathname for active detection)

**Key Features**:
- Automatic active state detection
- Support for internal and external links
- Optional icons
- Active indicator (underline)
- Keyboard navigation
- Focus states

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `href` | `string` | ✅ | - | Link destination |
| `label` | `string` | ✅ | - | Link label text |
| `icon` | `LucideIcon` | ❌ | - | Optional icon |
| `external` | `boolean` | ❌ | `false` | Whether link is external |
| `disabled` | `boolean` | ❌ | `false` | Whether link is disabled |
| `onClick` | `() => void` | ❌ | - | Click handler |
| `className` | `string` | ❌ | `''` | Additional CSS classes |
| `showActiveIndicator` | `boolean` | ❌ | `true` | Show active underline |
| `isActive` | `(pathname: string) => boolean` | ❌ | - | Custom active check |

### Usage Example

```tsx
import { NavLink } from '@/components/ui';
import { BookOpen } from 'lucide-react';

// Basic usage
<NavLink href="/courses" label="Courses" />

// With icon
<NavLink href="/about" label="About" icon={BookOpen} />

// External link
<NavLink 
  href="https://blog.example.com" 
  label="Blog" 
  external 
/>

// Custom active check
<NavLink
  href="/courses"
  label="Courses"
  isActive={(pathname) => pathname.startsWith('/courses')}
/>
```

### States

- **Default**: Gray text, no background
- **Hover**: Blue text, light gray background
- **Active**: Blue text, blue background, underline indicator
- **Focus**: Ring outline for keyboard navigation
- **Disabled**: Gray text, cursor not-allowed

---

## MobileMenu

Full-screen mobile navigation drawer with animations and scroll lock.

### Component Analysis

**Purpose**: Provide mobile-friendly navigation experience

**Component Type**: Client Component (manages open/close state and animations)

**Key Features**:
- Full-screen overlay
- Smooth slide-in animation
- Body scroll lock when open
- Backdrop blur
- Auto-close on route change
- Keyboard support (Escape to close)
- CTA buttons at bottom

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `isOpen` | `boolean` | ✅ | - | Whether menu is open |
| `onClose` | `() => void` | ✅ | - | Close handler |
| `items` | `MobileMenuItem[]` | ✅ | - | Navigation items |
| `ctaButtons` | `CTAButton[]` | ❌ | `[]` | CTA buttons |
| `logo` | `ReactNode` | ❌ | - | Optional logo |

### MobileMenuItem Interface

```typescript
interface MobileMenuItem {
  label: string;       // Menu item label
  href: string;        // Link destination
  icon?: LucideIcon;   // Optional icon
  badge?: string;      // Optional badge text
  disabled?: boolean;  // Whether item is disabled
}
```

### Usage Example

```tsx
import { useState } from 'react';
import { MobileMenu } from '@/components/ui';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Menu
      </button>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={[
          { label: 'Home', href: '/', icon: Home },
          { label: 'Courses', href: '/courses', icon: BookOpen, badge: 'New' },
          { label: 'About', href: '/about', icon: Users },
        ]}
        ctaButtons={[
          { label: 'Sign In', href: '/signin', variant: 'outline' },
          { label: 'Get Started', href: '/signup', variant: 'primary' }
        ]}
      />
    </>
  );
}
```

### States

- **Closed**: Not rendered (null)
- **Opening**: Fade-in + slide-in animation
- **Open**: Full visibility, scroll locked
- **Closing**: Fade-out animation

---

## DropdownMenu

Nested navigation menu with hover and click interactions.

### Component Analysis

**Purpose**: Display grouped navigation items in a dropdown

**Component Type**: Client Component (manages hover/click state)

**Key Features**:
- Hover and click to open
- Automatic positioning (left, right, center)
- Click outside to close
- Escape key to close
- Smooth animations
- Icon and description support
- Keyboard navigation

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `trigger` | `string` | ✅ | - | Trigger button text |
| `items` | `DropdownMenuItem[]` | ✅ | - | Menu items |
| `icon` | `LucideIcon` | ❌ | - | Optional trigger icon |
| `align` | `'left' \| 'right' \| 'center'` | ❌ | `'left'` | Dropdown alignment |
| `className` | `string` | ❌ | `''` | Additional CSS classes |

### DropdownMenuItem Interface

```typescript
interface DropdownMenuItem {
  label: string;          // Menu item label
  href: string;           // Link destination
  icon?: LucideIcon;      // Optional icon
  description?: string;   // Optional description
  disabled?: boolean;     // Whether item is disabled
}
```

### Usage Example

```tsx
import { DropdownMenu } from '@/components/ui';
import { Code, Database, Palette } from 'lucide-react';

<DropdownMenu
  trigger="Courses"
  items={[
    {
      label: 'Web Development',
      href: '/courses/web-dev',
      icon: Code,
      description: 'Learn HTML, CSS, JavaScript, and React'
    },
    {
      label: 'Data Science',
      href: '/courses/data-science',
      icon: Database,
      description: 'Master Python, ML, and data analysis'
    },
    {
      label: 'Design',
      href: '/courses/design',
      icon: Palette,
      description: 'UI/UX design and graphic design'
    }
  ]}
  align="left"
/>
```

### States

- **Closed**: Trigger visible, menu hidden
- **Hover**: Menu appears with fade-in animation
- **Open**: Menu visible, chevron rotated
- **Focus**: Keyboard navigation through items

---

## Usage Examples

### Complete Navigation Setup

```tsx
// app/layout.tsx or components/layout/site-header.tsx
import { Navbar } from '@/components/ui';
import { Home, BookOpen, Users, Mail, Code, Database } from 'lucide-react';

export function SiteHeader() {
  return (
    <Navbar
      logo={
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-8" />
          <span className="text-xl font-bold">CTC Club</span>
        </Link>
      }
      items={[
        {
          label: 'Home',
          href: '/',
          icon: Home
        },
        {
          label: 'Courses',
          dropdown: [
            {
              label: 'Web Development',
              href: '/courses/web-dev',
              icon: Code,
              description: 'Full-stack web development'
            },
            {
              label: 'Data Science',
              href: '/courses/data-science',
              icon: Database,
              description: 'Python, ML, and analytics'
            }
          ]
        },
        {
          label: 'About',
          href: '/about',
          icon: Users
        },
        {
          label: 'Contact',
          href: '/contact',
          icon: Mail
        }
      ]}
      ctaButtons={[
        {
          label: 'Sign In',
          href: '/signin',
          variant: 'outline'
        },
        {
          label: 'Get Started',
          href: '/signup',
          variant: 'primary'
        }
      ]}
      sticky={true}
      showScrollShadow={true}
    />
  );
}
```

### Custom Active Detection

```tsx
<NavLink
  href="/courses"
  label="Courses"
  isActive={(pathname) => {
    // Custom logic for active state
    return pathname.startsWith('/courses') || 
           pathname.startsWith('/learn');
  }}
/>
```

### Nested Dropdown Menus

```tsx
<DropdownMenu
  trigger="Resources"
  items={[
    {
      label: 'Documentation',
      href: '/docs',
      icon: FileText,
      description: 'Complete API documentation'
    },
    {
      label: 'Blog',
      href: '/blog',
      icon: BookOpen,
      description: 'Latest articles and tutorials'
    },
    {
      label: 'Community',
      href: '/community',
      icon: Users,
      description: 'Join our Discord server'
    }
  ]}
  align="center"
/>
```

---

## Responsive Strategy

### Breakpoints

- **Mobile**: < 1024px - Mobile menu (hamburger)
- **Desktop**: ≥ 1024px - Full navigation bar

### Mobile (< 1024px)

- Hamburger menu button visible
- Desktop navigation hidden
- Full-screen mobile menu drawer
- Stacked navigation items
- CTA buttons at bottom

### Desktop (≥ 1024px)

- Full navigation bar visible
- Horizontal navigation items
- Dropdown menus on hover
- CTA buttons inline
- Mobile menu hidden

---

## Accessibility Features

### Keyboard Navigation

✅ **Tab Navigation**: All interactive elements focusable
✅ **Enter/Space**: Activate links and buttons
✅ **Escape**: Close mobile menu and dropdowns
✅ **Arrow Keys**: Navigate dropdown items (future enhancement)

### Screen Reader Support

✅ **Semantic HTML**: `<nav>`, `<ul>`, `<li>` elements
✅ **ARIA Labels**: `aria-label`, `aria-expanded`, `aria-current`
✅ **Role Attributes**: `role="dialog"`, `role="list"`
✅ **Focus Management**: Proper focus indicators

### Visual Accessibility

✅ **Color Contrast**: WCAG AA compliant (4.5:1 minimum)
✅ **Focus Indicators**: Visible ring on focus
✅ **Active States**: Clear visual feedback
✅ **Touch Targets**: Minimum 44x44px

---

## Performance Considerations

### Optimization Strategies

✅ **Client Components Only When Needed**: Navigation requires interactivity
✅ **Minimal Re-renders**: State isolated to specific components
✅ **CSS Animations**: Hardware-accelerated transitions
✅ **Lazy Loading**: Mobile menu only renders when open
✅ **Event Cleanup**: Proper cleanup of event listeners
✅ **Debounced Scroll**: Scroll detection optimized

### Bundle Impact

- Navbar: ~2KB (with state management)
- NavLink: ~0.8KB (with pathname detection)
- MobileMenu: ~1.5KB (with animations)
- DropdownMenu: ~1.2KB (with interactions)

**Total**: ~5.5KB for complete navigation system

---

## Best Practices

### 1. Keep Navigation Simple

```tsx
// ✅ Good: Clear, focused navigation
<Navbar
  items={[
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: 'About', href: '/about' }
  ]}
/>

// ❌ Bad: Too many items
<Navbar items={[...20 navigation items]} />
```

### 2. Use Dropdowns for Grouped Content

```tsx
// ✅ Good: Grouped related items
<Navbar
  items={[
    {
      label: 'Courses',
      dropdown: [
        { label: 'Web Dev', href: '/courses/web' },
        { label: 'Data Science', href: '/courses/data' }
      ]
    }
  ]}
/>
```

### 3. Provide Clear CTAs

```tsx
// ✅ Good: Clear, action-oriented CTAs
ctaButtons={[
  { label: 'Sign In', href: '/signin', variant: 'outline' },
  { label: 'Start Free Trial', href: '/signup', variant: 'primary' }
]}
```

### 4. Test Keyboard Navigation

- Tab through all navigation items
- Test Escape key on mobile menu
- Verify focus indicators are visible
- Test with screen readers

### 5. Optimize for Mobile

- Keep mobile menu items concise
- Use icons for better scannability
- Place important CTAs at bottom
- Test on actual devices

---

## Browser Support

All navigation components support:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## TypeScript Support

All components are fully typed:

```typescript
import type {
  NavbarProps,
  NavbarItem,
  NavLinkProps,
  MobileMenuProps,
  MobileMenuItem,
  DropdownMenuProps,
  DropdownMenuItem
} from '@/components/ui';
```

---

**Last Updated**: April 8, 2026  
**Version**: 2.0.0  
**Status**: ✅ Production Ready
