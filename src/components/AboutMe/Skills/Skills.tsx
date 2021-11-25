import React from "react";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="skills">
      <Skill name="React" icon="react" />
      <Skill name="React Native" icon="react-native" />
      <Skill name="Redux" icon="Redux" />
      <Skill name="Git" icon="git" />
      <Skill name="Node" icon="node" />
      <Skill name="GraphQL" icon="graphql" />
    </div>
  );
};

export default Skills;