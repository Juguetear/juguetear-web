import type { Metadata } from "next";
import { metadata as studioMetadata } from "next-sanity/studio/metadata";
import { Studio } from "./Studio";

export const metadata: Metadata = {
  ...studioMetadata,
};

export default function StudioPage() {
  return <Studio />;
}
