import React from 'react';
import Company from './Company';

const Work = () => {

  return (
    <>
      <h2>Work History</h2>
      <div className="work">
        <Company name="Boom Solutions" industry="Construction" years={1} skills={["React", "React Native", "SQLite", "Jest"]}>
          <p>Worked on a project managment web application for the construction industry. </p>
          <p>Additonally worked on a native mobile app to aid in time tracking and on site project management. </p>
        </Company>
        <Company name="Volly" industry="Finance / Housing" years={2} skills={["React", "Angular", "NodeJS", "Express", "PostgreSQL", "Mocha"]}>
          <p>Built landing pages and emails as part of marketing campaigns.</p>
          <p>Worked on adding functionallity to an existing email marketing platform using Angular and Node.js and worked on a client portal using React.</p>
        </Company>
        <Company name="Columbia Daily Tribune" industry="News" years={2} skills={["Angular", "jQuery"]}>
          <p>Worked on developing custom features for a CMS on the core news website.</p>
          <p>Worked on custom marketing sites and pages for events and advertising partners.</p>
        </Company>
      </div>
      <style jsx>{`
      .work {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 1rem 0;
      }
      h2 {
        font-size: 2.5rem;
        line-height: 0.75;
      }
      p {
        font-size: 1.2rem;
        line-height: 1.35;
        margin: 0.5rem 0;
      }
    `}</style>
    </>
  );
};

export default Work;