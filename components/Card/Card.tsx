import Image from "next/image";
import { Link } from "components/Link/Link";
import { Logo } from "components/Logo/Logo";
import { State } from "components/State/State";
import { urlFor } from "lib/sanity-client";
import type { SanityImage } from "types/common";

export interface CardProps {
  image: SanityImage;
  title: string;
  available: boolean;
  link: string;
  description: string;
}

export const Card = ({
  image,
  title,
  available,
  link,
  description,
}: CardProps) => {
  return (
    <div className="w-full flex-grow space-y-4 justify-self-stretch rounded border p-6 lg:max-w-xs">
      <h3 className="border-b border-gray-light pb-2 font-bold text-blue">
        {title}
      </h3>

      {image !== undefined ? (
        <div className="relative aspect-video rounded border">
          <Image
            fill
            sizes="33vw"
            src={urlFor(image).width(528).url()}
            alt={image?.altText}
          />
        </div>
      ) : (
        <div className="flex w-full flex-col items-center justify-center rounded bg-white-blue">
          <Logo
            style={{ transform: "translateY(10px)" }}
            hideBrandname={true}
            className="w-[8.5rem] opacity-40"
          />
          <p
            style={{ transform: "translateY(-70px)" }}
            className="text-center font-bold opacity-40"
          >
            Imagen no disponible
          </p>
        </div>
      )}
      <State available={available} />

      <p className="pt-1 text-sm">{description}</p>

      <Link
        href={available ? link : "#"}
        appearance={available ? "button" : "disabled"}
      >
        Pedir juguete
      </Link>
    </div>
  );
};
