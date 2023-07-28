import { Card } from "components/Card/Card";
import { client } from "lib/sanity-client";
import { toysQuery } from "lib/sanity-queries";
import { Toy } from "types/common";

async function Page() {
  const toys = await client.fetch<Toy[]>(toysQuery);

  return (
    <section className="py-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-4xl">
          Nuestros juguetes
        </h2>
        <div className="mx-auto grid grid-cols-1 gap-5 gap-y-10 px-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-20">
          {toys.map((toy) => (
            <Card
              key={toy._id}
              title={toy.name}
              available={toy.isAvailable}
              description={toy.shortDescription}
              link={`juguete/${toy.slug.current}`}
              image={toy.images[0]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Page;
