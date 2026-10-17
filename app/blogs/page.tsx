import type { Metadata } from "next";
import { Suspense } from "react";
import Blogs from "@/app/ui/blogs";
import { BlogListSkeleton } from "@/app/ui/my-skeleton";

export const metadata: Metadata = {
  title: "บทความ",
};

export default function BlogPage() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-12">
      <header className="mb-8 border-b border-gray-200 pb-6">
        <p className="text-sm font-semibold tracking-wide text-blue-700">
          BLOG
        </p>
        <h1 className="mt-2 text-3xl font-bold text-gray-950">
          บทความและข่าวสาร
        </h1>
        <p className="mt-2 text-gray-600">
          บทความเทคโนโลยีและข่าวสารอัปเดตล่าสุด
        </p>
      </header>
      <section aria-labelledby="blog-list-heading">
        <h2 id="blog-list-heading" className="sr-only">
          รายการบทความ
        </h2>
        <Suspense fallback={<BlogListSkeleton />}>
          <Blogs />
        </Suspense>
      </section>
    </main>
  );
}
