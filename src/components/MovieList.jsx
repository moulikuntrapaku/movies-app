import React from "react";
import './movielist.css';

export default function MovieList({ movies, buttonAction, buttonLabel }) {
  if (!movies || movies.length === 0) {
    return <p style={{ color: "white", textAlign: "center" }}>No movies found.</p>;
  }

  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} />
          <p>{movie.Title}</p>
          {buttonAction && (
            <button className="add-btn" onClick={() => buttonAction(movie)}>
              {buttonLabel}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
