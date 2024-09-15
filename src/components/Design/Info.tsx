import React from "react";

const Info = () => {
  return (
    <>
      <h1>Design Work</h1>
      <p>
        My past design has included the
        following areas:
      </p>
      <ul>
        <li>
          Content rich projects
          including magazine and
          newspaper websites.
        </li>
        <li>
          Landing pages and emails as
          part of marketing campaigns.
        </li>
        <li>
          Mid-sized businesses and
          non-profit marketing websites.
        </li>
      </ul>

      <style jsx>{`
        h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }
        p {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
        }
        ul {
          margin: 0;
        }
        li {
          margin-bottom: 1.25rem;
          font-size: 1.25rem;
        }
        li:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
};

export default Info;
