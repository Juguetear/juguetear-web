// TODO: #330 Refactor componente "Card"
import { Button } from "components/Button/Button";
import { Logo } from "components/Logo/Logo";
import { State } from "components/State/State";
import Image from "next/image";

export interface CardProps {
  image?: { src: string; alt: string };
  title: string;
  available: boolean;
  description: string;
  link: string;
}
// TODO: Extender o usar el type 'Toy'.
export const Card = ({
  image,
  title,
  available,
  description,
  link,
}: CardProps) => {
  return (
    <div className="m-4 max-w-xs space-y-4 rounded border p-6">
      {/* TODO: EL color y weight (en global.css) no es igual al de los diseños. */}
      <h3 className="border-b border-gray-light pb-2 font-bold text-darkblue">
        {title}
      </h3>
      {/* TODO: Usar una de las funciones helper 'imgUrlFrom' o 'forUrl' para la imagen. */}
      {image?.src ? (
        <div className="relative aspect-video rounded border">
          <Image fill sizes="33vw" src={image?.src} alt={image?.alt} />
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
      {/* TODO: Remover el comp. Button y agregar el comp. Link y estilos para el estado `disabled` */}
      <Button appearance="button" disabled={available ? false : true}>
        <a href={link}>Pedir juguete</a>
      </Button>
    </div>
  );
};
