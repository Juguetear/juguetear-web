import Link from "next/link";
import { useRouter } from "next/router";
import { Logo } from "../Logo/Logo";

interface Link {
  name: string;
  href: string;
}

export const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.route;
  const links: Link[] = [
    { name: "Juguetes", href: "juguetes" },
    { name: "Colaborar", href: "colaborar" },
    { name: "Sobre el proyecto", href: "about" },
    { name: "Documentacion", href: "documentacion" },
    { name: "Ayuda", href: "ayuda" },
  ];
  const mapLinks = (link: Link) => {
    const isCurrentRoute = currentRoute === link.href;
    const stateClasses = isCurrentRoute
      ? "border-b-orange border-b-[5px] text-orange font-extrabold"
      : "text-blue font-semibold";
    return (
      <li
        className={
          "box-content font-outfit text-[19px] h-24 flex items-center " +
          stateClasses
        }
        data-testid={`li-${link.href}`}
        key={link.name}
      >
        <Link
          className="hover:text-orange hover:font-extrabold duration-300"
          href={link.href}
          data-testid={`link-${link.href}`}
          aria-current={isCurrentRoute ? "page" : undefined}
        >
          {link.name}
        </Link>
      </li>
    );
  };
  return (
    <nav aria-label="Navegacion principal" role="navigation" data-testid="nav">
      <div className="flex max-w-5xl mx-auto items-end justify-between">
        <Logo className="w-28 h-auto" />
        <ul className="flex flex-row border-b-gray border-b-[0.5px] space-x-16">
          {links.map(mapLinks)}
        </ul>
      </div>
    </nav>
  );
};
