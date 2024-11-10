import React from "react";
import "./style.css";

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div className="project-card">
      <div
        className="project-card-image"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        {/* Add your overlay and links */}
      </div>
      <div className="project-card-content">
        <h5 className="project-card-title">{title}</h5>
        <p className="project-card-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;