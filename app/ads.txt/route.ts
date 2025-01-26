import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "ads.txt");
    const fileContent = await fs.readFile(filePath, "utf8");

    return new NextResponse(fileContent, {
      headers: {
        "Content-Type": "text/plain",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error: any) {
    console.error("Error reading ads.txt:", error);
    return new NextResponse("", {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
}
