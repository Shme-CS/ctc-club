import { HeroContent } from './hero-content';
import { HeroImage } from './hero-image';

/**
 * Main hero section component
 * Contains hero content (left) and hero image (right) in a two-column layout
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 lg:py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
