// TODO: Add missing icons
import { HelpCircleIcon, HomeIcon } from "@sanity/icons";
import { StructureBuilder } from "sanity/desk";

// TODO: Migrate schemas from './studio/schemas' to './schemas'
import about from "studio/schemas/about";
import accessibilityDeclaration from "studio/schemas/accessibility-declaration";
import faq from "studio/schemas/faq";
import homePage from "studio/schemas/home-page";

// List of 'documents/schemas' to ignore from Sanity's Desk list.
const pages = [
  about.name,
  accessibilityDeclaration.name,
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
          .title(homePage.title)
          .icon(HomeIcon)
          .child(
            S.document().schemaType(homePage.name).documentId(homePage.name)
          ),

        // accessibility-declaration schema
        S.listItem()
          .title(accessibilityDeclaration.title)
          .child(
            S.document()
              .schemaType(accessibilityDeclaration.name)
              .documentId(accessibilityDeclaration.name)
          ),

        // faq schema
        S.listItem()
          .title(faq.title)
          .icon(HelpCircleIcon)
          .child(S.document().schemaType(faq.name).documentId(faq.name)),

        // about schema
        S.listItem()
          .title(about.title)
          .child(S.document().schemaType(about.name).documentId(about.name)),

        S.divider(),
        // Rest of documents
        ...S.documentTypeListItems().filter(
          (item) => !pages.includes(item.getId()!)
        ),
      ])
  );
};

export default deskStructure;
