import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { searchParams } = new URL(request.url);

        // Default lang parameter for backend
        const lang = searchParams.get("lang") || "en";

        const { name, email, language } = body;

        if (!name || !email || !language) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const backendRes = await fetch(
            `https://pyvotalehub-backend.onrender.com/api/ngo/subscribe/?lang=${lang}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    language,
                }),
            }
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
                        "Subscription failed",
                },
                { status: backendRes.status }
            );
        }

        return NextResponse.json(data, {
            status: backendRes.status,
        });
    } catch (error) {
        console.error("[SUBSCRIBE API ERROR]", error);

        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

/* Explicitly block GET */
export async function GET() {
    return NextResponse.json(
        { message: "Method Not Allowed" },
        { status: 405 }
    );
}
