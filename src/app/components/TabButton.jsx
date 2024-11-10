import React from "react";
import { motion } from "framer-motion";
import './style.css';


const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "tab-button-active" : "tab-button-inactive";

  return (
    <button onClick={selectTab}>
      <p className={`tab-button-text ${buttonClasses}`}>{children}</p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="tab-button-indicator"
      ></motion.div>
    </button>
  );
};

export default TabButton;