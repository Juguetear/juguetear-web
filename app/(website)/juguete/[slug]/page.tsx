import { LoanRequestForm } from "components/LoanRequestForm/LoanRequestForm";
import { client } from "lib/sanity-client";
import { toySlugQuery } from "lib/sanity-queries";
import { Toy } from "types/common";

interface Props {
  params: {
    slug: string;
  };
}

async function Page({ params: { slug } }: Props) {
  const toy = await client.fetch<Toy>(toySlugQuery, { slug });

  return (
    <section className="py-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-4xl">
          {toy.name}
        </h2>
        {/* TODO: #358 Crear (maquetar) sección del juguete */}

        <div>
          <LoanRequestForm />
        </div>
      </div>
    </section>
  );
}

export default Page;
