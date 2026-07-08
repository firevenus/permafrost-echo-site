import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080e16] flex items-center justify-center">
      <div className="text-center px-4">
        {/* Ice crystal icon */}
        <div className="relative w-20 h-20 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border-2 border-[rgba(76,201,240,0.2)]" />
          <div className="absolute inset-[4px] rounded-full border border-[rgba(76,201,240,0.15)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-light text-[#4cc9f0]">404</span>
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-[#e8edf5] mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-[rgba(237,242,250,0.45)] mb-8 max-w-md mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[rgba(76,201,240,0.1)] border border-[rgba(76,201,240,0.2)] text-[#4cc9f0] text-sm font-medium hover:bg-[rgba(76,201,240,0.15)] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
