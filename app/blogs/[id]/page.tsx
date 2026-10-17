import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogs } from "@/app/lib/blogs";

type BlogDetailPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { id } = await params;

  if (!/^\d+$/.test(id)) {
    return { title: "ไม่พบบทความ" };
  }

  const blogs = await getBlogs();
  const blog = blogs.find((item) => String(item.id) === id);

  return blog ? { title: blog.title } : { title: "ไม่พบบทความ" };
}

export default async function BlogDetailPage({
  params,
}: BlogDetailPageProps) {
  const { id } = await params;

  if (!/^\d+$/.test(id)) {
    notFound();
  }

  const blogs = await getBlogs();
  const blog = blogs.find((item) => String(item.id) === id);

  if (!blog) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
      <Link
        href="/blogs"
        className="font-medium text-blue-700 hover:underline"
      >
        ← กลับไปยังรายการบทความ
      </Link>
      <article className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-9">
        {blog.category && (
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            {blog.category}
          </p>
        )}
        <h1 className="mt-2 text-3xl font-bold leading-tight text-gray-950">
          {blog.title}
        </h1>
        {(blog.author || blog.date) && (
          <p className="mt-4 text-sm text-gray-500">
            {[blog.author, blog.date].filter(Boolean).join(" · ")}
          </p>
        )}
        <p className="mt-8 whitespace-pre-wrap leading-8 text-gray-700">
          {blog.content}
        </p>
      </article>
    </main>
  );
}
