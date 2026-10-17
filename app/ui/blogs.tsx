import Link from "next/link";
import { getBlogs } from "@/app/lib/blogs";

export default async function Blogs() {
  const blogs = await getBlogs();

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <article
          key={blog.id}
          className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
        >
          <div
            aria-hidden="true"
            className="mb-5 flex h-36 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 text-2xl font-semibold text-blue-800"
          >
            {blog.id}
          </div>
          {blog.category && (
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
              {blog.category}
            </p>
          )}
          <h2 className="mt-2 text-lg font-semibold leading-7 text-gray-950">
            <Link
              href={`/blogs/${blog.id}`}
              className="rounded-sm hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              {blog.title}
            </Link>
          </h2>
          <p className="mt-2 line-clamp-3 flex-1 leading-6 text-gray-600">
            {blog.content}
          </p>
          {blog.author && (
            <p className="mt-5 border-t border-gray-100 pt-4 text-sm text-gray-500">
              {blog.author}
              {blog.date && ` · ${blog.date}`}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}
