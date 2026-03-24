"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { ArrowUpRight, Calendar, User, Tag } from "lucide-react";
// Import the shared Post type so it matches the backend mapper exactly
import type { Post } from "@/lib/posts";

interface StoriesClientProps {
    lang: string;
    posts: Post[];
    loadError: string | null;
}

export default function StoriesClient({ lang, posts, loadError }: StoriesClientProps) {
    return (
        <main className="bg-[#000814] min-h-screen relative overflow-hidden text-white font-sans">
            {/* Background glows */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,var(--lab-blue)_0%,transparent_70%)] opacity-10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,var(--lab-sky)_0%,transparent_70%)] opacity-10 blur-[100px] pointer-events-none" />

            {/* Hero */}
            <section className="relative pt-32 pb-16">
                <div className="w-[90%] md:w-[80%] mx-auto text-center relative z-10">
                    <span className="inline-block py-2 px-6 rounded-full border border-[var(--lab-blue)]/30 text-[var(--lab-blue-light)] text-sm font-bold uppercase tracking-wider mb-6 bg-[var(--lab-sky)]/20 backdrop-blur-sm">
                        Stories
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
                        Real Stories
                    </h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                        Authentic stories from communities making real impact.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="pb-24 relative z-10">
                <div className="w-[90%] md:w-[80%] mx-auto">
                    {/* Error State */}
                    {loadError && (
                        <div className="text-center py-20 mb-12">
                            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
                                <h3 className="text-xl font-bold text-red-400 mb-4">Stories Unavailable</h3>
                                <p className="text-red-200 mb-6">{loadError}</p>
                                <Button
                                    onClick={() => window.location.reload()}
                                    className="bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded-lg"
                                >
                                    Try Again
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Empty State */}
                    {posts.length === 0 && !loadError && (
                        <div className="text-center py-20">
                            <h3 className="text-2xl font-bold text-white/80 mb-4">No Stories Yet</h3>
                            <p className="text-white/50 max-w-md mx-auto">
                                Stories from our communities will appear here soon.
                            </p>
                        </div>
                    )}

                    {/* Stories Grid */}
                    {posts.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <Link href={`/stories/${post.id}`} key={post.id} className="group">
                                    <Card className="h-full flex flex-col overflow-hidden border-white/5 hover:border-[var(--lab-blue)]/30 transition-all duration-300 hover:-translate-y-2">
                                        <div className="relative h-56 w-full overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#000814]/90 to-transparent" />
                                            <div className="absolute top-4 left-4 z-10">
                                                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-bold uppercase tracking-wider">
                                                    <Tag size={12} className="text-[var(--lab-yellow)]" />
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center gap-4 text-xs text-white/50 mb-4">
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar size={14} className="text-[var(--lab-blue)]" />
                                                    {post.date}
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <User size={14} className="text-[var(--lab-blue)]" />
                                                    {post.author}
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--lab-sky)] transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>

                                            <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex items-center gap-2 text-[var(--lab-blue-light)] text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                                                Read Story
                                                <ArrowUpRight size={16} />
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}