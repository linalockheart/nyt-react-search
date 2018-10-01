import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (

  <nav className="navbar navbar-dark bg-primary">
    <Link className="navbar-brand" to="/">NYT React Article Search</Link>
    <div className="nav-buttons">
      <span className="nav-item homeBtn">
        <Link to="/"><button type="button" className="btn btn-info">Home</button></Link>
      </span>
      <span className="nav-item savedBtn">
        <Link to="/savedArticles"><button type="button" className="btn btn-info">Saved Articles</button></Link>
      </span>
      </div>
</nav>
)

export default Nav;