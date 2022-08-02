import React, { useState, useEffect, useContext } from "react";
import { IndexContex, UserContext } from "../Context/contexts";

import { apiServices } from "../Services/API/rest";

import FilmMapper from './Filmovi/FilmMapper';
import SerijeMapper from "./Serije/SerijeMapper";

const Favoriti = () => {
  const [movies, setMovies] = useState([]);
  const [serije, setSerie] = useState([]);
  const [index] = useContext(IndexContex);
  const [favorite] = useContext(UserContext);
  let isCalled = false;

  function getData() {
    isCalled = true;
    for (var i = 0; i < favorite.length; i++) {
        if (index[i] === 1) {
          apiServices.getDataMovie(favorite[i])
          .then((data) => setMovies((movies) => [...movies, data]));
        } else if (index[i] === 2) {
          apiServices.getDataTV(favorite[i])
          .then((data) => setSerie((serije) => [...serije, data]));
        } else {
          console.log("error");
        }
  }
}

  useEffect(() => {
    if(isCalled === false){
        getData();
    }   
  }, []);

  return (
    <div className="container">
      <FilmMapper movies={movies} />
      <SerijeMapper serije={serije} />
    </div>
  );
};

export default Favoriti;
