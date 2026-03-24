// app/api/contactform/route.ts
import { NextRequest, NextResponse } from "next/server";

// POST /api/contactform?lang=en
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { searchParams } = new URL(request.url);
        const lang = searchParams.get("lang") || "en";

        // Basic required fields – tweak to match backend schema
        const { name, email, subject, message } = body;
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email and message are required" },
                { status: 400 }
            );
        }

        const backendRes = await fetch(
            `https://pyvotalehub-backend.onrender.com/api/ngo/contactform/?lang=${lang}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, subject, message }),
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
                        "Failed to submit contact form",
                },
                { status: backendRes.status }
            );
        }

        return NextResponse.json(data, { status: backendRes.status });
    } catch (error) {
        console.error("Contact form API error:", error);
        return NextResponse.json(
            { error: "An error occurred while submitting the form" },
            { status: 500 }
        );
    }
}
