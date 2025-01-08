import React from "react";
import TeamTitle from "../TeamTitle";
import TeamMemberCard from "../TeamMemberCard";

// Array of team members
const teamMembers = [
  {
    id: 1,
    name: "Lila Mony",
    position: "Frontend Developer",
    image: "/team/team-member2.png",
    description: "Experienced in creating modern, responsive UIs.",
    linkedin: "https://www.linkedin.com/in/lila-montgomery",
  },

  {
    id: 3,
    name: "Emily Davis",
    position: "UX/UI Designer",
    image: "/team/team-member3.png",
    description: "Crafting intuitive and beautiful user interfaces.",
    linkedin: "https://www.linkedin.com/in/emily-davis",
  },
  {
    id: 2,
    name: "James Smith",
    position: "Backend Developer",
    image: "/team/team-member1.png",
    description: "Specialized in scalable server-side applications.",
    linkedin: "https://www.linkedin.com/in/james-smith",
  },
  {
    id: 4,
    name: "Michael Brown",
    position: "Project Manager",
    image: "/team/team-member2.png",
    description: "Leading teams to successful product deliveries.",
    linkedin: "https://www.linkedin.com/in/michael-brown",
  },
];

function Team({ data }) {
  return (
    <div className="flex flex-col items-center">
      <TeamTitle />
      <div className="flex flex-wrap gap-8 justify-center">
        {data.map((member) => (
          <TeamMemberCard key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
}

export default Team;
