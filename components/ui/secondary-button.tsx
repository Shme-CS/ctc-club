interface SecondaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function SecondaryButton({ children, href, onClick, className = '' }: SecondaryButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-7 py-3.5 bg-white text-gray-700 text-[0.9375rem] font-semibold rounded-xl border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2";
  
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
