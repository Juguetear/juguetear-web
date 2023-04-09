const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "development";
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "isi1r0nm";
const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || "Juguetear";
const token = process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "v1";

export { dataset, projectId, title, token, apiVersion };
