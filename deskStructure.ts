// TODO: Add missing icons
import { HelpCircleIcon, HomeIcon } from "@sanity/icons";
import { StructureBuilder } from "sanity/desk";

import about from "schemas/about";
import accessibilityDeclaration from "schemas/accessibility-declaration";
import collaborate from "schemas/collaborate";
import faq from "schemas/faq";
import homePage from "schemas/home-page";

// List of 'documents/schemas' to ignore from Sanity's Desk list.
const pages = [
  about.name,
  accessibilityDeclaration.name,
  collaborate.name,
  faq.name,
  homePage.name,
];

const deskStructure = (S: StructureBuilder) => {
  return (
    // Sanity Desk view
    S.list()
      .title("Contenido")

      // Documents listed inside 'Contenido'
      .items([
        // home-page schema
        S.listItem()
          .title(homePage.title || "Home Page")
          .icon(HomeIcon)
          .child(
            S.document().schemaType(homePage.name).documentId(homePage.name)
          ),

        // accessibility-declaration schema
        S.listItem()
          .title(
            accessibilityDeclaration.title || "Accessibility Declaration Page"
          )
          .child(
            S.document()
              .schemaType(accessibilityDeclaration.name)
              .documentId(accessibilityDeclaration.name)
          ),

        // faq schema
        S.listItem()
          .title(faq.title || "FAQ Page")
          .icon(HelpCircleIcon)
          .child(S.document().schemaType(faq.name).documentId(faq.name)),

        // about schema
        S.listItem()
          .title(about.title || "About Page")
          .child(S.document().schemaType(about.name).documentId(about.name)),

        // collaborate schema
        S.listItem()
          .title(collaborate.title ? collaborate.title : "Collaborate Page")
          .child(
            S.document()
              .schemaType(collaborate.name)
              .documentId(collaborate.name)
          ),

        S.divider(),
        // Rest of documents
        ...S.documentTypeListItems().filter(
          (item) => !pages.includes(item.getId() as (typeof pages)[number])

          //
        ),
      ])
  );
};

export default deskStructure;
