import { client } from "lib/client";
import { groq } from "next-sanity";
import type { LayoutSchema } from "types/layout-schema-types";

interface Props {
  children: React.ReactNode;
}

export default async function WebsiteLayout({ children }: Props) {
  const { navbarLinks, footerLinks } = await client.fetch<LayoutSchema>(
    groq`*[_type == 'layout'][0]`
  );

  return (
    <>
      {/* TODO: Agregar componente Navbar */}
      {/* <pre>{JSON.stringify(navbarLinks, null, 2)}</pre> */}
      <main>{children}</main>
      {/* TODO: Agregar componente Footer */}
      {/* <pre>{JSON.stringify(footerLinks, null, 2)}</pre> */}
    </>
  );
}
