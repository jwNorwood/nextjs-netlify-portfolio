import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <h1>Contact</h1>
        <p>
          You can reach me at{" "}
          <a href="mailto:jacobnorwood92@gmail.com">
            jacobnorwood92@gmail.com
          </a>
        </p>
        <p>
          Or find me on{" "}
          <a href="https://linkedin.com/in/jwnorwood">
            LinkedIn
          </a>
        </p>
      </div>
      <style jsx>{`
        .contact {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 auto;
          width: 100%;
          background-color: #d4f1f5;
          border-radius: 5px;
          padding: 1.5rem;
          padding-bottom: 2.5rem;
          margin-bottom: 1.5rem;
          font-size: 1.25rem;
          font-weight: 300;
        }
        h1 {
          margin-bottom: 1.5rem;
          color: #218380;
        }
        a {
          color: #218380;
          font-weight: 500;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default Contact;
