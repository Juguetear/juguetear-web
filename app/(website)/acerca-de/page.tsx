import { ProjectParticipants } from "components/ProjectParticipants/ProjectParticipants";
import { PortableTxt } from "components/PortableTxt/PortableTxt";
import { client } from "lib/sanity-client";
import { aboutPageQuery } from "lib/sanity-queries";
import type { AboutPage } from "types/about-page";

async function Page() {
  const { content, team } = await client.fetch<AboutPage>(aboutPageQuery);

  return (
    <>
      <section>
        <div className="mx-auto max-w-3xl p-4">
          <PortableTxt content={content} />
        </div>
      </section>
      <ProjectParticipants {...team} />
    </>
  );
}

export default Page;
