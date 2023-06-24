import { ProjectParticipants } from "components/ProjectParticipants/ProjectParticipants";
import { client } from "lib/sanity-client";
import { aboutPageQuery } from "lib/sanity-queries";
import type { AboutPage } from "types/about-page";

async function Page() {
  const { content, team } = await client.fetch<AboutPage>(aboutPageQuery);

  return (
    <>
      {/* TODO: #336 Agregar sección "Sobre el proyecto" y agregar componente `PortableTxt` */}

      <ProjectParticipants {...team} />
    </>
  );
}

export default Page;
