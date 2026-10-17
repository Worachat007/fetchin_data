import Link from "next/link";

const sections = [
  {
    href: "/blogs",
    title: "บทความ",
    description: "อ่านบทความและทดลองหน้าโหลดรายการ เนื้อหา และสถานะไม่พบข้อมูล",
  },
  {
    href: "/students",
    title: "นักศึกษา",
    description: "ดูรายชื่อนักศึกษาและเพิ่มข้อมูลด้วยฟอร์มที่ตรวจสอบด้วย Zod",
  },
  {
    href: "/skeleton",
    title: "Skeleton",
    description: "ดูตัวอย่างโครงร่างหน้ารายการบทความระหว่างโหลด",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 sm:py-24">
      <p className="text-sm font-semibold tracking-wide text-blue-700">
        NEXT.JS APP ROUTER
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
        ตัวอย่างการทำงานของแอป
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
        เลือกส่วนที่ต้องการทดลอง: Server Actions, การตรวจสอบข้อมูล,
        การดึงข้อมูลแบบ Suspense และหน้าจัดการสถานะต่าง ๆ
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              {section.title}
            </h2>
            <p className="mt-2 leading-7 text-gray-600">
              {section.description}
            </p>
            <span className="mt-5 inline-block font-medium text-blue-700">
              เปิดหน้า →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
