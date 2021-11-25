import React from "react";

const Headline = () => {
  return (
    <>
      <div className="headline">
        <h1>
          Jacob <span className="fancy">Norwood</span>
        </h1>
        <span className="handle">Kansas City, Mo</span>
        <h2>React Web &amp<br></br>
          Mobile Application<br></br> Developer
        </h2>
      </div>

      <style jsx>{`
    h1 {
      font-size: 2.5rem;
      margin: 0;
      font-weight: 500;
    }
    h2 {
      font-size: 1.75rem;
      font-weight: 400;
      line-height: 1.25;
    }
    .fancy {
      color: #15847d;
    }
    .handle {
      display: inline-block;
      margin-top: 0.275em;
      color: #9b9b9b;
      letter-spacing: 0.05em;
    }

    @media (min-width: 769px) {
      h1 {
        font-size: 3rem;
      }
      h2 {
        font-size: 2.25rem;
      }
    }
  `}</style>
    </>
  );
}

export default Headline;