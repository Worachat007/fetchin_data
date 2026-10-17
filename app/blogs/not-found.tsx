import Link from "next/link";

export default function BlogNotFound() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16 text-center">
      <p className="text-sm font-semibold text-red-700">404</p>
      <h1 className="mt-2 text-2xl font-bold text-gray-950">
        ไม่พบบทความนี้ในระบบ
      </h1>
      <p className="mt-3 text-gray-600">
        รหัสบทความที่คุณค้นหาไม่มีอยู่จริง หรืออาจถูกลบออกไปแล้ว
      </p>
      <Link
        href="/blogs"
        className="mt-6 inline-block font-medium text-blue-700 hover:underline"
      >
        ← ย้อนกลับไปยังหน้ารายการบทความทั้งหมด
      </Link>
    </main>
  );
}
