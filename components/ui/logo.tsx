import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <img 
        src="/ctc-logo.svg" 
        alt="CTC Club" 
        className="w-9 h-9"
      />
      <span className="text-xl font-bold text-gray-900">CTC Club</span>
    </Link>
  );
}
