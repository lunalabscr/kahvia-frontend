export type Language = "en" | "es";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      products: "Products",
      blog: "Blog",
      contact: "Contact",
    },
    home: {
      seo: {
        title: "Café Dos Tazas - Coffee Project",
        description:
          "Dos Tazas is a family project to dive deeper in the coffee realm.",
        keywords:
          "coffee, café, dos tazas, coffee project, specialty coffee, coffee culture, brewing methods, coffee recipes, costa rica coffee, coffee reviews, coffee blog",
      },
      hero: {
        title: "From producer to your cup",
        subtitle:
          "We believe the producer should be a part of the coffee process and fully recognized for their work.",
        cta: "Shop Now",
        secondaryCta: "Our Story",
      },
      products: {
        title: "Our Selections",
        subtitle: "Curated beans from the best coffee growing regions.",
        viewDetails: "View Details",
        noProductsTitle: "We are roasting your next favorite coffee",
        noProductsSubtitle:
          "Check back soon for our new selection of freshly roasted products.",
      },
      blog: {
        title: "Latest Stories",
        readMore: "Read More",
        seeAll: "See all blogs",
      },
      instagram: {
        title: "Follow us on Instagram",
        subtitle: "Stay updated with our latest roasts and coffee journeys.",
      },
    },
    producers: {
      title: "Producers",
      subtitle: "The families behind your coffee.",
      homeTitle: "Families We Work With",
      viewDetails: "Meet the family",
      notFound: "Producer not found",
      backHome: "Go Home",
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
      details: "Details",
      whatsappProductMessage:
        "Hi! I was checking out a product on your site and I'm really interested. Could you give me more details? ☕",
      interestMessage:
        "Hi! I was checking out the {productName} coffee and I'm really interested. Could you give me more details? ☕",
      options: {
        amount: "Amount",
        roast: "Roast Type",
        grind: "Grind",
      },
      values: {
        amount: {
          "250g": "250g",
          "500g": "500g",
          "1kg": "1kg",
        },
        roast: {
          medium: "Medium",
          mediumDark: "Medium Dark",
        },
        grind: {
          ground: "Ground",
          bean: "Whole Bean",
        },
      },
    },
    common: {
      footerText: "© {year} Dos Tazas. All rights reserved.",
      loading: "Loading...",
      followUs: "Follow Us",
      quickLinks: "Quick Links",
      madeWithLove:
        "A project dedicated to exploring and sharing the world of specialty coffee.",
    },
    about: {
      title: "Our Story",
      p1: "At Dos Tazas, we want to change the narrative of the coffee industry by exposing the hard work and dedication of the producers behind every bean.",
      p2: "We believe that understanding where your coffee comes from shouldn't be a mystery. Our mission is to make people around the world more aware of the intricate processes led by farmers, and to truly appreciate their dedication to producing an exceptional cup.",
      p3: "By bringing the producer to the forefront, we strive to create a fair, transparent, and rewarding journey from their hands to your cup.",
    },
    contact: {
      title: "Get in Touch",
      description:
        "Have questions about our beans, brewing methods, or just want to chat coffee? We are here to help. Reach out to us directly on WhatsApp.",
      buttonMessage:
        "Hi! I'd love to learn more about the Dos Tazas coffee project!",
      whatsappBaseMessage:
        "Hi! I'm exploring the Dos Tazas coffee project and would love to learn more about your selections ☕",
    },
    contactButton: {
      defaultText: "Complete your purchase on WhatsApp",
    },
    socials: {
      backHome: "Back to Home",
      instagram: "Instagram",
      facebook: "Facebook",
      whatsapp: "WhatsApp & Get 5% Off",
      whatsappMessage:
        "Hi! I came from your socials link, I want the 5% discount ☕",
    },
    cart: {
      title: "Cart",
      addToCart: "Add to Cart",
      itemAdded: "Item added to cart",
      emptyCart: "Your cart is empty",
      returnShop: "Return to Shop",
      remove: "Remove",
      subtotal: "Subtotal",
      total: "Total",
      checkoutWhatsApp: "Complete Order via WhatsApp",
      whatsappMessageTemplate:
        "Hello Dos Tazas! I'd like to place an order:\n\n{items}\n\nTotal: {total}",
      whatsappItemTemplate:
        "{quantity}x {name} ({amount}, {roast}, {grind}) - {price}",
    },
    locations: {
      title: "Our Locations",
      subtitle: "Find Dos Tazas coffee near you.",
      filters: {
        all: "All",
        "coffee-shop": "Coffee Shops",
        supermarket: "Supermarkets",
        restaurant: "Restaurants",
        online: "Buy Online",
      },
      getDirections: "Get Directions",
      visitWebsite: "Visit Website",
      emptyTitle: "No locations found",
      emptySubtitle: "We couldn't find any locations matching your search.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      products: "Productos",
      blog: "Blog",
      contact: "Contacto",
    },
    home: {
      seo: {
        title: "Café Dos Tazas - Proyecto de Café",
        description:
          "Dos Tazas es un proyecto familiar para profundizar en el mundo del café.",
        keywords:
          "café, dos tazas, proyecto de café, café de especialidad, cultura del café, métodos de preparación, recetas de café, café de costa rica, reseñas de café, blog de café",
      },
      hero: {
        title: "Del productor a tu taza",
        subtitle:
          "Creemos que el productor debe ser parte del proceso y ser plenamente reconocido por su trabajo.",
        cta: "Comprar Ahora",
        secondaryCta: "Nuestra Historia",
      },
      products: {
        title: "Nuestras Selecciones",
        subtitle: "Granos seleccionados de las mejores regiones cafetaleras.",
        viewDetails: "Ver Detalles",
        noProductsTitle: "Estamos tostando tu próximo café favorito",
        noProductsSubtitle:
          "Vuelve pronto para ver nuestra nueva selección de productos recién tostados.",
      },
      blog: {
        title: "Últimas Historias",
        readMore: "Leer Más",
        seeAll: "Ver todos los blogs",
      },
      instagram: {
        title: "Síguenos en Instagram",
        subtitle:
          "Mantente al día con nuestros últimos tuestes y viajes cafetaleros.",
      },
    },
    producers: {
      title: "Productores",
      subtitle: "Las familias detrás de tu café.",
      homeTitle: "Familias Con Las Que Trabajamos",
      viewDetails: "Conoce a la familia",
      notFound: "Productor no encontrado",
      backHome: "Ir a Inicio",
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
      details: "Detalles",
      whatsappProductMessage:
        "¡Hola! Estaba viendo un producto en su página y me interesa mucho. ¿Podrían darme más información? ☕",
      interestMessage:
        "¡Hola! Estaba viendo el café {productName} y me interesa mucho. ¿Podrían darme más información? ☕",
      options: {
        amount: "Cantidad",
        roast: "Nivel de Tueste",
        grind: "Molienda",
      },
      values: {
        amount: {
          "250g": "250g",
          "500g": "500g",
          "1kg": "1kg",
        },
        roast: {
          medium: "Medio",
          mediumDark: "Medio Oscuro",
        },
        grind: {
          ground: "Molido",
          bean: "Grano Entero",
        },
      },
    },
    common: {
      footerText: "© {year} Dos Tazas. Todos los derechos reservados.",
      loading: "Cargando...",
      followUs: "Síguenos",
      quickLinks: "Enlaces Rápidos",
      madeWithLove:
        "Un proyecto dedicado a explorar y compartir el mundo del café de especialidad.",
    },
    about: {
      title: "Nuestra Historia",
      p1: "En Dos Tazas, queremos cambiar la narrativa de la industria del café exponiendo el arduo trabajo y la dedicación de los productores detrás de cada grano.",
      p2: "Creemos que entender de dónde viene tu café no debería ser un misterio. Nuestra misión es concientizar a las personas sobre los procesos liderados por los agricultores, y apreciar verdaderamente su dedicación para producir una taza excepcional.",
      p3: "Al poner al productor en primer plano, nos esforzamos por crear un viaje justo, transparente y gratificante desde sus manos hasta tu taza.",
    },
    contact: {
      title: "Contáctanos",
      description:
        "¿Tienes preguntas sobre nuestros granos, métodos de preparación o simplemente quieres hablar de café? Estamos aquí para ayudar. Contáctanos directamente por WhatsApp.",
      buttonMessage:
        "¡Hola! Me encantaría saber más sobre el proyecto de café Dos Tazas.",
      whatsappBaseMessage:
        "¡Hola! Estoy explorando el proyecto de café Dos Tazas y me encantaría saber más sobre su selección ☕",
    },
    contactButton: {
      defaultText: "Comprar por WhatsApp",
    },
    socials: {
      backHome: "Volver al Inicio",
      instagram: "Instagram",
      facebook: "Facebook",
      whatsapp: "WhatsApp (5% de Descuento)",
      whatsappMessage:
        "¡Hola! Vengo del enlace de sus redes sociales, quiero el 5% de descuento ☕",
    },
    cart: {
      title: "Carrito",
      addToCart: "Añadir al Carrito",
      itemAdded: "Artículo añadido al carrito",
      emptyCart: "Tu carrito está vacío",
      returnShop: "Volver a la Tienda",
      remove: "Eliminar",
      subtotal: "Subtotal",
      total: "Total",
      checkoutWhatsApp: "Completar Orden por WhatsApp",
      whatsappMessageTemplate:
        "¡Hola Dos Tazas! Me gustaría realizar un pedido:\n\n{items}\n\nTotal: {total}",
      whatsappItemTemplate:
        "{quantity}x {name} ({amount}, {roast}, {grind}) - {price}",
    },
    locations: {
      title: "Nuestras Ubicaciones",
      subtitle: "Encuentra café Dos Tazas cerca de ti.",
      filters: {
        all: "Todos",
        "coffee-shop": "Cafeterías",
        supermarket: "Supermercados",
        restaurant: "Restaurantes",
        online: "Compra en Línea",
      },
      getDirections: "Cómo Llegar",
      visitWebsite: "Visitar Sitio Web",
      emptyTitle: "No se encontraron ubicaciones",
      emptySubtitle: "No pudimos encontrar ubicaciones que coincidan con tu búsqueda.",
    },
  },
};
