export default function Loading() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="text-center">
        {/* Ice crystal spinner */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#4cc9f0] border-r-[rgba(76,201,240,0.3)] animate-spin" />
          {/* Inner ring — reverse spin */}
          <div className="absolute inset-[6px] rounded-full border-2 border-transparent border-b-[#2dd4bf] border-l-[rgba(45,212,191,0.3)] animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }} />
          {/* Center dot */}
          <div className="absolute inset-[16px] rounded-full bg-[rgba(76,201,240,0.15)] shadow-[0_0_12px_rgba(76,201,240,0.3)] animate-pulse" />
        </div>

        <p className="text-sm text-[rgba(237,242,250,0.3)] tracking-[0.06em]">
          加载中...
        </p>
      </div>
    </div>
  );
}
