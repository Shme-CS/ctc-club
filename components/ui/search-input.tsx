/**
 * Search input component with icon
 * Allows users to search for courses and topics
 */
export function SearchInput() {
  return (
    <div className="relative max-w-lg">
      <input
        type="text"
        placeholder="Search courses, topics..."
        aria-label="Search courses and topics"
        className="w-full pl-6 pr-14 py-4 text-base text-gray-700 placeholder-gray-400 bg-gray-50/80 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition-all duration-200 hover:border-gray-300"
      />
      <svg
        className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
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
