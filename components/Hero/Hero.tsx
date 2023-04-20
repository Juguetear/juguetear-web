import React from "react";
import Image from "next/image";
import { Link } from "components/Link/Link";
import { CTA, Photo } from "types/layout-schema-types";
import { urlFor } from "lib/client";

export interface HeroSection extends React.HTMLProps<HTMLElement> {
  cta: CTA;
  description: string;
  photo: Photo;
  title: string;
}

export const Hero = ({ title, description, photo, cta }: HeroSection) => {
  return (
    <section className="py-10">
      <div className="flex max-w-screen-xl flex-col lg:mx-auto lg:flex-row lg:items-center">
        <article className="mb-14 lg:mb-0 lg:w-5/12">
          <h1 className="mb-1 max-w-4xl text-blue md:mb-5">{title}</h1>
          <p className="mb-8 font-inter text-base font-medium text-blue md:mb-9 md:text-xl">
            {description}
          </p>
          <Link href={cta.url} appearance="button">
            {cta.name}
          </Link>
        </article>
        <figure className="overflow-hidden">
          <Image
            src={urlFor(photo).url()}
            className="lg:translate-x-20 lg:rounded-l-[56px]"
            width={750}
            height={478}
            alt={photo.altText}
          />
        </figure>
      </div>
    </section>
  );
};
