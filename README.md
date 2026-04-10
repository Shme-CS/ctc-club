# CTC Club - Tech Learning Platform

A modern, pixel-perfect learning platform built with Next.js 14, React, TypeScript, and Tailwind CSS. Designed for university students to learn tech skills, build real projects, and grow their careers.

## 🚀 Features

- ✅ Modern Next.js 14 App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Responsive design (mobile-first)
- ✅ Accessible components (WCAG AA)
- ✅ Performance optimized
- ✅ SEO friendly
- ✅ Production-ready architecture

## 📦 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Utilities**: class-variance-authority, clsx, tailwind-merge

## 🛠️ Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

1. **Install dependencies**:
```bash
cd ctc-club
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ctc-club/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   │   └── button.tsx     # Button component
│   ├── layout/            # Layout components
│   │   ├── navbar.tsx     # Navigation bar
│   │   └── footer.tsx     # Footer
│   └── sections/          # Page sections
│       ├── hero.tsx       # Hero section
│       ├── stats.tsx      # Stats section
│       ├── features.tsx   # Features grid
│       └── courses.tsx    # Courses section
├── lib/
│   └── utils.ts           # Utility functions
├── public/                # Static assets
├── next.config.mjs        # Next.js configuration
├── tailwind.config.ts     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Design System

### Colors

- **Primary**: Blue (#3B82F6)
- **Secondary**: Gray
- **Success**: Green
- **Danger**: Red

### Typography

- **Font**: Inter (Google Fonts)
- **Sizes**: sm, base, lg, xl, 2xl, 3xl, 4xl

### Spacing

- **Scale**: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

### Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 🧩 Components

### Button Component

Fully featured button with variants, sizes, loading states, and icons.

```tsx
import { Button } from '@/components/ui/button';

// Primary button
<Button>Click me</Button>

// With icon
<Button leftIcon={<Icon />}>Click me</Button>

// Loading state
<Button isLoading>Loading...</Button>

// As link
<Button href="/courses">Go to courses</Button>
```

### Navbar Component

Responsive navigation with mobile menu.

### Hero Section

Landing page hero with CTA buttons and social proof.

### Stats Section

Key metrics display with icons.

### Features Section

Feature grid with icons and descriptions.

### Courses Section

Course cards with images, ratings, and CTAs.

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Build for Production

```bash
npm run build
npm start
```

## 📝 Development Guidelines

### Code Style

- Use TypeScript for all components
- Follow React best practices
- Use Tailwind CSS for styling
- Keep components small and focused
- Write accessible HTML

### Component Structure

```tsx
'use client'; // Only if needed

import { /* imports */ } from 'package';

interface ComponentProps {
  // Props definition
}

export function Component({ props }: ComponentProps) {
  // Component logic
  return (
    // JSX
  );
}
```

### Naming Conventions

- **Components**: PascalCase (Button, Navbar)
- **Files**: kebab-case (button.tsx, navbar.tsx)
- **Functions**: camelCase (handleClick, fetchData)
- **Constants**: UPPER_SNAKE_CASE (API_URL)

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes.

## 👤 Author

**Shme-CS**
- GitHub: [@Shme-CS](https://github.com/Shme-CS)

## 🙏 Acknowledgments

- Design inspired by modern SaaS platforms
- Built with Next.js and Tailwind CSS
- Icons from Lucide React

---

**Made with ❤️ and TypeScript**
