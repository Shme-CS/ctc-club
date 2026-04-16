'use client';

import { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui/container';
import { Footer } from '@/components/sections/footer';
import { Target, Heart, Lightbulb, Users, Award, TrendingUp, ArrowRight, Sparkles, Rocket, Shield } from 'lucide-react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [stats, setStats] = useState([0, 0, 0, 0]);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStats();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const targets = [5000, 35, 120, 2500];
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setStats(targets.map(target => Math.floor(target * easeOut)));

      if (currentStep >= steps) {
        setStats(targets);
        clearInterval(timer);
      }
    }, increment);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 py-20 lg:py-28">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>
        
        {/* Decorative Blurs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

        <Container>
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-semibold text-white">About CTC Club</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Empowering the Next Generation of{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Tech Professionals</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-400 opacity-30 -rotate-1" />
              </span>
            </h1>
            
            <p className="text-xl text-purple-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              We believe quality tech education should be accessible to everyone, everywhere. 
              Join thousands of students transforming their careers.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/signup"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-purple-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Join Our Community
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/#courses"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                View Courses
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 -z-10" />
        
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-4">
                <Rocket className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">How it all began</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Story</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { year: '2020', title: 'Founded', desc: 'Started with a vision' },
                { year: '2023', title: 'Expanded', desc: '50+ countries reached' },
                { year: '2026', title: 'Thriving', desc: '5,000+ active students' },
              ].map((milestone, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl p-8 lg:p-12 border border-purple-100 shadow-xl">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  CTC Club was founded in 2020 with a simple mission: make quality tech education 
                  accessible to everyone, regardless of their background or location.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  What started as a small community of passionate developers sharing knowledge has 
                  grown into a thriving platform with over 5,000 active students from 50+ countries. 
                  We've helped thousands of people launch successful careers in tech, from complete 
                  beginners to experienced professionals looking to upskill.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, we continue to innovate and expand our offerings, always staying true to 
                  our core mission: empowering people through education and creating opportunities 
                  for everyone to succeed in the tech industry.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30 -z-10" />
        
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="group bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-purple-200 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To democratize tech education by providing high-quality, affordable, and 
                accessible learning resources that empower individuals to build successful 
                careers in technology.
              </p>
              <div className="mt-6 flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-4 transition-all">
                <span>Learn more</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
            
            <div className="group bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-indigo-200 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                A world where anyone, anywhere can access world-class tech education and 
                transform their life through learning. We envision a future where talent 
                and opportunity are not limited by geography or circumstance.
              </p>
              <div className="mt-6 flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-4 transition-all">
                <span>Learn more</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full blur-3xl opacity-20 -z-10" />
        
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-4">
              <Shield className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">What drives us</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at CTC Club
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Target className="w-7 h-7" />,
                title: 'Excellence',
                description: 'We strive for excellence in every course, every interaction, and every outcome.',
                gradient: 'from-purple-500 to-purple-600',
                bgColor: 'bg-purple-50',
                hoverBorder: 'hover:border-purple-300',
              },
              {
                icon: <Heart className="w-7 h-7" />,
                title: 'Student-First',
                description: 'Our students\' success is our success. We put their needs at the center of everything.',
                gradient: 'from-pink-500 to-pink-600',
                bgColor: 'bg-pink-50',
                hoverBorder: 'hover:border-pink-300',
              },
              {
                icon: <Lightbulb className="w-7 h-7" />,
                title: 'Innovation',
                description: 'We continuously update our curriculum to reflect the latest industry trends.',
                gradient: 'from-yellow-500 to-orange-500',
                bgColor: 'bg-yellow-50',
                hoverBorder: 'hover:border-yellow-300',
              },
              {
                icon: <Users className="w-7 h-7" />,
                title: 'Community',
                description: 'We foster a supportive community where everyone can learn and grow together.',
                gradient: 'from-blue-500 to-blue-600',
                bgColor: 'bg-blue-50',
                hoverBorder: 'hover:border-blue-300',
              },
              {
                icon: <Award className="w-7 h-7" />,
                title: 'Quality',
                description: 'We maintain the highest standards in course content and instruction.',
                gradient: 'from-green-500 to-green-600',
                bgColor: 'bg-green-50',
                hoverBorder: 'hover:border-green-300',
              },
              {
                icon: <TrendingUp className="w-7 h-7" />,
                title: 'Growth',
                description: 'We believe in continuous learning and personal development for all.',
                gradient: 'from-indigo-500 to-indigo-600',
                bgColor: 'bg-indigo-50',
                hoverBorder: 'hover:border-indigo-300',
              },
            ].map((value, index) => (
              <div
                key={index}
                className={`group bg-white p-8 rounded-2xl border-2 border-gray-100 ${value.hoverBorder} hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mb-5 text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-600 transition-all">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-semibold text-white uppercase tracking-wide">By the numbers</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-purple-100">Making a difference in tech education</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: stats[0], suffix: '+', label: 'Active Students', icon: Users },
              { value: stats[1], suffix: '+', label: 'Expert Instructors', icon: Award },
              { value: stats[2], suffix: '+', label: 'Video Courses', icon: Lightbulb },
              { value: stats[3], suffix: '+', label: 'Certificates Issued', icon: Target },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                    {stat.value.toLocaleString()}{stat.suffix}
                  </div>
                  <div className="text-purple-100 text-base md:text-lg font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-indigo-50 -z-10" />
        
        <Container>
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of students who are already learning and growing with CTC Club. 
                Your future in tech starts here.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/signup"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-purple-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/#courses"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                >
                  Browse Courses
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
