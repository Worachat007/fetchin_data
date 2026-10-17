import { z } from "zod";

const blogSchema = z.object({
  id: z.union([z.string(), z.number()]),
  title: z.string(),
  content: z.string(),
  author: z.string().optional(),
  date: z.string().optional(),
  category: z.string().optional(),
});

export type Blog = z.infer<typeof blogSchema>;

export async function getBlogs(): Promise<Blog[]> {
  const response = await fetch("https://api.vercel.app/blog", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`โหลดบทความไม่สำเร็จ (HTTP ${response.status})`);
  }

  const result = z.array(blogSchema).safeParse(await response.json());

  if (!result.success) {
    throw new Error("ข้อมูลบทความจาก API มีรูปแบบไม่ถูกต้อง");
  }

  return result.data;
}
