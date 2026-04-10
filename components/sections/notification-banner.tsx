export function NotificationBanner() {
  return (
    <div className="bg-white" role="banner" aria-label="Notification">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-4 pb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full border border-purple-200">
          <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-semibold text-indigo-900">
            Spring 2026 Registration Open
          </span>
        </div>
      </div>
    </div>
  );
}
