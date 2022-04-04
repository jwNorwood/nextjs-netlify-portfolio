import React from "react";
import Skill from "../../Skill";
import { FaWordpress, FaMailBulk } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <Skill name="Wordpress"><FaWordpress  size="5rem" color="#218380" /></Skill>
        <Skill name="Email Templates"><FaMailBulk size="5rem" color="#D81159" /></Skill>
        <Skill name="Landing Pages"><CgWebsite size="5rem" color="#FBB13C" /></Skill>
      </div>
      <style jsx>{`

      .skills {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: 1.5rem 0;
      }
      .icon {
        height: 50px;
      }

      @media (min-width: 768px) {
        .skills {
          flex-direction: row;
        }
      }
    `}</style>
    </>
  );
};

export default Skills;