import React from "react";
import { Link } from 'react-router-dom';

export default function Header({handleLogout}) {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">
            Lead Manager
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/">Home</Link>
            <Link to="/login/">Log In</Link>
            <button onClick={handleLogout}>Log Out</button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
