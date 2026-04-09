import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "CTC Club - Learn Tech Skills, Build Real Projects",
  description: "The ultimate learning platform for university students. Access structured courses, earn certificates, build portfolio projects, and join a thriving tech community.",
  keywords: ["learning platform", "tech education", "university students", "online courses", "certificates"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {/* Navigation Bar */}
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2.5">
                <img 
                  src="/ctc-logo.svg" 
                  alt="CTC Club" 
                  className="w-9 h-9"
                />
                <span className="text-xl font-bold text-gray-900">CTC Club</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-[0.9375rem] text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  Home
                </Link>
                <Link href="/courses" className="text-[0.9375rem] text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  Courses
                </Link>
                <Link href="/services" className="text-[0.9375rem] text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  Resources
                </Link>
                <Link href="/about" className="text-[0.9375rem] text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  Community
                </Link>
                <Link href="/about" className="text-[0.9375rem] text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  About
                </Link>
              </div>

              {/* CTA Buttons */}
              <div className="hidden md:flex items-center gap-4">
                <Link
                  href="/login"
                  className="text-[0.9375rem] px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="text-[0.9375rem] px-6 py-2.5 text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-700 hover:to-purple-700 font-semibold transition-all duration-200 shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30"
                >
                  Get Started Free
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
