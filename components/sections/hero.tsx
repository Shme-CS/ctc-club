import { ArrowRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          {/* Content */}
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Spring 2026 Registration Open
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Learn Tech Skills. Build Real Projects. Grow Your Career.
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The ultimate learning platform for university students. Access structured courses, earn certificates, build portfolio projects, and join a thriving tech community.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                Start Learning Free
              </Button>
              <Button size="lg" variant="outline" href="/courses">
                Browse Courses
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-10 flex items-center gap-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full bg-gray-200 ring-2 ring-white"
                  />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-semibold text-gray-900">5,000+ students</p>
                <p className="text-gray-600">already learning</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative mt-16 sm:mt-24 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-50 lg:aspect-auto lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20" />
              {/* Placeholder for hero image */}
              <div className="flex h-full items-center justify-center text-gray-400">
                <Users className="h-32 w-32" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
