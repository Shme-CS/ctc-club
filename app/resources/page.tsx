'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/ui/container';
import { Footer } from '@/components/sections/footer';
import { 
  BookOpen, Video, FileText, Code, Download, ExternalLink,
  ArrowRight, Sparkles, Zap, Star, TrendingUp, Award,
  Layers, Terminal, Database, Globe, Cpu, Lock
} from 'lucide-react';

export default function ResourcesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', label: 'All Resources', icon: Layers },
    { id: 'tutorials', label: 'Tutorials', icon: BookOpen },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'docs', label: 'Documentation', icon: FileText },
    { id: 'tools', label: 'Tools', icon: Terminal },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>
        
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

        <Container>
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <BookOpen className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">Learning Resources</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Everything You Need to{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Master Tech</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-400 opacity-30 -rotate-1" />
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Access curated tutorials, documentation, tools, and resources to accelerate 
              your learning journey and build amazing projects.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#resources"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Explore Resources
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

      {/* Resource Stats */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10" />
        
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: '500+', label: 'Tutorials', icon: BookOpen, color: 'from-blue-500 to-blue-600' },
              { value: '300+', label: 'Video Lessons', icon: Video, color: 'from-purple-500 to-purple-600' },
              { value: '150+', label: 'Documentation', icon: FileText, color: 'from-green-500 to-green-600' },
              { value: '50+', label: 'Dev Tools', icon: Terminal, color: 'from-orange-500 to-orange-600' },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Resource Categories */}
      <section id="resources" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 -z-10" />
        
        <Container>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Browse by category</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Resource Library</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Curated resources to help you learn and build
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Featured Resources */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                type: 'Tutorial',
                title: 'Complete React Guide 2026',
                description: 'Master React from basics to advanced concepts with hands-on projects.',
                author: 'Sarah Chen',
                duration: '8 hours',
                level: 'Intermediate',
                icon: <BookOpen className="w-6 h-6" />,
                gradient: 'from-blue-500 to-blue-600',
                badge: 'Popular',
                badgeColor: 'bg-blue-500',
              },
              {
                type: 'Video',
                title: 'Node.js Masterclass',
                description: 'Build scalable backend applications with Node.js and Express.',
                author: 'Michael Torres',
                duration: '12 hours',
                level: 'Advanced',
                icon: <Video className="w-6 h-6" />,
                gradient: 'from-green-500 to-green-600',
                badge: 'New',
                badgeColor: 'bg-green-500',
              },
              {
                type: 'Documentation',
                title: 'TypeScript Best Practices',
                description: 'Comprehensive guide to writing clean and maintainable TypeScript code.',
                author: 'Emma Wilson',
                duration: '4 hours',
                level: 'Intermediate',
                icon: <FileText className="w-6 h-6" />,
                gradient: 'from-purple-500 to-purple-600',
                badge: 'Updated',
                badgeColor: 'bg-purple-500',
              },
              {
                type: 'Tutorial',
                title: 'Python for Data Science',
                description: 'Learn data analysis and visualization with Python, Pandas, and Matplotlib.',
                author: 'David Kim',
                duration: '10 hours',
                level: 'Beginner',
                icon: <BookOpen className="w-6 h-6" />,
                gradient: 'from-yellow-500 to-orange-500',
                badge: 'Trending',
                badgeColor: 'bg-orange-500',
              },
              {
                type: 'Tool',
                title: 'VS Code Extensions Pack',
                description: 'Essential VS Code extensions for modern web development.',
                author: 'Alex Johnson',
                duration: '30 min',
                level: 'All Levels',
                icon: <Terminal className="w-6 h-6" />,
                gradient: 'from-indigo-500 to-indigo-600',
                badge: 'Free',
                badgeColor: 'bg-indigo-500',
              },
              {
                type: 'Video',
                title: 'Docker & Kubernetes',
                description: 'Deploy and scale applications with containerization and orchestration.',
                author: 'Sofia Rodriguez',
                duration: '6 hours',
                level: 'Advanced',
                icon: <Video className="w-6 h-6" />,
                gradient: 'from-cyan-500 to-cyan-600',
                badge: 'Hot',
                badgeColor: 'bg-red-500',
              },
            ].map((resource, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${resource.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {resource.icon}
                  </div>
                  <span className={`text-xs font-bold text-white ${resource.badgeColor} px-3 py-1 rounded-full`}>
                    {resource.badge}
                  </span>
                </div>

                <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block mb-3">
                  {resource.type}
                </span>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span className="font-medium">{resource.author}</span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    4.8
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">{resource.level}</span>
                  <span>{resource.duration}</span>
                </div>

                <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 group-hover:scale-105">
                  Access Resource
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Learning Paths */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-20 -z-10" />
        
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-4">
              <Zap className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">Structured Learning</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Popular Learning Paths</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow curated paths to master specific technologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Frontend Development',
                description: 'HTML, CSS, JavaScript, React, and modern frontend tools',
                resources: 45,
                hours: 120,
                icon: <Globe className="w-8 h-8" />,
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Backend Development',
                description: 'Node.js, databases, APIs, and server-side programming',
                resources: 38,
                hours: 100,
                icon: <Database className="w-8 h-8" />,
                gradient: 'from-green-500 to-emerald-500',
              },
              {
                title: 'Full Stack Development',
                description: 'Complete web development from frontend to backend',
                resources: 65,
                hours: 200,
                icon: <Layers className="w-8 h-8" />,
                gradient: 'from-purple-500 to-pink-500',
              },
            ].map((path, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-purple-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${path.gradient} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {path.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {path.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {path.description}
                </p>

                <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    {path.resources} resources
                  </span>
                  <span className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    {path.hours}h
                  </span>
                </div>

                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  Start Learning
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <Container>
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Start Learning Today
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                Access hundreds of free resources and start building your skills. 
                Join thousands of learners already on their journey.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/signup"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
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
