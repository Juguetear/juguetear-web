import S from "@sanity/desk-tool/structure-builder";
import { HomeIcon } from "@sanity/icons";
import homePage from "./schemas/home-page";

// List of 'documents/schemas' to ignore from Sanity's Desk list.
const pages = [homePage.name];

export default () => {
  return (
    // Sanity Desk view
    S.list()
      .title("Contenido")

      // Every item in the list, the first one is the 'Home page' document
      .items([
        S.listItem()
          .title(homePage.title)
          .icon(HomeIcon)
          .child(
            S.document().schemaType(homePage.name).documentId(homePage.name)
          ),

        S.divider(),
        // Rest of documents
        ...S.documentTypeListItems().filter(
          (item) => !pages.includes(item.getId()!)
        ),
      ])
  );
};
