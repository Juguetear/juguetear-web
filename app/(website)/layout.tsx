import { Footer } from "components/Footer/Footer";
import { Navbar } from "components/Navbar/Navbar";
import { client } from "lib/sanity-client";
import { layoutQuery } from "lib/sanity-queries";
import type { Layout } from "types/layout";

interface Props {
  children: React.ReactNode;
}

export default async function WebsiteLayout({ children }: Props) {
  const { navbarLinks, footerLinks } = await client.fetch<Layout>(layoutQuery);

  return (
    <>
      <Navbar links={navbarLinks} />
      <main>{children}</main>
      <Footer links={footerLinks} />
    </>
  );
}
