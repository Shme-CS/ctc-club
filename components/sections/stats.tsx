import { Users, Video, Award, GraduationCap } from 'lucide-react';

const stats = [
  {
    id: 1,
    name: 'Active Students',
    value: '5,000+',
    icon: Users,
  },
  {
    id: 2,
    name: 'Video Courses',
    value: '150+',
    icon: Video,
  },
  {
    id: 3,
    name: 'Expert Instructors',
    value: '50+',
    icon: GraduationCap,
  },
  {
    id: 4,
    name: 'Certificates Issued',
    value: '10,000+',
    icon: Award,
  },
];

export function Stats() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="flex flex-col items-center justify-center rounded-2xl bg-gray-50 p-8 text-center transition-all hover:bg-gray-100 hover:shadow-lg"
              >
                <div className="mb-4 rounded-full bg-blue-100 p-3">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <dt className="text-base font-medium text-gray-600">{stat.name}</dt>
                <dd className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
