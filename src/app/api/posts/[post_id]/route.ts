// src/app/api/posts/[post_id]/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    context: { params: Promise<{ post_id: string }> } 
) {
    try {
        const { post_id } = await context.params;
        const id = post_id; 

        if (!id) {
            return NextResponse.json(
                { error: "Post ID is required" },
                { status: 400 }
            );
        }

        const { searchParams } = new URL(request.url);
        const lang = searchParams.get("lang") || "en";

        const backendRes = await fetch(
            `https://pyvotalehub-backend.onrender.com/api/ngo/posts/${encodeURIComponent(id)}?lang=${lang}`
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
                        "Failed to load post",
                },
                { status: backendRes.status }
            );
        }

        return NextResponse.json(data, { status: backendRes.status });
    } catch (error) {
        console.error("Get post API error:", error);
        return NextResponse.json(
            { error: "An error occurred while fetching the post" },
            { status: 500 }
        );
    }
}