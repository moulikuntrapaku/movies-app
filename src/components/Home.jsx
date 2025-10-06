import { useEffect, useState } from "react";
import MovieList from "./MovieList";

export default function Home({ addToWatchlist, searchTerm }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovieRequest = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `https://www.omdbapi.com/?s=star&apikey=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();
      if (data.Search) setMovies(data.Search);
    };
    getMovieRequest();
  }, []);

  // Filter locally fetched movies
  const filteredMovies = movies.filter(movie =>
    movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MovieList
      movies={filteredMovies}
      buttonAction={addToWatchlist}
      buttonLabel="Add to Watchlist"
    />
  );
}
