import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/image";
import { useLanguage } from "@/context/LanguageContext";
import type { SanityDocument } from "@sanity/client";

interface BlogCardProps {
  post: SanityDocument;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { language, t } = useLanguage();

  return (
    <Link
      href={`/${language}/post/${post.slug.current}`}
      className="group bg-[#791216] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
      aria-label={`${t.home.blog.readMore}: ${post.title}`}
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
      <div className="p-6 flex flex-col grow bg-[#b82324]">
        <p className="text-sm text-[#f6e7d2] font-medium mb-2">
          {new Date(post.publishedAt).toLocaleDateString(language, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h3 className="text-xl font-bold mb-3 font-gotham text-[#f6e7d2] group-hover:text-primary-700 transition-colors line-clamp-2">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="text-[#f6e7d2]/90 text-sm mb-4 line-clamp-3">
            {post.excerpt}
          </p>
        )}
        <span className="text-[#f6e7d2] font-medium mt-auto inline-flex items-center">
          {t.home.blog.readMore}
          <svg
            className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
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
  );
}
