/**
 * Search input component with icon
 * Allows users to search for courses and topics
 */
export function SearchInput() {
  return (
    <div className="relative max-w-md">
      <input
        type="text"
        placeholder="Search courses, topics..."
        aria-label="Search courses and topics"
        className="w-full pl-5 pr-12 py-3.5 text-[0.9375rem] text-gray-700 placeholder-gray-400 bg-gray-50/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition-all duration-200"
      />
      <svg
        className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  );
}
