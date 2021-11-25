import React from "react";

const Skill = ({ name, icon }) => {
  return (
    <div className="skill">
      <div className="skill-icon">
        <img src={`/static/icons/${icon}.svg`} alt={name} />
      </div>
      <div className="skill-name">{name}</div>
    </div>
  );
};

export default Skill;