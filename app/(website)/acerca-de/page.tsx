import { ProjectParticipants } from "components/ProjectParticipants/ProjectParticipants";
import { TeamMemberProps } from "components/TeamMember/TeamMember";
import { client } from "lib/sanity-client";

async function Page() {
  const members: TeamMemberProps[] = await client.fetch(`*[_type == 'member']`);

  return (
    <>
      <ProjectParticipants {...members} />
    </>
  );
}

export default Page;
