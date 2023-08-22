import { Hero } from "components/Hero/Hero";
import { Logo } from "components/Logo/Logo";
import { PortableTxt } from "components/PortableTxt/PortableTxt";
import Notification from "components/Notification/Notification";
import { client } from "lib/sanity-client";
import { homePageQuery } from "lib/sanity-queries";
import Image from "next/image";
import { HomePage } from "types/home-page";
import { urlFor } from "lib/sanity-client";

async function Home() {
  const {
    heroSection,
    twoImagesSection,
    featuredToysSection,
    cooperateSection,
  } = await client.fetch<HomePage>(homePageQuery);

  const { title, description, blocks, callOut } = cooperateSection;
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
      <Hero {...heroSection} />

      {/* TODO: #353 Agregar (maquetar) sección "Sobre el proyecto" */}
      {/* {JSON.stringify(twoImagesSection)} */}

      {/* TODO: #354 Agregar (maquetar) sección "Cómo puedo colaborar" */}
      {/* {JSON.stringify(cooperateSection)} */}
      <section className="mx-auto max-w-6xl p-4">
        <div className="flex flex-col items-center">
          <h2>{title}</h2>
          <p className="py-7 text-center text-sm">{description}</p>
          <div className="flex h-[400px]">
            {blocks.map((block, index) => (
              <div
                className={`flex w-[400px] flex-col justify-evenly border-gray-medium ${
                  index === 0 ? "sm:border-r" : "sm:border-l"
                }`}
                key={block._key}
              >
                <Image
                  src={urlFor(block.image).url()}
                  className="self-center"
                  width={100}
                  height={100}
                  alt={block.image.altText}
                />
                <div>
                  <h3 className="pb-3 text-lg">{block.title}</h3>
                  <p className="text-sm">{block.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Notification>
            <PortableTxt content={callOut} />
          </Notification>
        </div>
      </section>
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
