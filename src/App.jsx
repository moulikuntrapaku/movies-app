import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Watchlist from "./components/Watchlist"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/watchlist" element={<Watchlist/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
