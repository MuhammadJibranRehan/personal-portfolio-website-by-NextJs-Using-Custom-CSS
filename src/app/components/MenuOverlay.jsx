import React from "react";
import NavLink from "./NavLink";
import "./style.css";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="menu-overlay">
      {links.map((link, index) => (
        <li key={index} className="menu-overlay-item">
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
