import {
  PortableText,
  type PortableTextReactComponents,
} from "@portabletext/react";
import { urlFor } from "lib/client";
import Image from "next/image";
import { type TypedObject } from "sanity";

interface BlockImg {
  value: {
    asset: {
      _ref: string;
    };
    altText: string;
  };
}

// interface BlockComp {
//   children: Array<string>;
// }

const customComponents: Partial<PortableTextReactComponents> = {
  block: {
    normal: (props) => <p>{props.children}</p>,
    h2: (props) => <h2 className="text-center">{props.children}</h2>,
  },
  types: {
    // ISSUE: Add loader for image
    blocksimage: ({ value }: BlockImg) => (
      <Image
        // TODO: `isInline` should be included?
        src={urlFor(value.asset._ref).fit("max").auto("format").url()}
        // FIX: Check width and height.
        width={750}
        height={478}
        alt={value.altText}
      />
    ),
  },
};

interface Props {
  content: TypedObject | TypedObject[];
}

export const PortableTxt = ({ content }: Props) => (
  <PortableText value={content} components={customComponents} />
);
