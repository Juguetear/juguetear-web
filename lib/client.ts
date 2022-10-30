import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "isi1r0nm",
  dataset: "production",
  token: process.env.REACT_APP_SANITY_READ_TOKEN,
  useCdn: true,
});
