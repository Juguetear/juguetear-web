import { PortableText } from "@portabletext/react";
import { urlFor } from "lib/client";
import Image from "next/image";

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

const customComponents = {
  block: {
    // eslint-disable-next-line
    normal: (props: any) => <p>{props.children}</p>,
    // eslint-disable-next-line
    h2: (props: any) => <h2 className="text-center">{props.children}</h2>,
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

// FIX: Remove eslint-disable
// eslint-disable-next-line
export const PortableTxt = ({ content }: any) => (
  <PortableText value={content} components={customComponents} />
);
