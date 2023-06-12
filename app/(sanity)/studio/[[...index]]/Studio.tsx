"use client";

import { NextStudio } from "next-sanity/studio";
import sanityConfig from "sanity.config";

export function Studio() {
  return <NextStudio config={sanityConfig} />;
}
