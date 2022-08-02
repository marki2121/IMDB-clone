import React from "react";

import CardMovie from "./CardMovie";

const FilmMapper = ({ movies }) => {
    return(
        <>
        {movies.length > 0 ? (
        <>
            {movies.map((movie) => (
                <CardMovie movie={movie} key={movie.id} />
                ))}
        </>
        ) : (
        <div>
            <h1>No movies found</h1>        
        </div>
        )}
        </>
    )
}

export default FilmMapper;