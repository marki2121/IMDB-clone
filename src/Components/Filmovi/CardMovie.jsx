import React from "react";

import { Link } from "react-router-dom";

const CardMovie = ({ movie }) => {
  return (
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
  );
};

export default CardMovie;
