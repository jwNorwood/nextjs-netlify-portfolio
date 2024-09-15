import React from "react";

const SideProjects = () => {
  return (
    <>
      <div className="container">
        <div className="section">
          Side Projects go here
        </div>
        <div className="section">
          Worldle clone
        </div>
        <div className="section">
          Poker Site
        </div>
        <div className="section">
          Multi select expo media
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
};

export default SideProjects;
