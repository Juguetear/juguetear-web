import {
  PortableText,
  type PortableTextReactComponents,
} from "@portabletext/react";
import { urlFor } from "lib/client";
import Image from "next/image";
import Link from "next/link";
import { type TypedObject } from "sanity";

const customComponents: Partial<PortableTextReactComponents> = {
  block: {
    normal: (props) => <p>{props.children}</p>,
    h1: (props) => <h1 className="text-center">{props.children}</h1>,
  },
  types: {
    // ISSUE: Add loader for image
    blocksimage: ({ value }) => (
      <Image
        // TODO: `isInline` should be included?
        src={urlFor(value.asset._ref).fit("max").auto("format").url()}
        // FIX: Check width and height.
        width={860}
        height={485}
        alt={value.altText}
        className="rounded"
      />
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const style = "font-medium text-blue underline hover:text-orange";
      return (
        <Link className={style} href={value.href}>
          {children}
        </Link>
      );
    },
    em: ({ children }) => (
      <em className="font-semibold text-blue">{children}</em>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-4 list-disc marker:text-blue">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="ml-5 list-decimal marker:text-blue">{children}</ol>
    ),
  },
};

interface Props {
  content: TypedObject | TypedObject[];
}

export const PortableTxt = ({ content }: Props) => (
  <PortableText value={content} components={customComponents} />
);
