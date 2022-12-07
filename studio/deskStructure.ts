import S from "@sanity/desk-tool/structure-builder";

import { HelpCircleIcon, HomeIcon } from "@sanity/icons";

import faq from "./schemas/faq";
import homePage from "./schemas/home-page";

// List of 'documents/schemas' to ignore from Sanity's Desk list.
const pages = [homePage.name, faq.name];

export default () => {
  return (
    // Sanity Desk view
    S.list()
      .title("Contenido")

      // Documents listed inside 'Contenido'
      .items([
        // home-page schema
        S.listItem()
          .title(homePage.title)
          .icon(HomeIcon)
          .child(
            S.document().schemaType(homePage.name).documentId(homePage.name)
          ),

        // faq schema
        S.listItem()
          .title(faq.title)
          .icon(HelpCircleIcon)
          .child(S.document().schemaType(faq.name).documentId(faq.name)),

        S.divider(),
        // Rest of documents
        ...S.documentTypeListItems().filter(
          (item) => !pages.includes(item.getId()!)
        ),
      ])
  );
};
