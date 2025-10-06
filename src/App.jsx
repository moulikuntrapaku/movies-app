import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Watchlist from "./components/Watchlist"
import Navbar from "./components/Navbar"

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/watchlist" element={<Watchlist/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
