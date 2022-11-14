import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Juguetear")
    .items([
      S.listItem()
        .title("Juguetes")
        .child(
          S.list()
            .title("Juguete")
            .items([
              S.listItem()
                .title("Crear juguete.")
                .child(S.document().schemaType("toy").documentId("toy")),
              S.listItem()
                .title("Movimiento")
                .child(S.document().schemaType("movement")),
              S.listItem()
                .title("Sonido")
                .child(S.document().schemaType("sound")),
              S.listItem()
                .title("Cantidad de inputs")
                .child(S.document().schemaType("inputQuantity")),
              S.listItem()
                .title("Luces")
                .child(S.document().schemaType("lights")),
            ])
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["toy", "movement", "sound", "inputQuantity", "lights"].includes(
            listItem.getId()
          )
      ),
    ]);
