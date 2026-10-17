import { BlogListSkeleton } from "@/app/ui/my-skeleton";

export default function SkeletonPage() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold text-gray-950">
        ตัวอย่าง Skeleton
      </h1>
      <BlogListSkeleton />
    </main>
  );
}
