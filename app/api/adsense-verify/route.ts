import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Check if AD_NETWORKS_TXT environment variable exists
    if (!process.env.AD_NETWORKS_TXT) {
      return NextResponse.json(
        {
          status: "error",
          message: "ads.txt is not configured",
          exists: false,
        },
        { status: 404 }
      );
    }

    // Get the domain from environment variable or request host
    const domain = process.env.NEXT_PUBLIC_DOMAIN;

    // Validate ads.txt content
    const adsTxtContent = process.env.AD_NETWORKS_TXT;
    const lines = adsTxtContent
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== "");

    // Check for valid AdSense entries
    const hasAdSenseEntries = lines.some((line) =>
      line.toLowerCase().includes("google.com, pub-")
    );

    // Construct the ads.txt URL
    const adsTxtUrl = `https://${domain}/api/ads.txt`;

    // Try to fetch the ads.txt file to verify it's accessible
    const response = await fetch(adsTxtUrl);
    const isAccessible = response.status === 200;

    return NextResponse.json({
      status: "success",
      exists: true,
      isAccessible,
      hasAdSenseEntries,
      url: adsTxtUrl,
      entriesCount: lines.length,
      message: isAccessible
        ? "ads.txt is properly configured and accessible"
        : "ads.txt exists but might not be accessible",
    });
  } catch (error: any) {
    console.error("Error verifying ads.txt:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Error verifying ads.txt configuration",
        exists: false,
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
