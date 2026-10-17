"use client";

import { useEffect } from "react";

export default function BlogError({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 text-center">
      <h1 className="text-2xl font-bold text-gray-950">
        โหลดรายการบทความไม่สำเร็จ
      </h1>
      <p className="mt-3 text-gray-600">
        เกิดปัญหาในการดึงข้อมูล กรุณาลองใหม่อีกครั้ง
      </p>
      <button
        type="button"
        onClick={() => retry()}
        className="mt-6 rounded-md bg-blue-700 px-5 py-2 font-medium text-white hover:bg-blue-800"
      >
        ลองอีกครั้ง
      </button>
    </main>
  );
}
