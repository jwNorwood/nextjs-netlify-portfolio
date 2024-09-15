import React from "react";

const Company = ({
  name,
  industry,
  link,
  skills,
  children,
  years,
  title,
}) => {
  return (
    <>
      <div className="company">
        <div className="companyHeader">
          <div className="companyInfo">
            {link ? (
              <a
                href={link}
                className="companyLink"
              >
                <h3 className="companyName">
                  {name}
                </h3>
              </a>
            ) : (
              <h3 className="companyName">
                {name}
              </h3>
            )}
            <span>
              <strong className="title">
                {title}
              </strong>
            </span>
          </div>
          <strong className="industry">
            {industry}
          </strong>
        </div>
        {children}
        <div className="companySkills">
          {skills.map(
            (
              skill: string,
              index: React.Key
            ) => (
              <div
                className="companySkill"
                key={index}
              >
                {skill}
              </div>
            )
          )}
        </div>
      </div>
      <style jsx>{`
        .company {
          display: flex;
          flex-direction: column;
          margin-bottom: 45px;
        }
        .companyName:hover {
          border-bottom: 6px solid
            #218380;
        }
        .companyName {
          margin: 0;
          color: #218380;
          font-size: 1.75rem;
          border-bottom: 6px solid
            #73d2de;
        }
        .companyHeader {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .companyInfo {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 6px;
        }
        .companyLink {
          text-decoration: none;
        }
        .title,
        .years {
          font-weight: bold;
          padding: 5px 15px;
        }
        .industry {
          font-weight: bold;
          padding: 5px 15px;
          border-radius: 5px;
          border-bottom: 6px solid
            #fbb13c;
        }
        .companySkills {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .companySkill {
          margin: 5px 25px 5px 0;
          font-weight: bold;
          padding: 5px 15px;
          border-radius: 5px;
        }
        .companySkill:nth-child(even) {
          background-color: #8f2d56;
          color: #ffffff;
          border-bottom: 6px solid
            #d81159;
        }
        .companySkill:nth-child(odd) {
          background-color: #218380;
          color: #fff;
          border-bottom: 6px solid
            #73d2de;
        }
      `}</style>
    </>
  );
};

export default Company;
