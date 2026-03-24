// app/api/unsubscribe/[email]/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
    request: NextRequest,
    context: { params: Promise<Record<string, string>> }
) {
    try {
        const params = await context.params;
        const email = params.email;
        const decodedEmail = decodeURIComponent(email || "");

        if (!decodedEmail || !/\S+@\S+\.\S+/.test(decodedEmail)) {
            return NextResponse.json(
                { error: "Please enter a valid email address" },
                { status: 400 }
            );
        }

        const { searchParams } = new URL(request.url);
        const lang = searchParams.get("lang") || "en";

        const response = await fetch(
            `https://pyvotalehub-backend.onrender.com/api/ngo/unsubscribe/${encodeURIComponent(
                decodedEmail
            )}?lang=${lang}`,
            {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
            }
        );

        const text = await response.text();
        let data: any;
        try {
            data = JSON.parse(text);
        } catch {
            data = { raw: text };
        }

        if (!response.ok) {
            return NextResponse.json(
                {
                    error:
                        (data?.detail && JSON.stringify(data.detail)) ||
                        data?.error ||
                        "Unsubscribe failed",
                },
                { status: response.status }
            );
        }

        return NextResponse.json(data, { status: response.status });
    } catch (error) {
        console.error("Unsubscribe API error:", error);
        return NextResponse.json(
            { error: "An error occurred while processing your request" },
            { status: 500 }
        );
    }
}
