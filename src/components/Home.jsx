import { useState } from "react";

export default function Home(){

    const moviesList = [
    {
        Title: "The Shawshank Redemption",
        Year: "1994",
        imdbID: "tt0111161",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmRhMC00ZDI3LWFmNTEtODM1ZmRlYjFlZGMxXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
    },
    {
        Title: "Inception",
        Year: "2010",
        imdbID: "tt1375666",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjY4NV5BMl5BanBnXkFtZTcwODI5OTM0Mw@@._V1_SX300.jpg"
    },
    {
        Title: "The Dark Knight",
        Year: "2008",
        imdbID: "tt0468569",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
    },
    {
        Title: "Interstellar",
        Year: "2014",
        imdbID: "tt0816692",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNzY4Nl5BMl5BanBnXkFtZTgwNzUxNjU3MjE@._V1_SX300.jpg"
    }
    ];

    const [movies, updateMovies] = useState(moviesList)

    return(
        <>
            {movies.map((movie) => (
                <div key={movie.imdbID}>
                    <img src={movie.Poster} alt="Movie-Poster"/>
                    <p>{movie.Title}</p>
                </div>
            ))}
        </>
    )
}