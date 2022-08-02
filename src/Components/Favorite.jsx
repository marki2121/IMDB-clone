import React, { useState, useEffect, useContext } from "react";
import { IndexContex, UserContext } from "../Context/contexts";

import { Link } from "react-router-dom";
import { apiServices } from "../Services/API/rest";

const Favoriti = () => {
  const [movies, setMovies] = useState([]);
  const [serije, setSerie] = useState([]);
  const [index] = useContext(IndexContex);
  const [favorite] = useContext(UserContext);
  let isCalled = false;

  function GetData() {
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
    if(isCalled == false){
        GetData();
    }   
  }, []);

  return (
    <div className="container">
      {movies.length > 0 ? (
        <>
          {movies.map((movie) => (
            <Link to={`/filmovi/${movie.id}`} className="linkNo">
              <div className="card" key={movie.id}>
                <img
                  src={
                    movie.poster_path !== "null"
                      ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
                      : "https://via.placeholder.com/400"
                  }
                  alt={movie.title}
                />
                <p>{movie.release_date}</p>
                <div className="podatci">
                  <span>Movie</span>
                  <h3>{movie.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </>
      ) : (
        <div>
          
        </div>
      )}
      {serije.length > 0 ? (
        <>
          {serije.map((serija) => (
            <Link to={`/serije/${serija.id}`} className="linkNo">
              <div className="card" key={serija.id}>
                <img
                  src={
                    serija.poster_path !== "null"
                      ? `https://image.tmdb.org/t/p/w400/${serija.poster_path}`
                      : "https://via.placeholder.com/400"
                  }
                  alt={serija.title}
                />
                <p>{serija.first_air_date}</p>
                <div className="podatci">
                  <span>Serija</span>
                  <h3>{serija.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </>
      ) : (
        <div>
          
        </div>
      )}
    </div>
  );
};

export default Favoriti;
