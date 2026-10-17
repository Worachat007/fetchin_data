export function BlogCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="animate-pulse rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
    >
      <div className="mb-5 h-36 rounded-lg bg-gray-200" />
      <div className="mb-3 h-5 w-3/4 rounded bg-gray-200" />
      <div className="mb-5 space-y-2">
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-5/6 rounded bg-gray-200" />
      </div>
      <div className="h-4 w-1/3 rounded bg-gray-200" />
    </div>
  );
}

export function BlogListSkeleton() {
  return (
    <div
      role="status"
      aria-label="กำลังโหลดรายการบทความ"
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {Array.from({ length: 6 }, (_, index) => (
        <BlogCardSkeleton key={index} />
      ))}
      <span className="sr-only">กำลังโหลดรายการบทความ...</span>
    </div>
  );
}
