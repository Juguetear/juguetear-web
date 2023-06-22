import { Logo } from "components/Logo/Logo";
import Image from "next/image";

function Home() {
  // TODO: #329 Agregar fetch para 'homePage' y el componente Hero.

  const StyledLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => {
    return (
      <a
        className="font-bold text-blue hover:text-darkblue"
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        {children}
      </a>
    );
  };

  return (
    <div className="flex min-h-screen flex-col justify-evenly bg-blue-light ">
      <main className="mx-auto max-w-prose space-y-5 px-4">
        <Logo className="mx-auto" />
        <h1 className="text-center">¡Sitio web en construcción!</h1>
        <p>
          Si deseas saber más sobre la iniciativa, visita nuestro{" "}
          <StyledLink href="https://github.com/Juguetear/juguetear-web#readme">
            README.
          </StyledLink>{" "}
          Y si deseas contribuir con este proyecto, por favor, ve a la sección
          sobre{" "}
          <StyledLink href="https://github.com/Juguetear/juguetear-web#c%C3%B3mo-contribuir">
            cómo contribuir
          </StyledLink>{" "}
          para poder hacerlo.
        </p>
        <p>
          Si necesitas hacer consultas, podés hacerlas en nuestro canal{" "}
          <StyledLink href="https://discord.com/channels/594363964499165194/1035685740409012244">
            #juguetear
          </StyledLink>{" "}
          en Discord.
        </p>
        <p className="rounded bg-black/10 px-4 py-6">
          ⚠️ Por favor, leer y adherir al{" "}
          <StyledLink href="https://github.com/Juguetear/juguetear-web/blob/development/CODE_OF_CONDUCT.md">
            código de conducta
          </StyledLink>{" "}
          de este proyecto.
        </p>
      </main>

      <footer>
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );

  return (
    <>
      {/* TODO: Agregar la sección "Hero" */}
      {/* <pre className="max-w-prose">
        {JSON.stringify(heroSection, null, 2)}
      </pre> */}
    </>
  );
}

export default Home;
