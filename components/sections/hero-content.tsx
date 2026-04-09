import { PrimaryButton } from '@/components/ui/primary-button';
import { SecondaryButton } from '@/components/ui/secondary-button';
import { SearchInput } from '@/components/ui/search-input';
import { AvatarGroup } from '@/components/ui/avatar-group';

function Headline() {
  return (
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
  );
}

function Subtitle() {
  return (
    <p className="text-[1.0625rem] text-gray-600 leading-relaxed max-w-xl">
      The ultimate learning platform for university students. Access structured courses, earn certificates, build portfolio projects, and join a thriving tech community.
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
    <div className="space-y-8 lg:space-y-10">
      <Headline />
      <Subtitle />
      <CTAGroup />
      <SearchInput />
      <AvatarGroup />
    </div>
  );
}
