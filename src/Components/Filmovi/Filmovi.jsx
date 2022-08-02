import React, { useContext } from "react";
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import { TypeContex, SearchContext } from "../../Context/contexts";

import { apiServices } from '../../Services/API/rest';
import FilmMapper from "./FilmMapper";

const Filmovi = () => {
    const [movies, setMovies] = useState([]);
    const [type, ] = useContext(TypeContex);
    const [search, ] = useContext(SearchContext);

    useEffect(() => {
        if(search === "" && type === "") {
            apiServices.getBestMovies()
            .then((data) => setMovies(data));

        } else if(search === "" && type !== "")  {
            apiServices.getBestMoviesType(type)
            .then((data) => setMovies(data));

        } else if(type !== "" && search !== "") {
            apiServices.getMoviesType(search, type)
            .then((data) => setMovies(data));

        } else {
            apiServices.getMovies(search)
            .then((data) => setMovies(data));

        }

    }, [search, type]);

    return(
        <div className="container">
            <FilmMapper movies={movies} />
        </div>
    )
}

export default Filmovi;