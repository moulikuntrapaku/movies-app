import { useState } from "react";

export default function Home(){
    const [movies, updateMovies] = useState(moviesList)
    const [loading, setLoading] = useState(true)
    

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