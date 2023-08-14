import { urlFor } from "lib/sanity-client";
import Image from "next/image";
import type { TeamMember as TeamMemberProps } from "types/about-page";
import { Link } from "../Link/Link";

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
      className="flex flex-col items-center gap-6 md:max-w-md md:flex-row"
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
        <h2 className="text-base font-bold">{`${name} ${surname} (${pronouns})`}</h2>
        <p data-testid="member-role" className="text-sm">
          {role}
        </p>
        <div className="flex justify-around gap-3 text-sm font-medium md:justify-start">
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
