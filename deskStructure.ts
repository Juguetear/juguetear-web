// TODO: Add missing icons
import { HelpCircleIcon, HomeIcon } from "@sanity/icons";
import { StructureBuilder } from "sanity/desk";
import aboutPage from "schemas/pages/about-page";
import accessibilityDeclarationPage from "schemas/pages/accessibility-declaration-page";
import collaboratePage from "schemas/pages/collaborate-page";
import faqPage from "schemas/pages/faq-page";
import homePage from "schemas/pages/home-page";

// List of 'documents/schemas' to ignore from Sanity's Desk list.
const pages = [
  aboutPage.name,
  accessibilityDeclarationPage.name,
  collaboratePage.name,
  faqPage.name,
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
            accessibilityDeclarationPage.title ||
              "Accessibility Declaration Page"
          )
          .child(
            S.document()
              .schemaType(accessibilityDeclarationPage.name)
              .documentId(accessibilityDeclarationPage.name)
          ),

        // faq schema
        S.listItem()
          .title(faqPage.title || "FAQ Page")
          .icon(HelpCircleIcon)
          .child(
            S.document().schemaType(faqPage.name).documentId(faqPage.name)
          ),

        // about schema
        S.listItem()
          .title(aboutPage.title || "About Page")
          .child(
            S.document().schemaType(aboutPage.name).documentId(aboutPage.name)
          ),

        // collaborate schema
        S.listItem()
          .title(
            collaboratePage.title ? collaboratePage.title : "Collaborate Page"
          )
          .child(
            S.document()
              .schemaType(collaboratePage.name)
              .documentId(collaboratePage.name)
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
