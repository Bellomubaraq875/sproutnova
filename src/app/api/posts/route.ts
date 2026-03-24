// src/app/api/posts/route.ts
import { NextRequest, NextResponse } from "next/server";

const BACKEND_BASE_URL = "https://pyvotalehub-backend.onrender.com";

// GET /api/posts?lang=en
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const lang = searchParams.get("lang") || "en";

        const backendRes = await fetch(
            `${BACKEND_BASE_URL}/api/ngo/posts/?lang=${lang}`
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
                        "Failed to load posts",
                },
                { status: backendRes.status }
            );
        }

        return NextResponse.json(data, { status: backendRes.status });
    } catch (error) {
        console.error("List posts API error:", error);
        return NextResponse.json(
            { error: "An error occurred while fetching posts" },
            { status: 500 }
        );
    }
}

// POST /api/posts - Create new story
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { searchParams } = new URL(request.url);
        const lang = searchParams.get("lang") || "en";

        const backendRes = await fetch(`${BACKEND_BASE_URL}/api/ngo/posts/?lang=${lang}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

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
                        "Failed to create post",
                },
                { status: backendRes.status }
            );
        }

        return NextResponse.json(data, { status: backendRes.status });
    } catch (error) {
        console.error("Create post API error:", error);
        return NextResponse.json(
            { error: "An error occurred while creating post" },
            { status: 500 }
        );
    }
}
