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
"[project]/src/components/ProductView.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ProductView.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ProductView.tsx <module evaluation>", "default");
}),
"[project]/src/components/ProductView.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ProductView.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ProductView.tsx", "default");
}),
"[project]/src/components/ProductView.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductView$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ProductView.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductView$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ProductView.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductView$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/[lang]/product/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductPage,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$image$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/image.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/translations.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductView$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductView.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function getProduct(slug, lang) {
    const productQuery = `*[_type == "product" && slug.current == $slug][0]`;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["client"].fetch(productQuery, {
        slug
    });
}
async function getRelatedProducts(productId) {
    const relatedQuery = `*[_type == "product" && _id != $id][0...4]{
    _id,
    name,
    price,
    image,
    slug
}`;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["client"].fetch(relatedQuery, {
        id: productId
    });
}
async function generateMetadata({ params }) {
    const { lang, slug } = await params;
    const product = await getProduct(slug, lang);
    if (!product) {
        return {
            title: "Product Not Found"
        };
    }
    return {
        title: `${product.name} | Dos Tazas`,
        description: `Buy ${product.name} - ${product.price}`,
        alternates: {
            canonical: `http://cafedostazas.com/${lang}/product/${slug}`
        },
        openGraph: {
            images: product.image ? [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$image$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["urlFor"])(product.image).width(1200).height(630).url()
            ] : []
        }
    };
}
async function ProductPage({ params }) {
    const { lang, slug } = await params;
    const product = await getProduct(slug, lang);
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["translations"][lang] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["translations"].en;
    if (!product) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col justify-center items-center font-roboto",
            children: [
                t.product.notFound,
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: `/${lang}/`,
                    className: "text-primary-600 underline mt-4",
                    children: t.product.backHome
                }, void 0, false, {
                    fileName: "[project]/src/app/[lang]/product/[slug]/page.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/[lang]/product/[slug]/page.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this);
    }
    const relatedProducts = await getRelatedProducts(product._id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductView$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        product: product,
        relatedProducts: relatedProducts
    }, void 0, false, {
        fileName: "[project]/src/app/[lang]/product/[slug]/page.tsx",
        lineNumber: 71,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/[lang]/product/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[lang]/product/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__22cc40b0._.js.map