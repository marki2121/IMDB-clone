import React, { useContext } from "react";
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import { TypeContex } from "../../Context/contexts";

import { apiServices } from '../../Services/API/rest';

const Filmovi = (props) => {
    const [movies, setMovies] = useState([]);
    const [type, ] = useContext(TypeContex);

    useEffect(() => {
        if(props.input === undefined && type === undefined) {
            apiServices.getBestMovies()
            .then((data) => setMovies(data));

        } else if(props.input === undefined && type != undefined)  {
            apiServices.getBestMoviesType(type)
            .then((data) => setMovies(data));

        } else if(type != undefined && props.input != undefined) {
            apiServices.getMoviesType(props.input, type)
            .then((data) => setMovies(data));

        } else {
            apiServices.getMovies(props.input)
            .then((data) => setMovies(data));

        }
    }, [props, type]);

    return(
        <div className="container">
            {movies.length > 0 ? (
            <>
                {movies.map((movie) => (
                    <Link to={`filmovi/${movie.id}`} className="linkNo"> 
                    <div className="card" key={movie.id}>

                            <img src={movie.poster_path !== "null" ?  `https://image.tmdb.org/t/p/w400/${movie.poster_path}` : "https://via.placeholder.com/400"} alt={movie.title} />
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
                <h1>No movies found</h1>        
            </div>
            )}
        </div>
    )
}

export default Filmovi;