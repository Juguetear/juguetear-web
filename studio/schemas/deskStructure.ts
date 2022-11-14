import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Juguetear")
    .items([
      S.listItem()
        .title("Juguetes")
        .child(
          S.list()
            .title("Juguetes creados")
            .items([
              S.documentTypeListItem("toy").title("Crear/listar juguetes"),
              S.documentTypeListItem("movement").title(
                "Movimientos del juguete"
              ),
              S.documentTypeListItem("sound").title("Sonidos del juguete"),
              S.documentTypeListItem("inputQuantity"),
              S.documentTypeListItem("lights"),
            ])
        ),
      S.divider(),
      ...S.documentTypeListItems().filter((listItem) => {
        const listItems = listItem.getId()!;
        return ![
          "toy",
          "movement",
          "sound",
          "inputQuantity",
          "lights",
        ].includes(listItems);
      }),
    ]);
