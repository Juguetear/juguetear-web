import React from "react";
import { client } from "lib/sanity-client";
import { accessibilityDeclarationPageQuery } from "lib/sanity-queries";
import { AccessibilityDeclarationPage } from "types/accessibility-declaration-page";
import { PortableTxt } from "components/PortableTxt/PortableTxt";

async function Page() {
  const { content } = await client.fetch<AccessibilityDeclarationPage>(
    accessibilityDeclarationPageQuery
  );

  return (
    <>
      <PortableTxt
        content={content}
        wrapperClassName="container max-w-3xl py-16 lg:py-24"
      />
    </>
  );
}

export default Page;
