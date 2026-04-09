import { HeroContent } from './hero-content';
import { HeroImage } from './hero-image';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
