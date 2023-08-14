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
          <div className="absolute left-1/2 flex w-4/5 max-w-3xl -translate-x-1/2 flex-col items-center justify-center gap-2 md:flex-row md:gap-5">
            <div className="relative aspect-video w-72 max-w-full md:w-5/12 lg:w-1/2">
              <Image
                src={urlFor(firstPhoto).url()}
                alt={firstPhoto.altText}
                key={firstPhoto.asset._ref}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL={firstPhoto.placeholder}
                className="aspect-video rounded"
                priority
              />
            </div>
            <div className="relative hidden aspect-video w-72 max-w-full md:block md:w-5/12 lg:w-1/2">
              <Image
                src={urlFor(secondPhoto).url()}
                alt={secondPhoto.altText}
                key={secondPhoto.asset._ref}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL={secondPhoto.placeholder}
                className=" aspect-video rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
