interface Props {
  children: React.ReactNode;
}

export default async function WebsiteLayout({ children }: Props) {
  return (
    <>
      {/* TODO: Agregar componente Navbar */}
      <main>{children}</main>
      {/* TODO: Agregar componente Footer */}
    </>
  );
}
