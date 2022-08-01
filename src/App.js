import "./App.css";
import Dropdown from "react-bootstrap/Dropdown";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState, createContext, useEffect } from "react";

import Filmovi from "./Components/Filmovi/Filmovi";
import Serije from "./Components/Serije/Serije";
import Opis from "./Components/Opis";
import OpisSer from "./Components/Opis-s";
import Favoriti from "./Components/Favorite";

// themoviedb key: eb44ee80df76c8e88bc09021aa1168dd
// popular https://api.themoviedb.org/3/movie/popular?api_key=eb44ee80df76c8e88bc09021aa1168dd&language=en-US&page=1

export const UserContext = createContext();
export const IndexContex = createContext();
export const TypeContex = createContext();

function App() {
  const [search, setSearch] = useState();
  const [favorite, setFavorite] = useState([]);
  const [index, setIndex] = useState([]);
  const [type, setType] = useState("");

  let setSearchBarData = (e) => {
    var lowercase = e.target.value.toLowerCase();
    if (lowercase === "") {
      lowercase = undefined;
    }

    setSearch(lowercase);
  };

  return (
    <UserContext.Provider value={[favorite, setFavorite]}>
      <IndexContex.Provider value={[index, setIndex]}>
        <TypeContex.Provider value={[type, setType]}>
          <BrowserRouter>
            <div className="main">
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

                  <div
                    className="collapse navbar-collapse"
                    id="navbarsExample03"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="/"
                        >
                          Filmovi
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="/serije"
                        >
                          Serije
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="/favorite"
                        >
                          Favoriti
                        </Link>
                      </li>
                    </ul>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        style={{ marginRight: 10 }}
                      >
                        Filter
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() => {
                            setType(undefined);
                          }}
                        >
                          No filter
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setType(28);
                          }}
                        >
                          Action
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setType(12);
                          }}
                        >
                          Adventure
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setType(16);
                          }}
                        >
                          Animation
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setType(35);
                          }}
                        >
                          Comedy
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setType(80);
                          }}
                        >
                          Crime
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setType(99);
                          }}
                        >
                          Documentary
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setType(18);
                          }}
                        >
                          Drama
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setType(10751);
                          }}
                        >
                          Family
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setType(14);
                          }}
                        >
                          Fantasy
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setType(36);
                          }}
                        >
                          History
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setType(27);
                          }}
                        >
                          Horror
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setType(10402);
                          }}
                        >
                          Music
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setType(9648);
                          }}
                        >
                          Mystery
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setType(10749);
                          }}
                        >
                          Romance
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setType(878);
                          }}
                        >
                          Science Fiction
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setType(10770);
                          }}
                        >
                          TV Movie
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setType(53);
                          }}
                        >
                          Thriller
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setType(10752);
                          }}
                        >
                          War
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setType(37);
                          }}
                        >
                          Western
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <form role="search">
                      <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={setSearchBarData}
                      ></input>
                    </form>
                  </div>
                </div>
              </nav>
              <div >
                <Routes>
                  <Route exact path="/" element={<Filmovi input={search} />} />
                  <Route path="serije" element={<Serije input={search} />} />
                  <Route path={"filmovi/:id"} element={<Opis />} />
                  <Route path={"serije/:id"} element={<OpisSer />} />
                  <Route path={"favorite"} element={<Favoriti />} />
                </Routes>
              </div>
            </div>
          </BrowserRouter>
        </TypeContex.Provider>
      </IndexContex.Provider>
    </UserContext.Provider>
  );
}

export default App;
