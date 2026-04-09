import Link from 'next/link';

export function LoginLink() {
  return (
    <Link
      href="/login"
      className="text-[0.9375rem] px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
    >
      Log in
    </Link>
  );
}

export function GetStartedButton() {
  return (
    <Link
      href="/signup"
      className="text-[0.9375rem] px-6 py-2.5 text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-700 hover:to-purple-700 font-semibold transition-all duration-200 shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30"
    >
      Get Started Free
    </Link>
  );
}

export function CTAButtons() {
  return (
    <div className="hidden md:flex items-center gap-4">
      <LoginLink />
      <GetStartedButton />
    </div>
  );
}
