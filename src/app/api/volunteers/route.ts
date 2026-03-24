import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        // Parse the incoming request body
        const body = await request.json();

        console.log("📥 Proxy received:", JSON.stringify(body, null, 2));

        // Validate required fields
        if (!body.full_name || !body.email || !body.program_id) {
            return NextResponse.json(
                {
                    error: 'Missing required fields',
                    details: 'full_name, email, and program_id are required'
                },
                { status: 400 }
            );
        }

        // Format the payload exactly as the backend expects
        const payload = {
            full_name: body.full_name,
            email: body.email,
            phone: body.phone || null,
            language: body.language || "English",
            motivation: body.motivation || null,
            program_id: body.program_id
        };

        console.log("📤 Sending to backend:", JSON.stringify(payload, null, 2));

        // Increase timeout to 30 seconds for Render wake-up
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

        const backendResponse = await fetch("https://pyvotalehub-backend.onrender.com/api/ngo/volunteers/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(payload),
            signal: controller.signal,
        });

        clearTimeout(timeoutId);

        console.log("📥 Backend response status:", backendResponse.status);

        // Get the response body as text
        const responseText = await backendResponse.text();
        console.log("📥 Backend response body:", responseText);

        // Try to parse as JSON for structured responses
        let responseData;
        try {
            responseData = JSON.parse(responseText);
        } catch {
            responseData = { message: responseText };
        }

        // Return the exact same status and body as the backend
        return new NextResponse(JSON.stringify(responseData), {
            status: backendResponse.status,
            headers: {
                "Content-Type": "application/json",
            },
        });

    } catch (error: any) {
        console.error("❌ Proxy error:", error);

        // Handle timeout errors specifically
        if (error.name === 'AbortError') {
            return NextResponse.json(
                {
                    error: "Request timeout",
                    details: "The backend server is waking up from sleep. This can take 30-60 seconds. Please wait a moment and try again.",
                    retry: true
                },
                { status: 504 }
            );
        }

        // Handle other errors
        return NextResponse.json(
            {
                error: "Failed to connect to volunteer service",
                details: error.message,
                type: error.name
            },
            { status: 503 }
        );
    }
}

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS() {
    return new NextResponse(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Accept',
        },
    });
}