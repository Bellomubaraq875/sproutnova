'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { resolvePostImage } from "@/lib/posts";
import { useI18n } from "@/app/providers";
import { useParams } from "next/navigation";
import DOMPurify from "dompurify";

type BackendStory = {
    id: string;
    title: string;
    content: string;
    cover?: string;
    images?: string[];
    created_at: string;
    published: boolean;
};

function RichContent({ html }: { html: string }) {
    return (
        <article
            className="prose prose-invert max-w-none 
                 prose-p:text-white/85 
                 prose-headings:text-white 
                 prose-strong:text-white 
                 prose-a:text-blue-400 hover:prose-a:text-blue-300 
                 prose-li:text-white/85 
                 prose-blockquote:text-white/90 
                 prose-blockquote:border-l-blue-400 
                 prose-blockquote:pl-6"
            dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(html),
            }}
        />
    );
}

export default function StoryPage() {
    const { t, lang } = useI18n();
    const params = useParams();
    const id = params?.id as string;

    const [post, setPost] = useState<BackendStory | null>(null);
    const [image, setImage] = useState<string>("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!id) return;

        const fetchPost = async () => {
            try {
                setLoading(true);
                setError(false);

                const res = await fetch(`/api/posts/${encodeURIComponent(id)}?lang=${lang}`, {
                    cache: "no-store",
                });

                if (!res.ok) {
                    const errorData = await res.json().catch(() => ({}));
                    throw new Error(errorData.error || "Post not found");
                }

                const data: BackendStory = await res.json();

                if (!data.published) {
                    throw new Error("Post not published");
                }

                setPost(data);
                setImage(resolvePostImage(data));
            } catch (err) {
                console.error("fetchPost error:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id, lang]);

    if (loading) {
        return (
            <main className="bg-[#000814] min-h-screen flex items-center justify-center">
                <div className="text-white/60 py-24">
                    {t("stories.loading" as any) || "Loading story..."}
                </div>
            </main>
        );
    }

    if (error || !post) {
        return (
            <main className="bg-[#000814] min-h-screen flex items-center justify-center">
                <div className="text-white/60 py-24">
                    {t("stories.single.noContent" as any) || "Story not found."}
                </div>
            </main>
        );
    }

    return (
        <main className="bg-[#000814] min-h-screen text-white">
            <section className="relative pt-28 pb-24 w-[90%] md:w-[70%] mx-auto">

                {/* Back Button */}
                <Link
                    href="/stories"
                    className="inline-flex items-center gap-2 text-blue-400 mb-8 hover:text-white transition-colors"
                >
                    <ArrowLeft size={16} />
                    {t("stories.loadMore" as any) || "All Stories"}
                </Link>

                {/* Badge */}
                <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur border border-white/20 rounded-full text-xs mb-6">
                    {t("stories.single.badge" as any)}
                </span>

                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-bold mb-8">
                    {post.title}
                </h1>

                {/* Meta */}
                <div className="flex gap-6 text-sm text-white/60 mb-12 pb-8 border-b border-white/10">
                    <span className="flex items-center gap-2">
                        <User size={16} className="text-blue-400" />
                        LAB Foundation
                    </span>
                    <span className="flex items-center gap-2">
                        <Calendar size={16} className="text-blue-400" />
                        {new Date(post.created_at).toLocaleDateString()}
                    </span>
                </div>

                {/* Cover Image */}
                <div className="relative w-full h-[60vh] rounded-3xl overflow-hidden mb-16 border border-white/10">
                    <Image
                        src={image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        unoptimized
                    />
                </div>

                {/* Rich Text Content */}
                <RichContent html={post.content} />

                {/* Back to Stories */}
                <div className="mt-20 pt-12 border-t border-white/10 text-center">
                    <Link
                        href="/stories"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/20 rounded-2xl hover:bg-white/10 transition-all"
                    >
                        ← {t("stories.loadMore" as any) || "Back to All Stories"}
                    </Link>
                </div>
            </section>
        </main>
    );
}
