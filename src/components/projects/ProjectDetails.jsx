import React from "react";

const ProjectDetails = ({ title, desc, tech, live }) => {
  return (
    <div className="portfoilo-project-details">
      <h2>{title}</h2>
      <span className="project-details-header">Description</span>
      <strong className="project-details-major">{desc}</strong>
      <span className="project-details-header">Tools</span>
      <strong className="project-details-major">{tech}</strong>
      {live ? (
        <i className="mdi mdi-cloud"></i>
      ) : (
        <i className="mdi mdi-github-circle"></i>
      )}
    </div>
  );
};
export default ProjectDetails;
