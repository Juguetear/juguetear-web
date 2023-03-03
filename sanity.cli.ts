import { loadEnvConfig } from "@next/env";
import { dataset, projectId } from "lib/sanity-variables";
import { defineCliConfig } from "sanity/cli";

const dev = process.env.NODE_ENV !== "production";
// eslint-disable-next-line no-console
loadEnvConfig(__dirname, dev, { info: () => null, error: console.error });

export default defineCliConfig({ api: { projectId, dataset } });
