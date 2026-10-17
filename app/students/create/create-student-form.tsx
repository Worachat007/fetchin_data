"use client";

import Link from "next/link";
import { useActionState } from "react";
import type { StudentFormState } from "../validation";
import { createStudent } from "./actions";

const initialState: StudentFormState = {};

const fields = [
  {
    name: "studentCode",
    label: "รหัสนักศึกษา",
    type: "text",
    required: true,
    autoComplete: "off",
  },
  {
    name: "name",
    label: "ชื่อ-นามสกุล",
    type: "text",
    required: true,
    autoComplete: "name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: false,
    autoComplete: "email",
  },
  {
    name: "major",
    label: "สาขา",
    type: "text",
    required: true,
    autoComplete: "off",
  },
] as const;

export default function CreateStudentForm() {
  const [state, formAction, pending] = useActionState(
    createStudent,
    initialState,
  );

  return (
    <form
      action={formAction}
      className="space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      {fields.map((field) => {
        const errors = state.errors?.[field.name];

        return (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="mb-2 block text-sm font-medium text-gray-800"
            >
              {field.label}
              {field.required && (
                <span className="ml-1 text-red-600" aria-hidden="true">
                  *
                </span>
              )}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              autoComplete={field.autoComplete}
              maxLength={field.name === "studentCode" ? 20 : 100}
              aria-invalid={Boolean(errors?.length)}
              aria-describedby={errors?.length ? `${field.name}-error` : undefined}
              disabled={pending}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-950 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 disabled:bg-gray-100"
            />
            {errors?.[0] && (
              <p
                id={`${field.name}-error`}
                className="mt-1 text-sm text-red-700"
              >
                {errors[0]}
              </p>
            )}
          </div>
        );
      })}

      <div>
        <label
          htmlFor="year"
          className="mb-2 block text-sm font-medium text-gray-800"
        >
          ชั้นปี
          <span className="ml-1 text-red-600" aria-hidden="true">
            *
          </span>
        </label>
        <input
          id="year"
          name="year"
          type="number"
          min="1"
          max="8"
          step="1"
          required
          aria-invalid={Boolean(state.errors?.year?.length)}
          aria-describedby={
            state.errors?.year?.length ? "year-error" : undefined
          }
          disabled={pending}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-950 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 disabled:bg-gray-100"
        />
        {state.errors?.year?.[0] && (
          <p id="year-error" className="mt-1 text-sm text-red-700">
            {state.errors.year[0]}
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="submit"
          disabled={pending}
          className="rounded-md bg-blue-700 px-5 py-2 font-medium text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {pending ? "กำลังบันทึก..." : "บันทึก"}
        </button>
        <Link
          href="/students"
          className="rounded-md border border-gray-300 px-5 py-2 font-medium text-gray-800 hover:bg-gray-50"
        >
          ยกเลิก
        </Link>
      </div>
    </form>
  );
}
