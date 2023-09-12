import {
  PortableText,
  type PortableTextReactComponents,
} from "@portabletext/react";
import { Link } from "components/Link/Link";
import { urlFor } from "lib/sanity-client";
import Image from "next/image";
import { type TypedObject } from "sanity";
import type { SanityImage } from "types/common";

const customComponents: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h1: ({ children }) => <h1 className="mb-10 text-center">{children}</h1>,
    h2: ({ children }) => <h2 className="mb-10">{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    h5: ({ children }) => <h5>{children}</h5>,
    h6: ({ children }) => <h6>{children}</h6>,
  },
  types: {
    images: ({ value }) => {
      const lengthArr = value.images.length;

      if (lengthArr === 1) {
        const { altText, asset, placeholder } = value.images[0];
        return (
          <Image
            src={urlFor(asset).auto("format").url()}
            alt={altText}
            width={860}
            height={485}
            className="my-10 rounded"
            placeholder="blur"
            blurDataURL={placeholder}
          />
        );
      }

      return (
        <div
          className={
            "mb-4 flex flex-col items-center gap-4 lg:flex-row lg:gap-5"
          }
        >
          {value.images.map((img: SanityImage) => (
            <div key={img.asset._ref} className="rounded">
              <Image
                src={urlFor(img.asset).auto("format").url()}
                width={420}
                height={240}
                alt={img.altText}
                placeholder="blur"
                blurDataURL={img.placeholder}
              />
            </div>
          ))}
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      return (
        <Link appearance="link" className="p-0 underline" href={value.href}>
          {children}
        </Link>
      );
    },
    code: ({ children }) => (
      <code className="rounded bg-darkblue/10 px-1">{children}</code>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-4 ml-4 list-disc marker:text-blue">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-4 ml-5 list-decimal marker:text-blue">{children}</ol>
    ),
  },
};

interface Props {
  content: TypedObject | TypedObject[];
  wrapperClassName?: string;
}

export const PortableTxt = ({ content, wrapperClassName }: Props) => (
  <div className={`space-y-4 text-gray-dark ${wrapperClassName}`}>
    <PortableText value={content} components={customComponents} />
  </div>
);
