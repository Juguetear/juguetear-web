import { isAssetObjectStub, type SanityImageSource } from "@sanity/asset-utils";
import imageUrlBuilder from "@sanity/image-url";
import { createClient, SanityClient } from "next-sanity";
import {
  apiVersion,
  dataset,
  projectId,
  token,
  writeToken,
} from "./sanity-variables";

export const client: SanityClient = createClient({
  projectId,
  dataset,
  token,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
});

export const postClient: SanityClient = createClient({
  projectId,
  dataset,
  token: writeToken,
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);

export const imgUrlFrom = (
  source: SanityImageSource | null | undefined,
  { size, height = 512, width = 512 }: SizeOptions = {}
) => {
  const w = size || width;
  const h = size || height;

  if (isAssetObjectStub(source)) {
    return builder.image(source).size(w, h).url();
  }
  return !source ? null : `https://placehold.co/${w}x${h}`;
};
type SizeOptions = {
  size?: number;
  width?: number;
  height?: number;
};
