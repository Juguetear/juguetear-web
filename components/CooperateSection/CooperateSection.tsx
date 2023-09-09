import { Divider } from "components/Divider/Divider";
import HighlightedWrapper from "components/HighlightedWrapper/HighlightedWrapper";
import { PortableTxt } from "components/PortableTxt/PortableTxt";
import { urlFor } from "lib/sanity-client";
import Image from "next/image";
import { Fragment } from "react";
import { CooperateSection as ICooperateSection } from "types/home-page";

export const CooperateSection: React.FC<ICooperateSection> = ({
  title,
  description,
  blocks,
  callOut,
}) => {
  return (
    /**
     * The spacing is not the same as the design, but I think it's better this way to mantain
     * the same spacing in the whole section, and the design has many different spacings
     * The padding bottom could be managed in the page or the layout,
     * because I am assuming that this section is the last one in the page
     */
    <section className="container flex flex-col items-center gap-6 pb-20 text-gray-dark">
      <h2 className="text-center">{title}</h2>
      <p className="max-w-2xl text-center">{description}</p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-[5fr,1fr,5fr] md:gap-1">
        {blocks.map((block, i) => {
          /**
           * TODO: maybe should come from Sanity a better way to identify this
           * Explanation:
           * After the first "." the font-weight should be bold, so we split the
           * description in two parts and add a <strong> tag to the second part
           * We previously know that the only case where this happens is in the
           * first block, so we check if the index is 0
           */
          const hasDiferentFontWeightInDescription = i === 0;
          const firstPart = hasDiferentFontWeightInDescription
            ? block.description.split(".")[0]
            : block.description;
          const secondPart = hasDiferentFontWeightInDescription
            ? block.description.split(".").slice(1).join(".")
            : "";

          return (
            <Fragment key={block._key}>
              <div className="flex w-full flex-col items-center gap-6">
                <div className="flex w-full flex-col items-center gap-6 md:flex-col-reverse md:items-start">
                  <h3>{block.title}</h3>
                  <Image
                    src={urlFor(block.image.asset).url()}
                    alt={block.image.altText}
                    width={125}
                    height={125}
                    className="md:self-center"
                  />
                </div>
                <p className="text-center text-base md:text-left">
                  {firstPart}.<strong>{secondPart}</strong>
                </p>
              </div>

              {/**
               * We only use the divider in the even blocks, so will work only if we have even number of blocks
               * This match with the interface of blocks who explicitly says that we have 2 blocks
               */}
              <Divider type="vertical" className="odd:hidden even:block" />
            </Fragment>
          );
        })}
      </div>

      {/** TODO: find a way to pass font-outfit to PortableTxt component */}
      {/** TODO: find a way to pass correct font weight to the link with "colaborar" label into PortableTxt component */}
      {/** The pb is overriden because PortableText has a default mb-3 */}
      <HighlightedWrapper className="mt-4 pb-5 text-left text-base font-extrabold md:mt-8">
        <PortableTxt content={callOut} />
      </HighlightedWrapper>
    </section>
  );
};
