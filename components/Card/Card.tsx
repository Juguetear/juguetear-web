import { Link } from "components/Link/Link";
import { Logo } from "components/Logo/Logo";
import { State } from "components/State/State";
import { imgUrlFrom } from "lib/sanity-client";
import Image from "next/image";
import type { MaybeImage } from "types/common";

export interface CardProps {
  image: MaybeImage;
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
  const remoteImage = imgUrlFrom(image, { width: 400, height: 225 });

  // TODO: #374 Ajustar los estilos en los textos de las Cards
  return (
    <div className="w-full flex-grow space-y-4 justify-self-stretch rounded border p-6 lg:max-w-xs">
      <h3 className="border-b border-gray-light pb-2 font-bold text-blue">
        {title}
      </h3>

      <div className="relative aspect-video rounded border">
        {remoteImage ? (
          <Image
            width={400}
            height={225}
            src={remoteImage}
            alt={image?.altText || "Imagen del juguete"}
          />
        ) : (
          <div className="relative flex h-full flex-col items-center justify-center bg-white-blue">
            <Logo hideBrandname={true} className="h-24 opacity-40" />
            <p className="absolute bottom-6 text-center font-bold opacity-40">
              Imagen no disponible
            </p>
          </div>
        )}
      </div>
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
