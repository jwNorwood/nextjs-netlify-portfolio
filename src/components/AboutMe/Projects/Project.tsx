import React from "react";

const Project = ({
  title = "",
  link,
  github,
  children,
}) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      {children}
      <div className="links">
        <a
          href={github}
          target="_blank"
          rel="noopener"
        >
          View on GitHub
        </a>
        <a
          href={link}
          target="_blank"
          rel="noopener"
        >
          View Live
        </a>
      </div>
      <style jsx>{`
        .project {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 1rem;
          padding: 1rem;
          box-shadow: 0 0 0.5rem
            rgba(0, 0, 20, 0.3);
          border-radius: 0.5rem;
          width: 300px;
          max-width: 100%;
          min-height: 175px;
        }
        .project h3 {
          margin: 0;
          margin-bottom: 1rem;
          font-size: 1.5rem;
          text-align: center;
        }
        .project a {
          margin-top: 1rem;
          background-color: #218380;
          color: #fff;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-weight: 600;
          border-bottom: 0.25rem solid
            #1b5e61;
        }
        .project a:hover {
          background-color: #d81159;
          border-bottom: 0.25rem solid
            #b71c47;
        }
        .project .links {
          display: flex;
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: auto;
        }
        @media (max-width: 768px) {
          .project {
            width: 100%;
            padding: 1rem;
            margin: 1rem 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Project;
