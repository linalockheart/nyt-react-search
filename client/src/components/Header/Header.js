import React from "react";
import "./Header.css";

const Header = ({ children }) => (
  <div
    className="jumbotron"
  >
    {children}
  </div>
);

export default Header;