import { PrimaryButton } from '@/components/ui/primary-button';
import { SecondaryButton } from '@/components/ui/secondary-button';
import { SearchInput } from '@/components/ui/search-input';
import { AvatarGroup } from '@/components/ui/avatar-group';

/**
 * Hero headline with three lines and gradient text
 */
function Headline() {
  return (
    <div className="space-y-2">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
        Learn Tech Skills.
      </h1>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-700">
          Build Real Projects.
        </span>
      </h1>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
        Grow Your Career.
      </h1>
    </div>
  );
}

function Subtitle() {
  return (
    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
      The ultimate learning platform for university students. Access structured courses, 
      earn certificates, build portfolio projects, and join a thriving tech community.
    </p>
  );
}

function CTAGroup() {
  return (
    <div className="flex flex-wrap gap-4">
      <PrimaryButton href="/signup">
        Start Learning Free
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </PrimaryButton>
      <SecondaryButton href="/courses">
        Browse Courses
      </SecondaryButton>
    </div>
  );
}

export function HeroContent() {
  return (
    <div className="space-y-6">
      <Headline />
      <Subtitle />
      <CTAGroup />
      <SearchInput />
      <AvatarGroup />
    </div>
  );
}
