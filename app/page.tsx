import type { Metadata } from 'next';
import { NotificationBanner } from '@/components/sections/notification-banner';
import { HeroSection } from '@/components/sections/hero-section';
import { StatsSection } from '@/components/sections/stats-section';
import { CoursesSection } from '@/components/sections/courses-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { PathsSection } from '@/components/sections/paths-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { CommunitySection } from '@/components/sections/community-section';
import { SupportSection } from '@/components/sections/support-section';
import { EventsSection } from '@/components/sections/events-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { CTASection } from '@/components/sections/cta-section';
import { Footer } from '@/components/sections/footer';

// Page metadata for SEO
export const metadata: Metadata = {
  title: 'CTC Club - Learn Tech Skills & Build Your Career',
  description: 'The ultimate learning platform for university students. Access structured courses, earn certificates, build portfolio projects, and join a thriving tech community.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
      
      {/* Content */}
      <div className="relative z-10">
        <NotificationBanner />
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <CoursesSection />
        <PathsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <ProjectsSection />
        <CommunitySection />
        <SupportSection />
        <EventsSection />
        <PricingSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
