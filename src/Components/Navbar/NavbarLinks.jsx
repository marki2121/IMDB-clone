import React from "react";

import { Link } from "react-router-dom";

const NavbarLinks = () => {
  return (
    <>
      <ul className="navbar-nav me-auto mb-2 mb-sm-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Filmovi
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/serije">
            Serije
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/favorite">
            Favoriti
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavbarLinks;
