import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.BUN_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.BUN_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.BUN_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
});
