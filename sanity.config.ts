import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import deskStructure from "./deskStructure";

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "";
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || "Juguetear";

export default defineConfig({
  basePath: "/studio",
  dataset,
  projectId,
  title,
  schema: { types: [] },
  plugins: [
    deskTool({ structure: deskStructure }),

    // Vision lets you query your content with GROQ in the studio. https://www.sanity.io/docs/the-vision-plugin
    visionTool(/* { defaultApiVersion: apiVersion } */),
  ],
});
