import { client } from "lib/sanity-client";
import { accessibilityDeclarationPageQuery } from "lib/sanity-queries";
import React from "react";
import { AccessibilityDeclarationPage } from "types/accessibility-declaration-page";

async function Page() {
  const accessibilidadPage = await client.fetch<AccessibilityDeclarationPage>(
    accessibilityDeclarationPageQuery
  );

  /* TODO Crear Accessibilidad Page */
  return <>{/* <pre>{JSON.stringify(accessibilidadPage, null, 2)}</pre> */}</>;
}

export default Page;
