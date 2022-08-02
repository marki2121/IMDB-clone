import React from "react";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { apiServices } from "../../Services/API/rest";

// eb44ee80df76c8e88bc09021aa1168dd

const Serije = (props) => {
  const [serije, setSerije] = useState([]);

  useEffect(() => {
    if (props.input === undefined) {
      apiServices.getBestSeries()
      .then((data) => setSerije(data));
    } else {
      apiServices.getSeries(props.input)
      .then((data) => setSerije(data));
    }
  }, []);

  return (
    <div className="container">
      {serije.length > 0 ? (
        <>
          {serije.map((serija) => (
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
          ))}
        </>
      ) : (
        <div>
          <h1>No serije found</h1>
        </div>
      )}
    </div>
  );
};

export default Serije;
