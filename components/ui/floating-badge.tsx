/**
 * Floating badge component with icon, title, and subtitle
 * Used for decorative UI elements that float around the hero image
 */
interface FloatingBadgeProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  position: 'top-right' | 'bottom-left';
  delay?: string;
}

export function FloatingBadge({ icon, title, subtitle, position, delay }: FloatingBadgeProps) {
  const positionClasses = {
    'top-right': '-top-4 -right-6',
    'bottom-left': '-bottom-6 -left-6',
  };

  return (
    <div 
      className={`absolute ${positionClasses[position]} bg-white rounded-2xl shadow-xl shadow-gray-900/10 p-4 flex items-center gap-3 animate-float border border-gray-100`}
      style={delay ? { animationDelay: delay } : undefined}
    >
      <div className="flex-shrink-0">
        {icon}
      </div>
      <div className="pr-2">
        <p className="text-sm font-bold text-gray-900 leading-tight">{title}</p>
        <p className="text-xs text-gray-500 leading-tight mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
}

export function CertificateBadge() {
  return (
    <FloatingBadge
      position="top-right"
      title="Certificate Earned"
      subtitle="Web Development"
      icon={
        <div className="w-11 h-11 bg-yellow-50 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      }
    />
  );
}

export function CompletionBadge() {
  return (
    <FloatingBadge
      position="bottom-left"
      title="Course Completed!"
      subtitle="+250 XP earned"
      delay="1s"
      icon={
        <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
      }
    />
  );
}
