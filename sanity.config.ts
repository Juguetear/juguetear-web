import { CodeBlockIcon, RobotIcon } from "@sanity/icons";
import { visionTool } from "@sanity/vision";
import { projectId } from "lib/sanity-variables";
import { WorkspaceOptions, defineConfig, definePlugin, isDev } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "schemas";
import deskStructure, { pages } from "./deskStructure";

const devOnlyPlugins = isDev ? [visionTool()] : [];

const sharedConfig = definePlugin({
  name: "shareConfig",
  plugins: [deskTool({ structure: deskStructure }), ...devOnlyPlugins],
  schema: { types: schemas },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === "global") {
        return prev.filter(
          (templateItem) =>
            !pages.includes(templateItem.templateId as (typeof pages)[number])
        );
      }
      return prev;
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
