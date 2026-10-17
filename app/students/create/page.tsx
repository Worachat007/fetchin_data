import type { Metadata } from "next";
import CreateStudentForm from "./create-student-form";

export const metadata: Metadata = {
  title: "เพิ่มนักศึกษา",
};

export default function CreateStudentPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-12">
      <div className="mb-7">
        <h1 className="text-3xl font-bold text-gray-950">เพิ่มนักศึกษา</h1>
        <p className="mt-2 text-gray-600">กรอกข้อมูลนักศึกษาที่ต้องการบันทึก</p>
      </div>
      <CreateStudentForm />
    </main>
  );
}
