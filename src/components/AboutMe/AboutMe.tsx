import React from "react";
import SocialList from "../SocialList";
import Work from "./Work";
import { Skills } from "./Skills/";
import Headline from "./Headline";


const AboutMe = () => {
  return (
    <>
      <div className="container">
        <Headline />
        <SocialList />
        <Skills />
        <Work />
      </div>
      <style jsx>{`
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1 1 auto;
      flex-direction: column;
      padding: 0 1.5rem;
    }
  `}</style>
    </>
  );
}

export default AboutMe;