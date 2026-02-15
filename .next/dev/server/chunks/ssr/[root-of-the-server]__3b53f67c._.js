module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/[lang]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[lang]/layout.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/sanity/client.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "client",
    ()=>client
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/client/dist/index.browser.js [app-rsc] (ecmascript) <locals>");
;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
    projectId: ("TURBOPACK compile-time value", "gj58qe89"),
    dataset: ("TURBOPACK compile-time value", "production"),
    apiVersion: ("TURBOPACK compile-time value", "2024-01-01"),
    useCdn: false
});
}),
"[project]/src/sanity/image.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "urlFor",
    ()=>urlFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$_chunks$2d$es$2f$compat$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/image-url/lib/_chunks-es/compat.js [app-rsc] (ecmascript)");
;
;
const builder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$_chunks$2d$es$2f$compat$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createImageUrlBuilder"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["client"]);
function urlFor(source) {
    return builder.image(source);
}
}),
"[project]/src/i18n/translations.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translations",
    ()=>translations
]);
const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            products: "Products",
            blog: "Blog",
            contact: "Contact"
        },
        home: {
            seo: {
                title: "Café Dos Tazas - Coffee Project",
                description: "Dos Tazas is a family project to dive deeper in the coffee realm.",
                keywords: "coffee, café, dos tazas, coffee project, specialty coffee, coffee culture, brewing methods, coffee recipes, costa rica coffee, coffee reviews, coffee blog"
            },
            hero: {
                title: "Coffee from the heart of the world",
                subtitle: "Ethically sourced, expertly roasted.",
                cta: "Shop Now"
            },
            products: {
                title: "Our Selections",
                subtitle: "Curated beans from the best coffee growing regions.",
                viewDetails: "View Details"
            },
            blog: {
                title: "Latest Stories",
                readMore: "Read More"
            }
        },
        product: {
            process: "Process",
            roastLevel: "Roast Level",
            producer: "Producer",
            altitude: "Altitude",
            contactButton: "I'm interested",
            notFound: "Product not found",
            backHome: "Go Home",
            related: "You might also like",
            singleOrigin: "Single Origin",
            details: "Details"
        },
        common: {
            footerText: "© {year} Dos Tazas. All rights reserved.",
            loading: "Loading...",
            followUs: "Follow Us",
            quickLinks: "Quick Links",
            madeWithLove: "A project dedicated to exploring and sharing the world of specialty coffee."
        },
        about: {
            title: "Our Story",
            p1: "The coffee world is often obscure and hard to navigate. At Dos Tazas, this project was born from a desire to change that narrative.",
            p2: "We believe that understanding where your coffee comes from shouldn't be a mystery. Our mission is to make people around the world more aware of the intricate processes in the coffee industry and appreciate the dedication required to produce a truly exceptional cup.",
            p3: "From selecting the right beans to the precise roasting methods, we are committed to transparency and quality in every step of the journey."
        },
        contact: {
            title: "Get in Touch",
            description: "Have questions about our beans, brewing methods, or just want to chat coffee? We are here to help. Reach out to us directly on WhatsApp.",
            buttonMessage: "Hi, I'm interested in Dos Tazas coffee!"
        },
        contactButton: {
            defaultText: "Chat on WhatsApp"
        }
    },
    es: {
        nav: {
            home: "Inicio",
            about: "Nosotros",
            products: "Productos",
            blog: "Blog",
            contact: "Contacto"
        },
        home: {
            seo: {
                title: "Café Dos Tazas - Proyecto de Café",
                description: "Dos Tazas es un proyecto familiar para profundizar en el mundo del café.",
                keywords: "café, dos tazas, proyecto de café, café de especialidad, cultura del café, métodos de preparación, recetas de café, café de costa rica, reseñas de café, blog de café"
            },
            hero: {
                title: "Café Dos Tazas",
                subtitle: "Café de Especialidad",
                cta: "Comprar Ahora"
            },
            products: {
                title: "Nuestras Selecciones",
                subtitle: "Granos seleccionados de las mejores regiones cafetaleras.",
                viewDetails: "Ver Detalles"
            },
            blog: {
                title: "Últimas Historias",
                readMore: "Leer Más"
            }
        },
        product: {
            process: "Proceso",
            roastLevel: "Nivel de Tueste",
            producer: "Productor",
            altitude: "Altitud",
            contactButton: "Me interesa",
            notFound: "Producto no encontrado",
            backHome: "Ir a Inicio",
            related: "También te podría gustar",
            singleOrigin: "Origen Único",
            details: "Detalles"
        },
        common: {
            footerText: "© {year} Dos Tazas. Todos los derechos reservados.",
            loading: "Cargando...",
            followUs: "Síguenos",
            quickLinks: "Enlaces Rápidos",
            madeWithLove: "Un proyecto dedicado a explorar y compartir el mundo del café de especialidad."
        },
        about: {
            title: "Nuestra Historia",
            p1: "El mundo del café es a menudo oscuro y difícil de navegar. En Dos Tazas, este proyecto nació del deseo de cambiar esa narrativa.",
            p2: "Creemos que entender de dónde viene tu café no debería ser un misterio. Nuestra misión es hacer que las personas de todo el mundo sean más conscientes de los intrincados procesos en la industria del café y aprecien la dedicación requerida para producir una taza verdaderamente excepcional.",
            p3: "Desde la selección de los granos adecuados hasta los métodos de tueste precisos, estamos comprometidos con la transparencia y la calidad en cada paso del camino."
        },
        contact: {
            title: "Contáctanos",
            description: "¿Tienes preguntas sobre nuestros granos, métodos de preparación o simplemente quieres hablar de café? Estamos aquí para ayudar. Contáctanos directamente por WhatsApp.",
            buttonMessage: "Hola, me interesa el café de Dos Tazas!"
        },
        contactButton: {
            defaultText: "Chatea en WhatsApp"
        }
    }
};
}),
"[project]/src/app/[lang]/post/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PostPage,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$image$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/image.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@portabletext/react/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/translations.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function getPost(slug, lang) {
    const POST_QUERY = `*[_type == "post" && slug.current == $slug && language == $lang][0]`;
    console.log(`[getPost] Fetching post: slug="${slug}", lang="${lang}"`);
    try {
        const post = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["client"].fetch(POST_QUERY, {
            slug,
            lang
        });
        console.log(`[getPost] Fetch result for slug="${slug}":`, post ? "Found" : "Not Found (null)");
        return post;
    } catch (error) {
        console.error(`[getPost] Error fetching post with slug="${slug}":`, error);
        // Don't throw, return null so 404 can be handled gracefully if it's just a fetch error
        return null;
    }
}
async function generateMetadata({ params }) {
    const { lang, slug } = await params;
    console.log(`[generateMetadata] Params resolved: lang=${lang}, slug=${slug}`);
    const post = await getPost(slug, lang);
    if (!post) {
        return {
            title: "Post Not Found"
        };
    }
    return {
        title: `${post.title} | Dos Tazas`,
        description: post.excerpt,
        alternates: {
            canonical: `http://cafedostazas.com/${lang}/post/${slug}`
        },
        openGraph: {
            images: post.image ? [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$image$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["urlFor"])(post.image).width(1200).height(630).url()
            ] : []
        }
    };
}
async function PostPage({ params }) {
    const { lang, slug } = await params;
    const post = await getPost(slug, lang);
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["translations"][lang] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["translations"].en;
    if (!post) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-prose mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold mb-4",
                    children: t.product.notFound
                }, void 0, false, {
                    fileName: "[project]/src/app/[lang]/post/[slug]/page.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: `/${lang}/`,
                    className: "text-primary-600 hover:text-primary-700",
                    children: t.product.backHome
                }, void 0, false, {
                    fileName: "[project]/src/app/[lang]/post/[slug]/page.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/[lang]/post/[slug]/page.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "container mx-auto px-4 py-12 max-w-3xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "mb-8 text-center",
                children: [
                    post.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl overflow-hidden mb-8 shadow-lg relative aspect-video",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$image$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["urlFor"])(post.image).width(1200).height(600).url(),
                            alt: post.title,
                            fill: true,
                            className: "w-full h-auto object-cover",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/[lang]/post/[slug]/page.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/post/[slug]/page.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl md:text-5xl font-bold mb-4 text-neutral-900",
                        children: post.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/post/[slug]/page.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-neutral-500 mb-6",
                        children: new Date(post.publishedAt).toLocaleDateString(lang, {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/post/[slug]/page.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[lang]/post/[slug]/page.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "prose prose-lg prose-neutral mx-auto prose-a:text-primary-700 prose-headings:font-bold prose-headings:text-neutral-900",
                children: post.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$portabletext$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PortableText"], {
                    value: post.body
                }, void 0, false, {
                    fileName: "[project]/src/app/[lang]/post/[slug]/page.tsx",
                    lineNumber: 102,
                    columnNumber: 22
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/src/app/[lang]/post/[slug]/page.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[lang]/post/[slug]/page.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/[lang]/post/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[lang]/post/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3b53f67c._.js.map