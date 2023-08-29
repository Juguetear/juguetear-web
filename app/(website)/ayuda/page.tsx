import { Escribinos } from "components/Escribinos/Escribinos";
import { client } from "lib/sanity-client";
import { faqPageQuery } from "lib/sanity-queries";
import { FaqPage } from "types/faq-page";
async function Page() {
  // TODO: #331 Crear GROQ query para 'faqPage'.

  const faqPageData = await client.fetch<FaqPage>(faqPageQuery);

  return (
    <>
      {/* {JSON.stringify(faqPageData, null, 2)} */}
      <Escribinos />
    </>
  );
}

export default Page;
