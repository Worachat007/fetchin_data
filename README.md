# ตัวอย่าง Next.js: นักศึกษาและบทความ

โปรเจกต์ตัวอย่าง Next.js App Router ที่ประกอบด้วยฟอร์มเพิ่มข้อมูลนักศึกษา
ซึ่งตรวจสอบข้อมูลด้วย Zod และบันทึกลง SQLite ผ่าน Prisma รวมถึงหน้าบทความ
ที่โหลดข้อมูลจาก API พร้อม Suspense, Skeleton และหน้า 404

## ความต้องการก่อนติดตั้ง

- Node.js 20.9 ขึ้นไป
- npm

ตรวจสอบเวอร์ชันที่ติดตั้งได้ด้วย:

```bash
node --version
npm --version
```

## ติดตั้งและเริ่มใช้งาน

เปิด Terminal ในโฟลเดอร์โปรเจกต์ แล้วรัน:

```bash
npm install
npm run db:generate
npm run db:push
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) ในเบราว์เซอร์

Prisma ใช้ SQLite โดยเก็บฐานข้อมูลไว้ที่ `prisma/dev.db` ซึ่งสร้างในเครื่อง
อัตโนมัติและไม่ถูกรวมใน Git

### เมื่อแก้ไข Prisma schema

หลังแก้ไข `prisma/schema.prisma` ให้สร้าง Prisma Client และปรับฐานข้อมูล:

```bash
npm run db:generate
npm run db:push
```

หาก Prisma แจ้ง `EPERM` ระหว่างสร้าง Client บน Windows ให้หยุด dev server
ที่กำลังทำงานอยู่แล้วลอง `npm run db:generate` อีกครั้ง

## หน้าต่าง ๆ ในโปรเจกต์

- `/` หน้าแรกและลิงก์ไปยังตัวอย่างต่าง ๆ
- `/students` แสดงรายชื่อนักศึกษาจากฐานข้อมูล
- `/students/create` เพิ่มนักศึกษา โดยตรวจสอบข้อมูลฝั่งเซิร์ฟเวอร์ด้วย Zod
- `/blogs` แสดงบทความจาก `https://api.vercel.app/blog` พร้อม Suspense และ Skeleton
- `/blogs/[id]` แสดงรายละเอียดบทความ หรือหน้า 404 เมื่อไม่พบข้อมูล
- `/skeleton` แสดงตัวอย่าง Skeleton

## คำสั่งที่ใช้บ่อย

| คำสั่ง | รายละเอียด |
| --- | --- |
| `npm run dev` | เริ่มเซิร์ฟเวอร์สำหรับพัฒนา |
| `npm run lint` | ตรวจสอบโค้ดด้วย ESLint |
| `npm run build` | สร้าง production build |
| `npm run start` | รัน production build |
| `npm run db:generate` | สร้าง Prisma Client |
| `npm run db:push` | ปรับฐานข้อมูลให้ตรงกับ Prisma schema |
