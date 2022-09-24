import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Book Management App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className={(nav) => (nav.isActive ? "active" : "link")}>
          Books List
        </NavLink>
        <NavLink
          to="/add"
          className={(nav) => (nav.isActive ? "active" : "link")}
        >
          Add Book
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
