import React from "react";
import Nav from "./Nav";
import IllustrationMermaid from "../images/illustration_mermaid.jpg";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <img src={IllustrationMermaid} />
      <h1>
        <a href="/">Porscha Present</a>
      </h1>
      <Nav />
    </header>
  );
};

export default Header;
