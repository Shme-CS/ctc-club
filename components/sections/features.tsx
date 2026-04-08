import { BookOpen, TrendingUp, Award, FolderGit2, HeadphonesIcon, Users } from 'lucide-react';
import { SectionTitle } from '@/components/ui/section-title';
import { IconWrapper } from '@/components/ui/icon-wrapper';
import { Container } from '@/components/ui/container';

const features = [
  {
    name: 'Structured Courses',
    description: 'Follow curated learning paths with video lessons, quizzes, and hands-on labs.',
    icon: BookOpen,
  },
  {
    name: 'Track Progress',
    description: 'XP system, daily streaks, and detailed analytics to keep you motivated.',
    icon: TrendingUp,
  },
  {
    name: 'Earn Certificates',
    description: 'Get verified certificates upon completion to showcase your skills.',
    icon: Award,
  },
  {
    name: 'Submit Projects',
    description: 'Build real-world projects and submit via GitHub for review.',
    icon: FolderGit2,
  },
  {
    name: 'Get Support',
    description: '24/7 support tickets, discussion forums, and peer-to-peer help.',
    icon: HeadphonesIcon,
  },
  {
    name: 'Role-Based Access',
    description: 'Tailored dashboards for students, instructors, and admins.',
    icon: Users,
  },
];

export function Features() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <Container>
        {/* Section Header */}
        <SectionTitle
          badge="Platform Features"
          title="Everything You Need to Succeed"
          description="A complete learning ecosystem designed specifically for university students and tech enthusiasts."
          align="center"
        />

        {/* Features Grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <IconWrapper variant="primary" size="md">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </IconWrapper>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </Container>
    </section>
  );
}
