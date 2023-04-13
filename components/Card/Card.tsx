import { Button } from "components/Button/Button";
import { State } from "components/State/State";
import Image from "next/image";

interface CardProps {
  image?: { src: string; alt: string };
  title: string;
  available: boolean;
  description: string;
  link: string;
}
export const Card = ({
  image,
  title,
  available,
  description,
  link,
}: CardProps) => {
  return (
    <div className=" rounded m-4 max-w-xs space-y-4 border p-6">
      <h3 className="border-b border-gray-light pb-2 font-bold text-darkblue">
        {title}
      </h3>
      {image?.src ? (
        <div className="rounded relative border">
          <Image fill sizes="33vw" src={image?.src} alt={image?.alt} />
        </div>
      ) : (
        <svg
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className="h-full w-full"
            rx="4"
            fill="black"
            fillOpacity="0.2"
          />
        </svg>
      )}
      <State available={available} />
      <p className="font-medium text-darkblue">{description}</p>
      <Button appearance="button" disabled={available ? false : true}>
        <a href={link}>Pedir juguete</a>
      </Button>
    </div>
  );
};
