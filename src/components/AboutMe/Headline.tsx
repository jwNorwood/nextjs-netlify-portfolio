import React from "react";

const Headline = () => {
  return (
    <>
      <div className="headline">
        <h1>
          Jacob <span className="fancy">Norwood</span>
        </h1>
        <span className="handle">Kansas City, Mo</span>
        <h2>React Web &amp;<br></br>
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
      color: #218380;
    }
    .handle {
      display: inline-block;
      margin: 0.25rem 0;
      padding-bottom: 0.5rem;
      color: #8F2D56;
      letter-spacing: 0.05em;
      
      border-bottom: 2px solid #FBB13C;
    }
    .headline {
      margin: 25px auto;
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