import { NextRequest, NextResponse } from "next/server";

// GET /api/programs?lang=en
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const lang = searchParams.get("lang") || "en";

        const backendRes = await fetch(
            `https://pyvotalehub-backend.onrender.com/api/ngo/programs/?lang=${lang}`
        );

        const text = await backendRes.text();
        let data: any;
        try {
            data = JSON.parse(text);
        } catch {
            data = { raw: text };
        }

        if (!backendRes.ok) {
            return NextResponse.json(
                {
                    error:
                        (data?.detail && JSON.stringify(data.detail)) ||
                        data?.error ||
                        "Failed to load programs",
                },
                { status: backendRes.status }
            );
        }

        return NextResponse.json(data, { status: backendRes.status });
    } catch (error) {
        console.error("List programs API error:", error);
        return NextResponse.json(
            { error: "An error occurred while fetching programs" },
            { status: 500 }
        );
    }
}
