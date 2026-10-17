"use server";

import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/app/lib/prisma";
import { studentSchema, type StudentFormState } from "../validation";

export async function createStudent(
  _previousState: StudentFormState,
  formData: FormData,
): Promise<StudentFormState> {
  const result = studentSchema.safeParse({
    studentCode: formData.get("studentCode"),
    name: formData.get("name"),
    email: formData.get("email"),
    major: formData.get("major"),
    year: formData.get("year"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.student.create({
      data: result.data,
    });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return {
        errors: {
          studentCode: ["รหัสนักศึกษานี้มีอยู่แล้ว"],
        },
      };
    }

    throw error;
  }

  revalidatePath("/students");
  redirect("/students");
}
