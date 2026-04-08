# UI Components Documentation

Complete documentation for all UI components in the CTC Club design system.

---

## 📦 Available Components

1. [Button](#button)
2. [Input](#input)
3. [Textarea](#textarea)
4. [Label](#label)
5. [Badge](#badge)
6. [Avatar](#avatar)
7. [IconWrapper](#icon-wrapper)
8. [Divider](#divider)
9. [Container](#container)
10. [SectionTitle](#section-title)

---

## Button

### Purpose
Primary interactive element for actions, navigation, and form submissions.

### Usage
```tsx
import { Button } from '@/components/ui';

// Basic
<Button>Click me</Button>

// With variants
<Button variant="primary">Primary</Button>
<Button variant="outline">Outline</Button>

// With icons
<Button leftIcon={<Icon />}>With Icon</Button>

// Loading state
<Button isLoading>Loading...</Button>

// As link
<Button href="/courses">Go to Courses</Button>
```

### Props
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success'
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `isLoading`: boolean
- `leftIcon`, `rightIcon`: ReactNode
- `href`: string (converts to link)

---

## Input

### Purpose
Text input field for forms and data entry.

### Usage
```tsx
import { Input } from '@/components/ui';

// Basic
<Input placeholder="Enter text" />

// With label
<Input label="Email" type="email" required />

// With icons
<Input leftIcon={<Search />} placeholder="Search..." />

// With error
<Input error errorMessage="This field is required" />

// With helper text
<Input helperText="Enter your email address" />
```

### Props
- `variant`: 'default' | 'error' | 'success'
- `inputSize`: 'sm' | 'md' | 'lg'
- `label`: string
- `leftIcon`, `rightIcon`: ReactNode
- `error`: boolean
- `errorMessage`: string
- `helperText`: string
- `required`: boolean

---

## Textarea

### Purpose
Multi-line text input for longer content.

### Usage
```tsx
import { Textarea } from '@/components/ui';

// Basic
<Textarea placeholder="Enter description" />

// With label and character count
<Textarea 
  label="Description" 
  maxLength={500} 
  showCount 
/>

// With resize control
<Textarea resize="vertical" />

// With error
<Textarea error errorMessage="Description is required" />
```

### Props
- `variant`: 'default' | 'error' | 'success'
- `textareaSize`: 'sm' | 'md' | 'lg'
- `resize`: 'none' | 'vertical' | 'horizontal' | 'both'
- `maxLength`: number
- `showCount`: boolean
- `label`: string
- `errorMessage`: string

---

## Label

### Purpose
Accessible label for form inputs.

### Usage
```tsx
import { Label } from '@/components/ui';

// Basic
<Label htmlFor="email">Email</Label>

// With required indicator
<Label htmlFor="name" required>Name</Label>

// With optional indicator
<Label htmlFor="phone" optional>Phone</Label>

// Different variants
<Label variant="error">Error Label</Label>
<Label variant="success">Success Label</Label>
```

### Props
- `variant`: 'default' | 'error' | 'success' | 'muted'
- `size`: 'sm' | 'md' | 'lg'
- `required`: boolean
- `optional`: boolean

---

## Badge

### Purpose
Small status indicators, tags, or labels.

### Usage
```tsx
import { Badge } from '@/components/ui';

// Basic
<Badge>New</Badge>

// Variants
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="danger">Danger</Badge>

// With icons
<Badge leftIcon={<Star />}>Featured</Badge>

// Removable
<Badge removable onRemove={() => console.log('removed')}>
  Tag
</Badge>

// Sizes
<Badge size="sm">Small</Badge>
<Badge size="lg">Large</Badge>
```

### Props
- `variant`: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'outline'
- `size`: 'sm' | 'md' | 'lg'
- `leftIcon`, `rightIcon`: ReactNode
- `removable`: boolean
- `onRemove`: () => void

---

## Avatar

### Purpose
User profile pictures or placeholder icons.

### Usage
```tsx
import { Avatar } from '@/components/ui';

// With image
<Avatar src="/user.jpg" alt="John Doe" />

// With fallback initials
<Avatar fallback="John Doe" />

// With custom icon
<Avatar icon={<User />} />

// With status indicator
<Avatar 
  src="/user.jpg" 
  showStatus 
  status="online" 
/>

// Sizes
<Avatar size="xs" />
<Avatar size="2xl" />

// Variants
<Avatar variant="primary" fallback="JD" />
```

### Props
- `src`: string
- `alt`: string
- `fallback`: string (for initials)
- `icon`: ReactNode
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
- `variant`: 'default' | 'primary' | 'success' | 'warning' | 'danger'
- `status`: 'online' | 'offline' | 'away' | 'busy'
- `showStatus`: boolean

---

## IconWrapper

### Purpose
Consistent icon container with background and styling.

### Usage
```tsx
import { IconWrapper } from '@/components/ui';
import { Star } from 'lucide-react';

// Basic
<IconWrapper icon={<Star />} />

// Variants
<IconWrapper icon={<Star />} variant="primary" />
<IconWrapper icon={<Star />} variant="solid" />

// Sizes
<IconWrapper icon={<Star />} size="sm" />
<IconWrapper icon={<Star />} size="xl" />

// Rounded
<IconWrapper icon={<Star />} rounded="full" />
```

### Props
- `icon`: ReactNode (required)
- `variant`: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'solid' | 'outline'
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
- `rounded`: 'none' | 'sm' | 'md' | 'lg' | 'full'

---

## Divider

### Purpose
Visual separator between content sections.

### Usage
```tsx
import { Divider } from '@/components/ui';

// Horizontal (default)
<Divider />

// With label
<Divider label="OR" />
<Divider label="Continue with" labelPosition="left" />

// Vertical
<Divider orientation="vertical" />

// Variants
<Divider variant="dashed" />
<Divider variant="dotted" />

// Spacing
<Divider spacing="lg" />
```

### Props
- `orientation`: 'horizontal' | 'vertical'
- `variant`: 'solid' | 'dashed' | 'dotted'
- `spacing`: 'none' | 'sm' | 'md' | 'lg' | 'xl'
- `label`: string
- `labelPosition`: 'left' | 'center' | 'right'

---

## Container

### Purpose
Responsive content wrapper with max-width constraints.

### Usage
```tsx
import { Container } from '@/components/ui';

// Basic
<Container>
  <h1>Content</h1>
</Container>

// Max width variants
<Container maxWidth="sm">Small container</Container>
<Container maxWidth="xl">Extra large</Container>

// Padding control
<Container padding="lg">More padding</Container>
<Container padding="none">No padding</Container>

// Custom element
<Container as="section">
  <h2>Section content</h2>
</Container>
```

### Props
- `maxWidth`: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'custom'
- `padding`: 'none' | 'sm' | 'md' | 'lg'
- `as`: React.ElementType (default: 'div')

---

## SectionTitle

### Purpose
Consistent section headers with title, subtitle, and description.

### Usage
```tsx
import { SectionTitle } from '@/components/ui';

// Basic
<SectionTitle title="Our Features" />

// With all options
<SectionTitle
  badge="Platform Features"
  title="Everything You Need"
  subtitle="Complete Learning Ecosystem"
  description="A comprehensive platform designed for university students."
  align="center"
  size="lg"
/>

// Left aligned
<SectionTitle
  title="About Us"
  description="Learn more about our mission"
  align="left"
/>
```

### Props
- `title`: string (required)
- `subtitle`: string
- `description`: string
- `badge`: string
- `align`: 'left' | 'center' | 'right'
- `size`: 'sm' | 'md' | 'lg'
- `spacing`: 'sm' | 'md' | 'lg'

---

## 🎨 Design Tokens

### Colors
All components use consistent color tokens:
- **Primary**: Blue (#3B82F6)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Danger**: Red (#EF4444)
- **Gray**: 50-900 scale

### Sizes
Consistent sizing scale:
- **xs**: Extra small
- **sm**: Small
- **md**: Medium (default)
- **lg**: Large
- **xl**: Extra large
- **2xl**: 2X large

### Spacing
Based on 4px grid:
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px

---

## ♿ Accessibility

All components include:
- ✅ Semantic HTML
- ✅ ARIA attributes
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Screen reader support
- ✅ Color contrast (WCAG AA)

---

## 🚀 Performance

Components are optimized for:
- ✅ Minimal re-renders
- ✅ Small bundle size
- ✅ Tree-shakeable exports
- ✅ No runtime CSS-in-JS
- ✅ Efficient DOM structure

---

## 📝 Best Practices

### Import Pattern
```tsx
// Preferred: Named imports
import { Button, Input, Badge } from '@/components/ui';

// Also works: Individual imports
import { Button } from '@/components/ui/button';
```

### Composition
```tsx
// Good: Compose components
<div>
  <Label htmlFor="email" required>Email</Label>
  <Input id="email" type="email" />
</div>

// Better: Use built-in label prop
<Input label="Email" type="email" required />
```

### Type Safety
```tsx
import type { ButtonProps } from '@/components/ui';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

---

## 🔧 Customization

### Extending Components
```tsx
// Create custom variant
<Button className="bg-purple-600 hover:bg-purple-700">
  Custom Color
</Button>

// Combine with Tailwind
<Input className="border-2 border-purple-500" />
```

### Theme Customization
Edit `tailwind.config.ts` to customize colors, spacing, etc.

---

**Last Updated**: April 8, 2026  
**Version**: 1.0.0
