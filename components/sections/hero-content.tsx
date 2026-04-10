import { PrimaryButton } from '@/components/ui/primary-button';
import { SecondaryButton } from '@/components/ui/secondary-button';
import { SearchInput } from '@/components/ui/search-input';
import { AvatarGroup } from '@/components/ui/avatar-group';

/**
 * Hero headline with three lines and gradient text
 */
function Headline() {
  return (
    <div className="-space-y-5">
      <h1 className="text-[2.5rem] sm:text-[2.75rem] lg:text-[3rem] xl:text-[3.25rem] font-extrabold text-black leading-[0.75] tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
        Learn Tech Skills.
      </h1>
      <h1 className="text-[2.5rem] sm:text-[2.75rem] lg:text-[3rem] xl:text-[3.25rem] font-extrabold leading-[0.75] tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-700">
          Build Real Projects.
        </span>
      </h1>
      <h1 className="text-[2.5rem] sm:text-[2.75rem] lg:text-[3rem] xl:text-[3.25rem] font-extrabold text-black leading-[0.75] tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
        Grow Your Career.
      </h1>
    </div>
  );
}

function Subtitle() {
  return (
    <p className="text-[0.8125rem] text-gray-600 leading-relaxed max-w-sm">
      The ultimate learning platform for university students. Access structured courses, 
      earn certificates, build portfolio projects, and join a thriving tech community.
    </p>
  );
}

function CTAGroup() {
  return (
    <div className="flex flex-wrap gap-3">
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
    <div className="space-y-3.5">
      <Headline />
      <Subtitle />
      <CTAGroup />
      <SearchInput />
      <AvatarGroup />
    </div>
  );
}
