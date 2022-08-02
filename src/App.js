import "./App.css";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  UserContext,
  IndexContex,
  TypeContex,
  SearchContext,
} from "./Context/contexts";
import Main from "./Components/Main";

function App() {
  const [favorite, setFavorite] = useState([]);
  const [index, setIndex] = useState([]);
  const [type, setType] = useState("");
  const [search, setSearch] = useState("");

  return (
    <UserContext.Provider value={[favorite, setFavorite]}>
      <IndexContex.Provider value={[index, setIndex]}>
        <TypeContex.Provider value={[type, setType]}>
          <SearchContext.Provider value={[search, setSearch]}>
            <BrowserRouter>
              <div className="main">
                <Main />
              </div>
            </BrowserRouter>
          </SearchContext.Provider>
        </TypeContex.Provider>
      </IndexContex.Provider>
    </UserContext.Provider>
  );
}

export default App;
