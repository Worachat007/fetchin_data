import { BlogListSkeleton } from "@/app/ui/my-skeleton";

export default function BlogLoading() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-12">
      <p className="mb-6 text-lg font-medium text-blue-800">
        กำลังโหลดรายการบทความ...
      </p>
      <BlogListSkeleton />
    </main>
  );
}
