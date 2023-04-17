import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { createClient, SanityClient } from "next-sanity";
import { apiVersion, dataset, projectId, token } from "./sanity-variables";

export const client: SanityClient = createClient({
  projectId,
  dataset,
  token,
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);
