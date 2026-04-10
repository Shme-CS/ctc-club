import { PrimaryButton } from '@/components/ui/primary-button';
import { SecondaryButton } from '@/components/ui/secondary-button';
import { SearchInput } from '@/components/ui/search-input';
import { AvatarGroup } from '@/components/ui/avatar-group';

/**
 * Hero headline with three lines and gradient text
 */
function Headline() {
  return (
    <div className="-space-y-2">
      <h1 className="text-[4rem] sm:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem] font-bold text-gray-900 leading-[0.9] tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
        Learn Tech Skills.
      </h1>
      <h1 className="text-[4rem] sm:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem] font-bold leading-[0.9] tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-700">
          Build Real Projects.
        </span>
      </h1>
      <h1 className="text-[4rem] sm:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem] font-bold text-gray-900 leading-[0.9] tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
        Grow Your Career.
      </h1>
    </div>
  );
}

function Subtitle() {
  return (
    <p className="text-[0.95rem] text-gray-600 leading-relaxed max-w-lg">
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
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
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
