// app/api/files/[id]/route.js
import { NextResponse } from "next/server";

export async function GET(req, context) {
  const { id } = await context.params; // Next 15+; drop the `await` if you're on Next 13/14

  if (!id) {
    return NextResponse.json({ error: "Missing file id" }, { status: 400 });
  }

  try {
    const res = await fetch(`${process.env.LARAVEL_API_URL}/files/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.LARAVEL_SANCTUM_TOKEN}`,
        Accept: "*/*",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "File not found" },
        { status: res.status }
      );
    }

    const contentType = res.headers.get("content-type") || "application/octet-stream";
    const buffer = await res.arrayBuffer();

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "private, max-age=0, no-cache",
        "Content-Length": String(buffer.byteLength),
      },
    });
  } catch (err) {
    console.error("File proxy error:", err);
    return NextResponse.json({ error: "Proxy fetch failed" }, { status: 500 });
  }
}