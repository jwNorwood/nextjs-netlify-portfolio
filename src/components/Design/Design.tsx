import React from "react";
import Info from "./Info";
import Designs from "./PastWork/Designs";
import Skills from "./Skills";

const Design = () => {
  return (
    <>
      <div className="container">
        <section className="section">
          <Info />
          <Skills />
        </section>

        <section className="section">
          <Designs />
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

export default Design;