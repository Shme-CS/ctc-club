import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CTC Club - Learn Tech Skills & Build Your Career',
  description: 'The ultimate learning platform for university students. Access structured courses, earn certificates, build portfolio projects, and join a thriving tech community.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50/30 via-white to-white">
      {/* Notification Banner */}
      <div className="bg-purple-100/60 border-b border-purple-200/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-indigo-900">Spring 2026 Registration Open</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-8 lg:space-y-10">
              {/* Headline */}
              <div className="space-y-1">
                <h1 className="text-[3.5rem] sm:text-[4rem] lg:text-[4.25rem] xl:text-[4.5rem] font-black text-gray-900 leading-[1.05] tracking-tight">
                  Learn Tech Skills.
                </h1>
                <h1 className="text-[3.5rem] sm:text-[4rem] lg:text-[4.25rem] xl:text-[4.5rem] font-black leading-[1.05] tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-700">
                    Build Real Projects.
                  </span>
                </h1>
                <h1 className="text-[3.5rem] sm:text-[4rem] lg:text-[4.25rem] xl:text-[4.5rem] font-black text-gray-900 leading-[1.05] tracking-tight">
                  Grow Your Career.
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-[1.0625rem] text-gray-600 leading-relaxed max-w-xl">
                The ultimate learning platform for university students. Access structured courses, earn certificates, build portfolio projects, and join a thriving tech community.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[0.9375rem] font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30">
                  Start Learning Free
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-gray-700 text-[0.9375rem] font-semibold rounded-xl border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                  Browse Courses
                </button>
              </div>

              {/* Search Input */}
              <div className="relative max-w-md">
                <input
                  type="text"
                  placeholder="Search courses, topics..."
                  className="w-full pl-5 pr-12 py-3.5 text-[0.9375rem] text-gray-700 placeholder-gray-400 bg-gray-50/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition-all duration-200"
                />
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Avatar Group */}
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
                <p className="text-[0.9375rem] text-gray-600">
                  <span className="font-bold text-gray-900">5,000+</span> students already learning
                </p>
              </div>
            </div>

            {/* Right Column - Laptop Image */}
            <div className="relative lg:ml-8">
              {/* Main Laptop Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/20">
                {/* Laptop Screen */}
                <div className="aspect-[16/10] relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                  {/* Ubuntu Sidebar */}
                  <div className="absolute left-0 top-0 bottom-0 w-14 bg-gray-900/60 backdrop-blur-sm flex flex-col items-center py-4 gap-2.5">
                    {[...Array(9)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-10 h-10 rounded-lg ${i === 3 ? 'bg-orange-500/40' : 'bg-gray-700/40'} backdrop-blur-sm`}
                      />
                    ))}
                  </div>
                  
                  {/* Design Grid Content */}
                  <div className="absolute inset-0 flex items-center justify-center ml-14">
                    <div className="grid grid-cols-3 gap-4 p-8">
                      <div className="w-24 h-24 rounded-lg bg-blue-500/20 border-2 border-blue-400/40 backdrop-blur-sm" />
                      <div className="w-24 h-24 rounded-lg bg-purple-500/20 border-2 border-purple-400/40 backdrop-blur-sm" />
                      <div className="w-24 h-24 rounded-lg bg-blue-500/20 border-2 border-blue-400/40 backdrop-blur-sm" />
                    </div>
                  </div>

                  {/* Bottom toolbar simulation */}
                  <div className="absolute bottom-0 left-14 right-0 h-12 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50" />
                </div>
              </div>

              {/* Certificate Badge - Top Right */}
              <div className="absolute -top-4 -right-6 bg-white rounded-2xl shadow-xl shadow-gray-900/10 p-4 flex items-center gap-3 animate-float border border-gray-100">
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
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-gray-900/10 p-4 flex items-center gap-3 animate-float border border-gray-100"
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
    </main>
  );
}
