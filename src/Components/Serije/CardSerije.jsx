import React from "react";

import { Link } from "react-router-dom";

const CardSerije = ({ serija }) => {
  return (
    <Link to={`${serija.id}`} className="linkNo">
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
  );
};

export default CardSerije;
