import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const navigation = {
  platform: [
    { name: 'Courses', href: '/courses' },
    { name: 'Resources', href: '/resources' },
    { name: 'Community', href: '/community' },
    { name: 'Leaderboard', href: '/leaderboard' },
    { name: 'Projects', href: '/projects' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Support', href: '/support' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* CTA Section */}
      <div className="border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start Your Journey Today
              <span className="block text-blue-400">with CTC Club</span>
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Join thousands of students who are building their tech careers with us.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" href="/register" rightIcon={<ArrowRight className="h-5 w-5" />}>
                Register Now
              </Button>
              <Button size="lg" variant="outline" href="/courses" className="bg-transparent text-white border-white hover:bg-white/10">
                Explore Courses
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand */}
          <div className="space-y-8">
            <div>
              <span className="text-2xl font-bold text-white">CTC Club</span>
              <p className="mt-4 text-base text-gray-400">
                The ultimate tech learning platform for university students. Learn, build, and grow your career.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Platform</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.platform.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-xs leading-5 text-gray-400 text-center">
            &copy; 2026 CTC Club Learning Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
