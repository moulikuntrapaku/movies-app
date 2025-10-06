import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Watchlist from "./components/Watchlist";
import Navbar from "./components/Navbar";

function App() {
  const [watchlist, setWatchlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addToWatchlist = (movie) => {
    if (!watchlist.find((m) => m.imdbID === movie.imdbID)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const removeFromWatchlist = (movie) => {
    setWatchlist(watchlist.filter((m) => m.imdbID !== movie.imdbID));
  };

  return (
    <BrowserRouter>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route
          path="/"
          element={<Home addToWatchlist={addToWatchlist} searchTerm={searchTerm} />}
        />
        <Route
          path="/watchlist"
          element={
            <Watchlist
              watchlist={watchlist}
              removeFromWatchlist={removeFromWatchlist}
              searchTerm={searchTerm}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
