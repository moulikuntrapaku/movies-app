import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
            <h1>Movies App</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/watchlist">Watchlist</Link>
            </div>
        </nav>
    )
}