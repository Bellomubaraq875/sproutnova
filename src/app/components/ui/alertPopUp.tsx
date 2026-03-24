// components/ui/AlertPopup.tsx
"use client";

import { X } from "lucide-react";
import Button from "./Button";

type AlertVariant = "success" | "error";

interface AlertPopupProps {
    open: boolean;
    variant: AlertVariant;
    title: string;
    message: string;
    amount?: string;
    cardMasked?: string;
    onClose: () => void;
    onContinue?: () => void;
}

export default function AlertPopup({
    open,
    variant,
    title,
    message,
    amount,
    cardMasked,
    onClose,
    onContinue,
}: AlertPopupProps) {
    if (!open) return null;

    const isSuccess = variant === "success";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="relative w-full max-w-sm rounded-2xl bg-[#000814]/80 px-6 py-6 shadow-2xl border border-white/10">
                {/* Close icon */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-300 hover:text-white transition"
                    aria-label="Close"
                >
                    <X size={18} />
                </button>

                {/* Emoji / icon placeholder */}
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                    
                    <span className="text-3xl">{isSuccess ? "✅" : "🚫"}</span>
                </div>

                {/* Title & message */}
                <h3 className="text-center text-lg font-semibold text-white">
                    {title}
                </h3>
                <p className="mt-2 text-center text-sm text-gray-300">
                    {message}
                </p>

                {/* Amount / card block (optional, like template) */}
                {(amount || cardMasked) && (
                    <div className="mt-6 rounded-2xl bg-white/5 px-4 py-3 text-sm text-gray-100">
                        {amount && (
                            <p className="font-semibold text-white">
                                {amount}
                            </p>
                        )}
                        {cardMasked && (
                            <p className="mt-1 text-xs text-gray-300">
                                to the card {cardMasked}
                            </p>
                        )}
                    </div>
                )}

                {/* Buttons */}
                <div className="mt-6 flex flex-col gap-3">
                    <Button
                        type="button"
                        onClick={onContinue ?? onClose}
                        className={
                            "w-full " +
                            (isSuccess
                                ? "bg-emerald-500 hover:bg-emerald-400 text-white" // success colour
                                : "bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-400 hover:to-blue-400 text-white")
                        }
                    >
                        {isSuccess ? "Great, thanks!" : "Continue"}
                    </Button>

                    {/* <button
                        type="button"
                        onClick={onClose}
                        className="w-full rounded-full border border-white/20 py-2 text-sm font-medium text-gray-200 hover:bg-white/5 transition"
                    >
                        Cancel
                    </button> */}
                </div>
            </div>
        </div>
    );
}
