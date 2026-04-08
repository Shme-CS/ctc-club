'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { IconWrapper } from '@/components/ui/icon-wrapper';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'support@ctcclub.com',
    link: 'mailto:support@ctcclub.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Office',
    value: '123 Tech Street, San Francisco, CA 94105',
    link: 'https://maps.google.com',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <Container>
          <SectionTitle
            badge="Contact Us"
            title="Get in Touch"
            description="Have a question or need help? We're here to assist you. Send us a message and we'll respond as soon as possible."
            align="center"
          />
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-8">
                Reach out to us through any of these channels. We're available 24/7 to help you.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.title}
                      href={info.link}
                      className="flex items-start gap-4 group"
                    >
                      <IconWrapper variant="secondary" size="md">
                        <Icon className="h-5 w-5" />
                      </IconWrapper>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">{info.title}</p>
                        <p className="text-gray-600 group-hover:text-blue-600 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <Input
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <Input
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                  />

                  <Textarea
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    maxLength={1000}
                    showCount
                    required
                  />

                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    loading={isSubmitting}
                    rightIcon={<Send className="h-5 w-5" />}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
