import type { Metadata } from 'next';
import { NotificationBanner } from '@/components/sections/notification-banner';
import { HeroSection } from '@/components/sections/hero-section';

export const metadata: Metadata = {
  title: 'CTC Club - Learn Tech Skills & Build Your Career',
  description: 'The ultimate learning platform for university students. Access structured courses, earn certificates, build portfolio projects, and join a thriving tech community.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50/30 via-white to-white">
      <NotificationBanner />
      <HeroSection />
    </main>
  );
}
