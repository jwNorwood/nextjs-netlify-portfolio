import React from "react";
import Skill from "../../Skill";
import { FaNodeJs, FaGitAlt, FaReact, FaMobileAlt } from "react-icons/fa";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <Skill name="React"><FaReact size="5rem" color="#D81159" /></Skill>
        <Skill name="React Native"><FaMobileAlt  size="5rem" color="#218380" /></Skill>
        <Skill name="Git"><FaGitAlt size="5rem" color="#218380" /></Skill>
        <Skill name="NodeJS"><FaNodeJs size="5rem" color="#D81159"/> </Skill>
      </div>
      <style jsx>{`

      .skills {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
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