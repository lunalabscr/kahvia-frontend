import { serve } from "bun";
import index from "./index.html";

const server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    "/*": index,
    "/public/*": async (req) => {
      const path = new URL(req.url).pathname;
      const file = Bun.file(`.${path}`);

      if (await file.exists()) {
        return new Response(file);
      }
      return new Response("Not Found", { status: 404 });
    },
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
