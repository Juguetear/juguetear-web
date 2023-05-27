import { TeamMemberProps } from "components/TeamMember/TeamMember";
import { client } from "lib/client";

async function Page() {
  const members: TeamMemberProps[] = await client.fetch(`*[_type == 'member']`);

  return (
    <>
      {/* TODO: #319 Agregar seccion "Quienes participan en el proyecto" */}
      <pre>{JSON.stringify(members, null, 2)}</pre>
    </>
  );
}

export default Page;
