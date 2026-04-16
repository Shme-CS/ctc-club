/**
 * Secondary button with outlined style
 * @param children - Button content
 * @param href - Optional link URL
 * @param onClick - Optional click handler
 * @param className - Additional CSS classes
 */
interface SecondaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function SecondaryButton({ children, href, onClick, className = '' }: SecondaryButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 text-base font-semibold rounded-xl border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 active:scale-100";
  
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
