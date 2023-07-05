import { ProjectParticipants } from "components/ProjectParticipants/ProjectParticipants";
import { PortableTxt } from "components/PortableTxt/PortableTxt";
import { client } from "lib/sanity-client";
import { aboutPageQuery } from "lib/sanity-queries";
import type { AboutPage } from "types/about-page";

async function Page() {
  const { content, team } = await client.fetch<AboutPage>(aboutPageQuery);

  return (
    <>
      <section className="flex flex-col items-center">
        <div className="m-8 max-w-3xl">
          <PortableTxt content={content} />
        </div>
      </section>
      <ProjectParticipants {...team} />
    </>
  );
}

export default Page;
