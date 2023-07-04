import { Card } from "components/Card/Card";
import { client } from "lib/sanity-client";
import { toyQuery } from "lib/sanity-queries";
import { Toy } from "types/common";

async function Page() {
  const toys = await client.fetch<Toy[]>(toyQuery);

  // TODO: Maquetar correctamente la página juguetes
  return (
    <section className="py-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-xl font-bold md:text-3xl">
          Nuestros juguetes
        </h2>
        <div className="mx-auto flex flex-col flex-wrap items-center justify-center md:flex-row">
          {toys.map((toy) => (
            <Card
              key={toy._id}
              title={toy.name}
              available={toy.isAvailable}
              description=""
              link=""
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Page;
