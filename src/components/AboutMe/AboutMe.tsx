import React from "react";
import Work from "./Work";
import Skills from "./Skills";
import Headline from "./Headline";
import Projects from "./Projects";

const AboutMe = () => {
  return (
    <>
      <div className="container">
        <section className="section">
          <Headline />
        </section>
        <section className="section">
          <Skills />
        </section>
        <section className="section">
          <Projects />
        </section>
        <section className="section">
          <Work />
        </section>
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
      margin: 1.5rem 0;
      width: 100%;
    }
    @media (min-width: 768px) {
      .section {
        margin: 3.5rem 0;
      }
    }
  `}</style>
    </>
  );
}

export default AboutMe;