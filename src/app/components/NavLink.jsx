import React from "react";
import Link from "next/link";
import "./style.css";

const NavLink = ({ href, title }) => {
  return (
    <Link href={href} className="navlink">
      {title}
    </Link>
  );
};

export default NavLink;
