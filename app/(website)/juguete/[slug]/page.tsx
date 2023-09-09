import Carousel from "components/Carousel/Carousel";
import Image from "next/image";
import { LoanRequestForm } from "components/LoanRequestForm/LoanRequestForm";
import { client, urlFor } from "lib/sanity-client";
import { toySlugQuery } from "lib/sanity-queries";
import { Toy } from "types/common";
import { PortableTxt } from "components/PortableTxt/PortableTxt";

import { Logo } from "components/Logo/Logo";

interface Props {
  params: {
    slug: string;
  };
}

async function Page({ params: { slug } }: Props) {
  const toy = await client.fetch<Toy>(toySlugQuery, { slug });
  const images = toy.images;
  const description = toy.description;
  return (
    <section className="py-10">
      <div className="container max-w-3xl text-center">
        <h4 className="mb-4">Juguetes</h4>
        <h1 className="mb-8 text-2xl font-bold md:text-4xl">{toy.name}</h1>
      </div>

      <div className="container">
        <Carousel isFullWidth>
          {images?.map((image) =>
            image ? (
              <Image
                fill
                placeholder={"blur"}
                blurDataURL={image.placeholder}
                key={image.asset._ref}
                src={urlFor(image).url()}
                alt={image.altText || "Placeholder for image"}
                className="rounded object-contain"
              />
            ) : (
              <div
                key={toy._id}
                className="relative flex h-full flex-col items-center justify-center bg-white-blue"
              >
                <Logo hideBrandname={true} className="h-24 opacity-40" />
                <p className="absolute bottom-6 text-center font-bold opacity-40">
                  Imagen no disponible
                </p>
              </div>
            )
          )}
        </Carousel>
      </div>

      <div className="container max-w-3xl md:mt-12">
        <h2 className="my-8 text-2xl font-bold md:text-4xl">Descripción</h2>
        <PortableTxt content={description} />
        <LoanRequestForm />
      </div>
    </section>
  );
}

export default Page;
