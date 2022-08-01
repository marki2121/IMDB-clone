import React, { useContext } from "react";
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { TypeContex } from "../../App";

const Filmovi = (props) => {
    const [movies, setMovies] = useState([]);
    const [counter, setCounter] = useState(1);
    const [type, ] = useContext(TypeContex);

    const GetBestMovies = async () => {
        const require = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eb44ee80df76c8e88bc09021aa1168dd&language=en-US&page=${counter}`);
        const data = await require.json();
    
        setMovies(data.results);
        console.log("1");
    }

    const GetBestMoviesType = async () => {
        const require = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eb44ee80df76c8e88bc09021aa1168dd&language=en-US&page=${counter}&with_genres=${type}`);
        const data = await require.json();
    
        setMovies(data.results);
        console.log("2");
    }

    const GetMovies = async (title) => {
        const require = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eb44ee80df76c8e88bc09021aa1168dd&language=en-US&query=${title}&page=1&include_adult=false`);
        const data = await require.json();
    
        setMovies(data.results);
        console.log("3");
    }

    const GetMoviesType = async (title) => {
        const require = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eb44ee80df76c8e88bc09021aa1168dd&language=en-US&query=${title}&page=1&include_adult=false&with_genres=${type}`);
        const data = await require.json();
    
        setMovies(data.results);
        console.log("4");
    }

    useEffect(() => {
        if(props.input === undefined && type === undefined) {
            GetBestMovies();
        } else if(props.input === undefined && type != undefined)  {
            GetBestMoviesType();
        }else if(type === undefined && props.input != undefined) {
            GetMoviesType();
        } else {
            GetMovies(props.input);
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