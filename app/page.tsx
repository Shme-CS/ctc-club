import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'CTC Club - Learn Tech Skills & Build Your Career',
  description: 'The ultimate learning platform for university students. Access structured courses, earn certificates, build portfolio projects, and join a thriving tech community.',
};

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-purple-50/30 to-white">
      {/* Banner */}
      <div className="bg-purple-100/50 border-b border-purple-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span className="text-purple-900 font-medium">Spring 2026 Registration Open</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Headline */}
              <div className="space-y-2">
                <h1 className="text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] font-black text-gray-900 leading-[1.1] tracking-tight">
                  Learn Tech Skills.
                </h1>
                <h1 className="text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] font-black leading-[1.1] tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700">
                    Build Real Projects.
                  </span>
                </h1>
                <h1 className="text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] font-black text-gray-900 leading-[1.1] tracking-tight">
                  Grow Your Career.
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-[1.05rem] text-gray-600 leading-relaxed max-w-lg">
                The ultimate learning platform for university students. Access structured courses, earn certificates, build portfolio projects, and join a thriving tech community.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl text-[0.95rem]">
                  Start Learning Free
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="inline-flex items-center px-7 py-3.5 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all text-[0.95rem]">
                  Browse Courses
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative max-w-md">
                <input
                  type="text"
                  placeholder="Search courses, topics..."
                  className="w-full pl-5 pr-12 py-3.5 text-[0.95rem] text-gray-700 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-white transition-all"
                />
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Student Avatars */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex -space-x-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 border-[3px] border-white flex items-center justify-center text-white font-bold text-sm shadow-sm">
                    A
                  </div>
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 border-[3px] border-white flex items-center justify-center text-white font-bold text-sm shadow-sm">
                    B
                  </div>
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-500 border-[3px] border-white flex items-center justify-center text-white font-bold text-sm shadow-sm">
                    C
                  </div>
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 border-[3px] border-white flex items-center justify-center text-white font-bold text-sm shadow-sm">
                    D
                  </div>
                </div>
                <p className="text-[0.95rem] text-gray-600">
                  <span className="font-bold text-gray-900">5,000+</span> students already learning
                </p>
              </div>
            </div>

            {/* Right Column - Laptop Image */}
            <div className="relative">
              {/* Main Laptop Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                {/* Laptop Screen */}
                <div className="aspect-[16/10] relative">
                  {/* Screen Content - Dark theme code editor look */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
                    {/* Simulated Ubuntu sidebar */}
                    <div className="absolute left-0 top-0 bottom-0 w-14 bg-gray-900/50 flex flex-col items-center py-4 gap-3">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-10 h-10 rounded-lg bg-gray-700/30" />
                      ))}
                    </div>
                    
                    {/* Simulated design/code content */}
                    <div className="ml-16 h-full flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="w-24 h-24 rounded-lg bg-blue-500/20 border-2 border-blue-400/30" />
                        <div className="w-24 h-24 rounded-lg bg-purple-500/20 border-2 border-purple-400/30" />
                        <div className="w-24 h-24 rounded-lg bg-blue-500/20 border-2 border-blue-400/30" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificate Badge - Top Right */}
              <div className="absolute -top-4 -right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float border border-gray-100">
                <div className="w-11 h-11 bg-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="pr-2">
                  <p className="text-sm font-bold text-gray-900 leading-tight">Certificate Earned</p>
                  <p className="text-xs text-gray-500 leading-tight mt-0.5">Web Development</p>
                </div>
              </div>

              {/* Course Completed Badge - Bottom Left */}
              <div 
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float border border-gray-100"
                style={{ animationDelay: '1s' }}
              >
                <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="pr-2">
                  <p className="text-sm font-bold text-gray-900 leading-tight">Course Completed!</p>
                  <p className="text-xs text-gray-500 leading-tight mt-0.5">+250 XP earned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Why Choose CTC Club
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Everything you need to succeed
            </p>
            <p className="text-base text-gray-500">
              We provide comprehensive learning resources, expert mentorship, and real-world projects to help you master tech skills.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
