// TODO: Add missing icons
import { HelpCircleIcon, HomeIcon } from "@sanity/icons";
import { StructureBuilder } from "sanity/desk";

// TODO: Migrate schemas from './studio/schemas' to './schemas'
import collaborate from "schemas/collaborate";
import homePage from "schemas/home-page";
import about from "studio/schemas/about";
import accessibilityDeclaration from "studio/schemas/accessibility-declaration";
import faq from "studio/schemas/faq";

// List of 'documents/schemas' to ignore from Sanity's Desk list.
const pages = [about.name, accessibilityDeclaration.name, faq.name, homePage.name, collaborate.name];

const deskStructure = (S: StructureBuilder) => {
  return (
    // Sanity Desk view
    S.list()
      .title("Contenido")

      // Documents listed inside 'Contenido'
      .items([
        // home-page schema
        S.listItem()
          .title(homePage.title || "Home")
          .icon(HomeIcon)
          .child(S.document().schemaType(homePage.name).documentId(homePage.name)),

        // accessibility-declaration schema
        S.listItem()
          .title(accessibilityDeclaration.title)
          .child(S.document().schemaType(accessibilityDeclaration.name).documentId(accessibilityDeclaration.name)),

        // faq schema
        S.listItem().title(faq.title).icon(HelpCircleIcon).child(S.document().schemaType(faq.name).documentId(faq.name)),

        // about schema
        S.listItem().title(about.title).child(S.document().schemaType(about.name).documentId(about.name)),

        // collaborate schema
        S.listItem()
          .title(collaborate.title ? collaborate.title : "")
          .child(S.document().schemaType(collaborate.name).documentId(collaborate.name)),

        S.divider(),
        // Rest of documents
        ...S.documentTypeListItems().filter((item) => !pages.includes(item.getId()!)),
      ])
  );
};

export default deskStructure;
