import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/sections/hero';
import { Stats } from '@/components/sections/stats';
import { Features } from '@/components/sections/features';
import { Courses } from '@/components/sections/courses';
import { Testimonials } from '@/components/sections/testimonials';
import { CTA } from '@/components/sections/cta';
import { FAQ } from '@/components/sections/faq';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Courses />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
