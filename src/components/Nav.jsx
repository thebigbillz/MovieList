import React from "react";
import "./Nav.scss";
import SearchBar from "./SearchBar";

const Nav = () => {
  return (
    <div className="navbarContainer">
      <div className="navbar">
        <h1>| Movie List |</h1>
        <SearchBar />
      </div>
    </div>
  );
};

export default Nav;
