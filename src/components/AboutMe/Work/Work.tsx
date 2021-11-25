import React from 'react';
import Company from './Company';

const Work = () => {

  return (
    <div className="work">
      <Company name="Boom Solutions" industry="Construction" years={1}>
        Worked on a react project managment tool for construction companies.
        Worked on a react native app to aid in time tracking and on site project management.
      </Company>
      <Company name="Volly" industry="Finance / Housing" years={2}>
        Built landing pages and emails as part of marketing campaigns.
        Worked on adding functionallity to an existing email marketing platform using Angular and Node.js and worked on a client portal using React.
      </Company>
      <Company name="Columbia Daily Tribune" industry="News" years={2}>
        Worked on developing custom features for a CMS on the core news website as well as working on custom marketing sites and pages for events and advertising partners.
      </Company>
    </div>
  );
};

export default Work;