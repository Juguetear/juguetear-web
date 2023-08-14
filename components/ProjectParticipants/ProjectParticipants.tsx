import { TeamMember } from "components/TeamMember/TeamMember";
import type { TeamMember as TeamMemberProps } from "types/about-page";

export const ProjectParticipants = (members: TeamMemberProps[]) => {
  return (
    <section className="my-10">
      <div className="container max-w-3xl">
        <h2 className="mb-8 text-center text-xl font-bold md:text-3xl">
          Quienes participan en el proyecto
        </h2>
        <div className="mx-auto flex flex-col flex-wrap items-center justify-between gap-8 md:flex-row">
          {Object.values(members).map((member) => (
            <TeamMember key={member._id} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};
