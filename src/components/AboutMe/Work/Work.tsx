import React from 'react';
import Company from './Company';

const Work = () => {

  return (
    <>
      <h2>Work History</h2>
      <div className="work">
        <Company name="Boom Solutions" industry="Construction" years={2} skills={["React", "React Native", "SQLite", "Jest"]}>
          <p>Used ReactJS and Bootstrap to build out a project management web application for the construction industry.</p>
          <p>Used ReactJS to build out a bidding portal for contract work in the construction industry.</p>
          <p>Developed components for an internal Component Library using yalc and rollup.js to share React components across multiple web applications.</p>
          <p>Used React Native to build out a mobile (iOS and Android) application used for time tracking and onsite project management.</p>
          <p>Used Expo to take advantage of native mobile APIs including location tracking and photos.</p>
          <p>Published and pushed updates to the application on the Google Play and Apple App store.</p>
        </Company>
        <Company name="Volly" industry="Finance / Housing" years={2} skills={["React", "Angular", "NodeJS", "Express", "PostgreSQL", "Mocha"]}>
          <p>Developed new features on a Marketing Automation (email) web applications using ReactJS, AngularJS, and NodeJS.</p>
          <p>Created new endpoints, troubleshooted and fixed bugs, and improved functionality and security of the back end of web applications using ExpressJS and NodeJS.</p>
          <p>Created and maintained PostgreSQL databases and tables.</p>
          <p>Wrote unit tests using Mocha.</p>
          <p>Worked on new features for a cross product platform in NextJS.</p>
          <p>Built out marketing websites, landing pages and forms using HTML, CSS and Javascript.</p>
        </Company>
        <Company name="Columbia Daily Tribune" industry="News" years={2} skills={["Angular", "jQuery", "Bootstrap"]}>
          <p>Built a redesign for columbiatribune.com and built marketing websites using HTML, CSS, Javascript, WordPress and other Content Management Systems.</p>
          <p>Integrated custom advertising and google ads into the columbiatribune.com</p>
          <p>Designed wireframes and created prototypes for new features and new designs for the columbiatribune.com and other websites.</p>
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