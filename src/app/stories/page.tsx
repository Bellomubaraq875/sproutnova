'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Button from "@/app/components/ui/Button";
import { useI18n } from "@/app/providers";
import { resolvePostImage } from "@/lib/posts";

type BackendStory = {
  id: string;
  title: string;
  content: string;
  cover?: string;
  images?: string[];
  created_at: string;
  published: boolean;
};

export default function StoriesPage() {
  const { t, lang } = useI18n();
  const [stories, setStories] = useState<BackendStory[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        setLoadError(null);

        // ✅ USE YOUR PROXY API: /api/posts?lang=${lang}
        const apiUrl = `/api/posts?lang=${lang}`;
        console.log(`[STORIES PAGE] Fetching: ${apiUrl}`);

        const res = await fetch(apiUrl, {
          cache: "no-store",
          headers: { 'Content-Type': 'application/json' }
        });

        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(errorData.error || `HTTP ${res.status}`);
        }

        const data = await res.json();
        const storyArray = Array.isArray(data) ? data.filter((s: BackendStory) => s.published) : [];
        console.log(`[STORIES PAGE] Found ${storyArray.length} published stories`);

        setStories(storyArray.slice(0, 6));
      } catch (error: any) {
        console.error("[STORIES PAGE] Fetch failed:", error);
        setLoadError(t("stories.error" as any) || "Unable to load stories.");
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, [lang, t]);

  // ... rest of JSX remains IDENTICAL (hero + grid)
  if (loading) {
    return (
      <div className="min-h-screen bg-[#000814] flex items-center justify-center py-24">
        <div className="text-center text-white/60">
          {t("stories.loading" as any) || "Loading stories..."}
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#000814] min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-24">
        <div className="w-[80%] mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            {t("stories.hero.title" as any)}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            {t("stories.hero.subtitle" as any)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-sm mb-8 text-white">
              {t("stories.hero.badge" as any) || "Our Stories"}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-24">
        <div className="w-[80%] mx-auto">
          {loadError ? (
            <div className="text-center py-24 text-white/60">{loadError}</div>
          ) : stories.length === 0 ? (
            <div className="text-center py-24 text-white/60">
              {t("stories.empty" as any) || "No stories found."}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {stories.map((story) => (
                  <Link
                    key={story.id}
                    href={`/stories/${story.id}`}
                    className="group relative h-[450px] rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className="absolute inset-0">
                      <Image
                        src={resolvePostImage(story)}
                        alt={story.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    </div>

                    <div className="absolute bottom-8 left-8 right-8">
                      <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur border border-white/20 rounded-full text-xs mb-4 text-white">
                        {t("stories.single.badge" as any)}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-3 line-clamp-2">
                        {story.title}
                      </h3>
                      <p className="text-white/80 mb-6 line-clamp-2">
                        {story.content?.replace(/<[^>]*>?/gm, '').slice(0, 100)}...
                      </p>
                      <div className="flex items-center gap-2 text-blue-300 font-bold uppercase text-sm tracking-wider">
                        {t("stories.card.readMore" as any)} <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center">
                <Button className="border-white/20 bg-white/5 hover:bg-white/10 px-12 py-6 text-lg">
                  <Link href="/stories">
                    {t("stories.loadMore" as any)}
                  </Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
