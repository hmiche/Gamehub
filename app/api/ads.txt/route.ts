import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Check if environment variable exists
    if (!process.env.AD_NETWORKS_TXT) {
      console.warn("AD_NETWORKS_TXT environment variable is not defined");
      // Return a default response that indicates the file exists but is empty
      return new NextResponse("", {
        headers: {
          "Content-Type": "text/plain",
          "Cache-Control": "public, max-age=3600",
        },
      });
    }

    // Validate the content format
    const adsTxtContent = process.env.AD_NETWORKS_TXT;
    const lines = adsTxtContent
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== "");

    // Validate each line follows the correct format
    const validLines = lines.filter((line) => {
      // Basic format check: domain, publisher-id, DIRECT/RESELLER, tag-id
      const parts = line.split(",").map((part) => part.trim());
      if (parts.length !== 4) return false;

      // Check if the third part is either DIRECT or RESELLER
      const relationship = parts[2].toUpperCase();
      if (relationship !== "DIRECT" && relationship !== "RESELLER")
        return false;

      return true;
    });

    if (validLines.length === 0) {
      console.warn("No valid ads.txt entries found in environment variable");
      return new NextResponse("", {
        headers: {
          "Content-Type": "text/plain",
          "Cache-Control": "public, max-age=3600",
        },
      });
    }

    // Join valid lines with newlines
    const cleanedContent = validLines.join("\n");

    // Return the content with proper content-type
    return new NextResponse(cleanedContent, {
      headers: {
        "Content-Type": "text/plain",
        "Cache-Control": "public, max-age=3600", // Cache for 1 hour
      },
    });
  } catch (error) {
    // Log the error but don't expose details in the response
    console.error("Error serving ads.txt:", error);

    // Return an empty file with 500 status
    return new NextResponse("", {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
}
