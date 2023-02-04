import { Logo } from "components/Logo/Logo";
import Image from "next/image";

function Home() {
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
    <div className="flex flex-col min-h-screen justify-evenly bg-blue-light ">
      <main className="px-4 mx-auto space-y-5 max-w-prose">
        <Logo className="mx-auto" />
        <h1 className="text-center">¡Sitio web en construcción!</h1>
        <p>
          Si deseas saber mas sobre la iniciativa, visita nuestro{" "}
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
          Si en necesitas hacer consultas, podés hacerlas en nuestro canal{" "}
          <StyledLink href="https://discord.com/channels/594363964499165194/1035685740409012244">
            #juguetear
          </StyledLink>{" "}
          en Discord.
        </p>
        <p className="px-4 py-6 rounded bg-black/10">
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
}

export default Home;
