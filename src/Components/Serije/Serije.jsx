import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// eb44ee80df76c8e88bc09021aa1168dd

const Serije = (props) => {
  const [serije, setSerije] = useState([]);

  const GetBestserije = async () => {
    const require = await fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=eb44ee80df76c8e88bc09021aa1168dd&language=en-US&page=1"
    );
    const data = await require.json();

    setSerije(data.results);
  };

  const GetSerije = async (serija) => {
    const request = await fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=eb44ee80df76c8e88bc09021aa1168dd&language=en-US&page=1&query=${serija}&include_adult=false`
    );
    const data = await request.json();

    setSerije(data.results);
  };

  useEffect(() => {
    console.log(props);
    if (props.input === undefined) {
      GetBestserije();
    } else {
      GetSerije(props.input);
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
