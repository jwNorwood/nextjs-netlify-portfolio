import React from "react";
import config from "../lib/config";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialList = () => {
  return (
    <div>
      <a
        title="LinkedIn"
        href={`https://linkedin.com/in/j${config.linkedIn_account}`}
        target="_blank"
        rel="noopener"
      >
        <FaLinkedin size="2rem" />
      </a>
      <a
        title="GitHub"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        <FaGithub size="2rem" />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}

export default SocialList;