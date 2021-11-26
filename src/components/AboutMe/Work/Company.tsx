import React from "react";

const Company = ({ name, industry, years, skills, children }) => {
  return (
    <>
      <div className="company">
        <div className="company-header">
          <h3>{name}</h3><strong className="industry">{industry}</strong>
        </div>
        <p>
          <strong>Years:</strong> {years}
        </p>
        <p>{children}</p>
        <div className="company-skills">
          {skills.map((skill, index) => (
            <div className="company-skill" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
    .company {
      display: flex;
      flex-direction: column;
      margin: 45px 0;
    }
    .company-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .company-header h3 {
      margin: 0;
      font-size: 1.5rem;
    }
    .industry {
      font-weight: bold;
      padding: 5px 15px;
      border-radius: 5px;
      border-bottom: 6px solid #FBB13C;
    }
    .company-skills {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .company-skill {
      margin: 5px 25px 5px 0; 
      font-weight: bold;
      padding: 5px 15px;
      border-radius: 5px;
    }
    .company-skill:nth-child(even) {
      background-color: #8F2D56;
      color: #ffffff;
      border-bottom: 6px solid #D81159;
    }
    .company-skill:nth-child(odd) {
      background-color: #218380;
      color: #fff;
      border-bottom: 6px solid #73D2DE;
    }

    `}</style>
    </>
  );
}

export default Company;