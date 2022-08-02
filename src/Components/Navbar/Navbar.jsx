import React, {useContext} from "react";
import { SearchContext } from "../../Context/contexts";

import NavbarDropdown from "./NavbarDropdown";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
    const [, setSearch] = useContext(SearchContext);

    let getSearchBarData = (e) => {
        setSearch(e.target.value.toLowerCase());
      };
      
  return (
    <>
      <nav
        className="navbar navbar-expand-sm navbar-dark bg-dark"
        aria-label="Third navbar example"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample03">
            <NavbarLinks />
            <NavbarDropdown />
            <form role="search">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={getSearchBarData}
              ></input>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
