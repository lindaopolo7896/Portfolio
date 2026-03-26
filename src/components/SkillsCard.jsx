import React from "react";

function SkillsCard({ skills }) {
  return (
    <img
      src={skills.skill}
      alt=""
      key={skills.id}
      className="h-[50px] md:h-[80px] lg:h-[100px]  "
    />
  );
}

export default SkillsCard;
