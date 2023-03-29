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
    <div className=" m-4 max-w-xs space-y-4 rounded border p-6">
      <h3 className="border-b border-gray-light pb-2 font-bold text-darkblue">
        {title}
      </h3>
      {image?.src ? (
        <Image width="270" height="168" src={image?.src} alt={image?.alt} />
      ) : (
        <svg
          height="168"
          className="mx-0 w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="100%"
            height="168"
            rx="4"
            fill="black"
            fill-opacity="0.2"
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
