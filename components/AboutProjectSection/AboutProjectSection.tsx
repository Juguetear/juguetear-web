import React from "react";
import { TwoImagesSection } from "types/home-page";
import { urlFor } from "lib/sanity-client";
import Image from "next/image";

export const AboutProjectSection = ({
  description,
  photos,
  title,
}: TwoImagesSection) => {
  const firstSentence = `${description.split(".")[0]}.`;
  const restOfSentence = description.split(".").slice(1).join(".");
  const [firstPhoto, secondPhoto] = photos;
  return (
    <section className="relative overflow-hidden">
      <div className="mx-3.5 mb-40 mt-10 max-w-5xl rounded-3xl bg-turquoise/10 px-5 pb-20 pt-10 lg:mx-auto">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 lg:mb-6">{title}</h2>
          <p data-testid="test-description" className="mb-8 font-medium">
            <strong>{firstSentence}</strong>
            <br /> {restOfSentence}
          </p>
          <div className="absolute left-0 mx-auto flex w-full max-w-3xl flex-col items-center gap-6 md:flex-row">
            <Image
              src={urlFor(firstPhoto).url()}
              alt={firstPhoto.altText}
              key={firstPhoto.asset._ref}
              width={372}
              height={210}
              placeholder="blur"
              blurDataURL={firstPhoto.placeholder}
              className="mx-auto aspect-video self-center rounded"
              priority
            />
            <Image
              src={urlFor(secondPhoto).url()}
              alt={secondPhoto.altText}
              key={secondPhoto.asset._ref}
              width={372}
              height={210}
              placeholder="blur"
              blurDataURL={secondPhoto.placeholder}
              className="hidden aspect-video rounded lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
