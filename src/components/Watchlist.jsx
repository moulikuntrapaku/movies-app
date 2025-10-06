import MovieList from "./MovieList";

export default function Watchlist({ watchlist, removeFromWatchlist, searchTerm }) {
  // Filter movies in watchlist
  const filteredMovies = watchlist.filter(movie =>
    movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 style={{ color: "white", textAlign: "center", margin: "1rem 0" }}>
        My Watchlist
      </h2>
      <MovieList
        movies={filteredMovies}
        buttonAction={removeFromWatchlist}
        buttonLabel="Remove from Watchlist"
      />
    </div>
  );
}
