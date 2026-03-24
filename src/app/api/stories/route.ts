// app/api/stories/route.ts - WORKING PROXY
import { NextRequest, NextResponse } from "next/server";

const BACKEND_BASE_URL = "https://pyvotalehub-backend.onrender.com";

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const lang = searchParams.get("lang") || "en";

        console.log("Stories API proxy:", `${BACKEND_BASE_URL}/api/ngo/posts/?lang=${lang}`);

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        const res = await fetch(
            `${BACKEND_BASE_URL}/api/ngo/posts/?lang=${lang}`,
            { signal: controller.signal }
        );

        clearTimeout(timeoutId);

        if (!res.ok) {
            return NextResponse.json({ error: "Backend unavailable" }, { status: 503 });
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error: any) {
        console.error("Stories API error:", error);
        return NextResponse.json({ error: "Service unavailable" }, { status: 500 });
    }
}
