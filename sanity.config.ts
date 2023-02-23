import { visionTool } from "@sanity/vision";
import { dataset, projectId, title } from "lib/sanity-variables";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "schemas";
import deskStructure from "./deskStructure";

export default defineConfig({
  basePath: "/studio",
  dataset,
  projectId,
  title,
  schema: { types: schemas },
  plugins: [
    deskTool({ structure: deskStructure }),

    // Vision lets you query your content with GROQ in the studio. https://www.sanity.io/docs/the-vision-plugin
    visionTool(),
  ],
});
