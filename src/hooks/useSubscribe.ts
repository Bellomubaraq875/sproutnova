"use client";

import { useState } from "react";

interface SubscribePayload {
    name: string;
    email: string;
    language: string;
}

export function useSubscribe() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const subscribe = async (payload: SubscribePayload): Promise<boolean> => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const res = await fetch("/api/subscribe?lang=en", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            console.log("[SUBSCRIBE STATUS]", res.status);

            let data: any = null;

            try {
                data = await res.json();
            } catch {
                throw new Error("Invalid server response");
            }

            console.log("[SUBSCRIBE RESPONSE]", data);

            if (!res.ok) {
                throw new Error(data?.error || "Subscription failed");
            }

            setSuccess(true);
            return true;
        } catch (err: any) {
            console.error("[SUBSCRIBE ERROR]", err);
            setError(err.message || "Something went wrong");
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { subscribe, loading, error, success };
}
