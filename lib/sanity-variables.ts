// Optional, defaults to 'development'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "development"; // CLI?, Client
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "isi1r0nm"; // Config, CLI, Client
// see https://www.sanity.io/docs/api-versioning for how versioning works
const YYYY_MM_DD = new Date().toLocaleDateString("fr-CA");
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || YYYY_MM_DD; // Client

const token = process.env.SANITY_API_READ_TOKEN;
// Optional, useful if you plan to add API functions that can write to your dataset
const writeToken = process.env.SANITY_API_WRITE_TOKEN;

export { dataset, projectId, token, writeToken, apiVersion };
