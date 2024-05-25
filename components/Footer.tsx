import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="mt-10">
      <div className="space-x-4 flex items-center justify-start">
        <a
          href="https://www.linkedin.com/in/nasserben"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-800 text-xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/nasserben"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-800 text-xl"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:contact@nasserben.com"
          className="text-gray-500 hover:text-gray-800 text-xl"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://d2x99j4e5epq4y.cloudfront.net/NasserBen_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-800 text-xl"
        >
          <FaFilePdf />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
