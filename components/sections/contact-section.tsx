'use client';

import React, { useState, useCallback } from 'react';
import { Mail, Phone, MapPin, Clock, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ContactInfo {
  email?: string;
  phone?: string;
  address?: string;
  hours?: string;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  placeholder?: string;
  required?: boolean;
  validation?: (value: string) => string | null;
}

interface ContactSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  contactInfo?: ContactInfo;
  socialLinks?: SocialLink[];
  formFields?: FormField[];
  onSubmit?: (data: Record<string, string>) => Promise<void>;
  mapEmbedUrl?: string;
  variant?: 'default' | 'split' | 'centered';
  showMap?: boolean;
  className?: string;
}

const defaultFormFields: FormField[] = [
  {
    name: 'name',
    label: 'Full Name',
    type: 'text',
    placeholder: 'John Doe',
    required: true,
    validation: (value) => {
      if (value.length < 2) return 'Name must be at least 2 characters';
      return null;
    },
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'john@example.com',
    required: true,
    validation: (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return 'Please enter a valid email address';
      return null;
    },
  },
  {
    name: 'subject',
    label: 'Subject',
    type: 'text',
    placeholder: 'How can we help?',
    required: true,
  },
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Tell us more about your inquiry...',
    required: true,
    validation: (value) => {
      if (value.length < 10) return 'Message must be at least 10 characters';
      return null;
    },
  },
];

export function ContactSection({
  title,
  subtitle,
  description,
  contactInfo,
  socialLinks,
  formFields = defaultFormFields,
  onSubmit,
  mapEmbedUrl,
  variant = 'default',
  showMap = false,
  className,
}: ContactSectionProps) {
  const [formData, setFormData] = useState<Record<string, string>>(() =>
    formFields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateField = useCallback(
    (name: string, value: string): string | null => {
      const field = formFields.find((f) => f.name === name);
      if (!field) return null;

      if (field.required && !value.trim()) {
        return `${field.label} is required`;
      }

      if (field.validation) {
        return field.validation(value);
      }

      return null;
    },
    [formFields]
  );

  const handleChange = useCallback(
    (name: string, value: string) => {
      setFormData((prev) => ({ ...prev, [name]: value }));
      
      if (submitStatus !== 'idle') {
        setSubmitStatus('idle');
      }

      if (touched[name]) {
        const error = validateField(name, value);
        setErrors((prev) => ({
          ...prev,
          [name]: error || '',
        }));
      }
    },
    [touched, validateField, submitStatus]
  );

  const handleBlur = useCallback(
    (name: string) => {
      setTouched((prev) => ({ ...prev, [name]: true }));
      const error = validateField(name, formData[name]);
      setErrors((prev) => ({
        ...prev,
        [name]: error || '',
      }));
    },
    [formData, validateField]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    let hasErrors = false;

    formFields.forEach((field) => {
      const error = validateField(field.name, formData[field.name]);
      if (error) {
        newErrors[field.name] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);
    setTouched(
      formFields.reduce((acc, field) => ({ ...acc, [field.name]: true }), {})
    );

    if (hasErrors) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      setSubmitStatus('success');
      setFormData(
        formFields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
      );
      setTouched({});
      setErrors({});
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderContactInfo = () => {
    if (!contactInfo) return null;

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Contact Information
          </h3>
          <address className="not-italic space-y-4">
            {contactInfo.email && (
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            )}

            {contactInfo.phone && (
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Phone</p>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            )}

            {contactInfo.address && (
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Address</p>
                  <p className="text-sm text-gray-600">{contactInfo.address}</p>
                </div>
              </div>
            )}

            {contactInfo.hours && (
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Hours</p>
                  <p className="text-sm text-gray-600">{contactInfo.hours}</p>
                </div>
              </div>
            )}
          </address>
        </div>

        {socialLinks && socialLinks.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Follow Us
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white flex items-center justify-center transition-colors"
                  aria-label={`Follow us on ${link.platform}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        )}

        {showMap && mapEmbedUrl && (
          <div className="rounded-lg overflow-hidden border border-gray-200">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location map"
            />
          </div>
        )}
      </div>
    );
  };

  const renderForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {formFields.map((field) => {
        const Component = field.type === 'textarea' ? Textarea : Input;
        const error = touched[field.name] ? errors[field.name] : '';

        return (
          <div key={field.name}>
            <Component
              label={field.label}
              type={field.type === 'textarea' ? undefined : field.type}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
              onBlur={() => handleBlur(field.name)}
              error={error}
              required={field.required}
              disabled={isSubmitting}
              rows={field.type === 'textarea' ? 5 : undefined}
            />
          </div>
        );
      })}

      {submitStatus === 'success' && (
        <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
          <p className="text-sm text-green-800">
            Thank you! Your message has been sent successfully.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          <p className="text-sm text-red-800">
            Something went wrong. Please try again later.
          </p>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  );

  const gridClasses = cn(
    'grid gap-12',
    variant === 'split' && 'lg:grid-cols-2 lg:gap-16',
    variant === 'centered' && 'max-w-2xl mx-auto'
  );

  return (
    <section
      className={cn('py-16 md:py-24 bg-gray-50', className)}
      aria-labelledby="contact-section-title"
    >
      <Container>
        <SectionTitle
          title={title}
          subtitle={subtitle}
          description={description}
          align={variant === 'centered' ? 'center' : 'left'}
          className="mb-12"
        />

        <div className={gridClasses}>
          {variant === 'split' && contactInfo && (
            <div>{renderContactInfo()}</div>
          )}
          
          <div>
            {variant === 'default' && contactInfo && (
              <div className="mb-12">{renderContactInfo()}</div>
            )}
            {renderForm()}
          </div>
        </div>
      </Container>
    </section>
  );
}
