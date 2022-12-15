import { defineConfig } from "sanity";

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "";
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || "Juguetear";

export default defineConfig({
  basePath: "/studio",
  dataset,
  projectId,
  title,
  schema: { types: [] },
  plugins: [],
});
