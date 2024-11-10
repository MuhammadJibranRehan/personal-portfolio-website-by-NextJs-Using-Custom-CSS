import React from "react";
import './style.css';

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "project-tag-selected"
    : "project-tag-default";

  return (
    <button
      className={`project-tag ${buttonStyles}`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
