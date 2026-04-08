import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

const benefits = [
  'Access to 100+ premium courses',
  'Earn verified certificates',
  'Build real-world projects',
  'Join 5,000+ active students',
  'Get 24/7 community support',
  'Track your progress with XP',
];

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 py-24 sm:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10" />
      
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="mt-6 text-lg leading-8 text-blue-100">
            Join thousands of students who are already building their tech careers with CTC Club. Start learning today for free.
          </p>

          {/* Benefits Grid */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 text-left">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-400" />
                <span className="text-sm text-white">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="default"
              className="bg-white text-blue-600 hover:bg-gray-100"
              rightIcon={<ArrowRight className="h-5 w-5" />}
            >
              Get Started Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              href="/courses"
            >
              Browse Courses
            </Button>
          </div>

          {/* Trust Badge */}
          <p className="mt-8 text-sm text-blue-200">
            No credit card required • Cancel anytime • 30-day money-back guarantee
          </p>
        </div>
      </Container>
    </section>
  );
}
