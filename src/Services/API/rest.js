async function getBestMovies() {
    const require = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eb44ee80df76c8e88bc09021aa1168dd&language=en-US&page=1`);
    const data = await require.json();

    return data.results;
}

async function getBestMoviesType(type) {
    const require = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eb44ee80df76c8e88bc09021aa1168dd&language=en-US&page=1&with_genres=${type}`);
    const data = await require.json();

    return data.results;
}

async function getMovies(title) {
    const require = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eb44ee80df76c8e88bc09021aa1168dd&language=en-US&query=${title}&page=1&include_adult=false`);
    const data = await require.json();

    return data.results;
}

async function getMoviesType(title, type) {
    const require = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eb44ee80df76c8e88bc09021aa1168dd&language=en-US&query=${title}&page=1&include_adult=false&with_genres=${type}`);
    const data = await require.json();

    return data.results;
}

async function getBestSeries() {
    const require = await fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=eb44ee80df76c8e88bc09021aa1168dd&language=en-US&page=1"
    );
    const data = await require.json();

    return data.results;
  };

async function getSeries(serija) {
    const request = await fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=eb44ee80df76c8e88bc09021aa1168dd&language=en-US&page=1&query=${serija}&include_adult=false`
    );
    const data = await request.json();

    return data.results;
  };
  
async function getDataMovie(id) {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=eb44ee80df76c8e88bc09021aa1168dd&language=en-US`
    );
    const data = await request.json();

    return data;
  };

async function getDataTV(id) {
    const request = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=eb44ee80df76c8e88bc09021aa1168dd&language=en-US`
    );
    const data = await request.json();

    return data;
  };

export const apiServices = { getBestMovies, getBestMoviesType, getMovies, getMoviesType, getSeries, getBestSeries, getDataMovie, getDataTV };