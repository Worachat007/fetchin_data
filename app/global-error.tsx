"use client";

export default function GlobalError({
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <html lang="th">
      <body>
        <main
          style={{
            minHeight: "100vh",
            display: "grid",
            placeContent: "center",
            gap: "1rem",
            padding: "2rem",
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
          }}
        >
          <h1>เกิดข้อผิดพลาดในแอป</h1>
          <p>กรุณาลองโหลดหน้าอีกครั้ง</p>
          <button
            type="button"
            onClick={() => retry()}
            style={{
              justifySelf: "center",
              border: 0,
              borderRadius: "0.375rem",
              background: "#1d4ed8",
              color: "#fff",
              cursor: "pointer",
              padding: "0.625rem 1.25rem",
            }}
          >
            ลองอีกครั้ง
          </button>
        </main>
      </body>
    </html>
  );
}
