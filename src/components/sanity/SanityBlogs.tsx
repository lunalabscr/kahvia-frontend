"use client";

import { client } from "../../sanity/client";
import type { SanityDocument } from "@sanity/client";
import { urlFor } from "../../sanity/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import pictoBlog2 from "@/assets/images/brand/PICTO.svg";
import BlogCard from "./BlogCard";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
  && language == $lang
]|order(publishedAt desc)[0...3]{_id, title, slug, publishedAt, image, body, excerpt}`;

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
      className="py-20 bg-[#f6e7d2] relative overflow-hidden"
      id="blog"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* <motion.div
        initial={{ opacity: 0, rotate: 15 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute -top-10 -left-10 md:-left-20 z-0 w-64 h-64 md:w-96 md:h-96 pointer-events-none"
      >
        <Image
          src={pictoBlog}
          alt="Decoration"
          fill
          className="object-contain"
        />
      </motion.div> */}
      <motion.div
        initial={{ opacity: 0, rotate: -15 }}
        whileInView={{ opacity: 0.2, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -bottom-10 right-0 md:right-4 z-0 w-64 h-64 md:w-96 md:h-96 pointer-events-none"
      >
        <Image
          src={pictoBlog2}
          alt="Decoration"
          fill
          className="object-contain"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 flex justify-center pb-8 border-b-2 border-[#b82324]/20">
          <Link
            href={`/${language}/blog`}
            className="inline-flex items-center px-8 py-3 rounded-full shadow-lg text-lg font-gotham font-bold bg-[#b82324] text-[#f6e7d2] hover:bg-[#791216] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#791216] focus:ring-offset-[#f6e7d2]"
          >
            {t.home.blog.seeAll}
          </Link>
        </div>
      </div>
    </motion.section>
  );
};
