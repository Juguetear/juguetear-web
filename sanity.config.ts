import { CodeBlockIcon, RobotIcon } from "@sanity/icons";
import { visionTool } from "@sanity/vision";
import { dataset, projectId, title } from "lib/sanity-variables";
import { defineConfig, definePlugin, isDev, WorkspaceOptions } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "schemas";
import deskStructure from "./deskStructure";

const devOnlyPlugins = isDev ? [visionTool()] : [];

const sharedConfig = definePlugin({
  name: "shareConfig",
  plugins: [deskTool({ structure: deskStructure }), ...devOnlyPlugins],
  schema: { types: schemas },
});

const devWorkspace: WorkspaceOptions = {
  name: "development-workspace",
  title: `${title} - Development`,
  subtitle: "Development",
  icon: CodeBlockIcon,
  projectId,
  dataset,
  basePath: "/studio/development",
  plugins: [sharedConfig()],
};
const prodWorkspace: WorkspaceOptions = {
  name: "production-workspace",
  title: `${title} ${isDev ? "- Production" : ""}`,
  subtitle: "Production",
  icon: RobotIcon,
  projectId,
  dataset: "production",
  basePath: "/studio/production",
  plugins: [sharedConfig()],
};

const workspaces = isDev ? [devWorkspace, prodWorkspace] : [prodWorkspace];

export default defineConfig(workspaces);
