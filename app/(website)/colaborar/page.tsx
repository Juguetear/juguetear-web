import { PortableTxt } from "components/PortableTxt/PortableTxt";
import { client } from "lib/sanity-client";
import { collaboratePageQuery } from "lib/sanity-queries";
import { CollaboratePage } from "types/collaborate-page";

async function Page() {
  const colaborarData =
    await client.fetch<CollaboratePage>(collaboratePageQuery);
  /* TODO: Crear colaborar page */
  return <PortableTxt content={colaborarData.description}></PortableTxt>;
}

export default Page;
