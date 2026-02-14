import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client } from "../sanity/client";
import type { SanityDocument } from "@sanity/client";
import { urlFor } from "../sanity/image";
import SEO from "../components/SEO";
import { PortableText } from "@portabletext/react";
import { useLanguage } from "@/context/LanguageContext";

const POST_QUERY = `*[_type == "post" && slug.current == $slug && language == $lang][0]`;

const PostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<SanityDocument | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { language, t } = useLanguage();

  useEffect(() => {
    if (slug) {
      setIsLoading(true);
      client
        .fetch<SanityDocument>(POST_QUERY, { slug, lang: language })
        .then((data) => {
          setPost(data);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    }
  }, [slug, language]);

  if (isLoading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-900"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-prose mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <h1 className="text-2xl font-bold mb-4">{t.product.notFound}</h1>
        <Link
          to={`/${language}/`}
          className="text-primary-600 hover:text-primary-700"
        >
          {t.product.backHome}
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${post.title} | Dos Tazas`}
        description={post.excerpt}
        canonical={`http://cafedostazas.com/post/${post.slug.current}`}
        ogImage={
          post.image
            ? urlFor(post.image).width(1200).height(630).url()
            : undefined
        }
      />
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <header className="mb-8 text-center">
          {post.image && (
            <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
              <img
                src={urlFor(post.image).width(1200).height(600).url()}
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
            {post.title}
          </h1>
          <p className="text-neutral-500 mb-6">
            {new Date(post.publishedAt).toLocaleDateString(language, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </header>

        <div className="prose prose-lg prose-neutral mx-auto prose-a:text-primary-700 prose-headings:font-bold prose-headings:text-neutral-900">
          {post.body ? <PortableText value={post.body} /> : null}
        </div>
      </article>
    </>
  );
};

export default PostPage;
