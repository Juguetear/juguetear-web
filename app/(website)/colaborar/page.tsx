import { client } from "lib/sanity-client";
import { collaboratePageQuery } from "lib/sanity-queries";
import { CollaboratePage } from "types/collaborate-page";

async function Page() {
  const colaborarData = await client.fetch<CollaboratePage>(
    collaboratePageQuery
  );
  /* TODO: Crear colaborar page */
  return <>{JSON.stringify(colaborarData, null, 2)}</>;
}

export default Page;
