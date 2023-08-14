import { Link } from "components/Link/Link";
import { imgUrlFrom } from "lib/sanity-client";
import Image from "next/image";
import React from "react";
import type { CallToAction, SanityImage } from "types/common";

export interface HeroSection extends React.HTMLProps<HTMLElement> {
  cta: CallToAction;
  description: string;
  photo: SanityImage | null;
  title: string;
}

export const Hero = ({ title, description, photo, cta }: HeroSection) => {
  return (
    <section className="py-10">
      <div className="flex max-w-screen-xl flex-col lg:mx-auto lg:flex-row lg:items-center">
        <div className="mb-20 lg:mb-0 lg:w-5/12">
          <h1 className="mb-1 max-w-4xl text-blue md:mb-5">{title}</h1>
          <p className="mb-8 font-inter text-base font-medium text-blue md:mb-9 md:text-xl">
            {description}
          </p>
          <Link href={cta.url} appearance="button">
            {cta.name}
          </Link>
        </div>
        <span className="overflow-hidden">
          <Image
            src={imgUrlFrom(photo, { width: 750, height: 478 })!}
            className="lg:translate-x-20 lg:rounded-l-[56px]"
            width={750}
            height={478}
            placeholder="blur"
            blurDataURL={photo?.placeholder || "htts://placehold/10x10/webp"}
            alt={photo?.altText || "Hero image"}
          />
        </span>
      </div>
    </section>
  );
};
