import { useEffect, useState } from "react";
import './home.css'

export default function Home(){
    const [movies, updateMovies] = useState([])

        
    const getMovieRequest = async () => {
        const url = "http://www.omdbapi.com/?s=star&apikey=429d5e5f"
        const response = await fetch(url)

        const responseJson = await response.json()
        updateMovies(responseJson.Search)
    }

    useEffect(()=>{
        getMovieRequest()
    },[])

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