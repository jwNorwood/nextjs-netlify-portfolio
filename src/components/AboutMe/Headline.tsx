import React from "react";

const Headline = () => {
  return (
    <>
      <div className="headline">
        <h1>
          Jacob{" "}
          <span className="fancy">
            Norwood
          </span>
        </h1>
        <h2>UI JavaScript Developer</h2>
        <h3>
          React | React Native | Next.js
          | Node | TypeScript
        </h3>
        <span className="handle">
          Working remote from Kansas
          City
        </span>
      </div>

      <style jsx>{`
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 2rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #218380;
        }
        .handle {
          display: inline-block;
          margin: 0.25rem 0;
          padding-bottom: 0.5rem;
          color: #8f2d56;
          letter-spacing: 0.05em;
          font-size: 1.5rem;

          border-bottom: 2px solid
            #fbb13c;
        }
        .headline {
          margin: 2rem auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
          .headline {
            margin: 3rem auto;
            min-height: 33vh;
          }
        }
      `}</style>
    </>
  );
};

export default Headline;
