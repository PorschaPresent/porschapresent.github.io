import React from "react";

import { Link } from "react-router-dom";

import "./Nav.scss";

const Nav = () => {
  return (
    <nav>
      {/* <Link to="/teaching">Teaching</Link>
      <Link to="/music">Music</Link>
      <Link to="/performance">Performance</Link> */}
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Nav;
