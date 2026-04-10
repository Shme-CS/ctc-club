/**
 * Primary CTA button with gradient background
 * @param children - Button content
 * @param href - Optional link URL
 * @param onClick - Optional click handler
 * @param className - Additional CSS classes
 */
interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function PrimaryButton({ children, href, onClick, className = '' }: PrimaryButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[0.9375rem] font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2";
  
  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
}
