import type { Metadata } from 'next';
import { NotificationBanner } from '@/components/sections/notification-banner';
import { HeroSection } from '@/components/sections/hero-section';

// Page metadata for SEO
export const metadata: Metadata = {
  title: 'CTC Club - Learn Tech Skills & Build Your Career',
  description: 'The ultimate learning platform for university students. Access structured courses, earn certificates, build portfolio projects, and join a thriving tech community.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
      
      {/* Content */}
      <div className="relative z-10">
        <NotificationBanner />
        <HeroSection />
      </div>
    </main>
  );
}
