import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, token } from "./sanity-variables";

export const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion,
  useCdn: true,
});
