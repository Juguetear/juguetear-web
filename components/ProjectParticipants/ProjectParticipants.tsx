import React from "react";
import { TeamMember, TeamMemberProps } from "components/TeamMember/TeamMember";

export const ProjectParticipants = (members: TeamMemberProps[]) => {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-xl font-bold md:text-3xl">
          Quienes participan en el proyecto
        </h2>
        <div className="mx-auto flex flex-col flex-wrap items-center justify-center md:flex-row">
          {Object.values(members).map((member) => (
            <TeamMember key={member._id} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};
