import { Link } from "components/Link/Link";
import { Logo } from "components/Logo/Logo";
import { State } from "components/State/State";
import Image from "next/image";
import { Toy } from "types/common";
import { urlFor } from "../../lib/sanity-client";

export interface CardProps extends Toy {
  image?: { src: string; alt: string };
  title: string;
  available: boolean;
  link: string;
}

export const Card = ({ image, title, available, link }: CardProps) => {
  return (
    <div className="m-4 max-w-xs space-y-4 rounded border p-6">
      {/* TODO: EL color y weight (en global.css) no es igual al de los diseños. */}
      <h3 className="border-b border-gray-light pb-2 font-bold text-blue">
        {title}
      </h3>

      {image?.src ? (
        <div className="relative aspect-video rounded border">
          <Image
            fill
            sizes="33vw"
            src={urlFor(image?.src).width(528).url()}
            alt={image?.alt}
          />
        </div>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center rounded bg-white-blue">
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

      <Link href={link} appearance="button" disabled={available ? false : true}>
        Pedir juguete
      </Link>
    </div>
  );
};
