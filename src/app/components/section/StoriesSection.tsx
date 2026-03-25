// src/app/components/section/StoriesSection.tsx
'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Button from "../ui/Button";
import { useI18n } from "@/app/providers";
import { resolvePostImage } from "@/lib/posts";

type BackendStory = {
  id: string;
  title: string;
  content: string;
  cover?: string;
  images?: string[];
  created_at: string;
};

export default function StoriesSection() {
  // 1. Get 't' for UI text and 'lang' to fetch correct data from backend
  const { t, lang } = useI18n();
  const [stories, setStories] = useState<BackendStory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        // 2. Pass the language to the API so backend returns correct content
        const res = await fetch(`/api/stories?lang=${lang}`, { cache: "no-store" });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        const storyArray = Array.isArray(data) ? data : [];
        setStories(storyArray.slice(0, 4));
      } catch (error) {
        console.error("Stories fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, [lang]); // 3. Re-fetch when language changes

  if (loading) {
    return (
      <div className="py-24 bg-[#000814] text-center text-white/60">
        {t("stories.loading" as any) || "Loading..."}
      </div>
    );
  }

  return (
    <section className="py-24 bg-[#000814]">
      <div className="w-[80%] mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-16">
          {/* Translated Section Title */}
          {t("stories.hero.title" as any)}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <Link
              key={story.id}
              href={`/stories/${story.id}`} // Updated to point to dynamic ID
              className="group relative h-[450px] rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 hover:-translate-y-2 transition-all duration-500"
            >
              {/* Thumbnail Image */}
              <div className="absolute inset-0">
                <Image
                  src={resolvePostImage(story)}
                  alt={story.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur border border-white/20 rounded-full text-xs mb-4 text-white">
                  {/* Translated Badge (e.g., "Story" or "Histoire") */}
                  {t("stories.single.badge" as any)}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 line-clamp-2">
                  {story.title}
                </h3>
                <p className="text-white/80 mb-6 line-clamp-2">
                  {/* Note: Content comes from backend, HTML stripping might be needed depending on API response */}
                  {story.content?.replace(/<[^>]*>?/gm, '').slice(0, 100)}...
                </p>
                <div className="flex items-center gap-2 text-blue-300 font-bold uppercase text-sm tracking-wider">
                  {/* Translated 'Read More' */}
                  {t("stories.card.readMore" as any)} <ArrowUpRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center pt-20">
          <Button
            // asChild 
            variant="pill"
            size="lg"
            icon={<ArrowUpRight size={20} />}
            className="border-white/20 bg-transparent hover:bg-white/5 hover:border-white/40"
          >
            <Link href="/stories">
              {/* Translated 'View All' Button */}
              {t("stories.loadMore" as any) || "View All Stories"}
            </Link>
          </Button>
          
          </div>
      </div>
    </section>
  );
}