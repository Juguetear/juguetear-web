interface Props {
  params: {
    slug: string;
  };
}

async function Page({ params: { slug } }: Props) {
  // TODO: #334 Crear GROQ query para un 'toy' por slug.

  return (
    <>
      {/* TODO: #333 Crear (maquetar) sección/formulario "Formulario para solicitar el préstamo" */}
    </>
  );
}

export default Page;
