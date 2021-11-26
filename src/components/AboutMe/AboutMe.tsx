import React from "react";
import Work from "./Work";
import { Skills } from "./Skills/";
import Headline from "./Headline";


const AboutMe = () => {
  return (
    <>
      <div className="container">
        <div className="section">
          <Headline />
        </div>
        <div className="section">
          <Skills />
        </div>
        <div className="section">
          <Work />
        </div>
      </div>
      <style jsx>{`
    .container {
      display: flex;
      align-items: center;
      flex: 1 1 auto;
      flex-direction: column;
      padding: 0rem 1.5rem;
      max-width: 960px;
      margin: 0 auto;
    }
    .section {
      margin: 3.5rem 0;
    }
  `}</style>
    </>
  );
}

export default AboutMe;