import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            BIG BEAST ISHANK
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link Navbar"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link Navbar"
                  aria-current="page"
                  to="/game"
                >
                  Games
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link Navbar"
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  My Extras
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link Navbar"
                      aria-current="page"
                      to="/owner"
                    >
                      Owner
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link Navbar"
                      aria-current="page"
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link Navbar"
                      aria-current="page"
                      to="/project"
                    >
                      My Project
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <a
                      activeClassName="menu_active"
                      className="nav-link Navbar"
                      aria-current="page"
                      href="https://bigbeastishank.github.io/beta/blog"
                    >
                      Blogs
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Get In Touch
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <a
                      target="_blank"
                      className="nav-link Navbar"
                      href="https://github.com/BIGBEASTISHANK"
                    >
                      GitHub
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      target="_blank"
                      className="nav-link Navbar"
                      aria-current="page"
                      href="https://www.youtube.com/channel/UCw6lNThNWxwz1cz5rvR1Rdw"
                    >
                      Youtube
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      target="_blank"
                      className="nav-link Navbar"
                      aria-current="page"
                      href="https://instagram.com/opishank"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      target="_blank"
                      className="nav-link Navbar"
                      aria-current="page"
                      href="https://twitter.com/opishank"
                    >
                      Twitter
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      target="_blank"
                      className="nav-link Navbar"
                      aria-current="page"
                      href="https://discord.gg/XfngbaaG2r"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
