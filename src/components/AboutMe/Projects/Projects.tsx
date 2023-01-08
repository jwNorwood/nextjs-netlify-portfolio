import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <>
      <h2>Projects</h2>
      <div className="projects">
        <Project title="Wordle Clone" github="https://github.com/jwNorwood/infinite-words" link="https://wordle-infinite.netlify.app/">
          <p>Wordle clone built using Svelte and TailwindCSS that allows for infinite guesses.</p>
        </Project>
        <Project title="Morgage Rate Calculator" github="https://github.com/jwNorwood/mortgage-calculator" link="https://dazzling-otter-6f606d.netlify.app/">
          <p>Mortgage Rate Calculator built using Next.js, React, and D3.js</p>
        </Project>
      </div>
      <style jsx>{`

      .projects {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 2rem 0;
      }
      @media (max-width: 768px) {
        .projects {
          flex-direction: column;
        }
      }
      .projects p {
        margin: 0;
        line-height: 1.5;
        font-size: 1.1rem;
      }
      h2 {
        font-size: 2.5rem;
        line-height: 0.75;
      }
    `}</style>
    </>
  );
};

export default Projects;