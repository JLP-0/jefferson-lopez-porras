import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <br />
      <br />
      <Link to="/about">About</Link>
    </nav>
  );
};
