import { loadEnvConfig } from "@next/env";
import { defineCliConfig } from "sanity/cli";

const dev = process.env.NODE_ENV !== "production";
// eslint-disable-next-line no-console
loadEnvConfig(__dirname, dev, { info: () => null, error: console.error });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineCliConfig({ api: { projectId, dataset } });
