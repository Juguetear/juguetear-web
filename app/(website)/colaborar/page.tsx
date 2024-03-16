import { PortableTxt } from "components/PortableTxt/PortableTxt";
import { client } from "lib/sanity-client";
import { collaboratePageQuery } from "lib/sanity-queries";
import { CollaboratePage } from "types/collaborate-page";

async function Page() {
  const colaborarData =
    await client.fetch<CollaboratePage>(collaboratePageQuery);
  /* TODO: Crear colaborar page */
  return (
    <PortableTxt
      content={colaborarData.description}
      wrapperClassName="container max-w-3xl py-16 lg:py-24"
    ></PortableTxt>
  );
}

export default Page;
