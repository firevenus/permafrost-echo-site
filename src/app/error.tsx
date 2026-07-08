'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#080e16] flex items-center justify-center">
      <div className="text-center px-4">
        {/* Error icon */}
        <div className="relative w-20 h-20 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border-2 border-[rgba(244,114,114,0.2)]" />
          <div className="absolute inset-[4px] rounded-full border border-[rgba(244,114,114,0.15)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-8 h-8 text-[#f47272]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-[#e8edf5] mb-3">
          Something Went Wrong
        </h1>
        <p className="text-sm text-[rgba(237,242,250,0.45)] mb-8 max-w-md mx-auto leading-relaxed">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[rgba(244,114,114,0.1)] border border-[rgba(244,114,114,0.2)] text-[#f47272] text-sm font-medium hover:bg-[rgba(244,114,114,0.15)] transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
