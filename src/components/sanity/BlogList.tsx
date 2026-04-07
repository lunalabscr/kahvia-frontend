"use client";

import { useState, useCallback, useRef } from "react";
import type { SanityDocument } from "@sanity/client";
import { client } from "@/sanity/client";
import BlogCard from "./BlogCard";

interface BlogListProps {
  initialPosts: SanityDocument[];
  lang: string;
}

export default function BlogList({ initialPosts, lang }: BlogListProps) {
  const [posts, setPosts] = useState<SanityDocument[]>(initialPosts);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialPosts.length === 9);
  
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  const lastPostElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting && hasMore) {
          loadMorePosts();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [loading, hasMore]
  );

  const loadMorePosts = async () => {
    setLoading(true);
    try {
      const query = `*[
        _type == "post"
        && defined(slug.current)
        && language == $lang
      ]|order(publishedAt desc)[$start...$end]{_id, title, slug, publishedAt, image, body, excerpt}`;
      
      const newPosts = await client.fetch<SanityDocument[]>(query, {
        lang,
        start: posts.length,
        end: posts.length + 9,
      });

      setPosts((prev) => [...prev, ...newPosts]);
      setHasMore(newPosts.length === 9);
    } catch (error) {
      console.error("Failed to fetch more posts:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => {
          if (posts.length === index + 1) {
            return (
              <div ref={lastPostElementRef} key={post._id} className="h-full">
                <BlogCard post={post} />
              </div>
            );
          } else {
            return (
              <div key={post._id} className="h-full">
                <BlogCard post={post} />
              </div>
            );
          }
        })}
      </div>
      {loading && (
        <div className="mt-12 flex justify-center">
          <div className="w-10 h-10 border-4 border-[#b82324] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {!hasMore && posts.length > 0 && (
        <div className="mt-12 text-center text-[#791216]/80 font-medium">
          {lang === "en" ? "No more posts to load." : "No hay más posts por cargar."}
        </div>
      )}
      {posts.length === 0 && (
        <div className="text-center text-[#791216] font-medium py-12">
          {lang === "en" ? "No posts found." : "No se encontraron posts."}
        </div>
      )}
    </div>
  );
}
