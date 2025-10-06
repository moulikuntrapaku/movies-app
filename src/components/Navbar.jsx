import { Link } from "react-router-dom";
import './navbar.css'

export default function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <nav>
      <h1>Movies App</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/watchlist">Watchlist</Link>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </nav>
  );
}
