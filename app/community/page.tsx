'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/ui/container';
import { Footer } from '@/components/sections/footer';
import { 
  Users, MessageSquare, Calendar, Trophy, Heart, Zap, 
  ArrowRight, Sparkles, Github, Twitter, Linkedin, 
  BookOpen, Code, Rocket, Star, TrendingUp, Award
} from 'lucide-react';

export default function CommunityPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>
        
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

        <Container>
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Users className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">Join the Community</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Connect, Learn, and{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Grow Together</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-400 opacity-30 -rotate-1" />
              </span>
            </h1>
            
            <p className="text-xl text-purple-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Join thousands of passionate learners, share knowledge, collaborate on projects, 
              and build lasting connections in our thriving tech community.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/signup"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-purple-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Join Community
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#forums"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Explore Forums
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 -z-10" />
        
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: '5,000+', label: 'Active Members', icon: Users, color: 'from-purple-500 to-purple-600' },
              { value: '1,200+', label: 'Daily Discussions', icon: MessageSquare, color: 'from-blue-500 to-blue-600' },
              { value: '150+', label: 'Events Hosted', icon: Calendar, color: 'from-green-500 to-green-600' },
              { value: '500+', label: 'Projects Shared', icon: Trophy, color: 'from-pink-500 to-pink-600' },
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

      {/* Community Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30 -z-10" />
        
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">What we offer</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Community Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to connect, learn, and grow with fellow tech enthusiasts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <MessageSquare className="w-7 h-7" />,
                title: 'Discussion Forums',
                description: 'Ask questions, share insights, and engage in meaningful conversations with peers and mentors.',
                gradient: 'from-blue-500 to-blue-600',
              },
              {
                icon: <Users className="w-7 h-7" />,
                title: 'Study Groups',
                description: 'Join or create study groups to learn together, share resources, and stay motivated.',
                gradient: 'from-purple-500 to-purple-600',
              },
              {
                icon: <Calendar className="w-7 h-7" />,
                title: 'Live Events',
                description: 'Attend workshops, webinars, hackathons, and networking events hosted by industry experts.',
                gradient: 'from-green-500 to-green-600',
              },
              {
                icon: <Code className="w-7 h-7" />,
                title: 'Code Reviews',
                description: 'Get feedback on your code from experienced developers and improve your skills.',
                gradient: 'from-orange-500 to-orange-600',
              },
              {
                icon: <Trophy className="w-7 h-7" />,
                title: 'Challenges',
                description: 'Participate in coding challenges, compete with peers, and win exciting prizes.',
                gradient: 'from-pink-500 to-pink-600',
              },
              {
                icon: <Heart className="w-7 h-7" />,
                title: 'Mentorship',
                description: 'Connect with experienced mentors who can guide you on your learning journey.',
                gradient: 'from-red-500 to-red-600',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-purple-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-5 text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Active Discussions */}
      <section id="forums" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full blur-3xl opacity-20 -z-10" />
        
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-4">
              <MessageSquare className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Popular Topics</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Trending Discussions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join the conversation on the hottest topics in tech
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                category: 'Web Development',
                title: 'Best practices for React state management in 2026',
                author: 'Sarah Chen',
                replies: 45,
                likes: 128,
                time: '2 hours ago',
                badge: 'Hot',
                badgeColor: 'bg-red-500',
              },
              {
                category: 'Career Advice',
                title: 'How I landed my first developer job in 3 months',
                author: 'Michael Torres',
                replies: 67,
                likes: 234,
                time: '5 hours ago',
                badge: 'Popular',
                badgeColor: 'bg-purple-500',
              },
              {
                category: 'AI & ML',
                title: 'Getting started with machine learning: A beginner\'s guide',
                author: 'Priya Patel',
                replies: 32,
                likes: 89,
                time: '1 day ago',
                badge: 'New',
                badgeColor: 'bg-green-500',
              },
              {
                category: 'DevOps',
                title: 'Docker vs Kubernetes: Which one should you learn first?',
                author: 'Alex Johnson',
                replies: 54,
                likes: 156,
                time: '2 days ago',
                badge: 'Trending',
                badgeColor: 'bg-blue-500',
              },
            ].map((discussion, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                    {discussion.category}
                  </span>
                  <span className={`text-xs font-bold text-white ${discussion.badgeColor} px-3 py-1 rounded-full`}>
                    {discussion.badge}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {discussion.title}
                </h3>
                
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-4">
                    <span className="font-medium">{discussion.author}</span>
                    <span>{discussion.time}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" />
                      {discussion.replies}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {discussion.likes}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/forums"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View All Discussions
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </Container>
      </section>

      {/* Community Leaders */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full mb-4">
              <Star className="w-4 h-4 text-yellow-600" />
              <span className="text-sm font-semibold text-yellow-600 uppercase tracking-wide">Top Contributors</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Community Leaders</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the amazing members who make our community thrive
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Emma Wilson',
                role: 'Full Stack Developer',
                contributions: 342,
                badge: 'Expert',
                avatar: '👩‍💻',
                specialty: 'React & Node.js',
              },
              {
                name: 'David Kim',
                role: 'AI Engineer',
                contributions: 289,
                badge: 'Mentor',
                avatar: '👨‍💻',
                specialty: 'Machine Learning',
              },
              {
                name: 'Sofia Rodriguez',
                role: 'DevOps Engineer',
                contributions: 256,
                badge: 'Helper',
                avatar: '👩‍🔧',
                specialty: 'Cloud & Docker',
              },
            ].map((leader, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-purple-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {leader.avatar}
                </div>
                
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 rounded-full mb-3">
                  <Award className="w-4 h-4 text-yellow-600" />
                  <span className="text-xs font-bold text-yellow-600">{leader.badge}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-purple-600 font-medium mb-2">{leader.role}</p>
                <p className="text-sm text-gray-600 mb-4">{leader.specialty}</p>
                
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="font-semibold">{leader.contributions}</span>
                  <span>contributions</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-indigo-50 -z-10" />
        
        <Container>
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                <Users className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Join Our Community?
              </h2>
              <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                Connect with thousands of learners, share your knowledge, and grow together. 
                Your journey starts here.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/signup"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-purple-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  Join Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#forums"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                >
                  Explore Forums
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
