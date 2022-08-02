import React from "react";

import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext, IndexContex } from "../Context/contexts";
import { apiServices } from "../Services/API/rest";

const OpisSer = () => {
  const id = useParams();
  const [serija, setSerija] = useState([]);
  const [color, setColor] = useState("white");
  const [favorite, setFavorite] = useContext(UserContext);
  const [, setIndex] = useContext(IndexContex);

  function addFavorite() {
    let check = false;

    for (let i = 0; i < favorite.length; i++) {
      if (favorite[i] === serija.id) {
        check = true;
        setIndex((index) => index.filter((_, index) => index !== i));
        setFavorite((favorite) =>
          favorite.filter((_, favorite) => favorite !== i)
        );
        setColor("white");
        break;
      }
    }

    if (check === false) {
      setColor("yellow");
      setIndex((index) => [...index, 2]);
      setFavorite((favorite) => [...favorite, serija.id]);
    }
  }

  function checkColor() {
    for (let i = 0; i < favorite.length; i++) {
      if (favorite[i] == serija.id) {
        setColor("yellow");
        break;
      }
    }
  }

  useEffect(() => {
    apiServices.getDataTV(id.id)
    .then((data) => setSerija(data));
  }, []);

  useEffect(() => {
    checkColor();
  }, [serija]);

  return (
    <>
      <>
        <div className="pokusaj">
          <div className="poster">
            <img
              src={
                serija.poster_path !== "null"
                  ? `https://image.tmdb.org/t/p/w400/${serija.poster_path}`
                  : "https://via.placeholder.com/400"
              }
              alt={serija.name}
            ></img>
          </div>
          <div className="data">
            <h2> {serija.name} </h2>
            <h3>
              <h3>
                {" "}
                {serija.first_air_date} _{" "}
                {serija.in_production === true ? "..." : serija.last_air_date}{" "}
              </h3>
            </h3>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star"
                viewBox="0 0 16 16"
                style={{ color: color }}
                onClick={addFavorite}
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>
            </button>
            <br></br>
            <p> {serija.overview} </p>
          </div>
        </div>
      </>
    </>
  );
};

export default OpisSer;
