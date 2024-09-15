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
          margin: 0 auto;
        }
        .section {
          width: 100%;
          margin-bottom: 1.5rem;
        }
      `}</style>
    </>
  );
};

export default Design;
