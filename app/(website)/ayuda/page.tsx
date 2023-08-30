import { Escribinos } from "components/Escribinos/Escribinos";
import { FAQSection } from "components/FAQSection/FAQSection";
import { client } from "lib/sanity-client";
import { faqPageQuery } from "lib/sanity-queries";
import { FaqPage } from "types/faq-page";
async function Page() {
  const faqPageData = await client.fetch<FaqPage>(faqPageQuery);

  return (
    <>
      <FAQSection {...faqPageData} />
      <Escribinos />
    </>
  );
}

export default Page;
