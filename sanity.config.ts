import { CodeBlockIcon, RobotIcon } from "@sanity/icons";
import { visionTool } from "@sanity/vision";
import { projectId } from "lib/sanity-variables";
import { defineConfig, definePlugin, isDev, WorkspaceOptions } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "schemas";
import deskStructure, { pages } from "./deskStructure";

const devOnlyPlugins = isDev ? [visionTool()] : [];

const readOnlySchemas = [...pages, "page"] as const;
type ReadOnlySchemas = (typeof readOnlySchemas)[number];

const sharedConfig = definePlugin({
  name: "shareConfig",
  plugins: [deskTool({ structure: deskStructure }), ...devOnlyPlugins],
  schema: { types: schemas },
  document: {
    actions: (prev, { schemaType }) => {
      if (readOnlySchemas.includes(schemaType as ReadOnlySchemas))
        prev.filter(
          ({ action }) =>
            isDev && !["unpublish", "delete", "duplicate"].includes(action!)
        );

      return prev;
    },
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type !== "global" && isDev) {
        return prev;
      }
      return prev.filter(
        (templateItem) =>
          !readOnlySchemas.includes(templateItem.templateId as ReadOnlySchemas)
      );
    },
  },
});

const devWorkspace: WorkspaceOptions = {
  name: "development-workspace",
  title: `Juguetear - Development`,
  subtitle: "Development",
  icon: CodeBlockIcon,
  projectId,
  dataset: "development",
  basePath: "/studio/development",
  plugins: [sharedConfig()],
};
const prodWorkspace: WorkspaceOptions = {
  name: "production-workspace",
  title: `Juguetear ${isDev ? "- Production" : ""}`,
  subtitle: "Production",
  icon: RobotIcon,
  projectId,
  dataset: "production",
  basePath: "/studio/production",
  plugins: [sharedConfig()],
};

const workspaces = isDev ? [devWorkspace, prodWorkspace] : [prodWorkspace];

export default defineConfig(workspaces);
