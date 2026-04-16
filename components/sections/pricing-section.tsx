'use client';

import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    id: 1,
    name: 'Student',
    description: 'Perfect for individual learning.',
    price: '$0',
    period: '/ forever',
    features: [
      'All basic courses',
      'Community access',
      'GitHub project submissions',
      'Support tickets',
      'Certificates',
    ],
    buttonText: 'Get Started Free',
    buttonVariant: 'outline' as const,
    popular: false,
    delay: 0,
  },
  {
    id: 2,
    name: 'University Partner',
    description: 'For institutions and large clubs.',
    price: 'Custom',
    period: '',
    features: [
      'Unlimited student accounts',
      'Custom course creation',
      'Advanced analytics',
      'Priority 24/7 support',
      'Custom branding',
      'Admin dashboard',
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'default' as const,
    popular: true,
    delay: 150,
  },
];

export function PricingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        {/* Section Header */}
        <div
          className="text-center mb-12 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Pricing</span>
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            100% free for university students.
          </p>
        </div>

        {/* Pricing Cards - Centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl w-full">
            {pricingPlans.map((plan) => {
              const isHovered = hoveredId === plan.id;
              
              return (
                <div
                  key={plan.id}
                  className={`relative flex flex-col p-8 bg-white rounded-3xl border-2 transition-all duration-500 cursor-pointer ${
                    plan.popular 
                      ? 'border-purple-300 shadow-xl hover:shadow-2xl' 
                      : 'border-gray-200 hover:border-purple-200 hover:shadow-xl'
                  } ${isHovered ? '-translate-y-2' : 'translate-y-0'}`}
                  onMouseEnter={() => setHoveredId(plan.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                    transition: 'all 0.9s ease-out',
                    transitionDelay: `${plan.delay}ms`,
                  }}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold rounded-full shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-gray-600 ml-2">{plan.period}</span>}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, index) => (
                      <li 
                        key={index} 
                        className="flex items-start gap-3"
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                          transition: 'all 0.8s ease-out',
                          transitionDelay: `${plan.delay + (index * 80) + 200}ms`,
                        }}
                      >
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.popular ? 'bg-purple-100' : 'bg-teal-100'
                        }`}>
                          <Check className={`w-3.5 h-3.5 ${
                            plan.popular ? 'text-purple-600' : 'text-teal-600'
                          }`} strokeWidth={3} />
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    variant={plan.buttonVariant}
                    className={`w-full font-semibold rounded-full py-6 transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl'
                        : 'border-2 border-gray-300 text-gray-900 hover:bg-gray-50 hover:border-gray-400'
                    } ${isHovered ? 'scale-105' : 'scale-100'}`}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
