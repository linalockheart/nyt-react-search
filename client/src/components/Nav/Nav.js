import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (

  <nav className="navbar navbar-dark bg-primary">
    <Link className="navbar-brand" to="/">NYT React Article Search</Link>
    <div className="nav-buttons">
      <span className="nav-item">
        <Link to="/"><button type="button" className="btn btn-info homeBtn">Home</button></Link>
      </span>
      <span className="nav-item">
        <Link to="/saved"><button type="button" className="btn btn-info savedBtn">Saved Articles</button></Link>
      </span>
      </div>
</nav>
)

export default Nav;