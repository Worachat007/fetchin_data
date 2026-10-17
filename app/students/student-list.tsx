import { connection } from "next/server";
import prisma from "@/app/lib/prisma";

export async function StudentList() {
  await connection();
  const students = await prisma.student.findMany({
    orderBy: { createdAt: "desc" },
  });

  if (students.length === 0) {
    return (
      <p className="mt-8 rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center text-gray-600">
        ยังไม่มีข้อมูลนักศึกษา เริ่มต้นเพิ่มนักศึกษาได้เลย
      </p>
    );
  }

  return (
    <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead className="bg-gray-50 text-gray-700">
          <tr>
            <th scope="col" className="px-5 py-3 font-semibold">
              รหัสนักศึกษา
            </th>
            <th scope="col" className="px-5 py-3 font-semibold">
              ชื่อ-นามสกุล
            </th>
            <th scope="col" className="px-5 py-3 font-semibold">
              Email
            </th>
            <th scope="col" className="px-5 py-3 font-semibold">
              สาขา
            </th>
            <th scope="col" className="px-5 py-3 font-semibold">
              ชั้นปี
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {students.map((student) => (
            <tr key={student.id}>
              <td className="px-5 py-4 font-medium text-gray-900">
                {student.studentCode}
              </td>
              <td className="px-5 py-4 text-gray-800">{student.name}</td>
              <td className="px-5 py-4 text-gray-600">
                {student.email || "—"}
              </td>
              <td className="px-5 py-4 text-gray-800">{student.major}</td>
              <td className="px-5 py-4 text-gray-800">{student.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function StudentListSkeleton() {
  return (
    <div
      role="status"
      aria-label="กำลังโหลดรายชื่อนักศึกษา"
      className="mt-8 animate-pulse space-y-3 rounded-xl border border-gray-200 bg-white p-5"
    >
      <span className="sr-only">กำลังโหลดรายชื่อนักศึกษา...</span>
      <div className="h-5 w-1/3 rounded bg-gray-200" />
      <div className="h-10 rounded bg-gray-100" />
      <div className="h-10 rounded bg-gray-100" />
      <div className="h-10 rounded bg-gray-100" />
    </div>
  );
}
