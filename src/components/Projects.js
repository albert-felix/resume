import React from "react";

const Projects = () => {
  return (
    <div>
      <h3>OTHER PROJECTS</h3>
      <div className="project">
        <h6>Portfolio Website</h6>
        <ul>
          <li>Developed using React, Bootstrap, ReactScroll</li>
          <li>Contact Form with Node mailer</li>
          <li>
            <a href="https://albertfelix.com/" target="_blank" rel="noreferrer">
              https://albertfelix.com/
            </a>
          </li>
        </ul>
      </div>
      <div className="project">
        <h6>Meeting Room Application</h6>
        <ul>
          <li>Developed with React, Bootstrap, MongoDB</li>
          <li>CRUD Operations</li>
          <li>User and Admin Login, Email Verification, Forgot Password</li>
          <li>
            <a
              href="https://albert-felix-meeting-room.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              https://albert-felix-meeting-room.netlify.app/
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
