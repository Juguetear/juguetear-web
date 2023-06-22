import { urlFor } from "lib/sanity-client";
import Image from "next/image";
import type { CallToAction, SanityImage } from "types/common";
import { Link } from "../Link/Link";

export interface TeamMemberProps {
  _id: string;
  image?: SanityImage;
  name: string;
  surname: string;
  pronouns: string;
  role: string;
  contactLinks: CallToAction[];
}

export const TeamMember = ({
  name,
  surname,
  pronouns,
  image,
  role,
  contactLinks,
}: TeamMemberProps) => {
  return (
    <div
      data-testid="team-member"
      className="flex flex-col items-center gap-8 px-4 py-5 md:max-w-md md:flex-row md:px-16"
    >
      {image ? (
        <Image
          width={96}
          height={96}
          src={urlFor(image.asset).url()}
          alt={image.altText}
          className="h-24 w-24 flex-shrink-0 rounded-full bg-gray-medium object-cover"
        />
      ) : (
        <div
          data-testid="image-placeholder"
          className="h-24 w-24 flex-shrink-0 rounded-full bg-gray-medium"
        ></div>
      )}
      <div className="self-center text-center font-inter text-blue md:text-left">
        <h2 className="mb-0.5 ml-2 text-base font-bold">{`${name} ${surname} (${pronouns})`}</h2>
        <p data-testid="member-role" className="mb-1 ml-2 text-sm">
          {role}
        </p>
        <div className="flex gap-2 text-sm font-medium">
          {contactLinks?.map(({ name, url }) => (
            <Link appearance="link" href={url} key={url} target="_blank">
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
