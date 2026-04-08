# 🚀 Quick Start Guide - CTC Club

Get the CTC Club platform running in 5 minutes!

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Code editor (VS Code recommended)

## Step 1: Install Dependencies

```bash
cd ctc-club
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- CVA (component variants)

## Step 2: Run Development Server

```bash
npm run dev
```

The app will start at [http://localhost:3000](http://localhost:3000)

## Step 3: Explore the App

### Homepage Sections
- ✅ **Navbar**: Responsive navigation with mobile menu
- ✅ **Hero**: Main landing section with CTAs
- ✅ **Stats**: Key metrics display
- ✅ **Features**: Platform features grid
- ✅ **Courses**: Featured courses carousel
- ✅ **Footer**: Site-wide footer with links

## Project Structure

```
ctc-club/
├── app/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable components
│   ├── layout/            # Layout components
│   └── sections/          # Page sections
└── lib/
    └── utils.ts           # Utilities
```

## Making Changes

### 1. Edit Homepage
Open `app/page.tsx` and modify sections:

```tsx
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      {/* Add your sections here */}
    </main>
  );
}
```

### 2. Create New Component

```tsx
// components/ui/card.tsx
export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      {children}
    </div>
  );
}
```

### 3. Add New Page

```tsx
// app/about/page.tsx
export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
}
```

## Customization

### Change Colors

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#YOUR_COLOR',
      },
    },
  },
}
```

### Change Fonts

Edit `app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({ subsets: ["latin"] });
```

## Build for Production

```bash
# Create optimized build
npm run build

# Start production server
npm start
```

## Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Done! Your app is live 🎉

## Common Commands

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start

# Lint
npm run lint
```

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### TypeScript Errors
```bash
# Check types
npx tsc --noEmit
```

## Next Steps

1. ✅ Explore the codebase
2. ✅ Read `ARCHITECTURE.md` for detailed docs
3. ✅ Customize colors and fonts
4. ✅ Add new pages and components
5. ✅ Deploy to Vercel

## Need Help?

- 📖 [Next.js Documentation](https://nextjs.org/docs)
- 💬 [GitHub Issues](https://github.com/Shme-CS/ctc-club/issues)
- 📧 Email: support@ctc-club.com

---

Happy coding! 🚀
