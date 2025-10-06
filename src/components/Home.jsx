import { useEffect, useState } from "react";
import './home.css'

export default function Home(){
    const [movies, updateMovies] = useState([])

    return(
        <div className="movie-container">
            {movies.map((movie) => (
                <div className="movie-card" key={movie.imdbID}>
                    <img src={movie.Poster} alt="Movie-Poster"/>
                    <p>{movie.Title}</p>
                </div>
            ))}
        </div>
    )
}