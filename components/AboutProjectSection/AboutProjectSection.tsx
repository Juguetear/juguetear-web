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
    <section className="relative h-[60vh]">
      <div className="mx-5 my-10 max-h-96 max-w-7xl rounded-3xl bg-turquoise/10 px-5 py-10 lg:mx-auto">
        <div className="relative mx-auto max-w-3xl">
          <h2 className="mb-6 lg:mb-8">{title}</h2>
          <p data-testid="test-description" className="mb-8 font-medium">
            <strong>{firstSentence}</strong>
            <br /> {restOfSentence}
          </p>
          <div className="relative -bottom-1 mx-auto flex flex-col items-center gap-5 md:-bottom-6 md:flex-row">
            <Image
              src={urlFor(firstPhoto).url()}
              alt={firstPhoto.altText}
              key={firstPhoto.asset._ref}
              width={372}
              height={210}
              placeholder="blur"
              blurDataURL={firstPhoto.placeholder}
              className="mx-auto aspect-video rounded"
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
