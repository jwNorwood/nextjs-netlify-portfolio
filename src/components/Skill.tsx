import React from "react";

const Skill = ({ name, children }) => {
  return (
    <>
      <div className="skill">
        <div className="skill-icon">
          {children}
        </div>
        <div className="skill-name">{name}</div>
      </div>

      <style jsx>{`
      .skill {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px 25px;
      }
      .skill-icon {
        margin-bottom: 10px;
      }
      .skill-name {
        font-size: 1.2rem;
        font-weight: bold;
      } 
    `}</style>
    </>
  );
};

export default Skill;