import { Target, Users, Award, Zap } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { IconWrapper } from '@/components/ui/icon-wrapper';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Divider } from '@/components/ui/divider';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Empowering students with practical tech skills to build successful careers.',
  },
  {
    icon: Users,
    title: 'Community-First',
    description: 'Building a supportive learning environment where everyone can thrive.',
  },
  {
    icon: Award,
    title: 'Quality Education',
    description: 'Delivering industry-standard courses taught by experienced professionals.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Constantly evolving our platform with the latest technologies and methods.',
  },
];

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    bio: 'Former Google engineer with 15+ years in tech education.',
  },
  {
    name: 'Prof. Alex Rivera',
    role: 'Head of Curriculum',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    bio: 'Stanford professor specializing in computer science education.',
  },
  {
    name: 'Maria Lopez',
    role: 'Lead Instructor',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    bio: 'Full-stack developer and passionate educator with 10+ years experience.',
  },
  {
    name: 'James Park',
    role: 'Community Manager',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    bio: 'Building vibrant tech communities for over 8 years.',
  },
];

const stats = [
  { label: 'Active Students', value: '5,000+' },
  { label: 'Courses Available', value: '100+' },
  { label: 'Certificates Issued', value: '12,000+' },
  { label: 'Success Rate', value: '95%' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <Container>
          <SectionTitle
            badge="About Us"
            title="Building the Future of Tech Education"
            description="CTC Club is on a mission to make quality tech education accessible to every student, everywhere."
            align="center"
          />
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                Founded in 2024, CTC Club started with a simple idea: every student deserves access to world-class tech education. We saw talented students struggling to find structured, practical learning resources that could help them build real-world skills.
              </p>
              <p className="mt-4">
                Today, we're proud to serve over 5,000 students from universities around the world. Our platform combines structured courses, hands-on projects, and a supportive community to create the ultimate learning experience.
              </p>
              <p className="mt-4">
                We believe that education should be engaging, practical, and accessible. That's why we've built a platform that not only teaches you the theory but also helps you build a portfolio of real projects that employers want to see.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Divider />

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <Container>
          <SectionTitle
            badge="Our Values"
            title="What We Stand For"
            description="The principles that guide everything we do at CTC Club."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center">
                  <div className="flex justify-center mb-4">
                    <IconWrapper variant="primary" size="lg">
                      <Icon className="h-6 w-6" />
                    </IconWrapper>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <Divider />

      {/* Stats Section */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-blue-600">{stat.value}</p>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Divider />

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <Container>
          <SectionTitle
            badge="Our Team"
            title="Meet the People Behind CTC Club"
            description="A passionate team of educators, engineers, and community builders dedicated to your success."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="flex justify-center mb-4">
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    fallback={member.name.split(' ').map(n => n[0]).join('')}
                    size="2xl"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <Badge variant="secondary" className="mt-2">
                  {member.role}
                </Badge>
                <p className="mt-3 text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
