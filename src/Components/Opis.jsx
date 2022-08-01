import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { UserContext, IndexContex } from "../App";

const Opis = () => {
  const id = useParams();
  const [film, setFilm] = useState([]);
  const [color, setColor] = useState("white");
  const [favorite, setFavorite] = useContext(UserContext);
  const [, setIndex] = useContext(IndexContex);

  function addFavorite() {
    let check = false;

    for (var i = 0; i < favorite.length; i++) {
      if (favorite[i] == film.id) {
        check = true;
        setIndex((index) => index.filter((_, index) => index !== i));
        setFavorite((favorite) =>
          favorite.filter((_, favorite) => favorite !== i)
        );
        setColor("white");
        break;
      }
    }

    if (check == false) {
      setColor("yellow");
      setIndex((index) => [...index, 1]);
      setFavorite((favorite) => [...favorite, film.id]);
    }
  }

  function checkColor() {
    for (var i = 0; i < favorite.length; i++) {
      if (favorite[i] == film.id) {
        setColor("yellow");
        break;
      }
    }
  }

  const GetData = async () => {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/${id.id}?api_key=eb44ee80df76c8e88bc09021aa1168dd&language=en-US`
    );
    const data = await request.json();

    setFilm(data);
  };

  useEffect(() => {
    GetData();
  }, []);

  useEffect(() => {
    checkColor();
  }, [film]);

  return (
    <>
      <div className="pokusaj">
        <div className="poster">
          <img
            src={
              film.poster_path !== "null"
                ? `https://image.tmdb.org/t/p/w400/${film.poster_path}`
                : "https://via.placeholder.com/400"
            }
            alt={film.title}
          ></img>
        </div>
        <div className="data">
          <h2> {film.title} </h2>
          <h3> {film.release_date} </h3>
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
          <p> {film.overview} </p>
        </div>
      </div>
    </>
  );
};

export default Opis;
