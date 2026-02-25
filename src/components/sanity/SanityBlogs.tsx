"use client";

import { client } from "../../sanity/client";
import type { SanityDocument } from "@sanity/client";
import { urlFor } from "../../sanity/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
  && language == $lang
]|order(publishedAt desc)[0...3]{_id, title, slug, publishedAt, image, body}`;

export const SanityBlog = () => {
  const [posts, setPosts] = useState<SanityDocument[]>([]);
  const { language, t } = useLanguage();

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {
        lang: language,
      });
      setPosts(posts);
    };
    fetchPosts();
  }, [language]);

  if (posts.length === 0) {
    return null;
  }

  return (
    <motion.section
      className="py-20 bg-[#f6e7d2]"
      id="blog"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#b82324] font-titan">
          {t.home.blog.title}
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {posts.map((post) => (
            <motion.div
              key={post._id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="h-full"
            >
              <Link
                href={`/${language}/post/${post.slug.current}`}
                className="group bg-[#791216] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
              >
                {post.image && (
                  <div className="h-48 overflow-hidden relative">
                    <Image
                      src={urlFor(post.image).width(800).height(500).url()}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow bg-[#b82324]">
                  <p className="text-sm text-[#f6e7d2] font-medium mb-2">
                    {new Date(post.publishedAt).toLocaleDateString(language, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h3 className="text-xl font-bold mb-3 text-[#f6e7d2] group-hover:text-primary-700 transition-colors">
                    {post.title}
                  </h3>
                  {/* Optional: Add excerpt here if available in the future */}
                  <span className="text-[#f6e7d2] font-medium mt-auto inline-flex items-center">
                    {t.home.blog.readMore}
                    <svg
                      className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
