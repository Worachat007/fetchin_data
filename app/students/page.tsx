import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { StudentList, StudentListSkeleton } from "./student-list";

export const metadata: Metadata = {
  title: "รายชื่อนักศึกษา",
};

export default function StudentsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-950">นักศึกษา</h1>
          <p className="mt-2 text-gray-600">
            รายชื่อนักศึกษาที่บันทึกไว้ในฐานข้อมูล
          </p>
        </div>
        <Link
          href="/students/create"
          className="rounded-md bg-blue-700 px-5 py-2 font-medium text-white hover:bg-blue-800"
        >
          เพิ่มนักศึกษา
        </Link>
      </header>
      <Suspense fallback={<StudentListSkeleton />}>
        <StudentList />
      </Suspense>
    </main>
  );
}
